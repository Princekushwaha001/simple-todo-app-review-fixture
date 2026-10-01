# Simple Todo App - Code Review Fixture

This repository is a small TypeScript todo service intentionally designed for testing a multi-agent GitHub pull-request review orchestrator.

It has a clean `main` branch and three feature branches that can be turned into GitHub pull requests. Each PR changes real source and test files so a review agent can exercise:

- GitHub PR metadata retrieval
- changed-file retrieval
- file-content retrieval
- code-quality analysis
- test-coverage analysis
- refactoring suggestions
- structured report generation

## Branches to use as PR fixtures

| Branch | Suggested PR | Main review focus |
|---|---:|---|
| `feature/pr-1-search-delete` | #1 | Regex/ReDoS risk, validation bug, missing edge-case tests |
| `feature/pr-2-update` | #2 | Input validation, mutation/aliasing, test gaps, duplication |
| `feature/pr-3-stats` | #3 | Performance, type safety, mutation, refactoring opportunities |

The exact PR numbers depend on the order in which you create the pull requests on GitHub. To obtain PR #1/#2/#3, create them in the order shown above.

## Run locally

```bash
npm install
npm test
npm run build
npm run lint
```

## Push to GitHub

After extracting this repository:

```bash
git remote add origin https://github.com/<YOUR_USER>/simple-todo-app.git
git push -u origin main
git push -u origin feature/pr-1-search-delete

git push -u origin feature/pr-2-update
git push -u origin feature/pr-3-stats
```

Then create three pull requests in this order:

1. `feature/pr-1-search-delete` -> `main`
2. `feature/pr-2-update` -> `main`
3. `feature/pr-3-stats` -> `main`

For the cleanest review isolation, keep the PRs open and do not merge them before your orchestrator processes them.
