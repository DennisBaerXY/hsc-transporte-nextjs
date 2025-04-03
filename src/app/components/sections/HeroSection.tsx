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
	backgroundImageUrl
}: HeroSectionProps) => {
	const backgroundStyle = backgroundImageUrl
		? { backgroundImage: `url(${backgroundImageUrl})` }
		: {};

	return (
		<section
			className={`relative bg-gradient-to-r from-secondary to-background py-24 sm:py-32 ${
				backgroundImageUrl ? "bg-cover bg-center" : ""
			}`}
			style={backgroundStyle}
		>
			{/* Overlay für bessere Lesbarkeit bei Hintergrundbild */}
			{backgroundImageUrl && (
				<div className="absolute inset-0 bg-black/50"></div>
			)}

			<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
				<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
					{title}
				</h1>
				<p className="mt-6 text-lg leading-8 text-muted-foreground">
					{subtitle}
				</p>
				<div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-x-6">
					<Button asChild size="lg" className="w-3/4 sm:w-auto">
						<Link href={ctaPrimaryLink}>{ctaPrimaryText}</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="w-3/4 sm:w-auto"
					>
						<Link href={ctaSecondaryLink}>{ctaSecondaryText}</Link>
					</Button>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
