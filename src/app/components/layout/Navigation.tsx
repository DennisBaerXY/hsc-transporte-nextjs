// src/app/components/layout/Navigation.tsx
"use client"; // Benötigt für usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils"; // Hilfsfunktion von Shadcn

export const navItems = [
	{ label: "Start", href: "/" },
	{ label: "Leistungen", href: "/leistungen" },
	{ label: "Über Uns", href: "/ueber-uns" },
	{ label: "Preisanfrage", href: "/preisanfrage" },
	{ label: "Kontakt", href: "/kontakt" }
];

interface NavigationProps {
	onLinkClick?: () => void; // Optional: Callback für Mobile Nav zum Schließen
	className?: string;
	linkClassName?: string;
}

const Navigation = ({
	onLinkClick,
	className,
	linkClassName
}: NavigationProps) => {
	const pathname = usePathname();

	return (
		<nav className={cn("flex space-x-4", className)}>
			{navItems.map((item) => (
				<Link
					key={item.href}
					href={item.href}
					onClick={onLinkClick} // Schließt Mobile Nav bei Klick
					className={cn(
						"text-sm font-medium transition-colors hover:text-primary",
						pathname === item.href ? "text-primary" : "text-muted-foreground",
						linkClassName
					)}
				>
					{item.label}
				</Link>
			))}
		</nav>
	);
};

export default Navigation;
