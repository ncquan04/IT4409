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

import type { ComponentType } from "react";

export type Category = {
  name: string;
  icon: ComponentType<{ fill?: string, stroke?: string }>;
}