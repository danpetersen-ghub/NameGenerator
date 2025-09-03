# NameGenerator (frontend)

Quick notes for a new contributor working on the `namegenerator` UI and tests.

## About

NameGenerator is a small frontend utility that creates consistent, human-readable filenames for project artifacts.
Given inputs like year/month/day, client, project and file name, it builds a standardized output string (for example: `2025_09_03-ACME_MyProject_myfile.txt`).

Why this is useful:

- Consistency: ensures every file follows the same naming convention so teams don't have mixed formats.
- Searchability: dates and client/project tokens make files easy to sort and find.
- Automation friendly: predictable filenames allow scripts and CI tasks to locate and process files reliably.
- Reduces mistakes: centralizes formatting logic so contributors don't manually create incorrect names.

Getting started

- Open `namegenerator/index.html` in a browser to view the app.
- The main JS lives in `namegenerator/script.js` and exposes `createName()` which the tests call.

Testing

- Playwright tests live in the repository-level `tests/` folder.
- To run tests locally:
   1. Install deps: `npm install`
   2. Install Playwright browsers: `npx playwright install`
   3. Run tests: `npm test` or `npx playwright test`

Notes

- Tests currently load the page with a file:// URL. CI uses the repository path and runs the same tests.
- When adding fields, prefer stable `id` attributes and avoid changing existing ones used by tests (for example: `0A`, `0B`, `0H`, `0C`, `0F`, `0G`).

If you add a new UI (for example the ToDoApp), follow the same test structure and add a test file under `tests/` named `todo.spec.js`.
