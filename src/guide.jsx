import newContractIcon from './assets/guide/newContractIcon.jpg';
import inGameContractInfoPage from './assets/guide/inGameContractInfoPage.png';
import farmReadyToReceiveCBs from './assets/guide/farmReadyToReceiveCBs.png';
import farmAfterSendingCBsWithTimer from './assets/guide/farmAfterSendingCBsWithTimer.png';
import howToJoinTheMajeggstics from './assets/guide/howToJoinTheMajeggstics.png';

export default function Guide() {
  return (
    <main>
      <section>
        <h1>
          Majeggstics Guide & Rule Book!
        </h1>
        <p>Welcome to The Majeggstics, where No Farmer is Left Behind!</p>
        <p>
          Majeggstics is a worldwide group of Egg Inc. players with the common goal of making sure every player can complete every contract, by optimizing play strategies and making fair contributions to our co-ops.
        </p>
      </section>
      <section>
        <h2>Minimum rules</h2>
        <p>
          The Majeggstics are a team - we expect everyone to contribute to our co-ops. When you register for a contract, you are agreeing to meet the minimum contribution for that contract.
        </p>
        <p className="bold">
          The minimum egg laying rate for each contract is posted in #MJ-Announcements. Minimum is measured at 12 and 24 hours after contract start.
        </p>
        <p>
          The 12 hour minimum is lower than the 24 hour minimum. If you meet the 12 hour minimum, you have passed! If you don’t meet the 12 hour minimum, you still have not failed, but you must meet the 24 hour minimum to pass.
        </p>
        <p>
          You will receive a strike for joining your contract later than 5 hours after start, and an additional strike if you have not joined by the 24 hour check. (Strikes may also be given for inappropriate behavior in chat, and server staff are notified when server rules are broken.)
        </p>
        <p>
          Tokens are the human players who manage the Majeggstics - we recruit new members, help people play the game more efficiently, start and add people to co-op groups, and confirm everyone has met the minimum required laying rate for each contract.
        </p>
        <p>
          A token will communicate with you if you receive a strike. Strikes are recorded. After four strikes, you will be removed from Majeggstics. Strikes are only counted for the last 20 contracts you complete - after that, strikes are erased.
        </p>
        <p>
          After a strike, a token will create a private thread in #the_majeggstics to talk to you about what happened, and make sure you are supported to be successful in the future. If you’re concerned you won’t be successful, you can send mj-support anywhere in Majeggstics channels and a support Token will help you out. It can take time to respond, so ask for help using mj-support early on!
        </p>
        <p>
          Remember that the Majeggstic’s goal is to see everyone succeed. Minimums are meant to help you, not hurt. If you’re struggling to meet minimum or need help with a contract, ask for advice in #the_majeggstics or your grade’s Majeggstics channel. The group would be thrilled to help, and everyone will have the chance to learn along with you!
        </p>
      </section>
      <section>
        <h2>Registering for a Contract
        </h2>
        <table>
          <thead>
            <tr>
              <th colSpan={2}>Contracts are released 3 times a week at:
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>UTC 0 (Coordinated Universal Time)
              </td>
              <td>16:00 (5 PM)</td>
            </tr>
            <tr>
              <td>PT -8 (Pacific Time, NA)
              </td>
              <td>09:00 (9 AM)
              </td>
            </tr>
            <tr>
              <td>ET -5 (Eastern Time, NA)
              </td>
              <td>12:00 (12 PM)
              </td>
            </tr>
            <tr>
              <td colSpan={2}>Contract release times are affected by Daylight Savings Time in the US and may change throughout the year.
              </td>
            </tr>
          </tbody>
        </table>
        <br />
        <p>
          <img src={newContractIcon} alt="New Contract Icon" />
          <span>
            [Image Description: New Contract Icon]
          </span>
        </p>
        <ul>
          <li>
            Monday has a new contract for everyone. The first Monday of each month has a new Prophecy Egg (PE) contract.
          </li>
          <li>
            Wednesday and Friday have leggacy contracts. Wednesday has a non-PE contract, and Friday has a PE contract.
          </li>
          <li>
            If you want to be pinged when contracts are released, go to #optional-roles and select the “Contracts” role.
          </li>
        </ul>
        <p>
          When a new contract is released, Wonky, our beloved bot, will generate a registration post in #mj-announcements. Select a time slot - we start contracts at 3 times - +1, +6, and +12 hours after the contract release. Register for the time slot that&apos;s most convenient for your schedule. You must join your co-op and start your farm within 5 hours of your start time. It is your responsibility to register early and join your co-op.
        </p>
        <p>Registration for each time slot is finalized when Wonky creates co-ops. We recommend you sign up at least 15 minutes early, as co-ops may be created up to 5 minutes early because of the size of our group. If co-ops are late, be patient with initiators. </p>
        <p>Late registrations may be accepted depending on initiator availability and available spaces in our co-ops. If you are unable to register for a contract with Majeggstics, you can join a public co-op in the &quot;Co-Op Recruitment&quot; section and join us for the next contract! </p>
      </section>
      <section>
        <h2>Joining your Co-op</h2>
        <p>Ping! Pong! Wonky generated your co-op and started a thread in your grade’s channel. Check your DMs from Wonky for the contract code. If you’re the first person, double-check your contract code, then start the co-op immediately. Do not wait in the lobby.</p>

        <ul>
          <li>Our co-ops are set to private to ensure that everyone participating meets our expectations. Do not share your co-op code or set the co-op to public - this can result in Majeggstics getting kicked from our co-ops and makes extra work for tokens.
            <ul><li>
              The toggle needs to stay to the left for the co-op to remain private.</li></ul>
          </li>

          <li>Notify an available token immediately if there is an error with your registration (ex: wrong grade, registered in multiple co-ops) or if you registered and teams have been made but you were not assigned to a co-op.</li>

          <ul><li>There is currently a known bug when joining co-ops - you appear joined on your device, but not on the Egg Inc servers. Please confirm your game is in sync with the server by checking the eicoop link in your co-op thread <em>before boosting.</em></li></ul>

          <li>Wonky groups members together to ensure we have balanced teams. You must join the co-op you are assigned to. If you:</li>

          <ul>
            <li>Join your co-op later than 5 hours after start, you will receive one strike.</li>
            <li>Do not join your co-op before the 24-hour check, you will receive two strikes.</li>
            <li>Join a Majeggstics co-op without being assigned by Wonky or a token, you will be removed from Majeggstics.</li>
          </ul>

          <li>Tokens monitor many co-op threads and can't respond to every message. If you need help, make sure to ask in #the_majeggstics or your grade's Majeggstic channel to make sure an available token sees your message. Don't be afraid to interrupt off-topic chat - our priority is helping your co-op complete successfully.</li>
        </ul>
      </section>
      <section>
        <h2>Start and grow your contract farm</h2>
        <ul>
          <li>Finish common research, buy habs, and buy transport.
            <ul>
              <li>Use artifacts that increase income like Demeter's Necklace, Tungsten Ankh, Book of Basan; and artifacts that hold Shell Stones, Soul Stones, and Prophecy Stones.</li>

              <li>Puzzle cubes will lower research costs - use your income-boosting artifacts, then switch your puzzle cube on while you’re buying. If you need to save more, swap the cube out for a better income artifact.</li></ul>
          </li>

          <li>Equip your best Ship in a Bottle (SIAB) to help your co-op mates earn more money. Your SIAB is worth more to the team than any artifact you can equip for yourself. Tachyon deflectors are not useful until after teammates have boosted, so equip an extra artifact for yourself until then.</li>

          <li>Soul Mirror a higher EB player if you can’t finish your common research or buy large enough habs/transport for your intended boosts.
            <ul>
              <li>
                The person in your contract with the highest EB will have a soul mirror icon next to their name in your Discord thread.
              </li>


              <li>Majeggstics is privileged to have many high EB players with good availability who can help you maximize your earnings, but they are not required to do anything beyond following regular Majeggstics rules for playing the contract.</li>

              <li>Use Bird Feed and Yon Calculator to maximize your earnings, no matter your mirror’s EB.</li>
            </ul>
          </li>
          <li>Send Chicken Boxes every 3 hours to help your co-op mates grow their farms.
          </li>
          <li>
            Request or send tokens to other co-op members upon request.
          </li>
          <ul>
            <li>
              Sending tokens to another player lowers their contract teamwork score - be thoughtful when sending tokens, and do not spam send individual tokens. Consider if your teammate has already boosted and how many tokens an AFK player will return to before you send tokens.
            </li>
            <li>
              Spamming individual tokens or token dumping is not allowed.
            </li>
            <li>
              <img src={inGameContractInfoPage} alt="In-game contract info page with highlighted farm sharing button and CB ready icon circled" />
              <span>
                [ID: In-game contract info page with highlighted farm sharing button and CB ready icon circled]
              </span>
            </li>
            <br />
            <li>
              <img src={farmReadyToReceiveCBs} alt="A friend’s farm ready to receive CBs" />
              <span>
                [ID: A friend’s farm ready to receive CBs]
              </span>
            </li>
            <br />
            <li>
              <img src={farmAfterSendingCBsWithTimer} alt="A friend’s farm immediately after sending CBs showing the cooldown timer" />
              <span>
                [ID: A friend’s farm immediately after sending CBs showing the cooldown timer]
              </span>
            </li>
          </ul>
        </ul>
      </section>
      <section>
        <h2>
          Boosting
        </h2>
        <ul>
          <li>
            Use GomCalc, Forks’ Egg Inc Tools, and Hashtru’s Contract Boost Calculator to help determine the best boost combination for your goals - these will vary widely depending on the contract, number of players in your group, your EB, and artifacts.
            <ul>
              <li>Most players can use a Legendary Tachyon Prism & Epic Boost Beacon to completely fill habs. </li>
              <li>Players with Tier 4 Artifacts can often use two Epic Tachyon Prisms (together or separately) to fill habs over 50%. </li>
              <li>Advanced artifact players with powerful dilithium and life sets can often hablock with a single Epic Tachyon and a few chicken runs post-boost. A powerful tachyon artifact set can result in shipping locking. </li>
              <li>Consider the number of people in your contract and the impact deflectors will have on your laying rate - choose more GE efficient boosts in larger co-ops.</li>
            </ul>
          </li>
          <li>
            Before boosting, equip artifacts with dilithium stones to increase your boost time.
          </li>
          <li>
            Immediately after starting your boosts, switch to your best monocle, chalice, and artifacts with life stones. Leave the farm to take advantage of the Internal Hatchery Calm Epic Research. If needed, equip a gusset to increase hab space.
          </li>
        </ul>
      </section>
      <section>
        <h2>Post-boosting
        </h2>
        <ul>
          <li>Tachyon Deflectors boost your co-op mates' laying rates - since Majeggstics aim for equal contributions, a deflector will benefit your co-op overall more than any artifact that only works on your individual farm. </li>
          <li>Metronome and artifacts with tachyon stones boost egg laying rate. </li>
          <li>Compass and artifacts with quantum stones increase shipping rate. </li>
          <li>Check in regularly and don’t let your chickens fall asleep!
            <ul>
              <li>The game does not update automatically. You must open your co-op farm and sync with the server for us to see your earnings before minimums are checked. Please check-in 15 minutes before your minimum check and confirm your lay rate using the eicoop link in your thread to avoid getting a strike. </li>
            </ul>
            <li>
              Contact a token:
              <ul>
                <li>
                  If you see glitching in your group. Glitching is not allowed in Majeggstics co-ops.
                </li>
                <li>
                  Enforcing minimum is the responsibility of tokens. Do not ping low performing members yourself, allow tokens to contact them and offer support.
                </li>
                <li>
                  Removing members from our contracts is not allowed. If you remove Majeggstics players from our co-op without specific instructions from a token, you will be removed from Majeggstics.
                </li>
              </ul>
            </li>
          </li>
        </ul>
      </section>
      <section>
        <h2>Completion</h2>
        <ul>
          <li>Check in ASAP after the contract has finished so that your contract score can be calculated. </li>
        </ul>
      </section>
      <section>
        <h2>Taking Breaks & Leaving</h2>
        <p>
          We’re here to help you be successful with contracts, but we understand that sometimes you need a break.
        </p>
        <ul>
          <li>Not registering - you can skip registering for contracts with us whenever you like with no penalties.
          </li>
          <li>
            Leaving the group - if you’re not enjoying being a Majeggstic, want to join another Wonky group, or are retiring from the game, ping our Member Manager and ask to be removed from Majeggstics.
          </li>
          <li>
            Staying to socialize - If you quit playing but enjoy the community, you can stay in the group. You don’t have to play Egg Inc, and we enjoy having friends!
          </li>
        </ul>
      </section>
      <section>
        <h2>Code of Conduct</h2>
        <p>Is it a privilege for Majeggstics to have access to private channels and Wonky in the Egg, Inc. server. Because of our special status, we have high expectations for your behavior in our channels and around the server.</p>
        <ul>
          <li>Follow server #rules. Majeggstics members and channels must follow the Egg, Inc. server rules. Violating server rules will lead to removal from Majeggstics and the Egg, Inc. server. </li>
          <li>Keep chat in Majeggstics kind and appropriate for all, and be a good representative of Majeggstics in public channels. </li>
          <li>Respect Majeggstics tokens when asked to change your behavior. </li>
          <li>Current events and politics can only be discussed in Off-Topic &gt;#current-events. </li>
          <li>Majeggstics is a friendly and caring group of people, but we are limited in the support we can provide. If you need to chat about mental health, check out:
            <ul>
              <li>7 Cups of Tea: Free 24/7 chat by trained volunteers. </li>
              <li>Dialectical Behaviour Therapy: Free, anonymous, independent skills and tools to help manage big feelings. </li>
              <li>Project Lets: Community-support based mental health care, by and for folks with lived experience of mental illness/madness, Disability, trauma, & neurodivergence. </li>
            </ul>
          </li>
          <li>
            Majeggstics has a system for recruiting that respects server rules and makes sure new members are a good fit for our group and play style.
            <ul>
              <li>Respect server rules about recruitment and co-op chat. </li>
              <li>Check the pins in Co-op Recruitment &gt; #?-grade-coops to make sure we are currently recruiting, and have friends follow the instructions in our pinned post.</li>
              <li>People struggling with public co-ops may not be a good fit for Majeggstics. Let them know about Co-Op Recruitment channels and the pinned posts, and allow them to choose the group that’s right for them. </li>
            </ul>
          </li>
          <li>Keep chat about Majeggstics and Wonky in our channels - in public channels this often becomes recruitment or bragging, and reflects poorly on our group. </li>
          <li>There are many private co-op groups in the server, with different play styles and requirements for joining. Be respectful of the other groups and how they play the game, even if it’s different from us. </li>
          <li>You will be removed from Majeggstics for glitching/cheating in our co-ops.
            <ul>
              <li>
                Server staff are notified of cheating players and may apply server-wide penalties.
              </li>
            </ul>
          </li>

        </ul>
      </section>
    </main>
  )
}