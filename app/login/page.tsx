"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, Plane, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Login attempt with:", { email, password, rememberMe })
    router.push("/")
  }

  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col items-center justify-center w-full lg:w-1/2 px-4 py-12 bg-background">
        <div className="w-full max-w-md mx-auto">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white">
                <Plane className="h-6 w-6" />
              </div>
            </div>
            <h2 className="text-3xl font-extrabold text-foreground">Sign in to your account</h2>
            <p className="mt-2 text-sm text-muted-foreground font-medium">
              Or{" "}
              <Link href="/register" className="font-bold text-primary hover:underline">
                create a new account
              </Link>
            </p>
          </div>

          <div className="bg-card rounded-lg shadow-lg p-8 border border-border">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold">
                  Email address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="pl-10 font-medium"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password" className="font-bold">
                    Password
                  </Label>
                  <Link href="/forgot-password" className="text-sm font-bold text-primary hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="pl-10 pr-10 font-medium"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-muted-foreground" />
                    ) : (
                      <Eye className="h-5 w-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center">
                <Checkbox
                  id="remember-me"
                  checked={rememberMe}
                  onCheckedChange={(checked) => setRememberMe(checked as boolean)}
                />
                <Label htmlFor="remember-me" className="ml-2 font-medium">
                  Remember me
                </Label>
              </div>

              <Button type="submit" className="w-full font-bold">
                Sign in
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground font-medium">Or continue with</span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <Button variant="outline" className="font-bold">
                  Google
                </Button>
                <Button variant="outline" className="font-bold">
                  Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Background - Styled like other sections in the project */}
      <div className="hidden lg:block w-1/2 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center p-12">
          <Globe className="h-24 w-24 text-white/90 mb-6" />
          <h2 className="text-4xl font-extrabold text-white mb-4 text-center">Welcome back to Infinite Journeys</h2>
          <p className="text-xl text-white/90 max-w-md text-center font-medium">
            Sign in to access your account and continue exploring amazing destinations around the world.
          </p>
        </div>
      </div>
    </div>
  )
}

