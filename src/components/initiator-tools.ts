import { DateTime } from 'luxon';
import { useMemo } from 'react';

const timeslotFormatMap = {
	emoji: [':one:', ':two:', ':three:'],
	eggst: ['+1', '+6', '+12'],
	header: ['Timeslot 1', 'Timeslot 2', 'Timeslot 3'],
} as const;

const timeslotHeaderRegex = /Timeslot\s*(?<emoji>:[a-z]+:):/;

export class Timeslot {
	static One = new Timeslot(0);

	static Two = new Timeslot(1);

	static Three = new Timeslot(2);

	index: 0 | 1 | 2;

	private constructor(index: 0 | 1 | 2) {
		this.index = index;
	}

	format(as: 'eggst' | 'emoji' | 'header' | 'join_deadline'): string {
		if (as === 'join_deadline') {
			const offset = [6, 11, 17][this.index];
			const time = DateTime.fromISO('09:00', { zone: 'America/Los_Angeles' }).plus({
				hours: offset,
			});
			return `<t:${time.toUnixInteger()}:t>`;
		}

		return timeslotFormatMap[as][this.index];
	}

	static fromEmoji(emoji: string | undefined): Timeslot | null {
		switch (emoji) {
			case ':one:':
				return Timeslot.One;
			case ':two:':
				return Timeslot.Two;
			case ':three:':
				return Timeslot.Three;
			default:
				return null;
		}
	}

	static fromWonkyMessage(input: string): Timeslot | null {
		const emoji = timeslotHeaderRegex.exec(input)?.groups!.emoji;
		return emoji ? Timeslot.fromEmoji(emoji) : null;
	}
}

export type UserSpec = {
	combinedIdentifier: string;
	discordId: string;
	ign: string;
};
export type NotIns = {
	threadUrl: string | null;
	users: UserSpec[];
};

export type NotInsPerTimeslot = Record<string, NotIns[]>;

export const zipRegex = (res: RegExp[], flags: string) =>
	new RegExp(res.map((re) => re.source).join(''), flags);

export const convertToDiscordUrl = (url: string) => {
	const match = /discord.com\/channels\/(?<channelId>\d+)\/(?<messageId>\d+)/.exec(url);
	if (match?.groups) {
		const { channelId, messageId } = match.groups;
		return `discord://-/channels/${channelId}/${messageId}`;
	}

	return url;
};

export const parseNotInMessage = (input: string): NotInsPerTimeslot => {
	const timeslotRegex = zipRegex(
		[timeslotHeaderRegex, /(?<notins>(?:.|\n)+?)/, /(?=Timeslot|\(no pings were sent\)|$)/],
		'g',
	);

	const matches = [...input.matchAll(timeslotRegex)];

	return Object.fromEntries(
		matches
			.map((match) => {
				const emoji = match.groups!.emoji;
				const timeslot = Timeslot.fromEmoji(emoji);
				if (timeslot === null) return null;

				const notins: NotIns[] = match
					?.groups!.notins!.trim()
					.split('\n')
					.map((line) => {
						const httpUrl = /\[thread]\(<(?<url>[^>]+)>\)/.exec(line)?.groups!.url;
						const threadUrl = httpUrl ? convertToDiscordUrl(httpUrl.trim()) : null;
						const userMatches = [...line.matchAll(/<@(?<discordId>\d+)> \(`(?<ign>[^)]+)`\)/g)];
						const users: UserSpec[] = userMatches.map((match) => ({
							ign: match.groups!.ign!,
							discordId: match.groups!.discordId!,
							combinedIdentifier: match[0]!, // entire match
						}));

						return {
							users,
							threadUrl,
						};
					});
				return [timeslot.format('emoji'), notins];
			})
			.filter((res) => res !== null),
	);
};

export const useExtractNotins = (input: string): NotInsPerTimeslot =>
	useMemo(() => parseNotInMessage(input), [input]);
