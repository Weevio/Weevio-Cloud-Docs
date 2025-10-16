"use client"

import { usePathname } from "next/navigation"
import { Card, CardGrid } from "@/components/markdown/card"
import { Routes, Paths } from "@/lib/pageroutes"
import { iconMap } from "@/settings/icons"

/**
 * AutoNavigationCards Component
 *
 * Automatically generates navigation cards based on the current page URL.
 * Queries the navigation structure to find child pages and renders them as cards.
 *
 * @example
 * ```mdx
 * <AutoNavigationCards />
 * ```
 *
 * @example
 * ```mdx
 * <AutoNavigationCards variant="small" columns={3} exclude={["/unwanted-page"]} />
 * ```
 */

interface AutoNavigationCardsProps {
  /** Card variant: "normal" (default), "small", or "image" */
  variant?: "normal" | "small" | "image"

  /** Number of columns in the grid (2, 3, or 4). Default: 2 */
  columns?: 2 | 3 | 4

  /** Array of hrefs to exclude from rendering (relative paths without /docs prefix) */
  exclude?: string[]

  /** Override automatic path detection. Useful for custom navigation structures */
  customPath?: string
}

interface CardData {
  title: string
  subtitle?: string
  description?: string
  href: string
  icon?: keyof typeof iconMap
  variant?: "normal" | "small" | "image"
  image?: string
}

/**
 * Helper function to check if a Paths item is a route (not a spacer)
 */
function isRoute(
  node: Paths
): node is Extract<Paths, { title: string; href: string }> {
  return "title" in node && "href" in node
}

/**
 * Helper function to find children for a given path in the navigation structure.
 * Recursively searches through the Routes tree to find the matching path.
 *
 * @param targetPath - The path to find children for (without /docs prefix)
 * @returns Array of child Paths items, or empty array if not found
 */
function getChildrenForPath(targetPath: string): Paths[] {
  // Normalize path: remove trailing slash
  const normalizedPath = targetPath.replace(/\/$/, "") || ""

  // Recursive function to search through navigation tree
  function searchTree(items: Paths[], currentPath: string = ""): Paths[] | null {
    for (const item of items) {
      if (!isRoute(item)) continue

      // Build the full path for this item
      const fullPath = currentPath + item.href

      // If this matches our target path, return its children
      if (fullPath === normalizedPath && item.items) {
        return item.items
      }

      // If this item has children, search recursively
      if (item.items) {
        const result = searchTree(item.items, fullPath)
        if (result !== null) {
          return result
        }
      }
    }

    return null
  }

  const children = searchTree(Routes)
  return children || []
}

export function AutoNavigationCards({
  variant = "normal",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  columns: _columns = 2, // Unused but kept for future grid layout implementation
  exclude = [],
  customPath,
}: AutoNavigationCardsProps) {
  const pathname = usePathname()

  // Strip /docs prefix from pathname to match navigation structure
  const navPath = customPath || pathname?.replace("/docs", "") || ""

  // Get children from navigation structure
  const children = getChildrenForPath(navPath)

  // Filter out spacers, excluded items, and items without links
  const validChildren = children.filter((item): item is Extract<Paths, { title: string; href: string }> => {
    if (!isRoute(item)) return false
    if (item.noLink) return false
    if (exclude.includes(item.href)) return false
    return true
  })

  // Build full parent path for href construction
  const parentPath = navPath.replace(/\/$/, "")

  // Map children to card data
  const cards: CardData[] = validChildren.map((item) => {
    // Build full href with /docs prefix
    const fullHref = `/docs${parentPath}${item.href}`

    // Use cardMeta if available, otherwise use defaults
    const cardData: CardData = {
      title: item.title,
      subtitle: item.cardMeta?.subtitle,
      description: item.cardMeta?.description,
      href: fullHref,
      icon: item.cardMeta?.icon as keyof typeof iconMap | undefined,
      variant: item.cardMeta?.variant || variant,
      image: item.cardMeta?.image,
    }

    return cardData
  })

  // If no cards to display, return null
  if (cards.length === 0) {
    return null
  }

  return (
    <CardGrid>
      {cards.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          subtitle={card.subtitle}
          description={card.description}
          href={card.href}
          icon={card.icon}
          variant={card.variant}
          image={card.image}
        />
      ))}
    </CardGrid>
  )
}
