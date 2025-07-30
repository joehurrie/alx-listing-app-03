export interface ButtonProps {
  label: string
  onClick: () => void
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
}

export interface CardProps {
  image: string
  title: string
  description: string
  price: number
}
export interface PropertyProps {
  name: string;
  address: {
    state: string;
    city: string;
    country: string;
  };
  rating: number;
  category: string[];
  price: number;
  offers: {
    bed: string;
    shower: string;
    occupants: string;
  };
  image: string;
  discount: string;
}