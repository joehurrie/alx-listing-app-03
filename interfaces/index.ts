// interfaces/index.ts

export interface CardProps {
  // Placeholder props for Card component
  title: string;
  imageUrl: string;
  description?: string; // Optional for flexibility
}

export interface ButtonProps {
  // Placeholder props for Button component
  label: string;
  onClick?: () => void; // Optional click handler
}
