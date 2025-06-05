import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names into a single string, handling conditional classes
 * and merging Tailwind CSS classes properly.
 *
 * @param inputs - Class values to be combined
 * @returns A string of combined class names
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Formats a price value with currency symbol
 *
 * @param price - The price value to format
 * @param currency - The currency symbol (default: €)
 * @returns Formatted price string
 */
export function formatPrice(price: number | string, currency = "€") {
  const numericPrice = typeof price === "string" ? Number.parseFloat(price.replace(/[^\d.]/g, "")) : price

  if (isNaN(numericPrice)) {
    return `${currency}0`
  }

  return `${currency}${numericPrice.toFixed(2).replace(/\.00$/, "")}`
}

/**
 * Truncates text to a specified length and adds ellipsis
 *
 * @param text - The text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, maxLength = 100) {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + "..."
}

