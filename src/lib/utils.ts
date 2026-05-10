// Utility function untuk menggabungkan class names Tailwind secara conditional
// Menggunakan clsx + tailwind-merge untuk menghindari konflik class

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
