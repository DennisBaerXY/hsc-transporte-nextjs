import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google"; // Beispiel Schriftart
import "./styles/globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "@/components/ui/sonner"; // Für Benachrichtigungen vom Formular

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
		"Lagerung"
	],
	// Weitere Metadaten wie Open Graph hier definieren
	openGraph: {
		title: "HSC Transporte Stuttgart",
		description: "Ihr zuverlässiger Logistikpartner in Stuttgart.",
		url: "https://hsc-transporte.de",
		siteName: "HSC Transporte",
		// images: [ // Bild für Social Media Sharing hinzufügen
		//   {
		//     url: '/images/og-image.jpg',
		//     width: 1200,
		//     height: 630,
		//   },
		// ],
		locale: "de_DE",
		type: "website"
	}
};

export const viewport: Viewport = {
	themeColor: "#ffffff" // Beispiel Theme-Farbe
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="de">
			<body className={`${inter.className} flex flex-col min-h-screen`}>
				<Header />
				<main className="flex-grow">{children}</main>
				<Footer />
				<Toaster /> {/* Für Formular-Feedback */}
			</body>
		</html>
	);
}
