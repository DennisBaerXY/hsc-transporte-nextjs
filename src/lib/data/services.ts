// src/lib/data/services.ts
import { Truck, MapPin, LucideIcon, Recycle, ShipWheel } from "lucide-react"; // Passendere Icons wählen

export interface ServiceFeature {
	title: string;
	slug: string; // Eindeutiger Bezeichner für Links/Keys
	description: string; // Kurzbeschreibung
	Icon: LucideIcon;
	details?: string; // Längere Beschreibung für eine Detailansicht (optional)
}

// Kernleistungen basierend auf den Texten definieren
export const coreServices: ServiceFeature[] = [
	{
		title: "Containertransport Nahverkehr Stuttgart",
		slug: "nahverkehr-stuttgart",
		description:
			"Transporte bis 150 km um Stuttgart, speziell Vor-/Nachlauf zu den Bahnhöfen Kornwestheim & Wangen.",
		Icon: MapPin,
		details:
			"Wir übernehmen den Transport Ihrer Container im Nahverkehr bis 150 km rund um Stuttgart. Unser Schwerpunkt liegt im effizienten Vor- und Nachlauf zu den Containerbahnhöfen Stuttgart/Wangen und Stuttgart/Kornwestheim, um Ihre Logistikkette optimal zu ergänzen."
	},
	{
		title: "Containertransport Fernverkehr",
		slug: "fernverkehr",
		description:
			"Nationale Containertransporte ab 150 km Entfernung von Stuttgart.",
		Icon: Truck,
		details:
			"Für Distanzen über 150 km bieten wir zuverlässige Containertransporte im nationalen Fernverkehr an. Wir stellen sicher, dass Ihre Container auch auf langen Strecken sicher und termingerecht ihr Ziel erreichen."
	},
	{
		title: "Shuttle Transporte",
		slug: "shuttle-transporte",
		description:
			"Effizienter Shuttleverkehr zwischen Bahnhöfen und Be-/Entladestellen mit eigenem Fuhrpark und Chassis.",
		Icon: Recycle, // Symbol für Kreislauf/Shuttle
		details:
			"Mit unserem eigenen Fuhrpark und Chassis ermöglichen wir flexible Shuttleverkehre. Während Sie Zeit für das Be- oder Entladen haben, holen wir bereits den nächsten Container ab. Wir optimieren den Transport zwischen den Bahnhöfen Stuttgart/Kornwestheim und Ihren Lade-/Entladestellen."
	},
	{
		title: "Oneway & Rundlauf",
		slug: "oneway-rundlauf",
		description:
			"Flexibler Transport von 20‘, 40‘ und 45‘ Containern als Oneway oder Rundlauf.",
		Icon: ShipWheel, // Symbol für Container/Reise
		details:
			"Wir transportieren Ihre 20‘, 40‘ und 45‘ Container flexibel als Oneway-Transport oder im Rundlauf, ganz nach Ihrem Bedarf. Dies gilt für Standardgrößen ebenso wie für High Cube (HC), Reefer- und OpenTop-Container."
	}
];

// Helferfunktion bleibt gleich
export const getServiceBySlug = (slug: string): ServiceFeature | undefined => {
	return coreServices.find((service) => service.slug === slug);
};
