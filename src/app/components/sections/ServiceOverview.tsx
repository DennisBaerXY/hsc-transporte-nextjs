// src/app/components/sections/ServicesOverview.tsx
import ServiceCard from "./ServiceCard";
import { coreServices } from "@/lib/data/services";

const ServicesOverview = () => {
	return (
		<section className="py-16 sm:py-24 bg-background">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-12">
					<h2 className="text-base font-semibold leading-7 text-primary">
						Unsere Leistungen
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
						Maßgeschneiderte Logistik für Ihren Erfolg
					</p>
					<p className="mt-6 text-lg leading-8 text-muted-foreground">
						Wir bieten umfassende Transport- und Logistikdienstleistungen für
						Unternehmen.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
					{coreServices.map((service) => (
						<ServiceCard key={service.title} {...service} />
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesOverview;
