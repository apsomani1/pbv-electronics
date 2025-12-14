# PBV Electronics Website

Professional B2B technology website for PBV Electronics built with React, TypeScript, and Vite.

## Features

- 🎨 Modern, premium UI design with gradient backgrounds and animations
- 📱 Fully responsive across all devices
- ⚡ Fast performance with Vite build system
- 🔧 Four specialized division pages
- 📝 Lead capture contact form with validation
- 💬 Floating WhatsApp integration
- 🎯 SEO-optimized with semantic HTML
- ♿ Accessible navigation and forms

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router v6** - Client-side routing
- **Vanilla CSS** - Styling with CSS variables

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── WhatsAppButton.tsx
├── pages/            # Page components
│   ├── HomePage.tsx
│   ├── AboutPage.tsx
│   ├── DivisionsPage.tsx
│   ├── ContactPage.tsx
│   └── divisions/    # Division detail pages
│       ├── EnergyControlsPage.tsx
│       ├── EmbeddedDevicesPage.tsx
│       ├── SoftwareSolutionsPage.tsx
│       └── IndustrialAutomationPage.tsx
├── App.tsx           # Main app component with routing
├── main.tsx          # Entry point
└── index.css         # Global styles and design system
```

## Customization

### Update WhatsApp Number

The WhatsApp number is already configured to **+91 8668572093**.

### Update Contact Email

The contact form sends emails to **somanianiket777@gmail.com**.

To enable email functionality:
1. Create a free EmailJS account at https://www.emailjs.com/
2. Follow the detailed setup guide in [`EMAILJS_SETUP.md`](./EMAILJS_SETUP.md)
3. Update the credentials in `src/pages/ContactPage.tsx` (lines 108-110)

See [`CONTACT_INTEGRATION_SUMMARY.md`](./CONTACT_INTEGRATION_SUMMARY.md) for complete details.

### Update Contact Information

Edit contact details in `src/components/Footer.tsx` and `src/pages/ContactPage.tsx`.

### Form Backend Integration

The contact form currently logs to console. To integrate with your backend:

1. Replace the mock submission in `ContactPage.tsx` with your API endpoint:

```typescript
const response = await fetch('https://your-api.com/contact', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
});
```

2. Or integrate with services like EmailJS, Formspree, or Netlify Forms.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 PBV Electronics. All rights reserved.
