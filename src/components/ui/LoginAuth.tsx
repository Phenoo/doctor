"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CubeIcon, GitHubLogoIcon } from "@radix-ui/react-icons"
import { FcGoogle } from "react-icons/fc";
import {useRouter } from "next/navigation"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function LoginAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false)
  const router = useRouter()

  async function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault()
    setIsLoading(true)

    router.push("/dashboard")


    setTimeout(() => {
      setIsLoading(false)
    }, 3000)
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={onSubmit}>
        <div className="grid space-y-4">
          <div className="grid gap-1 space-y-2">
            <Label>
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-1 space-y-2">
            <Label>
              Password
            </Label>
            <Input
              id="password"
              placeholder="********"
              type="password"

              disabled={isLoading}
            />
          </div>
          <Button disabled={isLoading}>
            {isLoading && (
              <CubeIcon className="mr-2 h-4 w-4 animate-spin" />
            )}
            Sign In with Email
          </Button>
        </div>
      </form>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-foreground px-2 text-background">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <CubeIcon className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <FcGoogle className="mr-2 h-4 w-4" />
        )}{" "}
        Google
      </Button>
    </div>
  )
}