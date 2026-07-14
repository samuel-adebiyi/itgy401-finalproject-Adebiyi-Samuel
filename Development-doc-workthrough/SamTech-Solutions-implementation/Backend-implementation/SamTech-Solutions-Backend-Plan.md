# SamTech Solutions Backend Plan

## Architecture

There is intentionally no backend. GitHub Pages serves static HTML, CSS, JavaScript, and image assets.

## Contracts

- Internal links use relative paths compatible with the repository's GitHub Pages subpath.
- The contact form never implies server delivery.
- JavaScript reads only page-local DOM state and optional URL query parameters.
- No secrets, API keys, user accounts, database records, or payment data exist.

## Future Production Upgrade

A real consultancy could later add a dedicated form-processing service with spam protection, consent logging, retention rules, and delivery monitoring. That is outside this course project's scope.
