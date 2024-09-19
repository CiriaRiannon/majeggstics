import moment from 'moment-timezone';
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

	format(as: 'discord' | 'eggst' | 'emoji' | 'header'): string {
		if (as === 'discord') {
			const hour = [18, 23, 5][this.index];
			const date = moment().tz('America/Toronto').hour(hour).minute(0).second(0);
			return `<t:${date.unix()}:t>`;
		}

		return timeslotFormatMap[as][this.index];
	}

	static fromEmoji(emoji: string): Timeslot | null {
		switch (emoji) {
			case ':one:':
				return Timeslot.One;
			case ':two:':
				return Timeslot.Two;
			case ':three:':
				return Timeslot.Three;
		}

		return null;
	}

	static fromWonkyMessage(input: string): Timeslot | null {
		const emoji = timeslotHeaderRegex.exec(input)?.groups!.emoji;
		return emoji ? Timeslot.fromEmoji(emoji) : null;
	}
}

type NotIn = {
	threadUrl: string | null;
	user: string;
};

type NotInPerTimeslot = Record<string, NotIn[]>;

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

export type ParseOptions = {
	combinePlayersInThread?: boolean;
};
export const parseNotInMessage = (input: string, options: ParseOptions = {}): NotInPerTimeslot => {
	const timeslotRegex = zipRegex(
		[timeslotHeaderRegex, /(?<notins>(?:.|\n)+?)/, /(?=Timeslot|\(no pings were sent\)|$)/],
		'g',
	);

	console.log({ options });
	const matches = [...input.matchAll(timeslotRegex)];

	return Object.fromEntries(
		matches
			.map((match) => {
				const emoji = match.groups!.emoji;
				const timeslot = Timeslot.fromEmoji(emoji);
				if (timeslot === null) return null;

				const notins: NotIn[] = match
					.groups!.notins.trim()
					.split('\n')
					.flatMap((line) => {
						console.log({ line });
						const httpUrl = /\[thread]\(<(?<url>[^>]+)>\)/.exec(line)?.groups!.url;
						const threadUrl = httpUrl ? convertToDiscordUrl(httpUrl.trim()) : null;
						let userMatches = line.match(/<@\d+> \(`[^)]+`\)/g) ?? [];
						console.log({ userMatches });
						if (options.combinePlayersInThread) {
							userMatches = [userMatches.join(', ')];
						}
						console.log({ threadUrl, userMatches });

						return userMatches.map(
							(user: string): NotIn => ({
								user,
								threadUrl,
							}),
						);
					});
				return [timeslot.format('emoji'), notins];
			})
			.filter((res) => res !== null),
	);
};

export const useExtractNotins = (input: string, options: ParseOptions = {}): NotInPerTimeslot =>
	useMemo(() => parseNotInMessage(input, options), [input, options]);
