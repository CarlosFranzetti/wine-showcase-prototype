// Wine bottle images
import red1 from '@/assets/wines/red-1.png';
import red2 from '@/assets/wines/red-2.png';
import red3 from '@/assets/wines/red-3.png';
import red4 from '@/assets/wines/red-4.png';
import red5 from '@/assets/wines/red-5.png';
import white1 from '@/assets/wines/white-1.png';
import white2 from '@/assets/wines/white-2.png';
import white3 from '@/assets/wines/white-3.png';
import white4 from '@/assets/wines/white-4.png';
import rose1 from '@/assets/wines/rose-1.png';
import rose2 from '@/assets/wines/rose-2.png';
import rose3 from '@/assets/wines/rose-3.png';
import sparkling1 from '@/assets/wines/sparkling-1.png';
import sparkling2 from '@/assets/wines/sparkling-2.png';
import sparkling3 from '@/assets/wines/sparkling-3.png';
import natural1 from '@/assets/wines/natural-1.png';
import natural2 from '@/assets/wines/natural-2.png';
import natural3 from '@/assets/wines/natural-3.png';

export type WineCategory = 'red' | 'white' | 'rose' | 'sparkling' | 'natural';

export interface Wine {
  id: string;
  name: string;
  winery: string;
  year: number;
  region: string;
  country: string;
  countryFlag: string;
  category: WineCategory;
  rating: number;
  reviewCount: number;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  matchPercentage: number;
  isVerified: boolean;
  description: string;
}

export const wines: Wine[] = [
  // Red Wines (5)
  {
    id: 'red-1',
    name: 'Château Reserve Cabernet Sauvignon',
    winery: 'Domaine de la Vallée',
    year: 2019,
    region: 'Napa Valley',
    country: 'USA',
    countryFlag: '🇺🇸',
    category: 'red',
    rating: 4.6,
    reviewCount: 2847,
    price: 45.99,
    originalPrice: 89.99,
    discount: 49,
    image: red1,
    matchPercentage: 92,
    isVerified: true,
    description: 'Bold and structured with notes of blackcurrant, cedar, and vanilla.'
  },
  {
    id: 'red-2',
    name: 'Brunello di Montalcino Riserva',
    winery: 'Tenuta San Giorgio',
    year: 2017,
    region: 'Tuscany',
    country: 'Italy',
    countryFlag: '🇮🇹',
    category: 'red',
    rating: 4.8,
    reviewCount: 1523,
    price: 78.50,
    originalPrice: 145.00,
    discount: 46,
    image: red2,
    matchPercentage: 89,
    isVerified: true,
    description: 'Elegant and complex with cherry, leather, and earthy undertones.'
  },
  {
    id: 'red-3',
    name: 'Grand Cru Bordeaux Blend',
    winery: 'Château Margaux Estate',
    year: 2018,
    region: 'Bordeaux',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'red',
    rating: 4.7,
    reviewCount: 3201,
    price: 125.00,
    originalPrice: 220.00,
    discount: 43,
    image: red3,
    matchPercentage: 94,
    isVerified: true,
    description: 'Sophisticated blend with cassis, graphite, and fine tannins.'
  },
  {
    id: 'red-4',
    name: 'Pinot Noir Reserve',
    winery: 'Willamette Hills',
    year: 2020,
    region: 'Oregon',
    country: 'USA',
    countryFlag: '🇺🇸',
    category: 'red',
    rating: 4.4,
    reviewCount: 892,
    price: 38.99,
    originalPrice: 65.00,
    discount: 40,
    image: red4,
    matchPercentage: 87,
    isVerified: false,
    description: 'Silky and aromatic with raspberry, rose petal, and spice.'
  },
  {
    id: 'red-5',
    name: 'Rioja Gran Reserva',
    winery: 'Bodegas Ancestrales',
    year: 2015,
    region: 'Rioja',
    country: 'Spain',
    countryFlag: '🇪🇸',
    category: 'red',
    rating: 4.5,
    reviewCount: 1876,
    price: 52.00,
    originalPrice: 95.00,
    discount: 45,
    image: red5,
    matchPercentage: 91,
    isVerified: true,
    description: 'Rich and velvety with dried fruit, tobacco, and oak complexity.'
  },

  // White Wines (4)
  {
    id: 'white-1',
    name: 'Premier Cru Chardonnay',
    winery: 'Domaine du Soleil',
    year: 2021,
    region: 'Burgundy',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'white',
    rating: 4.6,
    reviewCount: 2103,
    price: 55.00,
    originalPrice: 98.00,
    discount: 44,
    image: white1,
    matchPercentage: 88,
    isVerified: true,
    description: 'Buttery and mineral with citrus, hazelnut, and elegant oak.'
  },
  {
    id: 'white-2',
    name: 'Marlborough Sauvignon Blanc',
    winery: 'Cloudy Peak Wines',
    year: 2022,
    region: 'Marlborough',
    country: 'New Zealand',
    countryFlag: '🇳🇿',
    category: 'white',
    rating: 4.3,
    reviewCount: 4521,
    price: 22.99,
    originalPrice: 35.00,
    discount: 34,
    image: white2,
    matchPercentage: 85,
    isVerified: true,
    description: 'Crisp and vibrant with passionfruit, lime, and fresh herbs.'
  },
  {
    id: 'white-3',
    name: 'Mosel Riesling Spätlese',
    winery: 'Weingut von Stein',
    year: 2020,
    region: 'Mosel',
    country: 'Germany',
    countryFlag: '🇩🇪',
    category: 'white',
    rating: 4.5,
    reviewCount: 1287,
    price: 32.00,
    originalPrice: 55.00,
    discount: 42,
    image: white3,
    matchPercentage: 90,
    isVerified: true,
    description: 'Delicate sweetness balanced by piercing acidity, peach and honey.'
  },
  {
    id: 'white-4',
    name: 'Sonoma Coast Viognier',
    winery: 'Pacific Breeze Winery',
    year: 2021,
    region: 'Sonoma',
    country: 'USA',
    countryFlag: '🇺🇸',
    category: 'white',
    rating: 4.2,
    reviewCount: 756,
    price: 28.50,
    originalPrice: 42.00,
    discount: 32,
    image: white4,
    matchPercentage: 83,
    isVerified: false,
    description: 'Aromatic and lush with apricot, white flowers, and creamy texture.'
  },

  // Rosé Wines (3)
  {
    id: 'rose-1',
    name: 'Côtes de Provence Rosé',
    winery: 'Château Miraval',
    year: 2022,
    region: 'Provence',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'rose',
    rating: 4.4,
    reviewCount: 3892,
    price: 26.99,
    originalPrice: 45.00,
    discount: 40,
    image: rose1,
    matchPercentage: 86,
    isVerified: true,
    description: 'Pale and elegant with strawberry, citrus, and Mediterranean herbs.'
  },
  {
    id: 'rose-2',
    name: 'Garnacha Rosado',
    winery: 'Viñedos del Norte',
    year: 2022,
    region: 'Navarra',
    country: 'Spain',
    countryFlag: '🇪🇸',
    category: 'rose',
    rating: 4.1,
    reviewCount: 1234,
    price: 18.50,
    originalPrice: 28.00,
    discount: 34,
    image: rose2,
    matchPercentage: 82,
    isVerified: false,
    description: 'Fresh and fruity with watermelon, cherry, and a dry finish.'
  },
  {
    id: 'rose-3',
    name: 'Bandol Rosé Reserve',
    winery: 'Domaine Tempier',
    year: 2021,
    region: 'Bandol',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'rose',
    rating: 4.6,
    reviewCount: 987,
    price: 42.00,
    originalPrice: 68.00,
    discount: 38,
    image: rose3,
    matchPercentage: 93,
    isVerified: true,
    description: 'Structured and complex with red berries, herbs, and mineral depth.'
  },

  // Sparkling Wines (3)
  {
    id: 'sparkling-1',
    name: 'Brut Champagne Grand Cru',
    winery: 'Maison Laurent',
    year: 2018,
    region: 'Champagne',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'sparkling',
    rating: 4.7,
    reviewCount: 2567,
    price: 68.00,
    originalPrice: 120.00,
    discount: 43,
    image: sparkling1,
    matchPercentage: 95,
    isVerified: true,
    description: 'Toasty and refined with brioche, apple, and persistent bubbles.'
  },
  {
    id: 'sparkling-2',
    name: 'Prosecco Superiore DOCG',
    winery: 'Casa Vinicola Bella',
    year: 2022,
    region: 'Valdobbiadene',
    country: 'Italy',
    countryFlag: '🇮🇹',
    category: 'sparkling',
    rating: 4.2,
    reviewCount: 5234,
    price: 18.99,
    originalPrice: 28.00,
    discount: 32,
    image: sparkling2,
    matchPercentage: 84,
    isVerified: true,
    description: 'Light and festive with pear, white peach, and floral notes.'
  },
  {
    id: 'sparkling-3',
    name: 'Cava Reserva Brut Nature',
    winery: 'Bodega Ancestral',
    year: 2019,
    region: 'Penedès',
    country: 'Spain',
    countryFlag: '🇪🇸',
    category: 'sparkling',
    rating: 4.3,
    reviewCount: 1876,
    price: 24.50,
    originalPrice: 38.00,
    discount: 36,
    image: sparkling3,
    matchPercentage: 88,
    isVerified: false,
    description: 'Dry and complex with green apple, almond, and fine mousse.'
  },

  // Natural Wines (3)
  {
    id: 'natural-1',
    name: 'Orange Wine Amphora Aged',
    winery: 'Gravner Natural',
    year: 2019,
    region: 'Friuli',
    country: 'Italy',
    countryFlag: '🇮🇹',
    category: 'natural',
    rating: 4.5,
    reviewCount: 678,
    price: 48.00,
    originalPrice: 85.00,
    discount: 44,
    image: natural1,
    matchPercentage: 87,
    isVerified: true,
    description: 'Oxidative and textured with dried apricot, tea, and honey.'
  },
  {
    id: 'natural-2',
    name: 'Pét-Nat Ancestral Method',
    winery: 'Loire Naturelle',
    year: 2022,
    region: 'Loire Valley',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'natural',
    rating: 4.1,
    reviewCount: 432,
    price: 28.00,
    originalPrice: 42.00,
    discount: 33,
    image: natural2,
    matchPercentage: 81,
    isVerified: false,
    description: 'Cloudy and playful with green apple, yeast, and gentle fizz.'
  },
  {
    id: 'natural-3',
    name: 'Biodynamic Field Blend',
    winery: 'Domaine Sauvage',
    year: 2020,
    region: 'Alsace',
    country: 'France',
    countryFlag: '🇫🇷',
    category: 'natural',
    rating: 4.4,
    reviewCount: 521,
    price: 36.00,
    originalPrice: 58.00,
    discount: 38,
    image: natural3,
    matchPercentage: 89,
    isVerified: true,
    description: 'Wild and expressive with stone fruit, flowers, and earthy depth.'
  }
];

export const categories = [
  { id: 'red', name: 'Red', color: 'hsl(350, 70%, 35%)' },
  { id: 'white', name: 'White', color: 'hsl(45, 60%, 75%)' },
  { id: 'rose', name: 'Rosé', color: 'hsl(340, 60%, 70%)' },
  { id: 'sparkling', name: 'Sparkling', color: 'hsl(45, 50%, 85%)' },
  { id: 'natural', name: 'Natural', color: 'hsl(30, 50%, 55%)' }
] as const;

export const regions = [
  { name: 'French Champagne', country: 'France', flag: '🇫🇷' },
  { name: 'Napa Valley', country: 'USA', flag: '🇺🇸' },
  { name: 'Tuscany', country: 'Italy', flag: '🇮🇹' },
  { name: 'Bordeaux', country: 'France', flag: '🇫🇷' },
  { name: 'Rioja', country: 'Spain', flag: '🇪🇸' },
  { name: 'Marlborough', country: 'New Zealand', flag: '🇳🇿' }
];

export function getWinesByCategory(category: WineCategory): Wine[] {
  return wines.filter(wine => wine.category === category);
}

export function getWineById(id: string): Wine | undefined {
  return wines.find(wine => wine.id === id);
}

export function getBestOffers(limit = 6): Wine[] {
  return [...wines].sort((a, b) => b.discount - a.discount).slice(0, limit);
}
