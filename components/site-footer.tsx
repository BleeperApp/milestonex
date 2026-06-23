"use client"

import { useEffect, useRef, useState } from "react"
import { ShieldCheck } from "lucide-react"

export function SiteFooter() {
  const teamMembers = [
    { name: "PRUDENCE ODHIAMBO", id: "25S01ACPS003" },
    { name: "SALLY MARO", id: "24S01ACPS002" },
    { name: "IMAI MICKEN AKISA", id: "25M01ABA011" },
    { name: "DANIELLA WANGARI", id: "26J01AXRM007" },
    { name: "SHADRACK KIPTOO", id: "26JO1ACS009" },
  ]

  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let rafId: number | null = null
    const el = scrollerRef.current
    if (!el) return

    const step = () => {
      if (!el || isPaused) return
      // scroll a fraction of a pixel each frame
      el.scrollLeft += 0.5
      // reset when we've scrolled half (since content is duplicated)
      if (el.scrollLeft >= el.scrollWidth / 2) {
        el.scrollLeft = 0
      }
      rafId = requestAnimationFrame(step)
    }

    rafId = requestAnimationFrame(step)
    return () => {
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [isPaused])

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 py-8">
        <div className="flex items-center gap-4 mb-6">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" />
          </span>
          <div>
            <div className="text-base font-semibold tracking-tight text-foreground">
              Milestone X
            </div>
            <div className="text-sm text-muted-foreground">Transparent community funding</div>
          </div>
        </div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative overflow-hidden w-full"
          style={{
            WebkitOverflowScrolling: "touch",
          }}
        >
          <div className="flex w-max gap-6 whitespace-nowrap">
            {teamMembers.concat(teamMembers).map((member, idx) => (
              <div
                key={`${member.id}-${idx}`}
                className="inline-flex items-center gap-3 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground"
                style={{ minWidth: 220 }}
              >
                <div className="font-medium">{member.name}</div>
                <div className="text-xs text-muted-foreground">{member.id}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Milestone X
        </div>
      </div>
    </footer>
  )
}
