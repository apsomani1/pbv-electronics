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

> **📘 Documentation**: For a deep dive into the architecture, component design, and valid deployment strategies, please read our [Technical Documentation](./TECHNICAL_DOCUMENTATION.md).

## Getting Started Guide

This guide will help you set up the project on your local machine for development and testing purposes.

### 1. Prerequisites (What you need installed)

Before you begin, ensure you have the following software installed on your computer:

*   **Node.js**: This is the runtime environment required to run the project.
    *   [Download and Install Node.js](https://nodejs.org/) (Recommended: **LTS version**, which is currently v18 or v20).
*   **Git**: Version control system to download the code.
    *   [Download and Install Git](https://git-scm.com/downloads)

### 2. Downloading the Code

Open your terminal (Command Prompt, PowerShell, or Terminal) and run the following command to download (clone) this repository to your computer:

```bash
git clone https://github.com/apsomani1/pvb-electronics.git
```

Then, navigate into the project folder:

```bash
cd pvb-electronics
```

### 3. Installing Dependencies

This project uses various external libraries (dependencies) to work. You need to install them before running the project. Run this command in your project folder:

```bash
npm install
```
*This may take a few minutes depending on your internet connection.*

### 4. Running the Website Locally (Development Mode)

To start the website on your local computer so you can make changes and see them instantly:

```bash
npm start
```
*Alternatively, you can skip the alias and run `npm run dev` directly.*

**What happens next?**
- The terminal will show a local address, usually `http://localhost:5173/`.
- It will also show a **Network** address (e.g., `http://192.168.x.x:5173/`) which you can use to view the website on other devices (like your phone) connected to the same WiFi.
- Open your web browser and execute that URL.
- You should see the PBV Electronics website running!

### 5. Building for Production (Deployment)

When you are ready to publish the website to the internet, you need to create a "production build". This optimizes the code for faster loading speeds.

Run this command:

```bash
npm run build
```

**Output:**
- This will create a `dist` folder in your project directory.
- The `dist` folder contains the final HTML, CSS, and JavaScript files ready for deployment to hosting providers like Vercel, Netlify, or your own server.

### 6. Previewing the Production Build

To verify that your production (optimized) build looks correct locally before uploading it:

```bash
npm run preview
```
This serves the contents of the `dist` folder similarly to how a real web server would.

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
