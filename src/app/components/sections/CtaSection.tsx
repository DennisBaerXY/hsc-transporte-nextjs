// src/app/components/sections/CtaSection.tsx
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { PhoneCall, Truck } from "lucide-react";

const CtaSection = () => {
	return (
		<section className="py-16 sm:py-20 bg-gray-100 border-t border-gray-200">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
				<div className="bg-white rounded-lg shadow-md overflow-hidden">
					<div className="grid grid-cols-1 lg:grid-cols-2">
						{/* Inhaltsbereich */}
						<div className="p-8 lg:p-12">
							<h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
								Ihr Transport ist bei uns in sicheren Händen
							</h2>

							<div className="w-16 h-1 bg-primary mb-6"></div>

							<p className="text-gray-600 text-lg mb-8">
								Ob Container-Transport, Komplettladung oder kurzfristige
								Lieferung – wir bringen Ihre Fracht pünktlich und zuverlässig
								ans Ziel. Familiengeführt im Großraum Stuttgart.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Button asChild className="btn-primary">
									<Link
										href="/preisanfrage"
										className="flex items-center gap-2"
									>
										<Truck className="h-5 w-5" />
										<span>Frachtanfrage stellen</span>
									</Link>
								</Button>
								<Button
									asChild
									variant="outline"
									className="border-gray-300 text-gray-700 hover:bg-gray-50"
								>
									<a
										href="tel:+491775104005"
										className="flex items-center gap-2"
									>
										<PhoneCall className="h-5 w-5" />
										<span>0177 - 510 4005</span>
									</a>
								</Button>
							</div>

							{/* Vertrauenselemente */}
							<div className="mt-8 pt-6 border-t border-gray-200">
								<div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-500">
									<div className="flex items-center">
										<svg
											className="w-5 h-5 mr-2 text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
											></path>
										</svg>
										<span>Kompetente Beratung</span>
									</div>
									<div className="flex items-center">
										<svg
											className="w-5 h-5 mr-2 text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
											></path>
										</svg>
										<span>Flexible Terminplanung</span>
									</div>
									<div className="flex items-center">
										<svg
											className="w-5 h-5 mr-2 text-primary"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
											></path>
										</svg>
										<span>Transparente Preise</span>
									</div>
								</div>
							</div>
						</div>

						{/* Bildbereich */}
						<div className="bg-primary-dark relative hidden lg:block">
							<div className="absolute inset-0 bg-opacity-70 bg-primary">
								<div className="absolute inset-0 opacity-10">
									<svg width="100%" height="100%" fill="none">
										<defs>
											<pattern
												id="grid-pattern"
												width="40"
												height="40"
												patternUnits="userSpaceOnUse"
											>
												<path
													d="M0 0 H40 V40 H0 Z"
													fill="none"
													stroke="currentColor"
													strokeWidth="1"
												></path>
											</pattern>
										</defs>
										<rect
											width="100%"
											height="100%"
											fill="url(#grid-pattern)"
										/>
									</svg>
								</div>

								<div className="absolute inset-0 flex items-center justify-center text-white">
									<div className="p-12 text-center">
										<div className="inline-block p-3 rounded-full bg-white/10 mb-6">
											<svg
												className="w-12 h-12"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="1.5"
													d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
												></path>
											</svg>
										</div>
										<h3 className="text-2xl font-bold mb-3">
											Termintreue & Sicherheit
										</h3>
										<p className="text-white/80">
											Wir verstehen, wie wichtig Zuverlässigkeit in der
											Logistikkette ist. Vertrauen Sie auf unsere Erfahrung und
											Präzision.
										</p>

										<div className="mt-8 py-4 border-t border-white/20 text-white/70">
											<p className="text-lg font-bold">
												Seit 2006 erfolgreich im Einsatz
											</p>
										</div>

										{/* Rotes Element nur als kleiner Akzent */}
										<div className="mt-6">
											<span className="px-3 py-1 bg-[#cc0000] text-white text-sm font-medium rounded-md">
												ISO 9001 zertifiziert
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CtaSection;
