# Modern Next.js Application Template

A production-ready Next.js template with modern tooling, best practices, and a comprehensive feature set for rapid application development.

## 🚀 Features

### Core Technologies
- **Next.js 14** - App Router with React Server Components
- **React 18** - Latest React with concurrent features
- **TypeScript** - Type-safe JavaScript (configured via jsconfig.json)
- **Tailwind CSS** - Utility-first CSS framework

### UI & Design System
- **shadcn/ui** - Beautiful, accessible component library
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Beautiful & consistent icons
- **Dark/Light Mode** - Theme switching with next-themes
- **Responsive Design** - Mobile-first approach

### State Management
- **Redux Toolkit** - Modern Redux with best practices
- **Pre-configured Slices** - Page state and authentication
- **API Helpers** - Client and server-side data fetching

### Developer Experience
- **Path Aliases** - Clean imports with `@/` prefix
- **ESLint** - Code linting with Next.js config
- **Prettier** - Code formatting
- **Custom Fonts** - Optimized Geist font loading

### Production Features
- **Error Boundaries** - Graceful error handling
- **Loading States** - Global and component-level loaders
- **SEO Components** - Meta tags and Open Graph support
- **Environment Configuration** - Proper env variable setup

## 📦 Project Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.js       # Root layout with providers
│   ├── page.js         # Homepage
│   └── globals.css     # Global styles with CSS variables
├── components/
│   ├── layout/         # Layout components (Header, Footer)
│   ├── ui/            # shadcn/ui components
│   ├── ErrorBoundary.js
│   ├── LoadingSpinner.js
│   ├── PageLoader.js
│   ├── SEO.js
│   └── theme-provider.js
├── lib/
│   └── utils.js       # Utility functions (cn, etc.)
└── utils/
    ├── data/          # Constants and static data
    ├── functions/     # API helpers and utilities
    ├── services/      # External service integrations
    └── store/         # Redux store and slices
```

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone or use this template**
   ```bash
   git clone <repository-url>
   cd website-setup
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your configuration:
   ```env
   NEXT_PUBLIC_BASE_URL=http://localhost:3000/api
   NEXT_PUBLIC_APP_NAME="Your App Name"
   NEXT_PUBLIC_APP_DESCRIPTION="Your app description"
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### Theming
- Edit `src/app/globals.css` for color scheme
- Modify `tailwind.config.js` for design tokens
- Update theme variables in CSS custom properties

### Components
- Add new components to `src/components/`
- Extend UI components in `src/components/ui/`
- Use `npx shadcn-ui add [component]` for new shadcn components

### State Management
- Add new slices in `src/utils/store/slices/`
- Update store configuration in `src/utils/store/store.js`
- Use Redux Toolkit patterns for async actions

### API Integration
- Update base URL in environment variables
- Modify API helpers in `src/utils/functions/`
- Add new service integrations in `src/utils/services/`

## 📝 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
```

## 🔧 Configuration Files

- `next.config.mjs` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `components.json` - shadcn/ui configuration
- `jsconfig.json` - JavaScript/TypeScript paths
- `postcss.config.mjs` - PostCSS configuration

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Other Platforms
1. Build the application: `npm run build`
2. Deploy the `.next` folder and dependencies
3. Set environment variables
4. Run `npm start`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run linting and formatting
5. Submit a pull request

## 📄 License

This template is open source and available under the [MIT License](LICENSE).

## 🆘 Support

- Check the [Next.js Documentation](https://nextjs.org/docs)
- Review [shadcn/ui Documentation](https://ui.shadcn.com)
- Browse [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

**Happy coding! 🎉**