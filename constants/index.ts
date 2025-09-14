export const PLACEHOLDER_IMAGE = '/assets/property-placeholder.jpg'
import { PropertyProps } from "@/interfaces";


export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Villa Ocean Breeze",
    address: { state: "Seminyak", city: "Bali", country: "Indonesia" },
    rating: 4.89,
    category: ["Luxury Villa", "Pool", "Free Parking"],
    price: 3200,
    offers: { bed: "3", shower: "3", occupants: "4-6" },
    image: "https://source.unsplash.com/600x400/?villa,beach",
    discount: ""
  },
  {
    name: "Mountain Escape Chalet",
    address: { state: "Aspen", city: "Colorado", country: "USA" },
    rating: 4.70,
    category: ["Mountain View", "Fireplace", "Self Checkin"],
    price: 1800,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://source.unsplash.com/600x400/?mountain,cabin",
    discount: "30"
  },
  {
    name: "Cozy Desert Retreat",
    address: { state: "Palm Springs", city: "California", country: "USA" },
    rating: 4.92,
    category: ["Desert View", "Pet Friendly", "Self Checkin"],
    price: 1500,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://source.unsplash.com/600x400/?desert,home",
    discount: ""
  },
  {
    name: "City Lights Penthouse",
    address: { state: "New York", city: "New York", country: "USA" },
    rating: 4.85,
    category: ["City View", "Free WiFi", "24h Checkin"],
    price: 4500,
    offers: { bed: "2", shower: "2", occupants: "2-4" },
    image: "https://source.unsplash.com/600x400/?penthouse,city",
    discount: "15"
  },
  {
    name: "Riverside Cabin",
    address: { state: "Queenstown", city: "Otago", country: "New Zealand" },
    rating: 4.77,
    category: ["Riverside", "Private Dock", "Free Kayaks"],
    price: 2800,
    offers: { bed: "3", shower: "2", occupants: "4-6" },
    image: "https://source.unsplash.com/600x400/?cabin,river",
    discount: "20"
  },
  {
    name: "Modern Beachfront Villa",
    address: { state: "Sidemen", city: "Bali", country: "Indonesia" },
    rating: 4.95,
    category: ["Beachfront", "Private Pool", "Chef Service"],
    price: 5000,
    offers: { bed: "5", shower: "4", occupants: "8-10" },
    image: "https://source.unsplash.com/600x400/?beach,villa",
    discount: ""
  },
  {
    name: "Lakeside Chalet",
    address: { state: "Banff", city: "Alberta", country: "Canada" },
    rating: 4.65,
    category: ["Lakeside", "Mountain View", "Hiking Trails"],
    price: 2300,
    offers: { bed: "3", shower: "3", occupants: "4-5" },
    image: "https://source.unsplash.com/600x400/?lake,chalet",
    discount: "10"
  },
  {
    name: "Tropical Garden Villa",
    address: { state: "Koh Samui", city: "Surat Thani", country: "Thailand" },
    rating: 4.80,
    category: ["Garden", "Free Parking", "Self Checkin"],
    price: 2750,
    offers: { bed: "3", shower: "3", occupants: "5-6" },
    image: "https://source.unsplash.com/600x400/?tropical,garden",
    discount: "25"
  },
  {
    name: "Urban Loft",
    address: { state: "Berlin", city: "Berlin", country: "Germany" },
    rating: 4.60,
    category: ["City Center", "Free WiFi", "24h Checkin"],
    price: 2000,
    offers: { bed: "2", shower: "1", occupants: "2-3" },
    image: "https://source.unsplash.com/600x400/?loft,urban",
    discount: ""
  },
  {
    name: "Secluded Forest Cabin",
    address: { state: "Whistler", city: "British Columbia", country: "Canada" },
    rating: 4.72,
    category: ["Secluded", "Hot Tub", "Self Checkin"],
    price: 2600,
    offers: { bed: "4", shower: "2", occupants: "5-7" },
    image: "https://source.unsplash.com/600x400/?forest,cabin",
    discount: "40"
  }
];