// src/app/leistungen/page.tsx
import { Metadata } from "next";

import Image from "next/image";
import CtaSection from "../components/sections/CtaSection";
import {
	CheckCircle,
	MapPin,
	Truck,
	Scale,
	Mail,
	PhoneCall
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";
import Link from "next/link";
export const metadata: Metadata = {
	title: "Leistungen",
	description:
		"Entdecken Sie die Transport- und Logistikleistungen von HSC Transporte in Stuttgart: Expressfahrten, Teil-/Komplettladungen, Lagerlogistik und individuelle Lösungen."
};

export default function LeistungenPage() {
	return (
		<>
			<section className="py-12 bg-background">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-8">
						<h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
							Container-Transporte in der Metropol-Region Stuttgart
						</h1>
						<p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
							Wir übernehmen Aufträge für den Transport von Containern im
							Großraum Stuttgart. Unsere modernen Fahrzeuge sind täglich für Sie
							unterwegs.
						</p>
					</div>
				</div>
			</section>

			{/* Hauptleistungen */}
			<section className="py-16 bg-background border-t border-b border-muted">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						<div>
							<h2 className="text-3xl font-bold text-foreground mb-6">
								Unsere Container-Transport-Leistungen
							</h2>
							<p className="text-muted-foreground mb-6">
								Wir bieten Ihnen nachfolgende Dienstleistungen im
								Container-Trucking Nah-Verkehr, Regional-Transport Stuttgart und
								im Fernverkehr ab Stuttgart an.
							</p>
							<ul className="space-y-4">
								{[
									"Containertransport Nahverkehr Stuttgart",
									"Containertransport Fernverkehr",
									"Shuttle Transporte",
									"Oneway Transporte",
									"Rundlauf Transporte"
								].map((item, index) => (
									<li key={index} className="flex items-start">
										<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
										<span>{item}</span>
									</li>
								))}
							</ul>
							<div className="mt-8">
								<Button asChild size="lg">
									<Link href="/preisanfrage">Container-Anfrage stellen</Link>
								</Button>
							</div>
						</div>
						<div className="relative h-64 sm:h-80 lg:h-96 rounded-lg overflow-hidden">
							<Image
								src="/images/container-wand.webp"
								alt="HSC Container Transport in Stuttgart"
								fill
								className="object-cover"
								priority
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Containergrößen und SOLAS */}
			<section className="py-16 bg-secondary/10">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-foreground mb-4">
							Wir transportieren Container unterschiedlicher Größen
						</h2>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Truck className="h-6 w-6 text-primary" />
									<CardTitle>Containergrößen</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									Wir übernehmen Container Transporte für 20&apos, 40&apos; und
									45&apos; im Oneway oder als Rundlauf. Unabhängig davon, ob
									Standardgröße, als High Cube oder auch Reefer- und OpenTop
									Container.
								</p>
								<div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
									{[
										"20' Standard",
										"40' Standard",
										"45' Standard",
										"High Cube",
										"Reefer Container",
										"OpenTop Container"
									].map((size, index) => (
										<Badge
											key={index}
											variant="outline"
											className="flex justify-center py-2 w-full"
										>
											{size}
										</Badge>
									))}
								</div>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<div className="flex items-center gap-2">
									<Scale className="h-6 w-6 text-primary" />
									<CardTitle>SOLAS-Richtlinie: Container-Verwiegung</CardTitle>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground mb-4">
									Seit dem 01.07.2016 gilt die Solas-Richtlinie - durch unsere
									Partner können wir Ihren Container vor der Verladung wiegen
									lassen und Ihnen die Daten sofort übermitteln.
								</p>
								<div className="mt-4 p-4 bg-primary/10 rounded-lg border border-primary/20">
									<p className="font-medium text-foreground">
										Vorteile unseres Verwiegungs-Service:
									</p>
									<ul className="mt-2 space-y-2">
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
											<span>Rechtzeitige Verwiegung vor Verladung</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
											<span>Sofortige Übermittlung der Wiegedaten</span>
										</li>
										<li className="flex items-start">
											<CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mr-2 mt-1" />
											<span>Einhaltung der SOLAS-Richtlinie</span>
										</li>
									</ul>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Containerbahnhöfe */}
			<section className="py-16 bg-background">
				<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold text-foreground mb-4">
							Containerbahnhöfe
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Wir bedienen regelmäßig folgende Containerbahnhöfe:
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
						{[
							{
								icon: <MapPin className="h-10 w-10 text-primary" />,
								title: "Stuttgart / Kornwestheim",
								description:
									"Regelmäßige Container-Transporte zum und vom Containerbahnhof Kornwestheim."
							},
							{
								icon: <MapPin className="h-10 w-10 text-primary" />,
								title: "Stuttgart / Wangen",
								description:
									"Zuverlässige Container-Transporte zum und vom Containerbahnhof Stuttgart-Wangen."
							}
						].map((location, index) => (
							<Card key={index}>
								<CardHeader>
									<div className="flex gap-x-1.5 items-center">
										<div>{location.icon}</div>
										<CardTitle>{location.title}</CardTitle>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground">
										{location.description}
									</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>
			{/* Kontaktinformationen */}
			<section className="py-16 bg-secondary/10">
				<div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-3xl font-bold text-foreground mb-4">
							Kontaktieren Sie uns
						</h2>
						<p className="text-muted-foreground max-w-2xl mx-auto">
							Wir geben Ihnen gerne nähere Informationen zu unseren
							Container-Transport-Leistungen.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
						<Card>
							<CardHeader>
								<PhoneCall className="h-10 w-10 text-primary mx-auto" />
								<CardTitle>Telefon</CardTitle>
								<CardDescription>Rufen Sie uns direkt an</CardDescription>
							</CardHeader>
							<CardContent>
								<a
									href="tel:+491775104005"
									className="text-primary font-medium hover:underline"
								>
									0177-5104005
								</a>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<Mail className="h-10 w-10 text-primary mx-auto" />
								<CardTitle>E-Mail</CardTitle>
								<CardDescription>Schreiben Sie uns</CardDescription>
							</CardHeader>
							<CardContent>
								<a
									href="mailto:info@hsc-transporte.de"
									className="text-primary font-medium hover:underline"
								>
									info@hsc-transporte.de
								</a>
							</CardContent>
						</Card>

						<Card>
							<CardHeader>
								<MapPin className="h-10 w-10 text-primary mx-auto" />
								<CardTitle>Adresse</CardTitle>
							</CardHeader>
							<CardContent>
								<p className="text-muted-foreground">HSC Transporte</p>
								<p className="text-muted-foreground">Hölderlinstraße 4</p>
								<p className="text-muted-foreground">70794 Filderstadt</p>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>
			<CtaSection />
		</>
	);
}
