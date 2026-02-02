"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function WaitlistDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const query = searchParams.get("dialog");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Store email in localStorage for thank you page
    localStorage.setItem("waitlist_email", email);

    // Redirect to thank you page
    router.push("/signup/thank-you");
  };

  const open = !!query && query === "open";

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        const params = new URLSearchParams(searchParams.toString());

        if (open) {
          params.set("dialog", "open");
        } else {
          params.delete("dialog");
        }

        router.push(`${pathname}?${params.toString()}`, { scroll: false });
      }}
    >
      <DialogContent className="sm:max-w-md rounded-none border-2">
        <DialogHeader className="space-y-4">
          <DialogTitle className="text-2xl font-normal tracking-tight font-mono">
            Únete a la lista de espera
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed tracking-wide font-mono">
            Regístrate para recibir acceso anticipado a Fiscalio y asegurar el
            precio fundador disponible para los primeros 50 usuarios.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-[10px] tracking-[0.2em] text-muted-foreground font-mono"
            >
              EMAIL_ADDRESS
            </label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-none border-2 font-mono text-sm"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-12 text-xs tracking-[0.15em] rounded-none font-mono uppercase"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Procesando..." : "Unirme a la lista"}
            {!isSubmitting && <ArrowRightIcon className="h-3.5 w-3.5 ml-3" />}
          </Button>
          <p className="text-[10px] text-muted-foreground text-center tracking-wide font-mono">
            Recibirás un email de confirmación y acceso a la guía RESICO
            gratuita.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
}
