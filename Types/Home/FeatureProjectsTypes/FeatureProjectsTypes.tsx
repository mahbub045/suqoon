export interface Property {
  id: number;
  name: string;
  location: string;
  type: string;
  price: string;
  image: string;
  status: 'Now Selling' | 'Coming Soon';
}