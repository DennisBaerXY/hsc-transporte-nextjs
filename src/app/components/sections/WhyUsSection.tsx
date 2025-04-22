// src/app/components/sections/WhyUsSection.tsx
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
		<section className="overflow-hidden py-16 sm:py-24 relative">
			{/* Farbiger Hintergrund mit geschwungenen Kanten */}
			<div className="absolute inset-0">
				{/* Obere geschwungene Kante */}
				<div className="absolute top-0 left-0 right-0 h-12 bg-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 96"
						preserveAspectRatio="none"
						className="absolute bottom-0 w-full h-12"
					>
						<path
							fill="#e1ebfa"
							d="M0,96 C480,32 960,32 1440,96 L1440,0 L0,0 Z"
						></path>
					</svg>
				</div>

				{/* Haupthintergrund */}
				<div className="absolute inset-0 top-12 bottom-12 bg-gradient-to-br from-[#e1ebfa] to-[#c4d1e7]"></div>

				{/* Untere geschwungene Kante */}
				<div className="absolute bottom-0 left-0 right-0 h-12 bg-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1440 96"
						preserveAspectRatio="none"
						className="absolute top-0 w-full h-12"
					>
						<path
							fill="#e1ebfa"
							d="M0,0 C480,64 960,64 1440,0 L1440,96 L0,96 Z"
						></path>
					</svg>
				</div>
			</div>

			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
					<div className="lg:pr-4 relative">
						<div className="lg:max-w-lg">
							{/* Farbiges Badge */}
							<div className="inline-block mb-6">
								<div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
									Warum HSC Transporte?
								</div>
							</div>

							<h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl text-primary">
								Ihr starker Partner vor Ort
							</h2>

							{/* Farbiger Akzent-Strich */}
							<div className="w-20 h-1 bg-primary mt-4 mb-6"></div>

							<p className="mt-6 text-lg leading-8 text-muted-foreground">
								Seit Jahren vertrauen Unternehmen im Raum Stuttgart auf unsere
								Expertise und Zuverlässigkeit im Transportwesen.
							</p>

							<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 lg:max-w-none">
								{features.map((feature) => (
									<div
										key={feature.name}
										className="relative pl-12 p-4 rounded-lg bg-white/70 shadow-sm border border-primary/10 transition-transform duration-300 hover:-translate-y-1"
									>
										<dt className="inline font-semibold text-primary">
											<CheckCircle
												className="absolute left-4 top-4 h-6 w-6 text-primary"
												aria-hidden="true"
											/>
											{feature.name}
										</dt>{" "}
										<dd className="inline text-muted-foreground">
											{feature.description}
										</dd>
									</div>
								))}
							</dl>

							{/* Zusätzlicher CTA-Button */}
							<div className="mt-10">
								<Button
									asChild
									className="bg-primary hover:bg-primary/90 font-semibold shadow-md"
								>
									<Link href="/ueber-uns" className="inline-flex items-center">
										<span>Mehr über uns erfahren</span>
										<svg
											className="ml-2 w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M14 5l7 7m0 0l-7 7m7-7H3"
											></path>
										</svg>
									</Link>
								</Button>
							</div>
						</div>
					</div>

					{/* Bildbereich mit mehr Charakter */}
					<div className="sm:px-6 lg:px-0 relative">
						<div className="relative rounded-2xl overflow-hidden shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
							{/* Farbiger Rahmen */}
							<div className="absolute inset-0 border-8 border-primary/20 rounded-2xl pointer-events-none"></div>

							{/* Das Bild selbst */}
							<Image
								src="/images/hsc-whyus.png" // Platzhalter!
								alt="Zuverlässiger Transport durch HSC Transporte"
								width={1000}
								height={800}
								className="w-full max-w-none rounded-xl md:-ml-4 lg:-ml-0"
							/>

							{/* Leuchtender Overlay-Effekt */}
							<div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>

							{/* "Seit 2006" Badge */}
							<div className="absolute -bottom-3 -right-3 bg-primary text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-12">
								Seit 2006
							</div>
						</div>

						{/* Farbige Signatur unter dem Bild */}
						<div className="mt-8 text-center">
							<p className="text-muted-foreground/80 italic text-sm border-l-4 border-primary pl-3 inline-block">
								"Wir bringen Ihre Fracht sicher und zuverlässig ans Ziel"
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default WhyUsSection;
