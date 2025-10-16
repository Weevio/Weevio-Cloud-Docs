/**
 * Navigation Helper Functions
 *
 * Provides utilities for querying and traversing the documentation navigation hierarchy.
 * These functions help locate navigation items, build full paths, and retrieve children
 * for use in automatic navigation card generation and other navigation-related features.
 *
 * @module lib/navigation-helpers
 */

import { Documents } from "@/settings/documents"
import { Paths } from "@/lib/pageroutes"

/**
 * Build full URL path by concatenating parent and child hrefs
 * Normalizes paths by removing trailing slashes and avoiding double slashes
 *
 * @param parentPath - The parent path (e.g., "/store")
 * @param childHref - The child href (e.g., "/orders")
 * @returns The concatenated full path (e.g., "/store/orders")
 *
 * @example
 * buildFullPath("/store", "/orders") // => "/store/orders"
 * buildFullPath("/store/", "/orders") // => "/store/orders"
 * buildFullPath("", "/introduction") // => "/introduction"
 */
export function buildFullPath(parentPath: string, childHref: string): string {
  // Remove trailing slashes from parent
  const normalizedParent = parentPath.replace(/\/+$/, "")
  // Ensure child starts with slash
  const normalizedChild = childHref.startsWith("/") ? childHref : `/${childHref}`

  return normalizedParent + normalizedChild
}

/**
 * Find navigation item by path in the Documents hierarchy
 * Searches recursively through the navigation tree
 *
 * @param path - The path to search for (e.g., "/store/orders")
 * @returns The matching Paths object or null if not found
 *
 * @example
 * findItemByPath("/store/orders") // => Paths object for orders
 * findItemByPath("/nonexistent") // => null
 */
export function findItemByPath(path: string): Paths | null {
  // Normalize the search path
  const normalizedPath = path.replace(/\/+$/, "")

  /**
   * Recursive helper to search through navigation tree
   * @param items - Array of navigation items to search
   * @param currentPath - Current accumulated path from parent nodes
   */
  function searchInItems(items: Paths[], currentPath: string = ""): Paths | null {
    for (const item of items) {
      // Skip spacers
      if ("spacer" in item) continue

      // Build the full path for this item
      const itemPath = buildFullPath(currentPath, item.href)

      // Check if this is the item we're looking for
      if (itemPath === normalizedPath) {
        return item
      }

      // Search recursively in children if they exist
      if (item.items && item.items.length > 0) {
        const found = searchInItems(item.items, itemPath)
        if (found) return found
      }
    }

    return null
  }

  return searchInItems(Documents)
}

/**
 * Get immediate children for a given path
 * Returns navigation items that are direct children of the specified path
 * Each child's href is converted to its full path for convenience
 *
 * @param path - The parent path to get children for (e.g., "/store/orders")
 * @returns Array of child Paths objects with full hrefs, or empty array if none exist
 *
 * @example
 * getChildrenForPath("/store/orders")
 * // => [
 * //   { title: "Order Table", href: "/store/orders/order-table", ... },
 * //   { title: "Line Items", href: "/store/orders/line-items", ... }
 * // ]
 *
 * getChildrenForPath("/nonexistent") // => []
 */
export function getChildrenForPath(path: string): Paths[] {
  const item = findItemByPath(path)

  // Return empty array if item not found or has no children
  if (!item || "spacer" in item || !item.items) {
    return []
  }

  // Filter out spacers and enrich children with full paths
  return item.items
    .filter((child): child is Extract<Paths, { title: string; href: string }> =>
      "title" in child && "href" in child
    )
    .map(child => ({
      ...child,
      href: buildFullPath(path, child.href)
    }))
}
