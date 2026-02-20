"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { Logo } from "./logo";

export function Navigation() {
  return (
    <nav className="border-b border-border font-mono">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Link href="/">
            <Button
              variant="ghost"
              size="sm"
              className="text-xs tracking-wider h-8"
            >
              <ArrowLeftIcon className="h-3 w-3 mr-2" />
              VOLVER
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
