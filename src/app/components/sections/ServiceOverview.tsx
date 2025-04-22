// src/app/components/sections/ServicesOverview.tsx
import ServiceCard from "./ServiceCard";
import { coreServices } from "@/lib/data/services";

const ServicesOverview = () => {
	// Array mit verschiedenen Farben für die ServiceCards
	const colors = ["#0051a3", "#0073e6", "#e65800", "#00a676"];

	return (
		<section className="py-16 sm:py-24 bg-white relative overflow-hidden">
			{/* Dekorative Elemente für mehr Farbe und Charakter */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				{/* Blaue Kugel oben links */}
				<div className="absolute -left-40 -top-40 w-96 h-96 bg-primary/5 rounded-full"></div>

				{/* Orangener Akzent rechts */}
				<div className="absolute right-0 top-1/3 w-32 h-64 bg-[#ff9900]/5 rounded-l-full"></div>

				{/* Diagonale Linien */}
				<div className="absolute bottom-0 left-0 right-0 h-40 opacity-5">
					<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
						<pattern
							id="diagonalLines"
							width="40"
							height="40"
							patternUnits="userSpaceOnUse"
							patternTransform="rotate(45)"
						>
							<line
								x1="0"
								y1="0"
								x2="0"
								y2="40"
								stroke="#0051a3"
								strokeWidth="8"
							/>
						</pattern>
						<rect
							x="0"
							y="0"
							width="100%"
							height="100%"
							fill="url(#diagonalLines)"
						/>
					</svg>
				</div>
			</div>

			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center mb-16">
					{/* Abschnitts-Tag für mehr Farbe */}
					<div className="inline-block mb-4">
						<div className="bg-primary/10 text-primary px-4 py-1 rounded-full text-sm font-semibold mb-2">
							Unsere Leistungen
						</div>
					</div>

					<h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl relative inline-block">
						Maßgeschneiderte Logistik für Ihren Erfolg
						{/* Dekorativer Unterstrich */}
						<div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-primary"></div>
					</h2>

					<p className="mt-10 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
						Wir bieten umfassende Transport- und Logistikdienstleistungen für
						Unternehmen im Raum Stuttgart und darüber hinaus.
					</p>
				</div>

				{/* Gestaffelte Animation */}
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{coreServices.map((service, index) => (
						<div
							key={service.title}
							className="transform transition-all duration-300 hover:-translate-y-2"
						>
							<ServiceCard {...service} color={colors[index % colors.length]} />
						</div>
					))}
				</div>

				{/* Zusätzliche CTA am Ende der Sektion */}
				<div className="mt-16 pt-8 border-t border-border/50 text-center">
					<p className="text-muted-foreground mb-6">
						Benötigen Sie einen maßgeschneiderten Transport oder haben Sie
						Fragen zu unseren Leistungen?
					</p>
					<div className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-colors">
						<svg
							className="w-5 h-5 mr-2"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							></path>
						</svg>
						<a href="tel:+491775104005" className="font-medium">
							0177 - 510 4005
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ServicesOverview;
