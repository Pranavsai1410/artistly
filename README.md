# Artistly

Artistly is a Next.js application for discovering and booking talented artists for events. Users can browse artists, filter them by name, category, location, and price range, view detailed portfolios, and request quotes for events.

## Features

- **Artist Listing**: Browse a grid of artist cards with details like name, category, location, rating, and price range.
- **Filters**: Filter artists by:
  - Name (search input)
  - Category (e.g., Singer, Musician, Dancer, DJ, Speaker, Band, Comedian, Magician)
  - Location (text input)
  - Price Range (e.g., ₹1L-₹2L, ₹2L-₹5L, ₹5L-₹10L, ₹10L+)
- **Artist Portfolio**: View detailed artist profiles with image, bio, specialties, and a quote request form.
- **Quote Request Form**: Submit event details (venue city, time, date, number of people, name, email, contact number, additional details).
- **Dark Theme**: Sleek dark interface with a gradient background.
- **Responsive Design**: Optimized for mobile, tablet, and desktop.

## Tech Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS with Shadcn UI components
- **Libraries**:
  - `lucide-react` for icons
  - `framer-motion` for animations
  - `@radix-ui/react-select`, `@radix-ui/react-slot`
  - `class-variance-authority`, `clsx`, `tailwind-merge`, `tailwindcss-animate`
- **Package Manager**: PNPM
- **Deployment**: Vercel
- **Data**: Static `data.json` file (located in `lib/data.json`)

## Prerequisites

- Node.js: v18 or higher
- PNPM: `npm install -g pnpm`
- Git: For version control
- Vercel Account: For deployment
- GitHub Account: For repository hosting

## Installation

### Clone the Repository
```bash
git clone https://github.com/Pranavsai1410/artistly.git
cd artistly
```

### Install Dependencies
```bash
pnpm install
```

### Run Locally
```bash
pnpm run dev
```
Open [http://localhost:3000/artists](http://localhost:3000/artists) to view the app.

### Build for Production
```bash
pnpm run build
pnpm run start
```

## Project Structure

- `app/artists/page.tsx`: Lists artists with filters
- `app/artists/[id]/page.tsx`: Artist portfolio page with quote form
- `components/ArtistCard.tsx`: Reusable artist card component
- `lib/data.json`: Static data for artists (e.g., name, category, image, bio)
- `types/index.ts`: TypeScript types (e.g., Artist interface)
- `public/images/`: Static images for artists
- `tailwind.config.ts`: Tailwind CSS configuration
- `next.config.mjs`: Next.js configuration

## Usage

### Browse Artists
- Visit `/artists` to see a grid of artist cards.
- Use filters to narrow down by name, category, location, or price range.
- Click "Clear All" to reset filters.

### View Portfolio
- Click an artist card to visit `/artists/[id]`.
- View artist details (image, name, bio, specialties) and submit a quote request.

### Request a Quote
- Fill out the form with event details (venue city, time, date, etc.).
- Submit to see a confirmation alert (can be extended with API integration).


## Live Link
https://artistly-llz6.vercel.app/
