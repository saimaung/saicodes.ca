import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const links = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'expertise',
    path: '/expertise',
  },
  {
    name: 'resume',
    path: '/resume',
  },
  {
    name: 'work',
    path: '/work',
  },
  {
    name: 'contact',
    path: '/contact',
  },
  {
    name: 'blogs',
    path: 'https://saicodes.dev',
  },
]
