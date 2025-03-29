import HeroSection from "./components/sections/HeroSection";
import ServicesOverview from "./components/sections/ServiceOverview";
import WhyUsSection from "./components/sections/WhyUsSection";
import CtaSection from "./components/sections/CtaSection";

// Metadaten könnten hier spezifischer sein, wenn nötig
// export const metadata: Metadata = { ... };

export default function HomePage() {
	return (
		<>
			<HeroSection />
			<ServicesOverview />
			<WhyUsSection />
			<CtaSection />
			{/* Weitere Abschnitte hier */}
		</>
	);
}
