import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getPublicPath(path: string) {
  const basePath = process.env.NODE_ENV === 'production' ? '/githubPageForWeHelp' : ''
  return `${basePath}${path}`
}