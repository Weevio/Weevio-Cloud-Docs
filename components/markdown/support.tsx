import { LuArrowUpRight } from "react-icons/lu"

import { cn } from "@/lib/utils"

export default function Support() {
  return (
    <div
      className={cn(
        "rounded-md border px-4 py-3 text-sm tracking-wide",
        "dark:bg-blue-950 bg-blue-50 border-blue-300 dark:border-blue-900"
      )}
    >
      <p className="mb-1 text-sm font-semibold">Need Help?</p>
      <p className="text-sm">
        For assistance, please send a message to our{" "}
        <a
          href="https://support.weeviosoftware.com/portal/en/newticket"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 underline"
        >
          Support
          <LuArrowUpRight className="h-3 w-3" />
        </a>{" "}
        page.
      </p>
    </div>
  )
}
