# Sarbajit Paul Bappy - Portfolio Website

A modern, professional portfolio website for AI/ML researcher Sarbajit Paul Bappy, showcasing research in Federated Learning and Medical Image Classification.

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 3** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Hook Form + Zod** - Form validation
- **Next.js API Routes** - Serverless API endpoints

## Getting Started

### Prerequisites
- Node.js 18+ and npm/yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create `.env.local` for email service configuration:
```
# For production email service (Resend, SendGrid, etc.)
RESEND_API_KEY=your_resend_api_key
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=sarbajit2001@gmail.com
```

3. Run development server:
```bash
npm run dev
```

Visit `http://localhost:3000`

## Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── api/               # API routes (Next.js API routes)
│   │   └── contact/      # Contact form endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Education.tsx
│   ├── Research.tsx
│   ├── Publications.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── public/               # Static assets
│   ├── IMG_1308.heic     # Profile image
│   └── Bappy_CV_Official.pdf  # CV
└── package.json          # Node dependencies
```

## Features

- ✅ Responsive design (mobile-first)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Contact form with validation (React Hook Form + Zod)
- ✅ Research showcase
- ✅ Publications display
- ✅ Education timeline
- ✅ Social media integration
- ✅ CV download
- ✅ Next.js API routes for backend functionality

## Contact Form

The contact form uses Next.js API routes. In development mode, submissions are logged to the console. For production, you can integrate an email service:

### Option 1: Resend (Recommended)
1. Sign up at [resend.com](https://resend.com)
2. Add `RESEND_API_KEY` to `.env.local`
3. Uncomment and configure the Resend code in `app/api/contact/route.ts`

### Option 2: SendGrid
1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Install: `npm install @sendgrid/mail`
3. Add `SENDGRID_API_KEY` to `.env.local`
4. Update the contact route to use SendGrid

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
- **Netlify** - Works great with Next.js
- **Railway** - Supports Next.js deployments
- **AWS Amplify** - Full-stack deployment

## Image Format Note

The profile image is in HEIC format which may not be supported in all browsers. For better compatibility, consider converting it to JPG/PNG/WebP:

```bash
# Using ImageMagick (if installed)
convert IMG_1308.heic public/profile.jpg

# Or use macOS Preview to export as JPG
```

Then update `components/Hero.tsx` to use the converted image.

## License

© 2025 Sarbajit Paul Bappy. All rights reserved.
