// src/app/components/sections/WhyUsSection.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const features = [
	{
		name: "Zuverlässigkeit",
		description: "Termintreue und sorgfältiger Umgang mit Ihrer Fracht."
	},
	{
		name: "Flexibilität",
		description: "Schnelle und individuelle Reaktion auf Ihre Anforderungen."
	},
	{
		name: "Regionale Expertise",
		description: "Verwurzelt in Stuttgart, kennen wir die Region genau."
	},
	{
		name: "Persönlicher Kontakt",
		description: "Direkte Ansprechpartner und unkomplizierte Kommunikation."
	}
];

const WhyUsSection = () => {
	return (
		<section className="overflow-hidden bg-secondary text-secondary-foreground py-16 sm:py-24">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div className="lg:pr-4">
						<div className="lg:max-w-lg">
							<h2 className="text-base font-semibold leading-7 text-primary">
								Warum HSC Transporte?
							</h2>
							<p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
								Ihr starker Partner vor Ort
							</p>
							<p className="mt-6 text-lg leading-8 text-muted-foreground">
								Seit Jahren vertrauen Unternehmen im Raum Stuttgart auf unsere
								Expertise und Zuverlässigkeit im Transportwesen.
							</p>
							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
								{features.map((feature) => (
									<div key={feature.name} className="relative pl-9">
										<dt className="inline font-semibold">
											<CheckCircle
												className="absolute left-1 top-1 h-5 w-5 text-primary"
												aria-hidden="true"
											/>
											{feature.name}:
										</dt>{" "}
										<dd className="inline text-muted-foreground">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>
						</div>
					</div>
					{/* Ersetze durch ein passendes Bild */}
					<div className="sm:px-6 lg:px-0">
						<Image
							src="/images/placeholder-whyus.jpg" // Platzhalter!
							alt="Zuverlässiger Transport durch HSC Transporte"
							width={1000}
							height={800}
							className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-foreground/10 md:-ml-4 lg:-ml-0"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUsSection;
