"use client"

import { ComponentProps } from "react"
import { usePathname } from "next/navigation"
import { Link } from "lib/transition"

import { cn } from "@/lib/utils"

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean
  activeClassName?: string
  disabled?: boolean
}

export default function Anchor({
  absolute,
  className = "",
  activeClassName = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname()
  const hrefString = props.href.toString()

  let isMatch = false
  if (hrefString.includes("http")) {
    isMatch = false
  } else if (absolute) {
    // For absolute matching, compare first path segment (e.g., /docs)
    isMatch = hrefString.split("/")[1] === path.split("/")[1]
  } else {
    // For sidebar links, match if current path starts with href
    // This allows parent items to be highlighted when on child pages
    isMatch = path === hrefString || path.startsWith(hrefString + "/")
  }

  if (disabled)
    return <div className={cn(className, "cursor-not-allowed")}>{children}</div>

  return (
    <Link className={cn(className, isMatch && activeClassName)} {...props}>
      {children}
    </Link>
  )
}
