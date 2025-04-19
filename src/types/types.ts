// src/types.ts
export interface SubCategory {
  id: number;
  name: string;
  description?: string;
  category_id: number;
  created_at: string | null;
  updated_at: string | null;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  sub_categories: SubCategory[];
}

export interface FoodItem {
  id: number;
  description: string;
  price: number;
  image: string | null;
  created_at?: string;
  updated_at?: string;
  quantity?: number;
  category: string;
  sub_category: string;
  title: string; // 👈 changed from "Burka 1" to string
  rating: number; // 👈 changed from 4.5 to number
  reviews: number; // 👈 changed from 100 to number
  currency: string;
}
