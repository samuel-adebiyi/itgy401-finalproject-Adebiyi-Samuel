# SamTech Solutions Research Findings

## Course Requirement Mapping

- Semantic structure: distinct header, navigation, main, section, article, table, form, and footer regions.
- Four linked pages: Home, About, Services, and Contact.
- Styling: one shared external stylesheet with responsive breakpoints.
- Form: enquiry form using text, email, tel, select, radio or checkbox, and textarea inputs where deliberate.
- Table: service comparison with scope, timeline, and starting-price information.
- JavaScript: accessible mobile navigation, service preselection, and form validation.
- Organisation: root HTML pages plus `/css`, `/js`, and `/images`.

## Edge Cases

- Narrow screens must not make the table unreadable.
- Navigation must still expose page links if JavaScript fails.
- Invalid form fields must identify the actual problem.
- A successful local validation must not claim real message delivery.
- Direct links from a service card must preselect only known service values.
- Long names and messages must not break the layout.

## Premortem Risks

1. The site looks polished but misses a rubric item.
2. The contact form pretends to submit despite having no backend.
3. Mobile navigation or table layout fails on a small screen.
4. Invented claims reduce credibility during presentation.
5. GitHub Pages paths break because they assume deployment at the domain root.

## Safeguards

- Maintain a rubric-to-evidence checklist.
- Use honest copy and label sample pricing.
- Test direct page loads and all internal links under a repository subpath.
- Verify form, table, navigation, and responsive behavior before deployment.
