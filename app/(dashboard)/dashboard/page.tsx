"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, BookOpen, Users, FileText } from "lucide-react"

// Mock data - Replace with real data from your backend
const stats = [
  {
    title: "Attendance Rate",
    value: "87.5%",
    description: "35 out of 40 days present",
    icon: Calendar,
  },
  {
    title: "Active Subjects",
    value: "5",
    description: "Currently enrolled",
    icon: BookOpen,
  },
  {
    title: "Upcoming Events",
    value: "3",
    description: "Next 2 weeks",
    icon: Users,
  },
  {
    title: "Pending Assignments",
    value: "2",
    description: "Due this week",
    icon: FileText,
  },
]

const recentActivity = [
  {
    title: "Database Management",
    description: "Assignment submitted",
    time: "2 hours ago",
  },
  {
    title: "Operating Systems",
    description: "Class attended",
    time: "5 hours ago",
  },
  {
    title: "Career Fair",
    description: "Event registration completed",
    time: "1 day ago",
  },
]

const upcomingSchedule = [
  {
    title: "Database Management",
    time: "10:00 AM",
    location: "Room 301",
  },
  {
    title: "Operating Systems",
    time: "2:00 PM",
    location: "Room 302",
  },
  {
    title: "Computer Networks",
    time: "4:00 PM",
    location: "Room 303",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome back, John!</h1>
        <p className="text-muted-foreground">Here's what's happening with your studies today.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <Icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest actions and updates</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.title} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{activity.title}</p>
                    <p className="text-sm text-muted-foreground">{activity.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Today's Schedule</CardTitle>
            <CardDescription>Your classes and activities for today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingSchedule.map((schedule) => (
                <div key={schedule.title} className="flex items-center gap-4">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">{schedule.title}</p>
                    <p className="text-sm text-muted-foreground">{schedule.location}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{schedule.time}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
} 