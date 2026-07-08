/**
 * GitHub AI Agent — Entry point
 *
 * Dispatches based on event type:
 *   - issues       → triage the new/updated issue
 *   - pull_request → review the PR diff
 *   - schedule     → generate daily digest
 */

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const EVENT_NAME = process.env.EVENT_NAME;
const EVENT_PAYLOAD = JSON.parse(process.env.EVENT_PAYLOAD || '{}');

async function main() {
  console.log(`Agent triggered by: ${EVENT_NAME}`);

  switch (EVENT_NAME) {
    case 'issues':
      await handleIssue(EVENT_PAYLOAD);
      break;
    case 'pull_request':
      await handlePullRequest(EVENT_PAYLOAD);
      break;
    case 'schedule':
      await handleSchedule(EVENT_PAYLOAD);
      break;
    default:
      console.log(`No handler for event: ${EVENT_NAME}`);
  }
}

async function handleIssue(event) {
  const { action, issue, repository } = event;

  if (action !== 'opened') {
    console.log(`Skipping issue action: ${action}`);
    return;
  }

  console.log(`New issue #${issue.number}: ${issue.title}`);
  // TODO: Add AI triage logic — classify labels, suggest assignee, draft response
}

async function handlePullRequest(event) {
  const { action, pull_request, repository } = event;

  console.log(`PR #${pull_request.number}: ${pull_request.title} (${action})`);
  // TODO: Add AI code review logic — analyze diff, post inline comments
}

async function handleSchedule(event) {
  console.log('Running daily digest...');
  // TODO: Summarize recent issues/PRs and post a digest
}

main().catch((err) => {
  console.error('Agent error:', err);
  process.exit(1);
});
