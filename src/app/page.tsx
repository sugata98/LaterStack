import Image from "next/image";
import Link from "next/link";
import { Fruktur } from "next/font/google";
import { Button } from "@/components/ui/button";
import DarkModeToggle from "@/components/DarkModeToggle";

const fruktur = Fruktur({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col dark:bg-gray-900 dark:text-gray-100">
        {/* Header */}
        <header className="w-full bg-white shadow dark:bg-gray-800">
          <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 sm:px-8">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.svg"
                alt="LaterStack Logo"
                width={40}
                height={40}
              />
              <h2
                className={`text-4xl font-bold tracking-tight ${fruktur.className} text-[#EF4B39]`}
              >
                LaterStack
              </h2>
            </div>
            <nav className="flex items-center space-x-6">
              <Button
                asChild
                variant="ghost"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Link href="/">Home</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Link href="/login">Login</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="hover:-translate-y-1 transition-transform duration-200"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
              <DarkModeToggle />
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-grow max-w-7xl mx-auto px-6 sm:px-8 py-12">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="flex flex-col items-center">
              <Image
                src="/logo.svg"
                alt="LaterStack Logo"
                width={180}
                height={180}
                priority
              />
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-50 font-serif">
                Welcome to LaterStack
              </h2>
              <p className="mt-2 text-lg text-gray-600 max-w-2xl">
                Your personalized dashboard for all your media—articles,
                podcasts, videos, and more.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="default">
                <Link href="/login">Login</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-auto">
          <div className="max-w-7xl mx-auto py-6 px-6 sm:px-8 text-center text-gray-600 dark:text-gray-300">
            <p>Created by Sugata Roy © {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </>
  );
}
