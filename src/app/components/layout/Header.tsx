// src/app/components/layout/Header.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navigation from "./Navigation";
import MobileNavWrapper from "./MobileNavWrapper";

const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				<Link href="/" className="flex items-center space-x-2">
					<Image
						src="/images/logo-hsc-remade.png"
						alt="HSC Transporte Logo"
						width={90}
						height={45}
						className="h-auto"
					/>
					<span className="font-bold text-lg">HSC Transporte</span>
				</Link>

				{/* Desktop Navigation */}
				<div className="hidden md:flex md:items-center md:space-x-6">
					<Navigation />
					<Button asChild variant="outline">
						<a href="tel:+491775104005">Jetzt anrufen</a>
					</Button>
				</div>

				{/* Mobile Navigation Wrapper (enthält Button + Sheet) */}
				<div className="md:hidden">
					<MobileNavWrapper />
				</div>
			</div>
		</header>
	);
};

export default Header;
