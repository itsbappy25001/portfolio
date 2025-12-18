# 🚀 Sarbajit Paul Bappy - Portfolio Website

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![React](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react)

A modern, responsive portfolio website showcasing research, projects, and expertise in AI/ML, Deep Learning, and Computer Vision.

[Live Demo](#) • [Documentation](#features) • [Report Bug](#issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
- [Project Structure](#-project-structure)
- [Key Features](#-key-features)
- [Contact Form Setup](#-contact-form-setup)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

This is a professional portfolio website for **Sarbajit Paul Bappy**, a final-year Computer Science student specializing in AI/ML research. The portfolio showcases:

- **Research Areas**: Deep Learning, Computer Vision, Medical Image Analysis, Explainable AI
- **Projects**: Machine Learning, Data Analysis, and Full-Stack Applications
- **Publications**: Academic research contributions
- **Education**: Academic background and achievements

Built with modern web technologies, featuring smooth animations, responsive design, and a clean, professional interface.

---

## ✨ Features

### 🎨 Design & UX
- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Smooth Animations** - Powered by Framer Motion for engaging user experience
- ✅ **Modern UI** - Clean, professional design with gradient accents
- ✅ **Dark Mode Ready** - Easy to extend with dark theme support

### 📱 Sections
- ✅ **Hero Section** - Eye-catching introduction with profile image
- ✅ **About** - Personal background and expertise
- ✅ **Education** - Academic timeline and achievements
- ✅ **Research** - Research areas and interests
- ✅ **Publications** - Academic publications and papers
- ✅ **Projects** - Showcase of technical projects with GitHub links
- ✅ **Contact** - Functional contact form with validation

### 🔧 Functionality
- ✅ **Contact Form** - Validated form with email integration (Resend)
- ✅ **CV Download** - Direct download link for resume
- ✅ **Social Links** - GitHub, LinkedIn integration
- ✅ **Smooth Scrolling** - Seamless navigation between sections
- ✅ **SEO Optimized** - Meta tags and semantic HTML
- ✅ **Admin Panel** - Manage all content without changing code (Education, Publications, Projects, etc.)

---

## 🛠 Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS 3](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Icon library

### Forms & Validation
- **[React Hook Form](https://react-hook-form.com/)** - Form state management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Backend & APIs
- **[Next.js API Routes](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)** - Serverless API endpoints
- **[Resend](https://resend.com/)** - Email delivery service
- **[Supabase](https://supabase.com/)** - PostgreSQL database for content management
- **[bcryptjs](https://www.npmjs.com/package/bcryptjs)** - Password hashing for admin authentication

### Additional Libraries
- **[Axios](https://axios-http.com/)** - HTTP client
- **[SweetAlert2](https://sweetalert2.github.io/)** - Beautiful alert dialogs

---

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** 18+ ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- **Git** (for cloning the repository)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SarbajitPbappy/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Email Service (Resend)
RESEND_API_KEY=your_resend_api_key_here
FROM_EMAIL=noreply@yourdomain.com
TO_EMAIL=sarbajit2001@gmail.com

# Database (Supabase) - Required for Admin Panel
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

# Admin Panel Password
ADMIN_PASSWORD=your-secure-password-here
```

> **Note**: 
> - The contact form will work in development mode without email variables (submissions are logged to console)
> - For the admin panel, you need to set up Supabase. See `DATABASE_SETUP.md` for detailed instructions
> - The portfolio will work without the database, but the admin panel requires it

---

## 📁 Project Structure

```
portfolio/
├── app/                      # Next.js App Router
│   ├── api/                  # API routes
│   │   └── contact/          # Contact form endpoint
│   │       └── route.ts
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/               # React components
│   ├── Navbar.tsx            # Navigation bar
│   ├── Hero.tsx              # Hero section
│   ├── About.tsx             # About section
│   ├── Education.tsx         # Education timeline
│   ├── Research.tsx          # Research areas
│   ├── Publications.tsx      # Publications list
│   ├── Projects.tsx          # Projects showcase
│   ├── Contact.tsx           # Contact form
│   └── Footer.tsx            # Footer component
├── public/                   # Static assets
│   ├── profile.jpg           # Profile image
│   ├── Bappy_CV_Official.pdf # Resume/CV
│   └── icon.png              # Favicon
├── .env.local                # Environment variables (create this)
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## 🎯 Key Features

### Contact Form

The contact form includes:
- **Client-side validation** using React Hook Form + Zod
- **Server-side validation** for security
- **Email integration** via Resend API
- **Beautiful alerts** using SweetAlert2
- **Error handling** with fallback logging

### Animations

- **Scroll-triggered animations** using Framer Motion
- **Hover effects** on interactive elements
- **Smooth page transitions**
- **Staggered animations** for lists and grids

### Responsive Design

- **Mobile-first approach**
- **Breakpoints**: Mobile, Tablet, Desktop
- **Touch-friendly** navigation and interactions
- **Optimized images** with Next.js Image component

---

## 🎛️ Admin Panel

The portfolio includes a powerful admin panel that lets you manage all content without changing code!

### Features
- ✅ Manage Education, Publications, Work Experience, Projects, Research Areas, and Courses
- ✅ Add, edit, and delete entries through a beautiful UI
- ✅ Real-time updates on your portfolio
- ✅ Secure password-based authentication

### Setup
1. Follow the instructions in `DATABASE_SETUP.md` to set up Supabase
2. Run the SQL schema from `supabase_schema.sql` in Supabase SQL Editor
3. Set environment variables (see above)
4. Access admin panel at `/admin`

### Usage
See `ADMIN_PANEL_GUIDE.md` for detailed usage instructions.

---

## 📧 Contact Form Setup

### Option 1: Resend (Recommended)

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add to `.env.local`:
   ```env
   RESEND_API_KEY=re_xxxxxxxxxxxxx
   FROM_EMAIL=noreply@yourdomain.com
   TO_EMAIL=your-email@gmail.com
   ```
4. The form is already configured to use Resend!

### Option 2: SendGrid

1. Sign up at [sendgrid.com](https://sendgrid.com)
2. Install SendGrid package:
   ```bash
   npm install @sendgrid/mail
   ```
3. Update `app/api/contact/route.ts` to use SendGrid
4. Add `SENDGRID_API_KEY` to `.env.local`

### Development Mode

Without email service configuration, form submissions are logged to the console for testing.

---

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in the Vercel dashboard
4. Deploy! Your site will be live automatically

**Vercel automatically:**
- Detects Next.js projects
- Optimizes builds
- Provides HTTPS
- Enables automatic deployments on push

### Other Platforms

- **Netlify** - Great Next.js support with easy setup
- **Railway** - Simple deployment with environment variable management
- **AWS Amplify** - Full-stack deployment with CI/CD

### Build for Production

```bash
npm run build
npm start
```

---

## 🤝 Contributing

Contributions are welcome! If you'd like to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

© 2025 Sarbajit Paul Bappy. All rights reserved.

This project is private and proprietary. Unauthorized copying, modification, distribution, or use of this project, via any medium, is strictly prohibited.

---

## 📞 Contact

**Sarbajit Paul Bappy**

- 📧 Email: [bappy15-6155@s.diu.edu.bd](mailto:bappy15-6155@s.diu.edu.bd)
- 📱 Phone: +880 1315352270
- 💼 LinkedIn: [iamsarbajit](https://linkedin.com/in/iamsarbajit)
- 🐙 GitHub: [@SarbajitPbappy](https://github.com/SarbajitPbappy)

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">

**⭐ If you find this project helpful, please consider giving it a star! ⭐**

Made with ❤️ by [Sarbajit Paul Bappy](https://github.com/SarbajitPbappy)

</div>
