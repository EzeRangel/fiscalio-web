import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-1 font-mono uppercase">
      <Image
        src="/logo.png"
        width={20}
        height={20}
        alt="Logotipo de Fiscalio"
      />
      <span className="text-sm tracking-tight">FISCALIO</span>
    </Link>
  );
}
