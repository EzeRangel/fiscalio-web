"use client";

import { FormEventHandler, useTransition } from "react";
import { ArrowRightIcon } from "lucide-react";
import {
  redirect,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { signupWaitlist } from "@/actions/signupWaitlist";
import { toast } from "sonner";
import { sendGAEvent } from "@next/third-parties/google";

export function WaitlistDialog() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const query = searchParams.get("dialog");

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: { value: string };
    };

    startTransition(async () => {
      const response = await signupWaitlist({
        email: formElements.email.value,
      });

      if (response?.error || !response.record) {
        const errorMessage =
          response.error ??
          "El servicio de la waitlist no pudo guardar tu email.";

        toast.error("Ocurrió un error", {
          description: errorMessage,
        });
      } else {
        sendGAEvent("event", "waitlist_signup", { value: response.record });
        redirect(`/signup/thank-you?id=${response.record}`);
      }
    });
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
          <DialogTitle className="text-2xl font-medium tracking-tight font-display">
            Únete a la lista de espera
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground leading-relaxed tracking-wide font-display">
            Regístrate para recibir acceso anticipado a Fiscalio y asegurar el
            precio fundador disponible para los primeros{" "}
            <span className="text-accent-rust">50 usuarios</span>.
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
              name="email"
              id="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="h-12 rounded-none border-2 font-mono text-sm"
            />
          </div>
          <Button
            type="submit"
            className="w-full h-12 text-xs tracking-[0.15em] rounded-none font-mono uppercase"
            disabled={isPending}
          >
            {isPending ? "Procesando..." : "Unirme a la lista"}
            {!isPending && <ArrowRightIcon className="h-3.5 w-3.5 ml-3" />}
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
