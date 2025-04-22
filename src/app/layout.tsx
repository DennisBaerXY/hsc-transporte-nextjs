// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/hsc-theme.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

// Standard Metadaten - können pro Seite überschrieben werden
export const metadata: Metadata = {
	metadataBase: new URL("https://hsc-transporte.de"), // Basis-URL für Open Graph etc. setzen!
	title: {
		default: "HSC Transporte - Ihre Spedition in Stuttgart",
		template: "%s | HSC Transporte Stuttgart" // %s wird durch Seitentitel ersetzt
	},
	description:
		"HSC Transporte: Ihr zuverlässiger Partner für Spedition, Logistik, Expressfahrten, Teil- & Komplettladungen und Lagerung im Raum Stuttgart.",
	keywords: [
		"Spedition Stuttgart",
		"Transport Stuttgart",
		"Logistik Stuttgart",
		"HSC Transporte",
		"Expressfahrten",
		"Lagerung",
		"Containertransport",
		"LKW-Transport",
		"Spedition Kornwestheim",
		"Kornwestheim",
		"Filderstadt"
	],
	// Weitere Metadaten wie Open Graph hier definieren
	openGraph: {
		title: "HSC Transporte Stuttgart",
		description: "Ihr zuverlässiger Logistikpartner in Stuttgart.",
		url: "https://hsc-transporte.de",
		siteName: "HSC Transporte",
		images: [
			// Bild für Social Media Sharing hinzufügen
			{
				url: "/images/hsc-whyus.png",
				width: 1000,
				height: 830
			}
		],
		locale: "de_DE",
		type: "website"
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body
				className={`${inter.className} flex flex-col min-h-screen bg-white`}
			>
				{/* Dezenter Farbstreifen in Logo-Farben */}
				<div className="h-1 w-full bg-primary"></div>
				<Header />
				<main className="flex-grow">{children}</main>
				<Analytics />
				<Footer />
				<Toaster /> {/* Für Formular-Feedback */}
				{/* Für Analysen KEIN DSGVO DA KEINE DATEN GESAMMELT WERDEN */}
			</body>
		</html>
	);
}
