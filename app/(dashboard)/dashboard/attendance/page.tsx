"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"

// Mock data - Replace with real data from your backend
const subjects = [
  {
    name: "Database Management",
    code: "CS301",
    present: 32,
    total: 35,
    percentage: 91.4,
  },
  {
    name: "Operating Systems",
    code: "CS302",
    present: 28,
    total: 35,
    percentage: 80,
  },
  {
    name: "Computer Networks",
    code: "CS303",
    present: 30,
    total: 35,
    percentage: 85.7,
  },
  {
    name: "Software Engineering",
    code: "CS304",
    present: 33,
    total: 35,
    percentage: 94.3,
  },
  {
    name: "Web Development",
    code: "CS305",
    present: 31,
    total: 35,
    percentage: 88.6,
  },
]

export default function AttendancePage() {
  const overallAttendance =
    subjects.reduce((acc, subject) => acc + subject.percentage, 0) / subjects.length

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Attendance</h1>
        <p className="text-muted-foreground">Track your attendance across all subjects</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Overall Attendance</CardTitle>
            <CardDescription>Your average attendance this semester</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">{overallAttendance.toFixed(1)}%</div>
            <Progress value={overallAttendance} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject-wise Attendance</CardTitle>
          <CardDescription>Detailed attendance records for each subject</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Subject</TableHead>
                <TableHead>Code</TableHead>
                <TableHead>Classes Attended</TableHead>
                <TableHead>Total Classes</TableHead>
                <TableHead>Percentage</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow key={subject.code}>
                  <TableCell className="font-medium">{subject.name}</TableCell>
                  <TableCell>{subject.code}</TableCell>
                  <TableCell>{subject.present}</TableCell>
                  <TableCell>{subject.total}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={subject.percentage} className="w-[60px]" />
                      <span>{subject.percentage}%</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        subject.percentage >= 75
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {subject.percentage >= 75 ? "Good" : "Low"}
                    </span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
} 