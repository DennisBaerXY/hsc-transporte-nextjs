// src/app/ueber-uns/page.tsx
import { Metadata } from "next";

import WhyUsSection from "../components/sections/WhyUsSection"; // Kann hier wiederverwendet werden
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
	title: "Über Uns",
	description:
		"Lernen Sie HSC Transporte kennen – Ihre erfahrene und zuverlässige Spedition im Raum Stuttgart. Erfahren Sie mehr über unsere Werte und unser Team."
};

export default function UeberUnsPage() {
	return (
		<>
			<section className="py-16 sm:py-24 bg-background">
				<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<h1 className="text-4xl font-bold tracking-tight text-center text-foreground sm:text-5xl mb-8">
						Über HSC Transporte
					</h1>

					<div className="w-20 h-1 bg-primary mx-auto mb-12"></div>

					{/* Einleitender Text - neu strukturiert */}
					<div className="prose prose-lg max-w-none dark:prose-invert text-muted-foreground mb-16 space-y-6">
						<p className="text-lg leading-relaxed">
							<span className="font-semibold text-foreground">
								HSC Transporte
							</span>{" "}
							steht seit 2006 für erstklassige Container-Logistik in der
							Metropolregion Stuttgart. Als inhabergeführtes Familienunternehmen
							verbinden wir persönlichen Service mit höchster Professionalität
							und langjähriger Branchenerfahrung.
						</p>

						<p className="text-lg leading-relaxed">
							Wir verstehen uns nicht nur als Transportdienstleister, sondern
							als strategischer Partner für Ihr Unternehmen. Unser Ziel ist es,
							durch zuverlässige Termintreue, maßgeschneiderte Lösungen und
							persönliche Betreuung einen echten Mehrwert für Ihre Logistikkette
							zu schaffen.
						</p>

						<p className="text-lg leading-relaxed">
							In einer Zeit, in der Lieferketten immer komplexer werden, setzen
							wir auf eine perfekte Balance aus bewährter Erfahrung und
							innovativen Ansätzen. Die langjährigen Partnerschaften mit unseren
							Kunden sind das beste Zeugnis für unsere Zuverlässigkeit und
							Servicequalität.
						</p>

						<p className="text-lg leading-relaxed">
							Besonders stolz sind wir auf unsere Flexibilität: Dank schlanker
							Strukturen und einem eingespielten Team können wir auch
							kurzfristige Anfragen schnell und unkompliziert umsetzen. Sprechen
							Sie uns an – wir freuen uns darauf, auch für Ihre logistischen
							Herausforderungen die optimale Lösung zu finden.
						</p>
					</div>

					{/* Abschnitt: Unsere Werte - neu gestaltet */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-4 text-foreground">
							Unsere Werte
						</h2>
						<p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
							Diese Grundsätze prägen unser tägliches Handeln und sind die Basis
							unseres Erfolgs
						</p>

						<dl className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 text-base leading-7">
							<div className="relative pl-9 p-4 rounded-lg border border-muted hover:border-primary transition-colors duration-300">
								<dt className="font-semibold text-foreground mb-2 flex items-center">
									<CheckCircle
										className="absolute left-3 top-4 h-5 w-5 text-primary"
										aria-hidden="true"
									/>
									Zuverlässigkeit
								</dt>
								<dd className="text-muted-foreground">
									Pünktlichkeit und höchste Sorgfalt sind die Grundpfeiler
									unserer Arbeit. Was wir zusagen, halten wir ein – ohne
									Kompromisse.
								</dd>
							</div>

							<div className="relative pl-9 p-4 rounded-lg border border-muted hover:border-primary transition-colors duration-300">
								<dt className="font-semibold text-foreground mb-2 flex items-center">
									<CheckCircle
										className="absolute left-3 top-4 h-5 w-5 text-primary"
										aria-hidden="true"
									/>
									Kundenorientierung
								</dt>
								<dd className="text-muted-foreground">
									Ihre spezifischen Anforderungen stehen im Mittelpunkt unseres
									Handelns. Wir hören zu, verstehen und liefern maßgeschneiderte
									Lösungen.
								</dd>
							</div>

							<div className="relative pl-9 p-4 rounded-lg border border-muted hover:border-primary transition-colors duration-300">
								<dt className="font-semibold text-foreground mb-2 flex items-center">
									<CheckCircle
										className="absolute left-3 top-4 h-5 w-5 text-primary"
										aria-hidden="true"
									/>
									Flexibilität
								</dt>
								<dd className="text-muted-foreground">
									Die Logistikbranche fordert schnelles Handeln. Dank unserer
									schlanken Strukturen finden wir auch für kurzfristige Anfragen
									die passende Lösung.
								</dd>
							</div>

							<div className="relative pl-9 p-4 rounded-lg border border-muted hover:border-primary transition-colors duration-300">
								<dt className="font-semibold text-foreground mb-2 flex items-center">
									<CheckCircle
										className="absolute left-3 top-4 h-5 w-5 text-primary"
										aria-hidden="true"
									/>
									Regionale Expertise
								</dt>
								<dd className="text-muted-foreground">
									Unsere tiefe Kenntnis der Metropolregion Stuttgart und ihrer
									Verkehrswege ermöglicht es uns, effiziente und zeitoptimierte
									Routen zu planen.
								</dd>
							</div>
						</dl>
					</div>

					{/* Abschnitt: Unser Team - erweitert */}
					<div className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-4 text-foreground">
							Unser Team
						</h2>
						<div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

						<div className="text-center text-muted-foreground max-w-3xl mx-auto space-y-6">
							<p className="text-lg leading-relaxed">
								Hinter HSC Transporte steht ein eingespieltes Team von
								Logistikexperten, Disponenten und erfahrenen Fahrern, die mit
								Leidenschaft und Kompetenz für Ihren Erfolg arbeiten.
							</p>
							<p className="text-lg leading-relaxed">
								Unsere Mitarbeiter sind das Herzstück unseres Unternehmens. Ihre
								umfassende Erfahrung, kontinuierliche Weiterbildung und ihr
								Engagement garantieren Ihnen einen Service auf höchstem Niveau.
							</p>
							<p className="text-lg leading-relaxed mb-8">
								Lernen Sie uns persönlich kennen – wir freuen uns auf den
								Austausch mit Ihnen!
							</p>

							{/* Platzhalter für Team-Fotos oder weitere Details */}
							<div className="bg-muted p-6 rounded-lg border border-dashed border-muted-foreground">
								<p className="text-muted-foreground italic">
									Hier könnte ein Gruppenfoto oder individuelle Vorstellungen
									des Teams platziert werden
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			<WhyUsSection />
		</>
	);
}
