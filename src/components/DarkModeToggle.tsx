"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
    >
      {theme === "light" ? "🌙" : "☀️"}
    </Button>
  );
}
