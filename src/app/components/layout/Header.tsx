// src/app/components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import MobileNavWrapper from "./MobileNavWrapper";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
			<div className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center space-x-3">
					<div className="relative h-12 w-24 overflow-hidden p-1">
						<Image
							src="/images/logo-hsc-remade.png"
							alt="HSC Transporte Logo"
							width={100}
							height={48}
							className="h-auto"
						/>
					</div>
					<div className="flex flex-col">
						<span className="font-bold text-lg">HSC Transporte</span>
						<span className="text-xs text-gray-500">Stuttgart & Region</span>
					</div>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:items-center md:space-x-6">
					<Navigation />
					<Button asChild className="btn-cta">
						<a href="tel:+491775104005" className="flex items-center gap-1">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
							</svg>
							Jetzt anrufen
						</a>
					</Button>
				</div>

				{/* Mobile Navigation Wrapper (enthält Button + Sheet) */}
				<div className="md:hidden">
					<MobileNavWrapper />
				</div>
			</div>

			{/* Dezente Linie mit Markenfarben */}
			<div className="h-1 w-full bg-gradient-to-r from-primary to-primary-light"></div>
		</header>
	);
};

export default Header;
