import { LoginForm } from "@/components/login-form"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/40">
      <div className="w-full max-w-md p-8 space-y-8 bg-background rounded-lg shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold">CampX</h1>
          <p className="text-muted-foreground">Student Management System</p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}

