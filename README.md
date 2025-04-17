# Nexus Wakfu

## Site Design System

The Nexus Wakfu site uses a consistent "Glass Theme" design system across all pages for a modern, cohesive look. This document outlines the key design components and guidelines.

### Glass Theme Key Components

1. **Glass Cards** - Semi-transparent containers with subtle blur effects and borders
   ```html
   <div class="glass rounded-xl p-6">
     <!-- Content goes here -->
   </div>
   ```

2. **Gradient Headings** - Text with gradient effects for emphasis
   ```html
   <h1 class="text-gradient-primary">Page Title</h1>
   ```

3. **Hero Sections** - Each page features a hero section with background image and overlay
   ```html
   <div class="relative py-20 overflow-hidden">
     <div class="absolute inset-0 z-0">
       <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--color-bg-base))]"></div>
       <img src="/images/page-hero.jpg" alt="Page Title" class="w-full h-full object-cover opacity-30">
     </div>
     <!-- Hero content -->
   </div>
   ```

4. **Statistics Panels** - Consistent layout for displaying statistics
   ```html
   <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
     <div class="glass rounded-xl p-4 text-center">
       <div class="text-3xl mb-2">🔍</div>
       <div class="text-2xl font-bold text-primary">42</div>
       <div class="text-[var(--color-text-muted)]">Label</div>
     </div>
     <!-- More stat panels -->
   </div>
   ```

5. **Filters** - Standardized filter sections for content
   ```html
   <div class="glass rounded-xl p-6 mb-12">
     <h2 class="text-2xl font-semibold mb-5 text-white">Filter Title</h2>
     <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
       <!-- Filters -->
     </div>
   </div>
   ```

6. **Content Cards** - Cards with hover effects and transitions
   ```html
   <div class="glass rounded-xl overflow-hidden transition-all duration-300 
               hover:shadow-lg hover:shadow-primary/10 
               hover:border-[var(--color-border-highlight)] 
               hover:-translate-y-1 animate-fade-up">
     <!-- Card content -->
   </div>
   ```

7. **Animations** - Consistent fade-in animations for elements
   ```css
   .animate-fade-up {
     opacity: 0;
     transform: translateY(15px);
     animation: fadeUp 0.4s ease-out forwards;
   }
   ```

### Form Elements

- **Input Fields**
  ```html
  <input type="text" class="input-glass" placeholder="Placeholder text">
  ```

- **Select Dropdowns**
  ```html
  <select class="select-glass">
    <option class="bg-gray-900">Option 1</option>
  </select>
  ```

- **Buttons**
  ```html
  <button class="btn btn-primary">Primary Button</button>
  <button class="btn btn-outline">Outline Button</button>
  ```

### Interactive Elements

The site includes several interactive components like:

1. **StasisCalculator** - For calculating stasis effects in dungeons
2. **Modal Dialogs** - For detailed information display
3. **Filter Systems** - For content filtering

### Colors and Variables

The site uses CSS variables for consistent theming:

```css
:root {
  --color-primary: 199 100% 50%;
  --color-secondary: 320 100% 55%;
  --color-accent: 45 100% 50%;
  --color-bg-base: 240 10% 5%;
  --color-bg-glass: theme('colors.black / 0.3');
  --color-border-glass: theme('colors.white / 0.1');
  --color-border-highlight: theme('colors.white / 0.2');
}
```

### Maintaining Consistency

When adding new pages or components:

1. Follow the established patterns for hero sections
2. Use the glass card design for content containers
3. Apply consistent animations for cards and transitions
4. Maintain the color scheme using CSS variables
5. Ensure responsive design across all devices

### Known Issues

The stasis calculator functionality had issues with resistance calculations which have been fixed. If similar calculators are implemented, refer to `src/components/calculators/StasisCalculator.astro` for the correct implementation.
