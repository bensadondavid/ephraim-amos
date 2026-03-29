<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Context

This project is a digital invitation for a Bar Mitzvah.

## Product Goals

- The site is an event invitation, not a content-heavy marketing website.
- SEO is not a priority for this project.
- There will be two separate versions of the invitation:
  - a Hebrew version
  - a French version
- Do not implement i18n. The Hebrew and French versions should use different links/routes instead of a shared i18n system.
- Route structure should stay simple and explicit, using separate paths such as `/fr` and `/he`.

## Tech Direction

- This is a Next.js project.
- Backend behavior should use serverless API routes.
- The API route should receive the request body and forward it to Google Apps Script.
- Google Apps Script is responsible for writing the submitted data into Google Sheets.

## Implementation Preferences

- Keep the architecture simple and appropriate for a small event website.
- Prefer straightforward routing and page structure over complex abstractions.
- Prefer Server Components by default.
- Add `'use client'` only when it is clearly necessary.
- Do not add SEO-specific work unless explicitly requested.
- Avoid introducing i18n libraries or multilingual infrastructure for this project.
- Do not add a CMS, database, or unnecessary infrastructure unless explicitly requested.
