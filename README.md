# Muhammad Moazzam Hafeez - Portfolio

A modern, responsive portfolio website showcasing my work as a Computer Science student and aspiring Software Engineer.

## 🌟 Live Demo

- **Vercel**: [https://moazzamportfolio.vercel.app/](https://moazzamportfolio.vercel.app/) 🚀
- **GitHub Pages**: [https://moazzamhafeez1093.github.io/Portfolio](https://moazzamhafeez1093.github.io/Portfolio)
- **Deploy to Vercel**: [One-click deploy](https://vercel.com/new/clone?repository-url=https://github.com/MoazzamHafeez1093/Portfolio)

## 🚀 Features

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Interactive Sections**:
  - Hero section with call-to-action
  - About section with personal story
  - Work Experience showcase
  - Skills & Technologies
  - Certifications with verification links
  - Workshops & Training
  - Contact form with EmailJS integration
- **Dark/Light Theme**: Automatic theme detection
- **Performance Optimized**: Fast loading with Vite build system

## 🛠️ Technologies Used

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: GitHub Pages, Vercel

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Skills showcase
│   ├── Courses.tsx     # Certifications
│   ├── Workshops.tsx   # Workshops & training
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── pages/              # Page components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MoazzamHafeez1093/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` or `http://localhost:8081`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 📧 Email Configuration

The contact form uses EmailJS for sending emails. To set it up:

1. Create an EmailJS account at [emailjs.com](https://emailjs.com)
2. Create a service and template
3. Update the credentials in `src/components/Contact.tsx`:
   ```typescript
   const serviceId = 'your_service_id';
   const templateId = 'your_template_id';
   const publicKey = 'your_public_key';
   ```

## 🌐 Deployment

### Vercel (Recommended) ✅

**Live Site**: [https://moazzamportfolio.vercel.app/](https://moazzamportfolio.vercel.app/)

1. Import your repository to Vercel
2. Deploy automatically on every push
3. Get a custom domain and HTTPS
4. **Current Status**: Successfully deployed and live!

### GitHub Pages

1. Push your code to the `master` branch
2. GitHub Actions will automatically build and deploy
3. Your site will be available at `https://yourusername.github.io/Portfolio`

### Netlify

1. Connect your GitHub repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/components/Hero.tsx` - Name, title, description
- `src/components/About.tsx` - Personal story
- `src/components/Contact.tsx` - Contact details
- `src/components/Experience.tsx` - Work experience
- `src/components/Courses.tsx` - Certifications
- `src/components/Skills.tsx` - Skills and technologies

### Styling

- Colors: Update `tailwind.config.ts`
- Fonts: Modify `index.html` and `src/index.css`
- Components: Edit individual component files

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 About Me

**Muhammad Moazzam Hafeez**
- Computer Science Student at FAST NUCES, Islamabad
- Graduating 2026
- Focus Areas: AI/ML Research, DevOps & Cloud Engineering
- Location: Pakistan 🇵🇰

## 📞 Contact

- **Email**: moazzaam21@gmail.com
- **GitHub**: [@MoazzamHafeez1093](https://github.com/MoazzamHafeez1093)
- **LinkedIn**: [moazzam-hafeez-aa6a70168](https://www.linkedin.com/in/moazzam-hafeez-aa6a70168/)
- **Phone**: +92 336 222 0642

---

⭐ **Star this repository if you found it helpful!**