# MegaMart - Eco-Friendly E-Commerce Platform 🌱

A modern, responsive e-commerce landing page built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. MegaMart is designed to showcase eco-friendly products with a focus on sustainability and user experience across all devices.

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **🍔 Mobile Navigation**: Intuitive hamburger menu with slide-out navigation
- **🔍 Advanced Search**: Real-time search functionality with filters
- **🛒 Product Showcase**: Dynamic product cards with pricing and discounts
- **🏷️ Category Navigation**: Easy browsing through product categories
- **🏢 Brand Display**: Interactive brand slider with animated cards
- **🎯 Hero Slider**: Eye-catching promotional banners with auto-rotation
- **⚡ Performance Optimized**: Fast loading times with Next.js 15 and Turbopack
- **♿ Accessibility**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router) with Turbopack
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom utilities
- **Fonts**: Geist Sans & Geist Mono (Google Fonts)
- **Icons**: Custom SVG icons with Lucide styling
- **Images**: Next.js Image optimization with placeholder support
- **State Management**: React useState for component-level state
- **Animation**: CSS transitions and transforms

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, pnpm, or bun package manager

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd eco-landing-page
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
eco-landing-page/
├── public/                     # Static assets
│   ├── favicon.png            # App favicon
│   └── images/                # Image assets
│       └── samsung.png        # Sample product image
├── src/
│   ├── app/                   # Next.js 15 App Router
│   │   ├── globals.css        # Global styles and utilities
│   │   ├── layout.tsx         # Root layout component
│   │   └── page.tsx           # Homepage
│   │
│   ├── components/            # Reusable UI components
│   │   ├── layout/            # Layout-specific components
│   │   │   ├── footer.tsx     # Site footer with contact info
│   │   │   ├── listPageLayout.tsx # Product listing layout
│   │   │   └── navbar.tsx     # Navigation with mobile menu
│   │   │
│   │   ├── ui/                # UI components
│   │   │   ├── brandList.tsx  # Brand carousel component
│   │   │   ├── categories.tsx # Category listing (placeholder)
│   │   │   ├── categoryCard.tsx # Individual category card
│   │   │   └── productList.tsx # Product card component
│   │   │
│   │   └── widgets/           # Specialized components
│   │       ├── brandCard.tsx  # Animated brand display card
│   │       ├── icons.tsx      # Custom SVG icons
│   │       ├── searchBar.tsx  # Search input component
│   │       └── slider.tsx     # Hero banner slider
│   │
│   ├── lib/                   # Data and utilities
│   │   ├── db.ts              # Mock database with products/categories
│   │   └── serviceList.ts     # Navigation and service data
│   │
│   ├── types/                 # TypeScript type definitions
│   │   └── product.types.ts   # Product, category, and brand types
│   │
│   └── utils/                 # Utility functions
│       └── constant.ts        # App constants and configuration
│
├── eslint.config.mjs          # ESLint configuration
├── next.config.ts             # Next.js configuration
├── next-env.d.ts              # Next.js TypeScript declarations
├── package.json               # Dependencies and scripts
├── postcss.config.mjs         # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── README.md                  # This file
```

## 🎨 Design System

### Colors
- **Primary**: Sky Blue (`sky-400`, `sky-500`, `sky-600`)
- **Secondary**: Gray scale (`gray-100` to `gray-900`)
- **Accent**: Blue (`blue-400`, `blue-500`)
- **Success**: Green (`green-600`)
- **Background**: White with gray accents

### Typography
- **Headings**: Geist Sans (various weights)
- **Body**: Arial, Helvetica, sans-serif fallback
- **Monospace**: Geist Mono

### Components
- **Cards**: Rounded corners with hover effects
- **Buttons**: Consistent padding and hover states
- **Navigation**: Responsive with mobile-first approach
- **Images**: Optimized with Next.js Image component

## 🔧 Key Components

### Navbar (`components/layout/navbar.tsx`)
- Responsive navigation with hamburger menu
- Mobile-first design with expandable search
- User account and cart icons
- Category dropdown navigation

### Hero Slider (`components/widgets/slider.tsx`)
- Auto-rotating promotional banners
- Touch-friendly navigation dots
- Responsive image optimization
- Customizable content and styling

### Product Cards (`components/ui/productList.tsx`)
- Dynamic pricing display
- Discount badges
- Responsive grid layout
- Hover effects and animations

### Brand Slider (`components/ui/brandList.tsx`)
- Animated brand showcase
- Responsive card display
- Auto-rotation with manual controls
- Mobile-optimized touch interactions

## 📊 Data Structure

### Products
```typescript
interface IProductType {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  originalPrice: number;
  discount: number;
  savings: number;
}
```

### Categories
```typescript
interface ICategoryType {
  id: number;
  name: string;
  image: string;
}
```

### Brands
```typescript
interface IBrand {
  id: number;
  name: string;
  discount: string;
  bgColor: string;
  textColor: string;
  logoBackground: string;
  logoText: string;
  phoneColor: string;
}
```

## 🎯 Key Features Implementation

### Mobile Responsiveness
- **Breakpoints**: Mobile-first approach with `sm`, `md`, `lg`, `xl`
- **Navigation**: Collapsible hamburger menu for mobile devices
- **Grid Layout**: Responsive product and category grids
- **Touch Interactions**: Optimized for touch devices

### Performance Optimizations
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting with Next.js
- **CSS Optimization**: Tailwind CSS with purged unused styles
- **Font Optimization**: Google Fonts with display swap

### Accessibility Features
- **Semantic HTML**: Proper heading hierarchy and landmarks
- **ARIA Labels**: Screen reader friendly navigation
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG compliant color combinations

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with automatic optimizations

### Other Platforms
- **Netlify**: Static site deployment
- **AWS Amplify**: Full-stack deployment
- **DigitalOcean**: App Platform deployment

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
```

## 🔄 Future Enhancements

- [ ] Product detail pages
- [ ] Shopping cart functionality
- [ ] User authentication
- [ ] Payment integration
- [ ] Order management
- [ ] Admin dashboard
- [ ] Search functionality
- [ ] Product filtering
- [ ] Customer reviews
- [ ] Wishlist feature

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💡 Credits

Built with ❤️ using:
- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Vercel](https://vercel.com/) - Deployment platform

---

**MegaMart** - Your One-Stop Eco-Friendly Shop 🌱