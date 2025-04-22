// src/app/page.tsx
import HeroSection from "./components/sections/HeroSection";
import ServicesOverview from "./components/sections/ServiceOverview";
import WhyUsSection from "./components/sections/WhyUsSection";
import CtaSection from "./components/sections/CtaSection";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Truck, Shield, Clock } from "lucide-react";

export default function HomePage() {
	return (
		<>
			<HeroSection />

			{/* Feature-Bereich mit professionellem Design */}
			<section className="py-16 bg-white">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="text-center mb-12">
						<h2 className="text-2xl font-bold text-primary mb-2">
							Unsere Leistungen
						</h2>
						<div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
						<p className="text-gray-600 max-w-3xl mx-auto">
							Wir bieten Ihnen maßgeschneiderte Transportlösungen für Ihre
							logistischen Anforderungen.
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{/* Feature 1 - Blau */}
						<div className="card-professional p-6 rounded-lg bg-white">
							<div className="mb-4">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<Truck className="text-primary h-6 w-6" />
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-primary-dark">
								Container-Transport
							</h3>
							<p className="text-gray-600">
								Transport von 20', 40' und 45' Containern im gesamten Großraum
								Stuttgart und darüber hinaus.
							</p>
						</div>

						{/* Feature 2 - Rot Akzent */}
						<div className="card-accent p-6 rounded-lg bg-white">
							<div className="mb-4">
								<div className="w-12 h-12 bg-[#cc0000]/10 rounded-lg flex items-center justify-center">
									<svg
										className="text-[#cc0000] h-6 w-6"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
										></path>
									</svg>
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-gray-800">
								Shuttle-Service
							</h3>
							<p className="text-gray-600">
								Effizienter Shuttle-Verkehr zwischen Bahnhöfen, Lagern und Ihren
								Be-/Entladestellen.
							</p>
						</div>

						{/* Feature 3 - Blau */}
						<div className="card-professional p-6 rounded-lg bg-white">
							<div className="mb-4">
								<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
									<Clock className="text-primary h-6 w-6" />
								</div>
							</div>
							<h3 className="text-xl font-semibold mb-3 text-primary-dark">
								Express-Service
							</h3>
							<p className="text-gray-600">
								Schnelle und zuverlässige Transporte bei kurzfristigen oder
								besonders dringenden Aufträgen.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Dezenter Trennbereich */}
			<section className="py-16 bg-gray-100">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="flex flex-col md:flex-row items-center justify-between">
						<div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
							<h2 className="text-2xl font-bold text-primary heading-underline mb-6">
								Warum HSC Transporte?
							</h2>
							<p className="text-gray-700 mb-4">
								Als etabliertes Logistikunternehmen im Raum Stuttgart bieten wir
								seit 2006 professionelle Transportlösungen mit persönlichem
								Service.
							</p>
							<ul className="check-list text-gray-700 mb-6">
								<li className="mb-2">
									Familienbetrieb mit direkten Ansprechpartnern
								</li>
								<li className="mb-2">Moderne und gepflegte Fahrzeugflotte</li>
								<li className="mb-2">Zuverlässige Termineinhaltung</li>
								<li className="mb-2">Erfahrene und qualifizierte Fahrer</li>
							</ul>
							<Button asChild className="btn-primary">
								<Link href="/ueber-uns">Mehr über uns erfahren</Link>
							</Button>
						</div>
						<div className="md:w-1/2">
							<div className="rounded-lg overflow-hidden shadow-md border border-gray-200">
								<Image
									src="/images/hsc-whyus.png"
									alt="HSC Transporte Fahrzeugflotte"
									width={600}
									height={400}
									className="object-cover w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Leistungsversprechen */}
			<section className="py-12 bg-primary text-white">
				<div className="container mx-auto max-w-7xl px-4">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
						<div className="p-4">
							<div className="rounded-full w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-4">
								<Shield className="h-8 w-8" />
							</div>
							<h3 className="text-xl font-semibold mb-2">Zuverlässigkeit</h3>
							<p className="text-white/80">
								Pünktliche Lieferungen und sorgfältiger Umgang mit Ihrer Fracht.
							</p>
						</div>
						<div className="p-4">
							<div className="rounded-full w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-4">
								<svg
									className="h-8 w-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">Erfahrung</h3>
							<p className="text-white/80">
								Über 17 Jahre Branchenerfahrung und fundierte
								Regionalkenntnisse.
							</p>
						</div>
						<div className="p-4">
							<div className="rounded-full w-16 h-16 bg-white/10 flex items-center justify-center mx-auto mb-4">
								<svg
									className="h-8 w-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
									></path>
								</svg>
							</div>
							<h3 className="text-xl font-semibold mb-2">
								Persönlicher Service
							</h3>
							<p className="text-white/80">
								Direkter Kontakt und individuelle Betreuung für jeden Kunden.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Dezente Call-to-Action im Rot des Logos */}
			<section className="py-16 bg-white">
				<div className="container mx-auto max-w-5xl px-4">
					<div className="bg-[#cc0000]-light border border-[#cc0000]/20 rounded-lg p-8 text-center">
						<h2 className="text-2xl font-bold text-gray-800 mb-4">
							Benötigen Sie einen Transport?
						</h2>
						<p className="text-gray-700 mb-6 max-w-2xl mx-auto">
							Kontaktieren Sie uns für ein individuelles Angebot. Unser Team
							steht Ihnen gerne zur Verfügung.
						</p>
						<div className="flex flex-col sm:flex-row justify-center gap-4">
							<Button asChild className="btn-cta">
								<Link href="/preisanfrage">Unverbindliche Anfrage</Link>
							</Button>
							<Button asChild variant="outline" className="border-gray-300">
								<a
									href="tel:+491775104005"
									className="flex items-center justify-center gap-2"
								>
									<svg
										className="h-4 w-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										></path>
									</svg>
									0177-5104005
								</a>
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Dezente Abschluss-CTA */}
			<section className="bg-primary py-12">
				<div className="container mx-auto max-w-7xl px-4 text-center text-white">
					<h2 className="text-2xl font-bold mb-6">
						HSC Transporte – Ihr Partner für zuverlässige Logistik
					</h2>
					<p className="text-white/80 max-w-3xl mx-auto mb-8">
						Profitieren Sie von unserem Erfahrungsschatz und unserem Engagement
						für erstklassigen Service im Transportwesen.
					</p>
					<Button asChild className="bg-white text-primary hover:bg-white/90">
						<Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
					</Button>
				</div>
			</section>
		</>
	);
}
