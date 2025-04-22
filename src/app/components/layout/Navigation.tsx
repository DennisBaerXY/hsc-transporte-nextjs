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
		<nav className={cn("flex space-x-1", className)}>
			{navItems.map((item) => {
				const isActive = pathname === item.href;

				return (
					<Link
						key={item.href}
						href={item.href}
						onClick={onLinkClick} // Schließt Mobile Nav bei Klick
						className={cn(
							"relative px-3 py-2 text-sm font-medium transition-all duration-200 rounded hover:bg-primary/10",
							isActive
								? "text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
								: "text-slate-600 hover:text-primary",
							linkClassName
						)}
					>
						{item.label}
					</Link>
				);
			})}
		</nav>
	);
};

export default Navigation;
