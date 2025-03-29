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
						Hölderlinstraße 4
						<br />
						70794 Filderstadt
						<br />
						<br />
						Telefon:
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
					<div className="mt-6 pt-6 border-t border-muted">
						<h3 className="text-lg font-semibold mb-2 text-secondary-foreground">
							Relevante Containerbahnhöfe:
						</h3>
						<ul className="list-disc list-inside text-secondary-foreground/90">
							<li>Stuttgart / Kornwestheim</li>
							<li>Stuttgart / Wangen</li>
						</ul>
					</div>

					<p>
						<strong>Bürozeiten:</strong>
						<br /> Mo - Fr: 08:00 - 17:00 Uhr
					</p>
					<div className="mt-8 flex-grow min-h-[300px]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2635.6072207540765!2d9.21169547631098!3d48.65562877130538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4799e9c1306c48a9%3A0xd39e28f14188bcf3!2sH%C3%B6lderlinstra%C3%9Fe%204%2C%2070794%20Filderstadt!5e0!3m2!1sde!2sde!4v1743263725699!5m2!1sde!2sde" // Ersetze dies mit dem Code von Google Maps!
							width="100%"
							height="100%" // Höhe wird durch min-h-[...] und flex-grow gesteuert
							style={{ border: 0 }}
							allowFullScreen={false}
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							className="rounded-md shadow-md w-full h-full" // Tailwind Klassen für Aussehen
						></iframe>
					</div>
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
