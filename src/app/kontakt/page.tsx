import { Metadata } from "next";
import ContactForm from "../components/sections/ContactForm"; // Client Component!

export const metadata: Metadata = {
	title: "Kontakt",
	description:
		"Kontaktieren Sie HSC Transporte in Stuttgart für Ihr Transportanliegen. Fordern Sie jetzt ein unverbindliches Angebot an."
};

export default function KontaktPage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold mb-8 text-center">
				Kontaktieren Sie uns
			</h1>
			<div className="grid md:grid-cols-2 gap-12">
				{/* Kontaktinformationen (Server Component Part) */}
				<div>
					<h2 className="text-2xl font-semibold mb-4">HSC Transporte</h2>
					<address className="not-italic mb-4">
						[Ihre Straße + Nr.]
						<br />
						[Ihre PLZ] Stuttgart
						<br />
						<br />
						Telefon:{" "}
						<a
							href="tel:+49711XXXXXX"
							className="text-blue-600 hover:underline"
						>
							[Ihre Telefonnummer]
						</a>
						<br />
						E-Mail:{" "}
						<a
							href="mailto:info@hsc-transporte.de"
							className="text-blue-600 hover:underline"
						>
							[Ihre E-Mail-Adresse]
						</a>
					</address>
					<p>
						<strong>Bürozeiten:</strong>
						<br /> Mo - Fr: 08:00 - 17:00 Uhr
					</p>
					{/* Ggf. kleine Karte hier einbinden */}
				</div>

				{/* Kontaktformular (Client Component) */}
				<div>
					<h2 className="text-2xl font-semibold mb-4">Schnellanfrage</h2>
					<ContactForm />
				</div>
			</div>
		</div>
	);
}
