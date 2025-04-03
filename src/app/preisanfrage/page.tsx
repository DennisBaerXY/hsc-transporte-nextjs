// src/app/preisanfrage/page.tsx
import { Metadata } from "next";
import QuoteRequestForm from "../components/sections/QuoteRequestForm"; // Neue Komponente erstellen!

export const metadata: Metadata = {
	title: "Preisanfrage",
	description:
		"Fragen Sie jetzt unverbindlich die Kosten für Ihren Containertransport im Raum Stuttgart bei HSC Transporte an. Füllen Sie das Formular für ein individuelles Angebot aus."
};

export default function PreisanfragePage() {
	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold mb-8 text-center">
				Preisanfrage für Containertransport
			</h1>
			<p className="text-lg leading-8 text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
				Die Transportkosten hängen von verschiedenen Faktoren wie Strecke,
				Containerart, Gewicht und Service ab. Bitte füllen Sie das folgende
				Formular möglichst detailliert aus, damit wir Ihnen ein individuelles
				und unverbindliches Angebot erstellen können.
			</p>

			{/* Hier die neue Formular-Komponente einfügen */}
			<div className="max-w-2xl mx-auto p-8 border rounded-lg shadow-sm bg-card">
				<QuoteRequestForm />
			</div>

			<p className="text-center text-muted-foreground mt-12">
				Für allgemeine Fragen nutzen Sie bitte unser{" "}
				<a href="/kontakt" className="text-primary hover:underline">
					Kontaktformular
				</a>{" "}
				oder rufen Sie uns an.
			</p>
		</div>
	);
}
