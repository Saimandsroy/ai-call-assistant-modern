# AI Call Assistant Landing Page - Design Guidelines

## Design System

**Color Palette:**
- Primary Orange: #FF6B35
- Dark Navy: #0A1128
- White: #FFFFFF
- Light Gray: #F8F9FA

**Typography:**
- Headings: Sora or Inter (64px for hero, scaled down for sections)
- Body: Inter
- Consistent hierarchy with bold weights for emphasis

**Spacing:**
- 8px grid system throughout
- Generous whitespace for premium feel

**Visual Style:**
- Ultra-modern enterprise SaaS aesthetic
- Glassmorphism effects on cards and navigation
- 3D elements and depth
- Smooth animations with GSAP, Three.js, Framer Motion

## Layout Structure

### 1. Navigation Header (Sticky)
- Glassmorphism background with blur effect
- Logo left, menu center (Solutions, Pricing, Resources)
- Actions right: "Sign In" (text), "Contact Sales" (outlined), "Book a Demo" (orange filled)
- Hide/show on scroll direction
- Mobile: Hamburger with slide-in menu

### 2. Hero Section (Full viewport)
**Left 60%:**
- Badge: "TRUSTED BY 2,500+ SALES TEAMS" with pulsing orange glow
- Heading: "AI-Powered Sales Call Assistant" (gradient on "AI-Powered", split-text animation)
- Subheading with fade-in blur effect
- CTAs: "Start Free Trial" (orange, sparkles icon) + "Book Demo" (outlined)
- Trust indicators with checkmarks
- Feature tabs: "01 Live Coaching", "02 Smart Scripts", "03 Auto-CRM" (staggered animation)

**Right 40%:**
- 3D floating iPhone mockup with call interface
- Mouse-reactive rotation and float animation
- Floating glassmorphism cards: "Call Duration", "AI Confidence: 94%", "Next Best Action"
- Animated waveform visualization at phone bottom

**Background:**
- Three.js particle neural network (200-300 particles)
- Connected with glowing orange lines
- Mouse parallax movement
- Depth of field blur

### 3. Features Section
Title: "Everything You Need to Close More Deals"

**6-card grid (3 columns, glassmorphism):**
1. Real-Time AI Coaching (headset icon, animated screenshot)
2. Smart Script Generation (document icon, text animation)
3. Automatic CRM Updates (database icon, data flow animation)
4. Call Analytics Dashboard (chart icon, animated bars)
5. Voice & Tone Analysis (waveform icon, pulse effect)
6. Integration Hub (puzzle icon, logo carousel)

Cards fade in with stagger, individual hover lift and glow effects.

### 4. How It Works
Horizontal timeline with 3 steps:
- "01 Connect Your Tools" (connection animation)
- "02 Start Your First Call" (phone with AI overlay)
- "03 Watch Your Results Improve" (success metrics)

Animated dotted lines with particle flow between steps. Subtle grid background with floating shapes.

### 5. Stats/Social Proof (Dark Navy Background)
**Stats grid (4 columns):**
- "2,500+ Sales Teams" (count-up)
- "94% Win Rate Increase" (progress circle)
- "12M+ Calls Analyzed" (counter)
- "50+ Integrations" (icon grid)

Marquee logo scroll (infinite loop, grayscale to orange on hover)

**Testimonial carousel:**
- 5-star rating animation
- Quote, name, title, company, avatar
- Glassmorphism cards with orange accent
- Auto-rotate every 5s

### 6. Pricing
**3-tier cards:**
- Starter ($49/mo) - outlined button
- Professional ($149/mo, highlighted) - filled orange button, larger card with glow
- Enterprise (Custom) - outlined button with fill animation

Monthly/Annual toggle with smooth price transitions. Gradient background with animated grid lines.

### 7. FAQ
8-10 accordion questions with:
- Smooth height transitions
- Orange accent on active
- Rotating plus/minus icons
- Glassmorphism cards

### 8. Final CTA
Orange gradient background with particles:
- "Ready to Transform Your Sales Calls?"
- Large white button: "Start Your Free Trial"
- "No credit card required • 14-day trial • Cancel anytime"
- 3D floating elements, animated waves, glow effects

### 9. Footer
Multi-column (5 sections): Brand, Product, Resources, Company, Legal
- Dark navy background
- Newsletter signup with orange button
- Social icons
- Orange hover effects

## Animation Specifications

**Load Sequence (Hero):**
Badge (0.3s) → Heading (0.5s) → Subheading (0.8s) → CTAs (1s) → Features (1.2s) → Mockup (1.5s)

**Scroll Animations:**
- Section fade-ins with GSAP ScrollTrigger
- Parallax background movement
- Card stagger reveals

**Hover Effects:**
- Button magnetic effect and lift
- Card elevation with stronger shadows
- Icon animations loop on hover

**Continuous:**
- Particle movement
- Floating card fade in/out
- Glow pulses
- Waveform visualization

## Images
**Hero Section:** 3D phone mockup showing AI call interface (generate or use high-quality mockup)
**Feature Cards:** Animated screenshots/mockups for each feature
**How It Works:** Visual representations for each step
**Stats Section:** Company logo placeholders in marquee
**Testimonials:** Avatar placeholders with gradients

All images should maintain the premium, ultra-modern aesthetic with orange accents.