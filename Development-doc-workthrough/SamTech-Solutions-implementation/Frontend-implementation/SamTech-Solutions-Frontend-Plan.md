# SamTech Solutions Frontend Plan

## Pages and Shared Regions

All four pages use a shared header, skip link, primary navigation, call to action, and footer. The active page is exposed with `aria-current="page"`.

## Components

- Responsive header and mobile menu
- Hero and page-introduction sections
- Service cards and process steps
- Founder and principles sections
- Responsive service comparison table
- Contact details, FAQ, and enquiry form
- In-page validation and submission status

## State and Interaction

- Mobile menu state is reflected through `aria-expanded`.
- A service query parameter preselects the corresponding contact-form option.
- Form validation uses native constraints plus clear JavaScript messages.
- Successful validation shows an honest local demonstration confirmation.

## Responsive Plan

- Mobile: single-column layout, collapsible navigation, scroll-safe table.
- Tablet: two-column cards and balanced content sections.
- Desktop: wider grid, persistent navigation, restrained line lengths.

## Accessibility

- Semantic landmarks and heading hierarchy
- Keyboard-operable controls
- Visible focus styles
- Sufficient colour contrast
- Labels and descriptions for every input
- Reduced-motion support
