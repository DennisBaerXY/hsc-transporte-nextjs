// src/app/ueber-uns/page.tsx
import { Metadata } from "next";

import WhyUsSection from "../components/sections/WhyUsSection"; // Kann hier wiederverwendet werden
import { CheckCircle } from "lucide-react";
import CtaSection from "../components/sections/CtaSection";

import { Award, Truck, MapPin } from "lucide-react"; // Beispiel Icons

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
					<section className="hidden md:inline py-12 bg-background">
						<div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
							<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
								<div className="bg-background border border-muted rounded-lg p-6 text-center shadow-sm flex flex-col items-center">
									<Award className="h-10 w-10 text-primary mb-3" />
									<h3 className="text-lg font-semibold mb-1">
										Familienunternehmen
									</h3>
									<p className="text-muted-foreground text-sm">
										Inhabergeführt seit 2006
									</p>
								</div>
								<div className="bg-background border border-muted rounded-lg p-6 text-center shadow-sm flex flex-col items-center">
									<Truck className="h-10 w-10 text-primary mb-3" />
									<h3 className="text-lg font-semibold mb-1">Spezialist</h3>
									<p className="text-muted-foreground text-sm">
										für Container Transporte
									</p>
								</div>
								<div className="bg-background border border-muted rounded-lg p-6 text-center shadow-sm flex flex-col items-center">
									<MapPin className="h-10 w-10 text-primary mb-3" />
									<h3 className="text-lg font-semibold mb-1">
										Metropol-Region
									</h3>
									<p className="text-muted-foreground text-sm">
										Stuttgart & angeschlossene Häfen
									</p>
								</div>
								<div className="bg-background border border-muted rounded-lg p-6 text-center shadow-sm flex flex-col items-center">
									<CheckCircle className="h-10 w-10 text-primary mb-3" />
									<h3 className="text-lg font-semibold mb-1">
										Flexibel & Zuverlässig
									</h3>
									<p className="text-muted-foreground text-sm">
										auch bei kurzfristigen Aufträgen
									</p>
								</div>
							</div>
						</div>
					</section>

					{/* Einleitender Text - kürzer und prägnanter */}
					<div className="prose prose-lg max-w-none dark:prose-invert text-muted-foreground mb-16 space-y-6">
						<p className="text-lg leading-relaxed">
							<span className="font-semibold text-foreground">
								HSC Transporte
							</span>{" "}
							ist seit 2006 Ihr Ansprechpartner für Container-Logistik in der
							Metropolregion Stuttgart. Als Familienunternehmen verbinden wir
							persönlichen Service mit langjähriger Branchenerfahrung.
						</p>

						<p className="text-lg leading-relaxed">
							Unser Fokus liegt auf zuverlässigen Containertransporten mit
							Termintreue und individueller Betreuung. Die langjährigen
							Partnerschaften mit unseren Kunden sprechen für unsere
							Servicequalität.
						</p>

						<p className="text-lg leading-relaxed">
							Dank schlanker Strukturen können wir flexibel auf Ihre
							Anforderungen reagieren und auch kurzfristige Aufträge schnell
							umsetzen. Sprechen Sie uns an – wir finden die optimale Lösung für
							Ihre logistischen Herausforderungen.
						</p>
					</div>

					{/* Abschnitt: Unsere Werte */}
					<div className="mb-20">
						<h2 className="text-3xl font-bold text-center mb-4 text-foreground">
							Unsere Werte
						</h2>
						<p className="text-center text-muted-foreground max-w-2xl mx-auto mb-10">
							Diese Grundsätze prägen unser tägliches Handeln
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
									Pünktliche und sorgfältige Ausführung aller Aufträge. Was wir
									zusagen, halten wir ein.
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
									Ihre Anforderungen stehen im Mittelpunkt. Wir liefern
									maßgeschneiderte Lösungen für Ihren Bedarf.
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
									Schnelle Reaktion auf kurzfristige Anfragen durch unsere
									effiziente Organisation.
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
									Detaillierte Kenntnis der Region Stuttgart für optimale
									Routenplanung und Zeitersparnis.
								</dd>
							</div>
						</dl>
					</div>

					{/* Abschnitt: Unser Team - kürzer und prägnanter */}
					<div className="mb-16">
						<h2 className="text-3xl font-bold text-center mb-4 text-foreground">
							Unser Team
						</h2>
						<div className="w-20 h-1 bg-primary mx-auto mb-8"></div>

						<div className="text-center text-muted-foreground max-w-3xl mx-auto space-y-6">
							<p className="text-lg leading-relaxed">
								Hinter HSC Transporte steht ein Team von Logistikexperten,
								Disponenten und erfahrenen Fahrern. Alle sind Spezialisten in
								ihrem Bereich und arbeiten mit Leidenschaft für Ihren Erfolg.
							</p>
							<p className="text-lg leading-relaxed">
								Schnelle Entscheidungen, rasche Umsetzung und individuelle
								Lösungen für unsere Kunden - das ist unser täglicher Anspruch.
							</p>
						</div>
					</div>
				</div>
			</section>

			<CtaSection />
		</>
	);
}
