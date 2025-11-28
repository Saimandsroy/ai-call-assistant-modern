# AI Call Assistant Landing Page

## Overview

This is a modern marketing landing page for an AI-powered sales call assistant SaaS product. The application showcases features like real-time AI coaching, smart script generation, automatic CRM updates, and call analytics. Built with React, TypeScript, Express, and PostgreSQL (via Drizzle ORM), it features a premium enterprise aesthetic with glassmorphism effects, 3D animations, and smooth interactions powered by Framer Motion and custom hooks.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server with HMR support
- Single-page application (SPA) with client-side routing handled implicitly

**UI Component System:**
- Shadcn/ui components built on Radix UI primitives for accessibility
- Tailwind CSS for utility-first styling with custom design tokens
- Component structure follows atomic design principles (ui components, feature components, page layouts)

**Styling Approach:**
- Custom design system defined in `tailwind.config.ts` with HSL color variables
- Dark mode support with class-based theme switching
- Glassmorphism effects and gradient treatments for premium feel
- 8px grid system for consistent spacing
- Custom fonts: Sora for headings, Inter for body text

**Animation & Interactivity:**
- Framer Motion for declarative animations and page transitions
- Custom hooks for scroll-based animations (`useScrollAnimation`)
- Mouse parallax effects for 3D depth (`useMouseParallax`, `useElementMouseParallax`)
- Canvas-based particle background system for visual interest
- Count-up animations for statistics

**State Management:**
- TanStack Query (React Query) for server state management
- Local component state with React hooks
- No global state management library (Redux, Zustand) - architecture favors composition

**Form Handling:**
- React Hook Form with Zod schema validation
- Form components integrated with Shadcn/ui for consistent UX

### Backend Architecture

**Server Framework:**
- Express.js server with TypeScript
- HTTP server created for potential WebSocket support
- Middleware stack: JSON parsing, URL encoding, request logging

**API Design:**
- RESTful endpoints under `/api` prefix
- Newsletter subscription endpoint (`POST /api/newsletter`)
- Contact form submission endpoint (`POST /api/contact`)
- Validation using Zod schemas shared between client and server

**Storage Layer:**
- Storage interface abstraction (`IStorage`) for flexibility
- In-memory implementation (`MemStorage`) for development
- Database-ready schema defined with Drizzle ORM for production
- Tables: users, newsletter_subscribers, contact_submissions

**Database Schema:**
- PostgreSQL as the target database (configured via Drizzle)
- UUID-based primary keys using `gen_random_uuid()`
- Timestamp tracking for subscriptions and submissions
- Unique constraints on emails for newsletter subscribers

**Static File Serving:**
- Production build served from `dist/public`
- Fallback to `index.html` for client-side routing
- Separate Vite development server in dev mode

**Development vs Production:**
- Development: Vite middleware mode with HMR
- Production: Pre-built static assets served by Express
- Build process bundles server code with esbuild (allowlist for critical dependencies)

### External Dependencies

**UI Component Libraries:**
- Radix UI primitives for accessible, unstyled components
- Shadcn/ui as the component library framework
- Lucide React for icon system

**Animation & Visualization:**
- Framer Motion for declarative animations
- Custom canvas-based particle system (no Three.js despite design doc)
- Embla Carousel for testimonial/feature carousels

**Database & ORM:**
- Drizzle ORM for type-safe database operations
- @neondatabase/serverless for PostgreSQL connection (Neon DB)
- Database migrations managed via Drizzle Kit

**Form & Validation:**
- React Hook Form for form state management
- Zod for runtime schema validation
- @hookform/resolvers for integration bridge

**Styling:**
- Tailwind CSS with PostCSS processing
- class-variance-authority (CVA) for variant-based component APIs
- clsx and tailwind-merge for conditional class handling

**Development Tools:**
- tsx for running TypeScript files directly
- Vite plugins for Replit integration (dev banner, cartographer)
- ESBuild for production server bundling

**Missing from Current Implementation:**
- GSAP animation library (mentioned in design guidelines but not in package.json)
- Three.js (mentioned in design guidelines but not in package.json)
- Authentication system (passport dependencies present but no routes/implementation)
- Session management (express-session, connect-pg-simple configured but unused)