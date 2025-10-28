import type { ReactNode } from "react";

export type User = {
  username: string;
  userId: string;
};

export type Product = {
  name: string;
  price: number;
  description: string;
}

export type Category = {
  name: string;
  icon: ReactNode
}