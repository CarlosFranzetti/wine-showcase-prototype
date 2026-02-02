

# 🍷 Wine Discovery App Prototype

A mobile-first wine shopping and discovery app inspired by Vivino, featuring smooth transitions, AI-generated wine bottles, and comprehensive category browsing.

---

## Core Design System

- **Color Palette**: Deep burgundy/wine red (#8B1A32) for primary actions and navigation, white/light gray backgrounds, green for cart buttons, orange for star ratings
- **Typography**: Clean, modern sans-serif with bold headers
- **Cards**: Rounded corners with subtle shadows
- **Navigation**: Fixed bottom tab bar with burgundy background and central floating scan button

---

## Screens & Features

### 1. Home Screen
- **Header**: Ship-to location pill, cart icon with badge, notification bell
- **Search bar**: "Search any wine" placeholder
- **Promo banner**: Large promotional carousel card
- **Best offers section**: Horizontally scrolling wine cards with:
  - Discount badges (-60%, -72%, etc.)
  - AI-generated bottle image
  - Winery name, wine name, star rating

### 2. Shop Screen
- **Header**: "Shop" title with item count, cart and search icons
- **Sort/Filter bar**: Sort and Filter buttons
- **Wine listings**: Vertical scrolling cards showing:
  - Bottle image with discount badge
  - Winery, wine name, region with flag emoji
  - Star rating with review count
  - Price (sale + original struck through)
  - Save (bookmark) and Add to cart buttons

### 3. Shop Categories Page
- **Search bar**
- **Shop wines by type**: Grid of category tiles
  - Red, White, Rosé, Sparkling, Natural
  - Each with themed thumbnail
- **Shop our best offers**: Red promotional banner
- **Shop wines by style**: Horizontal scroll of region cards (French Champagne, Napa Valley, etc.)

### 4. Wine Detail Page
- **Full-screen bottle image** with vineyard background
- **Back, cart, share buttons**
- **Rating display**: Large rating number, star visualization, review count
- **Match percentage**: 89% match indicator
- **Price tag**: "Great price!" indicator
- **Wine info**: Winery name (verified badge), wine name + year, origin with flag
- **Action buttons**: Buy now (green), Rate, Save, Add to list

### 5. My Wines Screen
- **Header**: "My Wines" with cart and notification
- **Empty state**: Preference questionnaire card
  - "Do you enjoy Red wine?" with emoji rating scale (😔 😐 😊 😄)
  - Progress through different wine types

### 6. Profile/More Screen
- **Settings gear icon**
- **User card**: Avatar, name, "Premium member" badge
- **Stats**: Followers, Following counts
- **Menu items** in rounded cards:
  - Explore Wineries
  - Friends Feed
  - Food & Wine
  - Wine Adventures
  - My Premium Benefits
  - Help & Support

### 7. Scanner Placeholder
- **Camera viewfinder UI** with corner brackets
- **Toggle**: "Wine label" / "Wine list"
- **Photo gallery button**
- **Capture button**
- **Bottom sheet**: "Take a photo of a wine label"

### 8. Food & Wine Pairing Page
- **Gradient background** (warm terracotta/brown tones)
- **Hero image** with food and wine
- **Title**: "Food & Wine Pairing" in decorative font
- **Description text**
- **"Get started" button**

---

## Dummy Wine Data

**15-20 AI-generated wines** spread across categories:
- **Red wines**: Cabernet Sauvignon, Merlot, Pinot Noir varieties from Napa, Tuscany, Bordeaux
- **White wines**: Chardonnay, Sauvignon Blanc, Riesling from California, Loire Valley, Germany
- **Rosé**: Provence, Spanish varieties
- **Sparkling**: Champagne, Prosecco, Cava styles
- **Natural wines**: Orange wine, Pét-Nat, Biodynamic options

Each wine includes: name, winery, year, region, country flag, rating (3.8-4.8), review count, price, original price, discount percentage

---

## Smooth Transitions

- **Page transitions**: Horizontal slide animations between tabs
- **Tab bar**: Active state indicator slides smoothly
- **Card interactions**: Scale on press, smooth opacity transitions
- **Wine detail**: Slide-up modal animation from bottom
- **Category filtering**: Fade transitions when switching categories
- **Horizontal carousels**: Smooth momentum scrolling with snap points

---

## AI-Generated Wine Bottles

I'll use the Lovable AI image generation feature to create unique wine bottle images for each fake wine. Each bottle will have:
- Distinctive label designs
- Category-appropriate bottle shapes (burgundy, bordeaux, champagne styles)
- Varied color schemes matching wine type (deep reds, golden whites, pink rosés, etc.)

---

## Bottom Navigation

Fixed bottom bar with 5 items:
1. **Home** (house icon) - active: filled, burgundy background
2. **Shop** (store icon)
3. **Scan** (camera icon) - elevated circular button, always prominent
4. **My Wines** (bottles icon)
5. **More** (three dots)

