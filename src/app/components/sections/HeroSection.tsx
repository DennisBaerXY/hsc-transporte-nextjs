// src/app/components/sections/HeroSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeroSectionProps {
	title?: string;
	subtitle?: string;
	ctaPrimaryText?: string;
	ctaPrimaryLink?: string;
	ctaSecondaryText?: string;
	ctaSecondaryLink?: string;
	backgroundImageUrl?: string; // Optional: für Hintergrundbild
}

const HeroSection = ({
	title = "Ihr Logistikpartner im Raum Stuttgart",
	subtitle = "Zuverlässige und flexible Transportlösungen für Ihr Unternehmen. Pünktlich, effizient und maßgeschneidert.",
	ctaPrimaryText = "Unverbindliche Anfrage",
	ctaPrimaryLink = "/preisanfrage",
	ctaSecondaryText = "Unsere Leistungen",
	ctaSecondaryLink = "/leistungen",
	backgroundImageUrl = "/images/hero-background.jpg" // Hintergrundbild standardmäßig verwenden
}: HeroSectionProps) => {
	// Professioneller Hintergrund mit gedämpftem Overlay
	const backgroundStyle = backgroundImageUrl
		? {
				backgroundImage: `linear-gradient(rgba(0, 59, 122, 0.85), rgba(0, 59, 122, 0.85)), url(${backgroundImageUrl})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
		  }
		: {
				background:
					"linear-gradient(to right, var(--primary-dark), var(--primary))"
		  };

	return (
		<section
			className="relative py-24 sm:py-32 text-white"
			style={backgroundStyle}
		>
			<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
				{/* Professionelles Abzeichen */}
				<div className="inline-block mb-6">
					<div className="bg-white/10 border border-white/20 backdrop-blur-sm px-4 py-1 rounded-md text-sm font-medium">
						CONTAINER-TRANSPORT & LOGISTIK
					</div>
				</div>

				<h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
					{title}
				</h1>

				{/* Dezenter Akzent */}
				<div className="w-24 h-1 bg-[#cc0000] mx-auto mb-6"></div>

				<p className="mt-4 text-lg leading-8 text-white/90 max-w-2xl mx-auto mb-8">
					{subtitle}
				</p>

				<div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
					<Button
						asChild
						className="btn-cta w-full sm:w-auto py-2.5 text-base font-medium"
					>
						<Link href={ctaPrimaryLink}>{ctaPrimaryText}</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						className="w-full sm:w-auto bg-transparent border-white/60 text-white hover:bg-white hover:border-white py-2.5 text-base font-medium"
					>
						<Link href={ctaSecondaryLink}>{ctaSecondaryText}</Link>
					</Button>
				</div>

				{/* Vertrauenselemente - dezenter und professioneller */}
				<div className="mt-16 pt-6 border-t border-white/20">
					<div className="flex flex-wrap justify-center gap-6 text-sm">
						<div className="flex items-center">
							<svg
								className="w-5 h-5 mr-2 text-white/70"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
								></path>
							</svg>
							<span>Zuverlässige Lieferung</span>
						</div>
						<div className="flex items-center">
							<svg
								className="w-5 h-5 mr-2 text-white/70"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								></path>
							</svg>
							<span>Kurzfristige Verfügbarkeit</span>
						</div>
						<div className="flex items-center">
							<svg
								className="w-5 h-5 mr-2 text-white/70"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
								></path>
							</svg>
							<span>Transparente Preise</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
