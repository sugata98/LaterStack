"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const currentTheme = theme || "system";

  const toggleTheme = () => {
    setTheme(currentTheme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleTheme}
      className="hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
    >
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </Button>
  );
}
