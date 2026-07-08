# my-agent

A GitHub Actions automation agent that uses AI to triage issues, review PRs, and automate routine tasks.

## Features

- 🤖 **Issue Triage** — Automatically label and respond to new issues
- 🔍 **PR Review** — AI-powered code review on pull requests
- 📊 **Daily Digest** — Summarize repo activity daily

## Project Structure

```
my-agent/
├── .github/
│   └── workflows/
│       └── agent.yml      # Main agent workflow
├── src/
│   └── index.js           # Agent entry point
├── package.json
└── README.md
```

## Setup

1. Clone this repo
2. Install dependencies: `npm install`
3. Configure GitHub Secrets (see below)

### Required Secrets

| Secret | Description |
|--------|-------------|
| `ANTHROPIC_API_KEY` | API key for Claude |

## Usage

The agent runs automatically via GitHub Actions when:
- A new issue is opened
- A PR is created
- Scheduled (daily at 9:00 UTC)

## License

MIT
