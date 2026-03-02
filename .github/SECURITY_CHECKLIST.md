# Security PR Checklist

Before merging, verify all applicable items:

## Authentication & Authorization
- [ ] No hardcoded credentials or API keys in code
- [ ] Protected routes use `<ProtectedRoute>` wrapper
- [ ] Role-based access checked where applicable
- [ ] Session handling follows AuthContext patterns

## Input Handling
- [ ] All user inputs sanitized before processing
- [ ] Server-side validation present for API endpoints
- [ ] No `dangerouslySetInnerHTML` with user-controlled data
- [ ] Query parameters validated and type-checked

## Dependencies
- [ ] No new dependencies with known vulnerabilities (`npm audit`)
- [ ] New packages verified for legitimacy (check download counts, maintainers)
- [ ] Lockfile (`package-lock.json`) committed with changes

## API Security
- [ ] API responses don't leak internal error details
- [ ] Rate limiting applied to new endpoints
- [ ] CORS origins restricted (not `*` in production)

## General
- [ ] No `console.log` / `console.error` with sensitive data
- [ ] No commented-out code containing secrets
- [ ] External links use `rel="noopener noreferrer"` with `target="_blank"`
