import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function delay(seconds: number): Promise<void> {
  return new Promise((resolve) => {
    const ms = seconds * 1000;

    setTimeout(() => {
      resolve();
    }, ms);
  });
}
