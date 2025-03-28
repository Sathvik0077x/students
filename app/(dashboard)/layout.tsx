"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  BookOpen,
  Calendar,
  GraduationCap,
  LayoutDashboard,
  LogOut,
  Menu,
  Users,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Attendance",
    href: "/dashboard/attendance",
    icon: Users,
  },
  {
    title: "Subjects",
    href: "/dashboard/subjects",
    icon: BookOpen,
  },
  {
    title: "Results",
    href: "/dashboard/results",
    icon: BarChart3,
  },
  {
    title: "Events",
    href: "/dashboard/events",
    icon: Calendar,
  },
  {
    title: "Assignments",
    href: "/dashboard/assignments",
    icon: GraduationCap,
  },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const pathname = usePathname()

  return (
    <div className="min-h-screen">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full border-r bg-background transition-transform lg:translate-x-0",
          isSidebarOpen && "translate-x-0"
        )}
      >
        <div className="flex h-16 items-center border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <GraduationCap className="h-6 w-6" />
            <span>CampX</span>
          </Link>
        </div>
        <div className="py-4">
          <nav className="space-y-1 px-3">
            {sidebarItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent",
                  pathname === item.href ? "bg-accent" : "transparent"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className={cn("lg:pl-64")}>
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-background px-4 lg:px-6">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </header>

        {/* Page content */}
        <main className="container py-6">{children}</main>
      </div>
    </div>
  )
} 