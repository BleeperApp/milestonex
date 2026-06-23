import Link from "next/link"
import Image from "next/image"
import type { SessionUser } from "@/lib/session"
import { UserProfileMenu } from "@/components/user-profile-menu"
import { NotificationsPopover } from "@/components/notifications-popover"

export function SiteHeader({ 
  user, 
  unreadCount = 0,
  hideNavigation = false 
}: { 
  user: SessionUser | null
  unreadCount?: number
  hideNavigation?: boolean
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center px-4">
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Milestone X"
            width={36}
            height={36}
            className="rounded-md"
          />
          <span className="text-base font-semibold tracking-tight text-foreground">
            Milestone X
          </span>
        </Link>

        {!hideNavigation && (
          <nav className="hidden items-center gap-6 text-sm md:flex flex-1 justify-center">
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
        )}

        <div className="flex items-center gap-4 ml-auto">
          {user ? (
            <div className="flex items-center gap-2">
              <NotificationsPopover unreadCount={unreadCount} />
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
