import Image from "next/image"
import { Link } from "lib/transition"

import { Settings } from "@/types/settings"

export function Logo() {
  return (
    <Link
      href="/"
      title={`${Settings.title} main logo`}
      aria-label={`${Settings.title} main logo`}
      className="flex items-center gap-2.5"
    >
      <Image
        src={Settings.siteicon}
        alt={`${Settings.title} main logo`}
        title={`${Settings.title} main logo`}
        aria-label={`${Settings.title} main logo`}
        width={148}
        height={48}
        loading="lazy"
        decoding="async"
      />
    </Link>
  )
}
