// src/app/components/sections/CtaSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneCall, Truck } from "lucide-react";

const CtaSection = () => {
	return (
		<section className="bg-primary text-primary-foreground">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
				<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
					Ihr Transport ist bei uns in sicheren Händen
				</h2>
				<p className="mt-4 text-lg leading-8 text-primary-foreground/90 max-w-3xl mx-auto">
					Ob Container-Transport, Komplettladung oder kurzfristige Lieferung –
					wir bringen Ihre Fracht pünktlich und zuverlässig ans Ziel.
					Familiengeführt im Großraum Stuttgart.
				</p>
				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-4 gap-x-6">
					<Button
						asChild
						variant="secondary"
						size="lg"
						className="flex items-center gap-2"
					>
						<Link href="/preisanfrage">
							<Truck className="h-5 w-5" />
							<span>Frachtanfrage stellen</span>
						</Link>
					</Button>
					<Button
						asChild
						variant="link"
						size="lg"
						className="text-primary-foreground hover:text-primary-foreground/80 flex items-center gap-2"
					>
						<a href="tel:+491775104005">
							<PhoneCall className="h-5 w-5" />
							<span>Direkt anrufen: 0177 - 510 4005</span>
						</a>
					</Button>
				</div>
				<p className="mt-6 text-sm text-primary-foreground/80">
					Schnelle Reaktionszeit, flexible Terminplanung & faire Preise
				</p>
			</div>
		</section>
	);
};

export default CtaSection;
