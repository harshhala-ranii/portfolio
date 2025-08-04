# 🚀 Harshala Rani - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features a stunning UI with smooth animations, showcasing professional experience, projects, and skills.

![Portfolio Preview](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-38B2AC?style=for-the-badge&logo=tailwind-css)
![Docker](https://img.shields.io/badge/Docker-24.0-2496ED?style=for-the-badge&logo=docker)

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📦 Installation](#-installation)
- [🐳 Docker Deployment](#-docker-deployment)
- [🌐 Live Demo](#-live-demo)
- [📁 Project Structure](#-project-structure)
- [🎨 Customization](#-customization)
- [📱 Responsive Design](#-responsive-design)
- [🔧 Development](#-development)
- [📊 Performance](#-performance)
- [🔒 Security](#-security)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📞 Contact](#-contact)

## ✨ Features

### 🎯 Core Features
- **Modern UI/UX**: Clean, professional design with glass morphism effects
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Dark Theme**: Elegant dark theme with gradient accents
- **Performance Optimized**: Fast loading with optimized assets and lazy loading

### 📱 Sections
- **Hero Section**: Professional introduction with cycling roles
- **About**: Education, experience, and professional highlights
- **Skills**: Technical skills with progress indicators
- **Experience**: Work history and achievements
- **Projects**: Showcase of key projects with live links
- **Leadership**: Community involvement and public speaking
- **Contact**: Professional contact information and social links

### 🎨 Design Elements
- **Glass Effects**: Modern glass morphism cards and components
- **Gradient Text**: Eye-catching gradient text effects
- **Custom Scrollbar**: Styled scrollbar for better UX
- **Hover Effects**: Interactive hover animations
- **Loading States**: Smooth loading transitions

## 🛠️ Tech Stack

### Frontend
- **React 18**: Latest React with hooks and modern features
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for smooth transitions
- **Lucide React**: Beautiful icon library

### Development Tools
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and quality assurance
- **Prettier**: Code formatting

### Deployment
- **Docker**: Containerization for consistent deployment
- **Nginx**: High-performance web server
- **Docker Compose**: Multi-container orchestration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Local Development
```bash
# Clone the repository
git clone https://github.com/harshhala-ranii/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

### Production Build
```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Installation

### Step 1: Clone Repository
```bash
git clone https://github.com/harshhala-ranii/portfolio.git
cd portfolio
```

### Step 2: Install Dependencies
```bash
npm install
# or
yarn install
```

### Step 3: Environment Setup
Create a `.env` file in the root directory:
```env
VITE_APP_TITLE=Harshala Rani - Portfolio
VITE_APP_DESCRIPTION=Full Stack Developer Portfolio
```

### Step 4: Start Development
```bash
npm run dev
```

## 🐳 Docker Deployment

### Quick Docker Deployment
```bash
# Build and run with Docker Compose
docker-compose up -d

# Access at: http://localhost:3000
```

### Development with Docker
```bash
# Start development container
docker-compose --profile dev up -d

# Access at: http://localhost:3001
```

### Manual Docker Commands
```bash
# Build production image
docker build -t harshala-portfolio:latest .

# Run container
docker run -d -p 3000:80 harshala-portfolio:latest
```

For detailed Docker deployment instructions, see [DOCKER_DEPLOYMENT.md](./DOCKER_DEPLOYMENT.md).

## 🌐 Live Demo

- **Production**: [Portfolio Website](https://your-domain.com)
- **Development**: [Local Development](http://localhost:3000)

## 📁 Project Structure

```
Portfolio/
├── public/                 # Static assets
│   ├── images/            # Image files
│   ├── favicon.ico        # Favicon
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── About.tsx      # About section
│   │   ├── Contact.tsx    # Contact section
│   │   ├── Experience.tsx # Experience section
│   │   ├── Footer.tsx     # Footer component
│   │   ├── Hero.tsx       # Hero section
│   │   ├── Leadership.tsx # Leadership section
│   │   ├── Navbar.tsx     # Navigation bar
│   │   ├── Projects.tsx   # Projects section
│   │   └── Skills.tsx     # Skills section
│   ├── styles/            # Global styles
│   │   └── globals.css    # Tailwind CSS imports
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   └── vite-env.d.ts      # Vite type definitions
├── Dockerfile             # Production Dockerfile
├── Dockerfile.dev         # Development Dockerfile
├── docker-compose.yml     # Docker Compose configuration
├── nginx.conf            # Nginx configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## 🎨 Customization

### Personal Information
Update your personal information in the respective component files:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Contact**: `src/components/Contact.tsx`

### Styling
- **Colors**: Modify Tailwind CSS classes or update `tailwind.config.js`
- **Animations**: Adjust Framer Motion animations in components
- **Layout**: Modify component structure and CSS classes

### Images
Replace images in the `public/` directory:
- `profile-image.jpeg` - Hero section profile image
- `community-involvement.jpeg` - Leadership section image
- `public-speaking.jpeg` - Leadership section image
- `academic-collaboration.jpeg` - Projects section image

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Responsive Features
- **Flexible Grid Layouts**: Adapts to screen size
- **Mobile-First Design**: Optimized for mobile devices
- **Touch-Friendly**: Large touch targets for mobile
- **Optimized Images**: Responsive image sizing
- **Readable Typography**: Scalable font sizes

## 🔧 Development

### Available Scripts
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

### Code Quality
- **ESLint**: Code linting with TypeScript support
- **Prettier**: Automatic code formatting
- **TypeScript**: Type safety and IntelliSense

### Development Workflow
1. Create feature branch: `git checkout -b feature/new-feature`
2. Make changes and test locally
3. Run linting: `npm run lint`
4. Commit changes: `git commit -m "Add new feature"`
5. Push to repository: `git push origin feature/new-feature`
6. Create pull request

## 📊 Performance

### Optimization Features
- **Code Splitting**: Automatic code splitting with Vite
- **Lazy Loading**: Components loaded on demand
- **Image Optimization**: Optimized image formats and sizes
- **Minification**: CSS and JavaScript minification
- **Caching**: Browser caching for static assets

### Performance Metrics
- **Lighthouse Score**: 95+ across all categories
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔒 Security

### Security Features
- **Content Security Policy**: XSS protection
- **Security Headers**: X-Frame-Options, X-XSS-Protection
- **HTTPS Ready**: Secure deployment configuration
- **Input Validation**: TypeScript type safety
- **Dependency Scanning**: Regular security updates

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Contribution Guidelines
- Follow the existing code style
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass
- Follow conventional commit messages

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

### Harshala Rani
- **Email**: harshalarani3@gmail.com
- **Phone**: +91 6360730642
- **Location**: Bangalore, India

### Social Links
- **GitHub**: [@harshhala-ranii](https://github.com/harshhala-ranii)
- **LinkedIn**: [Harshala Rani](https://www.linkedin.com/in/harshala-rani-a26880244/)

### Project Links
- **Repository**: [Portfolio GitHub](https://github.com/harshhala-ranii/portfolio)
- **Issues**: [GitHub Issues](https://github.com/harshhala-ranii/portfolio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/harshhala-ranii/portfolio/discussions)

---

## 🙏 Acknowledgments

- **React Team**: For the amazing framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Lucide**: For beautiful icons
- **Vite**: For fast build tooling

---

<div align="center">

**Made with ❤️ by Harshala Rani**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/harshhala-ranii)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harshala-rani-a26880244/)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:harshalarani3@gmail.com)

</div> 