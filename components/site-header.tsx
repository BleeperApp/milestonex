import Link from "next/link"
import { ShieldCheck, Bell } from "lucide-react"
import type { SessionUser } from "@/lib/session"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { getUnreadNotificationsCount } from "@/app/actions/notifications"

export async function SiteHeader({ user }: { user: SessionUser | null }) {
  let unreadCount = 0
  if (user) {
    unreadCount = await getUnreadNotificationsCount()
  }

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <a href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <ShieldCheck className="size-5" />
          </span>
          <span className="text-base font-semibold tracking-tight text-foreground">
            Milestone X
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <a
            href="/projects"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </a>
          <a
            href="/transparency"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Transparency
          </a>
          <a
            href="/#how-it-works"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </a>
        </nav>

        <div className="flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard"
                className="hidden md:inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90 relative"
              >
                Dashboard
                {unreadCount > 0 && (
                  <span className="absolute -top-2 -right-2 flex size-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs font-bold">
                    {unreadCount > 99 ? "99+" : unreadCount}
                  </span>
                )}
              </Link>
              <UserProfileMenu user={user} />
            </div>
          ) : (
            <>
              <a
                href="/sign-in"
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                Sign in
              </a>
              <a
                href="/sign-up"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-3 py-1 text-sm font-medium text-primary-foreground hover:bg-primary/90"
              >
                Get started
              </a>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
