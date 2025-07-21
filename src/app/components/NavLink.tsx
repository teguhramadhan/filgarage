import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className="relative inline-block px-1 py-1 uppercase">
      <span className="relative z-10">{children}</span>
      {isActive && (
        <motion.span
          layoutId="underline"
          className="absolute left-0 bottom-0 h-0.5 w-full bg-white"
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
    </Link>
  );
}
