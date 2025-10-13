# Design Guidelines: Garima Jain - Data Science Portfolio

## Design Approach

**Selected Approach:** Reference-Based + Landing Page Strategy  
**Primary Inspiration:** Linear's clean tech aesthetic + Vercel's developer portfolio patterns  
**Design Principles:**
- Professional minimalism with strategic visual impact
- Data-driven visual hierarchy emphasizing achievements
- Trust-building through clear presentation of technical expertise
- Smooth, purposeful animations that enhance rather than distract

## Color Palette

**Dark Mode (Primary):**
- Background: 222 15% 8% (deep charcoal)
- Surface: 222 15% 12% (elevated panels)
- Primary: 262 80% 65% (vibrant purple - tech/data focus)
- Accent: 178 60% 55% (teal - complements purple)
- Text Primary: 0 0% 98%
- Text Secondary: 0 0% 70%

**Light Mode:**
- Background: 0 0% 98%
- Surface: 0 0% 100%
- Primary: 262 90% 55%
- Accent: 178 70% 45%
- Text Primary: 222 15% 15%
- Text Secondary: 222 10% 40%

## Typography

**Font Families:**
- Headers: 'Inter' (700, 600 weights) - modern, technical
- Body: 'Inter' (400, 500 weights)
- Code/Technical: 'JetBrains Mono' for tech stack badges

**Scale:**
- Hero H1: text-5xl md:text-7xl font-bold
- Section H2: text-3xl md:text-4xl font-semibold
- Subsection H3: text-xl md:text-2xl font-semibold
- Body: text-base md:text-lg
- Small/Meta: text-sm

## Layout System

**Spacing Primitives:** Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 md:py-32
- Component spacing: gap-8 md:gap-12
- Card padding: p-6 md:p-8
- Micro-spacing: gap-4, space-y-6

**Container Strategy:**
- Full sections: w-full with max-w-7xl mx-auto px-6
- Content blocks: max-w-4xl for readability
- Hero: max-w-6xl

## Section-by-Section Design

### 1. Hero Section (80vh min-height)
**Layout:** Asymmetric split design
- Left: Name, title, tagline, CTAs (60% width)
- Right: Professional headshot with gradient border effect (40% width)

**Elements:**
- Large heading "Garima Jain" with gradient text effect (purple to teal)
- Subtitle "Data Scientist" in text-2xl
- Brief hook: "Transforming data into actionable business insights"
- Primary CTA: "View Projects" (filled purple button)
- Secondary CTA: "Download Resume" (outline button with blur background)
- Quick stats: "2+ Years Experience • 8+ Projects • 50+ Insights Delivered"
- Social icons: GitHub, LinkedIn, Email (horizontal row, hover grow effect)

### 2. About Section (py-20)
**Layout:** Single column, max-w-3xl centered
- Professional summary from resume
- Key strengths in 3-column grid (lg:grid-cols-3):
  - "Predictive Modeling"
  - "Cloud Deployment"
  - "Business Analytics"
- Each strength with icon, title, brief description

### 3. Experience Timeline (py-24)
**Layout:** Vertical timeline with alternating cards
- Timeline line: 2px purple gradient (left side on mobile, center on desktop)
- Each role card:
  - Company logo placeholder (circular, 64px)
  - Role title (bold, large)
  - Company name + location (meta text)
  - Date range with duration badge
  - 3-4 key achievements as bullet points with checkmark icons
  - Hover: lift effect (translate-y-1) with shadow increase

**Cards:**
1. Mu Sigma - Decision Scientist
2. ITC-LABS - Data Analytics Intern

### 4. Projects Showcase (py-24, dark surface background)
**Layout:** 2-column grid (md:grid-cols-2) with equal height cards
- Each project card:
  - Project thumbnail placeholder (16:9 ratio, gradient placeholder)
  - Title (text-2xl font-semibold)
  - Description (2-3 lines)
  - Tech stack badges (pill-shaped, small, spaced)
  - Action links: "View Details" + GitHub icon
  - Hover: border glow effect (purple)

**Projects:**
1. Telecom Customer Churn Analysis
2. COVID-19 Interactive Dashboard

### 5. Skills Section (py-24)
**Layout:** Category-based with animated bars
- 4 categories in grid (md:grid-cols-2):
  - Tools & Languages
  - Databases & Data Management
  - Quantitative & Analytical
  - Cloud & Deployment

**Each skill:**
- Name on left, proficiency bar on right
- Bar: background gray, fill purple gradient
- Animate on scroll: width from 0 to full
- Skill icons where applicable (Python, AWS, etc.)

### 6. Education & Achievements (py-20)
**Layout:** Two-column split (md:grid-cols-2)
- Left: Education card (B.E. Computer Science, CGPA highlighted)
- Right: Achievements grid:
  - "Top 50 Female Coders - Amazon S4"
  - "All India Rank 74 - NCAT"
  - "1st Position - KAVACH Hackathon"
  - Each with icon, title, date

### 7. Contact Section (py-24, accent gradient background)
**Layout:** Centered content, max-w-xl
- Heading: "Let's Connect"
- Subheading: "Open to data science opportunities and collaborations"
- Contact cards in grid (md:grid-cols-3):
  - Email card with icon
  - GitHub card with icon  
  - LinkedIn card with icon
- Each card: hover scale effect, clickable with external link

## Component Library

**Buttons:**
- Primary: bg-primary, text-white, rounded-lg, px-6 py-3, hover:opacity-90
- Outline: border-2 border-white/50, backdrop-blur-sm, text-white, hover:bg-white/10

**Cards:**
- Base: bg-surface, rounded-xl, border border-white/10, p-6
- Hover: transform transition, shadow-lg shadow-primary/20

**Badges:**
- Tech stack: bg-primary/10, text-primary, px-3 py-1, rounded-full, text-sm
- Status: bg-accent/10, text-accent, similar styling

**Timeline Elements:**
- Dot: w-4 h-4, bg-primary, rounded-full, border-4 border-background
- Line: w-0.5, bg-gradient-to-b from-primary to-accent

## Images

**Required Images:**
1. **Hero Profile Picture:** Professional headshot, 400x400px minimum, circular crop with purple gradient border (4px), positioned right side of hero
2. **Project Thumbnails:** 2 images at 800x450px (16:9):
   - Churn Analysis: Dashboard/chart visualization
   - COVID Dashboard: Map/graph visualization
3. **Background Elements:** Subtle grid pattern overlay for dark sections (optional decorative)

**Image Treatment:**
- All images: rounded-xl, subtle shadow
- Hero image: Add subtle pulse animation on border
- Project images: Grayscale to color transition on hover

## Animations

**Scroll-Triggered (Framer Motion):**
- Timeline items: Fade in + slide from left/right alternating
- Skill bars: Width animation from 0 to full
- Stats counters: Count-up animation
- Section reveals: Fade in + translate-y

**Micro-interactions:**
- Button hover: Scale 1.02, opacity change
- Card hover: Translate-y -4px, shadow increase
- Link hover: Color shift to primary
- Icon hover: Rotate or bounce

**Performance:** Use `transform` and `opacity` only, no expensive properties

## Responsive Breakpoints

- Mobile (base): Single column, reduced spacing (py-12)
- Tablet (md: 768px): 2-column grids, increased spacing
- Desktop (lg: 1024px): Full multi-column layouts, max spacing
- Wide (xl: 1280px): Max-width containers centered