# AEE-T Website - Modern React Application

A modern, responsive website built with Next.js, React, and TailwindCSS for AEE-T (Advanced Energy Efficiency Technology), featuring professional energy efficiency content with smooth animations and modern UI design.

## 🚀 Features

- **Modern React Framework**: Built with Next.js 14 and React 18
- **Responsive Design**: Fully responsive layout that works on all devices
- **TailwindCSS Styling**: Professional styling with utility-first CSS
- **Smooth Animations**: Engaging transitions and hover effects
- **Interactive Components**: Dynamic forms, tabs, and navigation
- **Professional Content**: Energy efficiency industry-focused content
- **Modular Architecture**: Reusable components and clean code structure

## 📁 Project Structure

```
aee-t-website/
├── app/                          # Next.js 14 app directory
│   ├── globals.css              # Global styles with TailwindCSS
│   ├── layout.jsx               # Root layout component
│   ├── page.jsx                 # Homepage
│   ├── about/
│   │   └── page.jsx            # About page with tabs
│   └── contact/
│       └── page.jsx            # Contact page with forms
├── components/
│   ├── layout/
│   │   ├── Header.jsx          # Navigation header
│   │   └── Footer.jsx          # Site footer
│   └── ui/
│       ├── button.jsx          # Reusable button component
│       └── card.jsx            # Reusable card component
├── package.json                 # Dependencies and scripts
├── tailwind.config.js          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
└── next.config.js              # Next.js configuration
```

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to `http://localhost:3000` to view the website

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 📄 Pages Overview

### 🏠 Homepage (`/`)
- Hero section with animated background elements
- Solutions showcase with energy efficiency services
- Core values with expandable content
- Impact statistics and company metrics
- Featured case studies and latest insights
- Professional energy efficiency content

### ℹ️ About Page (`/about`)
- Tabbed interface with 4 sections:
  - **Our Story**: Company journey and milestones
  - **Mission & Values**: Purpose and core principles
  - **Leadership**: Executive team profiles
  - **Global Impact**: Statistics and achievements
- Interactive tabs with smooth transitions
- Professional company information

### 📞 Contact Page (`/contact`)
- Comprehensive contact form with validation
- Multiple office locations with tabbed interface
- Quick contact options (consultation, quotes, partnerships)
- FAQ section with common questions
- Emergency contact information
- Professional inquiry handling

## 🎨 Design System

### Color Palette
- **Primary**: Blue tones (#3b82f6 to #1e40af)
- **Accent**: Red tones (#ef4444 to #7f1d1d)
- **Neutral**: Gray scale (#f9fafb to #111827)

### Typography
- **Font**: System fonts (clean, modern)
- **Headings**: Light weight for elegance
- **Body**: Regular weight for readability

### Components
- **Buttons**: Multiple variants (default, outline, ghost, link)
- **Cards**: Hover effects and shadow transitions
- **Forms**: Styled inputs with focus states
- **Navigation**: Sticky header with dropdowns

## 🔧 Customization

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.jsx` file
3. Follow existing component patterns
4. Update navigation in `Header.jsx`

### Modifying Content
- **Homepage**: Edit `app/page.jsx`
- **About**: Edit `app/about/page.jsx`
- **Contact**: Edit `app/contact/page.jsx`
- **Navigation**: Edit `components/layout/Header.jsx`
- **Footer**: Edit `components/layout/Footer.jsx`

### Styling Changes
- **Global Styles**: `app/globals.css`
- **Tailwind Config**: `tailwind.config.js`
- **Component Styles**: Use Tailwind classes in JSX

### Adding Components
1. Create new file in `components/ui/`
2. Follow existing component patterns
3. Export from component file
4. Import where needed

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

All components are designed mobile-first with responsive breakpoints.

## ⚡ Performance Features

- **Next.js Optimization**: Automatic code splitting and optimization
- **Image Optimization**: Built-in Next.js image optimization
- **CSS Optimization**: TailwindCSS purging unused styles
- **Lazy Loading**: Components load as needed

## 🔒 Form Handling

The contact form includes:
- Client-side validation
- Professional field organization
- Placeholder form submission (console.log)
- Privacy policy links

To implement real form submission:
1. Add backend API endpoint
2. Update `handleSubmit` function in `contact/page.jsx`
3. Add success/error messaging

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub repository
2. Connect to Vercel
3. Deploy automatically

### Other Platforms
```bash
# Build for production
npm run build

# The 'out' or '.next' directory contains the built application
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Styling**: TailwindCSS 3.3
- **Icons**: Lucide React
- **Animations**: Framer Motion (configured)
- **Language**: JavaScript (ES6+)

## 📝 Content Strategy

The website features professional energy efficiency content including:
- **Homepage**: Company overview and solutions showcase
- **About**: Company story, mission, leadership, and impact
- **Contact**: Multiple contact methods and office locations

Content is written to be:
- Professional and authoritative
- SEO-friendly
- Industry-specific
- Conversion-focused

## 🔮 Future Enhancements

Potential additions:
- **Blog/Resources Section**: Industry insights and guides
- **Case Studies**: Detailed project showcases
- **Services Pages**: Detailed service descriptions
- **Portal/Dashboard**: Client login area
- **Multi-language Support**: International expansion
- **CMS Integration**: Content management system

## 📞 Support

For questions about the website implementation:
- Review component documentation in code
- Check Next.js documentation for framework questions
- Reference TailwindCSS docs for styling

## 📄 License

This website template is provided as-is for use in creating professional energy efficiency company websites.

---

**Built with ❤️ using modern React technologies for AEE-T**