# BowdenCore Grok Bot Agent Team Playbook

Adapted from: "From Zero to a Running Company: The Grok Bot Agent Team Playbook" by NO1ennn (@N01ennn), X post 2091534159088959967.
Source note: X blocked a direct read of that post with a 403 page, in two cloud browser environments. The playbook below is built from the verified summary in the Grok Bot Beginner's Guide, Chapter 18, which quotes and summarizes NO1ennn, plus the related Chief of Staff and first-employee guides in the same chapter. Nothing in the original post was guessed. Where the summary was thin, this playbook says so.

Date built: November 26, 2026. For: BowdenCore, Antonio Bowden.

## What this is

A one-person company run by 1 Chief of Staff Bot plus 5 specialist Bots, on Grok Bot. You talk only to the Chief. The Chief breaks work down, dispatches specialists, checks their evidence, and gives you a short nightly summary. Specialists do the work in their own lanes and hand off to each other through a shared workspace, not through chat copy and paste.

This is a Grok Bot playbook, not a Muse playbook and not your Discord roundtable. Grok Bot is xAI's agent platform. Muse is still your personal agent here. Grok in Discord is a different chat. Do not mix the three. Use this playbook inside Grok Bot, with the role charters in section 4 pasted in as each Bot is created.

## BowdenCore ground truth, checked November 26, 2026

Use only these facts. Do not let any Bot invent the rest.

- Company: BowdenCore, UniFi-native managed network services for Central Florida small businesses, dental practices, and medical offices. Greater Orlando, including Lake Nona.
- Site: bowdencore.com. Repo: abowden101/Bowdencore, public, 0 stars, 0 forks, main branch, main protection enforced (force push and deletion blocked).
- Site stack: pure HTML, CSS, and JS. No build step. Pages: index, services, about, portfolio, contact. Shared style.css and main.js. Assets in assets/.
- Offer: $97 Network Health Check as the wedge. Stage 1 is UniFi Foundation. Stage 2 is Advanced Security and HIPAA Compliance.
- Lead form: contact form posts to Formspree. Paid audit checkout is not live yet. STRIPE_AUDIT_URL in main.js is unset, so audit CTAs route to contact.html?interest=audit.
- Stats on the live site: 30+ UDM installs, 50+ sites, $0 license fees, 100% as-built docs.
- Technologies page lists 8 tiles. These are vendors in your stack, not formal channel partners. Never claim a partnership.
- Credentials on file: CCNA in progress, Security+ in progress, WGU B.S. Cloud and Network Engineering (Azure Track) in progress, expected 2027. Never claim any of these as earned.
- Social proof is still open. There is no real client quote on file with permission. Do not invent one.

## The BowdenCore redline: prep only

This is the most important rule in this playbook, and it overrides the original.

No paid client onboarding until you exit Advantage Technologies. No BowdenCore clients, services, proposals, or revenue while you are employed there. Prep only until you exit.

That means, in this team:

- Sales Prep Bot drafts and prepares only. It does no live outreach, sends no emails, makes no calls, and writes no proposals to real prospects.
- No Bot contacts an Advantage customer or prospect. Any lead list must be scrubbed against Advantage customers first, and the scrub result must be shown before any other step.
- No Bot publishes to bowdencore.com, LinkedIn, X, or any external channel. Drafts only, you approve and publish.
- No Bot spends money, changes a price, creates a Stripe link, or touches a bank account. Finance work is lists and drafts for your approval.
- No Bot handles PHI, client network credentials, or Advantage internal data. If a task would need those, it stops and asks you.

If a Bot is asked to do any of the above, it must refuse that step, say which redline it hit, and hand the draft back to the Chief.

## 1. The model: one computer, one Chief, separate memories

All Bots under one Grok Bot account share one cloud computer, with a shared /workspace directory, browser sessions, and terminal. There is no security isolation between Bots. A role name is not a firewall.

That is why this playbook uses strict lanes, least privilege sub-accounts, and human gates, instead of trusting a prompt to keep a Bot in line.

Rules that follow from the shared computer:

1. Never log a Bot into primary online banking or a core repository with full credentials. Use least privilege sub-accounts only.
2. Humans enter passwords. Bots inherit the session only, through handoff.
3. Disable local computer execution permissions in Grok Bot global settings, so risk stays inside the cloud sandbox.
4. Do not store confidential cloud drives or Advantage data in the shared workspace.
5. Stop passing important context through chat. Research, drafts, evidence, decisions, and handoffs live in /workspace, so every Bot can continue exactly where another stopped. In the BowdenCore repo, the mirror of that is docs/agent-team/ (see section 7).
6. If a Bot says STOP ALL, everything halts. The Chief must obey it and tell you.

Do not pile everything onto one Bot. A Bot that handles sales leads, writes content, reconciles accounts, and modifies code will clog its context, confuse business context, and burn quota faster. One task per Bot, one Bot per task.

## 2. The team: 1 Chief plus 5 specialists

You interface only with the Chief of Staff. The Chief does not do the work. It routes, delegates, watches handoffs, collects outputs, and escalates.

| Bot | Owns, in one sentence |
| --- | --- |
| Chief of Staff | Your single entry point, dispatch, tracking, evidence checks, and nightly summary. |
| Research Bot | Orlando dental and medical MSP market, competitor pricing, UniFi and HIPAA facts, all with dates and URLs. |
| Content Bot | Drafts for bowdencore.com and LinkedIn, in your templates, never published directly. |
| Sales Prep Bot | Lead list prep, scrub checks, outreach drafts saved only, no live contact. |
| Tech Bot | BowdenCore repo changes on a branch, as a PR, with proof the site still previews clean. |
| Ops and Finance Bot | $97 Health Check economics, costs, checklists, and money lists for your approval, no money moves. |

Create them in this order: Chief first, then Research, then Content, then Tech, then Sales Prep, then Ops and Finance. Do not create all six at once. Each new Bot starts at Level 0 and must pass its probation before it gets more freedom (section 5).

## 3. The three gates: every serious workflow passes all three

No workflow ships without all three gates. The Chief enforces them.

1. Source gate. Every claim has a date and a URL, or it is marked missing. No uncited figures. No forced guesses. If data is missing, the responsible Bot re-fetches it or reports it as missing. It never invents it.
2. Evidence gate. Every deliverable includes its proof (section 6). No proof, no acceptance.
3. Action gate. Reversible work can run on its own. Irreversible work waits for you: publishing, sending, spending, deleting, changing production, signing, and any external action. The Bot queues it and stops.

Reversible work a Bot may do on its own, once promoted: searching, summarizing, formatting, drafting, archiving, and classifying.
Irreversible work a Bot must never do on its own: sending an email or message, publishing a page or post, spending or moving money, deleting a file or repo, pushing to main, changing DNS or a live site, or contacting a person or business.

## 4. Role charters: paste these in when you create each Bot

Each charter uses the same five fields from the guide: Owns, Inputs, May, Must ask before, Done when. Paste the charter in full. Do not shorten it. The full text for each Bot is also saved as a separate file in this directory, ready to copy.

See individual files:
- [chief-of-staff.md](chief-of-staff.md)
- [research-bot.md](research-bot.md)
- [content-bot.md](content-bot.md)
- [sales-prep-bot.md](sales-prep-bot.md)
- [tech-bot.md](tech-bot.md)
- [ops-and-finance-bot.md](ops-and-finance-bot.md)

## 5. Probation, promotion, and the four-week trust transfer

Do not hand a new Bot a real workflow on day one. Start with tedious, high frequency, easily reversible chores.

### Three-run probation, for each Bot

Run 1, full observation: Watch every step. Note misread instructions, lost context, and guesses.
Run 2, fix the rules: Give a task of equal difficulty, without reminding it of old mistakes. Check whether the role rules and permission changes took effect.
Run 3, hands-off live test: Do not intervene, except at approvals or retry limits. Check completeness, number of interventions, time elapsed, and quota used.

After passing all three, a Bot enters the promotion ladder.

### Promotion ladder

- Level 0, observation only: Modifies no data.
- Level 1, preparation only: Reversible work such as searching, summarizing, and formatting.
- Level 2, human approval: Critical steps stop for your confirmation.
- Level 3, autonomous execution: Scheduled or triggered runs, with evidence chain reports.
- Level 4, multi-Bot collaboration: Acts as dispatch or QA for other Bots.

Promotion to the next level requires all four hard metrics: 5 consecutive flawless live runs, all validation steps passed, no unresolved side effects, and rollback verified as working.

### Four-week trust transfer

Week 1, draft stage: The Bot only drafts. You read through and execute manually, word for word where it matters.
Week 2, approval stage: The Bot stops at key steps. You verify actions and approve.
Week 3, exception reporting: Low risk tasks run on their own. The Bot alerts you only on anomalies or unauthorized actions.
Week 4, routine inspection: It runs fully on its own by routine. You review only the weekly summary.

Do not skip a week because a Bot had one good day. Trust is transferred by the calendar and by the evidence, not by a feeling.

Add a new Bot only after human review stabilizes to within 15 minutes per day. If review is taking longer than that, fix the Bot you have before you add another one.

## 6. Evidence chain: show the tape

To close your laptop with peace of mind, you need to see the proof. A deliverable is not accepted without all three pieces:

1. Screen recording of the operation, or invocation logs: the complete webpage path or tool call sequence.
2. Original sources for data and figures: date and URL for each one. Uncited references are not allowed.
3. Explanation of error skipped items and speculative conclusions: what was skipped, what failed, and what is a guess, labeled as a guess.

The Chief checks this chain before it accepts anything from a specialist. If the chain is missing, the Chief sends it back. After 3 QA failures on the same deliverable, the circuit breaker trips: stop, fall back to you, and do not retry the same way a fourth time.

Use an independent read-only reviewer for important deliverables, when you have one. The reviewer reads only the original brief, the client or site specifications, and the deliverable itself. It does not see the intermediate reasoning. A Bot reviewing its own output will rationalize its own mistakes.

## 7. Setup order and first mission

### Setup order

1. Create the Chief of Staff Bot first, with the charter in chief-of-staff.md. It does not do work. It routes, delegates, watches handoffs, and collects outputs.
2. Create Research Bot. Run its three-run probation on a small research task.
3. Create Content Bot. Run its probation on one draft.
4. Create Tech Bot. Run its probation on one typo fix PR.
5. Create Sales Prep Bot. Run its probation on a 10-row prep list, no contact.
6. Create Ops and Finance Bot. Run its probation on one cost list.
7. Set up the shared workspace bus: /workspace/bowdencore/ with folders for research, drafts, evidence, decisions, and handoffs. Every Bot writes there, so any Bot can continue where another stopped.
8. Mirror the roles and redlines in the repo, as this docs/agent-team/ directory, on a branch, as a PR, for your approval. Do not push to main directly.

### First mission, two weeks, drafts only

Goal: In two weeks, complete competitor pricing research for the Orlando dental and medical MSP market, produce a comparison brief, and draft 3 site updates from that brief.

Week 1: Research Bot retrieves public pricing for 5 competitors, with a Markdown table and a URL for each price. It hands off to Content Bot in the group chat. Content Bot drafts 3 site updates and saves them to the workspace. The Chief tracks the board. If data is missing, the responsible Bot re-fetches it or reports it as missing. It does not invent it.
Week 2: The Chief checks the evidence chain on each draft. You review the drafts and the brief. Nothing is published. Nothing is sent. The mission ends with a decision list: which drafts to publish, which to revise, and which to drop.

Success for this first mission is not a live site change. Success is a clean evidence chain, zero unauthorized actions, and a review that takes you less than 15 minutes a day.

## 8. Monthly scorecard

Fill this out once a month, per Bot. If a Bot is silently degrading, this is where it shows.

- Bot name and level:
- Hours actually saved this month, compared with doing it by hand:
- Share of drafts that needed heavy manual rework (under 10 percent is passing):
- Trust trend: rising, flat, or falling:
- Anomalies and rollbacks: how many page errors, permission alerts, or rollbacks:
- Decision: keep running, downgrade to human approval, or stop and delete:

Also purge dead routines. Any routine that produces zero output for multiple consecutive weeks gets deleted, not left running to burn quota.

## 9. Expensive lessons, from the guide

- Constant polling burns quota. Routines stay silent when there is no new intelligence. No news is no message.
- Syncing everything wastes usage. Sync only what the next Bot needs.
- Bad retries duplicate actions. After a failure, stop, show the error, and ask, instead of blindly retrying.
- Undocumented internals break. Every workflow lives in /workspace and in docs/agent-team/, with its owner, inputs, and Done when checklist. If it is not written down, it does not exist.
- Too many Bots can make the system slower. Six Bots is the cap for BowdenCore for now: 1 Chief plus 5 specialists. Do not add a seventh until review is under 15 minutes a day and the scorecard says the team is stable.

## 10. What to do next

1. Confirm this playbook is the article you meant. The source was NO1ennn on X, summarized in Chapter 18. If you meant a different article, say so and this gets rebuilt from that one.
2. Approve or edit the redlines in section 3, especially the prep only rule.
3. Approve the six charters in section 4, or tell me which Bot to change first.
4. Decide the GitHub step: approve creating branch feat/agent-team-playbook in abowden101/Bowdencore, adding docs/agent-team/ with this playbook and the six charters, and opening a PR for your review. No push to main, no merge by a Bot.
5. Start with the Chief only. Do not create the other five until the Chief passes its first week.

Source list for this playbook:
- NO1ennn, "From Zero to a Running Company: The Grok Bot Agent Team Playbook", X post 2091534159088959967, as summarized in Grok Bot Beginner's Guide, Chapter 18, "One-Person Company and AI Team".
- Grok Bot Beginner's Guide, Chapter 18, sections on the first AI employee, three-run probation, promotion ladder, Chief of Staff architecture, evidence chain, four-week trust transfer, and monthly scorecard.
- BowdenCore repo abowden101/Bowdencore, README.md and root listing, checked November 26, 2026.
- BowdenCore goal: scaling UniFi-native managed network services and Veritas Guard to dental and medical practices in Central Florida, $97 Network Health Check wedge, no paid client onboarding until exit from Advantage Technologies.
