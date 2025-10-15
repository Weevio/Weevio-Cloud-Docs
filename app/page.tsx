import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"

export default function Home() {
    return (
        <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
            <h1 className="mb-4 text-4xl font-bold sm:text-7xl">Weevio Cloud</h1>
            <p className="text-foreground mb-8 max-w-[800px] sm:text-lg">
                PLACEHOLDER SUBTITLE
            </p>

            <div className="flex items-center gap-5">
                <Link
                    href={`/docs${PageRoutes[0].href}`}
                    className={buttonVariants({ className: "px-6", size: "lg" })}
                >
                    Read the docs
                </Link>
            </div>
        </section>
    )
}
