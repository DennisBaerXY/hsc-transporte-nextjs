// src/app/components/layout/MobileNavWrapper.tsx
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from "@/components/ui/sheet";
import { Menu, X, Phone } from "lucide-react"; // Icons
import Navigation from "./Navigation"; // Importiere navItems direkt
import Link from "next/link";

const MobileNavWrapper = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="icon">
					<Menu className="h-6 w-6" />
					<span className="sr-only">Menü öffnen</span>
				</Button>
			</SheetTrigger>
			<SheetContent side="right">
				<SheetHeader className="flex flex-row items-center justify-between">
					<SheetTitle>
						<Link href="/" onClick={() => setIsOpen(false)}>
							<span className="font-bold text-lg">HSC Transporte</span>
						</Link>
					</SheetTitle>
					<Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
						<X className="h-6 w-6" />
						<span className="sr-only">Menü schließen</span>
					</Button>
				</SheetHeader>
				<div className="mt-6 flex flex-col space-y-4">
					{/* Hier die Navigation mit vertikalem Layout einfügen */}
					<Navigation
						className="flex-col space-x-0 space-y-3 items-start"
						linkClassName="text-lg text-foreground"
						onLinkClick={() => setIsOpen(false)} // Schließt Sheet bei Klick
					/>
					<Button asChild className="mt-6 w-full">
						<a href="tel:+49711XXXXXX" onClick={() => setIsOpen(false)}>
							<Phone className="mr-2 h-4 w-4" /> Jetzt anrufen
						</a>
					</Button>
				</div>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNavWrapper;
