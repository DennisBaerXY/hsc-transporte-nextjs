import { Metadata } from "next";
import ContactForm from "../components/sections/ContactForm"; // Client Component!
import Image from "next/image";

export const metadata: Metadata = {
	title: "Kontakt",
	description:
		"Kontaktieren Sie HSC Transporte in Stuttgart für Ihr Transportanliegen. Fordern Sie jetzt ein unverbindliches Angebot an."
};

export default function KontaktPage() {
	return (
		<div className="container mx-auto px-4 py-8 md:py-16">
			<h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center">
				Kontaktieren Sie uns
			</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
				{/* Kontaktinformationen (Server Component Part) */}
				<div>
					<h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
						HSC Transporte
					</h2>
					<address className="not-italic mb-4 text-sm md:text-base">
						Hölderlinstraße 4
						<br />
						70794 Filderstadt
						<br />
						<br />
						Telefon:{" "}
						<a
							href="tel:+491775104005"
							className="text-primary hover:underline"
						>
							0177 - 510 4005
						</a>
						<br />
						{/* E-Mails */}
						Allgemein:{" "}
						<a
							href="mailto:info@hsc-transporte.de"
							className="text-primary hover:underline"
						>
							info@hsc-transporte.de
						</a>
						<br />
						Buchhaltung:{" "}
						<a
							href="mailto:buchhaltung@hsc-transporte.de"
							className="text-primary hover:underline"
						>
							buchhaltung@hsc-transporte.de
						</a>
					</address>
					<div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-muted">
						<h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2 text-secondary-foreground">
							Relevante Containerbahnhöfe:
						</h3>
						<ul className="list-disc list-inside text-sm md:text-base text-secondary-foreground/90">
							<li>Stuttgart / Kornwestheim</li>
							<li>Stuttgart / Wangen</li>
						</ul>
					</div>

					<p className="mt-4 md:mt-6 mb-6 md:mb-8 text-sm md:text-base">
						<strong>Bürozeiten:</strong>
						<br /> Mo - Fr: 08:00 - 17:00 Uhr
					</p>

					{/* Karte mit Next/Image für optimierte Ladeleistung */}
					<div className="mt-4 relative w-full h-48 md:h-64 overflow-hidden rounded-lg shadow-md">
						<Image
							src="/images/google-maps-location.png"
							alt="Standort von HSC Transporte, Hölderlinstraße 4, 70794 Filderstadt"
							fill
							style={{ objectFit: "cover" }}
							sizes="(max-width: 768px) 100vw, 400px"
							priority
							className="rounded-lg"
						/>
						<div className="absolute bottom-2 md:bottom-4 right-2 md:right-4">
							<a
								href="https://www.google.com/maps?q=H%C3%B6lderlinstra%C3%9Fe+4%2C+70794+Filderstadt"
								target="_blank"
								rel="noopener noreferrer"
								className="bg-primary text-white text-sm md:text-base px-3 py-1.5 md:px-4 md:py-2 rounded-md shadow hover:bg-primary/90 transition-colors"
							>
								In Google Maps öffnen
							</a>
						</div>
					</div>
				</div>

				{/* Kontaktformular (Client Component) */}
				<div className="mt-8 md:mt-0">
					<h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4">
						Schnellanfrage
					</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
