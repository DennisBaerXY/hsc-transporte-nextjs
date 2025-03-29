// src/app/components/sections/CtaSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CtaSection = () => {
	return (
		<section className="bg-primary text-primary-foreground">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Bereit für eine effiziente Logistiklösung?
				</h2>
				<p className="mt-4 text-lg leading-8 text-primary-foreground/90">
					Kontaktieren Sie uns noch heute für eine unverbindliche Beratung oder
					ein individuelles Angebot für Ihr Unternehmen.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-6">
					<Button asChild variant="secondary" size="lg">
						<Link href="/kontakt">Jetzt Angebot anfordern</Link>
					</Button>
					<Button
						asChild
						variant="link"
						size="lg"
						className="text-primary-foreground hover:text-primary-foreground/80"
					>
						<a href="tel:+49711XXXXXX">Oder anrufen: [Ihre Nr.]</a>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
