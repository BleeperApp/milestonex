import React from "react"
import { redirect } from "next/navigation"
import { getSession } from "@/lib/session"
import { SiteHeader } from "@/components/site-header"
import RoleSidebar from "@/components/role-sidebar"

export const dynamic = "force-dynamic"

export default async function OwnerLayout({ children }: { children: React.ReactNode }) {
  const user = await getSession()
  if (!user) return redirect("/sign-in")
  if (user.role !== "owner") return redirect("/dashboard")

  return (
    <div className="min-h-svh flex flex-col bg-background">
      <SiteHeader user={user} hideNavigation={true} />
      <div className="flex w-full">
        <RoleSidebar user={user} />
        <main className="flex-1 md:pl-72">{children}</main>
      </div>
    </div>
  )
}
