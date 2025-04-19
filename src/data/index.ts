import { Facebook, Twitter, Instagram, Youtube } from "react-feather";

interface SocialLink {
  icon: React.ElementType;
  link: string;
}

export const footerSocialLinks: SocialLink[] = [
  {
    icon: Facebook,
    link: "https://www.facebook.com/profile.php?id=61574822566592",
  },
  {
    icon: Twitter,
    link: "https://x.com/suhaksa27",
  },
  {
    icon: Youtube,
    link: "https://www.youtube.com/channel/UCPFlmX-nqAJYxKSRFAIxmEg",
  },
  {
    icon: Instagram,
    link: "https://www.instagram.com/suhaksa27/",
  },
];

export const menuItems = [
  {
    id: 1,
    name: "Wild Mushroom Arancini",
    price: 18.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-1.png",
  },
  {
    id: 2,
    name: "Honey Glazed Salmon",
    price: 17.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-2.png",
  },
  {
    id: 3,
    name: "Truffle Mushroom Risotto",
    price: 64.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-3.png",
  },
  {
    id: 4,
    name: "Mediterranean Quinoa Salad",
    price: 25.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-4.png",
  },
  {
    id: 5,
    name: "Braised Short Ribs",
    price: 18.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-5.png",
  },
  {
    id: 6,
    name: "Roasted Vegetable Platter",
    price: 85.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-6.png",
  },
  {
    id: 7,
    name: "Freshly Squeezed Juices",
    price: 46.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-1.png",
  },
  {
    id: 8,
    name: "Roasted Vegetable Platter",
    price: 86.0,
    currency: "AED",
    description: "Ricotta, goat cheese, beetroot and dateline.",
    image: "/assets/food-2.png",
  },
];

export const policiesData = [
  {
    id: 1,
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    id: 2,
    name: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    id: 3,
    name: "Refund Policy",
    link: "/refund-policy",
  },
  {
    id: 4,
    name: "Shipping Policy",
    link: "/shipping-policy",
  },
];
