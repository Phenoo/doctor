import { Inter } from 'next/font/google'

import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { buttonVariants } from '@/components/ui/button'
import { LoginAuthForm } from '@/components/ui/LoginAuth'

import Logo from '@/components/sections/Logo'

export const metadata: Metadata = {
  title: "Authentication",
  description: "Authentication forms built using the components.",
}

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
              <>
          {/* <div className="md:hidden">
            <Image
              src="/examples/authentication-light.png"
              width={1280}
              height={843}
              alt="Authentication"
              className="block dark:hidden"
            />
            <Image
              src="/examples/authentication-dark.png"
              width={1280}
              height={843}
              alt="Authentication"
              className="hidden dark:block"
            />
          </div> */}
          <div className="container relative  h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
            <Link
              href="/create-account"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "absolute right-4 top-4 md:right-8 md:top-8"
              )}
            >
              Create Account
            </Link>
            <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
              <div className="absolute inset-0 hero" />
             <Logo />
              <div className="relative z-20 mt-auto">
              <blockquote className="space-y-2">
                  <p className="text-lg">
                    &ldquo;The app&apos;s communication tools bridge the gap between patients and doctors remarkably well. &rdquo;
                  </p>
                  <footer className="text-sm">Sofia Davis</footer>
                </blockquote>
              </div>
            </div>
            <div className="lg:p-8 h-full justify-center items-center flex">
              <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                  <h1 className="text-2xl font-semibold tracking-tight">
                   Login
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Enter your email below to login
                  </p>
                </div>
                <LoginAuthForm />
                <p className="px-8 text-center text-sm text-muted-foreground">
                  By clicking continue, you agree to our{" "}
                  <Link
                    href="/terms"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="/privacy"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </>
    </main>
  )
}
