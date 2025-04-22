// src/app/components/layout/Footer.tsx
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-gray-900 text-white pt-16 pb-8">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
					{/* Spalte 1: Unternehmen */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">
							HSC Transporte
						</h3>
						<div className="mb-6 text-gray-400 text-sm">
							<p>
								Ihr zuverlässiger Partner für Spedition & Logistik im Raum
								Stuttgart seit 2006.
							</p>
						</div>
					</div>

					{/* Spalte 2: Navigation */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">
							Navigation
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/leistungen"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Leistungen
								</Link>
							</li>
							<li>
								<Link
									href="/ueber-uns"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Über Uns
								</Link>
							</li>
							<li>
								<Link
									href="/kontakt"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					{/* Spalte 3: Rechtliches */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">
							Rechtliches
						</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/impressum"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Impressum
								</Link>
							</li>
							<li>
								<Link
									href="/datenschutz"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Datenschutz
								</Link>
							</li>
							<li>
								<Link
									href="/agb"
									className="text-gray-400 hover:text-white transition-colors"
								>
									AGB
								</Link>
							</li>
						</ul>
					</div>

					{/* Spalte 4: Kontakt */}
					<div>
						<h3 className="text-lg font-semibold mb-4 text-white">Kontakt</h3>
						<address className="not-italic text-sm space-y-1 text-gray-400">
							HSC Transporte
							<br />
							Hölderlinstraße 4
							<br />
							70794 Filderstadt
							<br />
							<div className="flex items-center mt-2 text-gray-300">
								<svg
									className="w-4 h-4 mr-2"
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
								<a
									href="tel:+491775104005"
									className="hover:text-white transition-colors"
								>
									0177 - 510 4005
								</a>
							</div>
							<div className="flex items-center mt-1 text-gray-300">
								<svg
									className="w-4 h-4 mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									></path>
								</svg>
								<a
									href="mailto:info@hsc-transporte.de"
									className="hover:text-white transition-colors"
								>
									info@hsc-transporte.de
								</a>
							</div>
						</address>
					</div>
				</div>

				{/* Footer-Bottom mit Logo-Farben-Akzent */}
				<div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
					<div className="mb-4 md:mb-0 text-sm text-gray-500">
						&copy; {currentYear} HSC Transporte. Alle Rechte vorbehalten.
					</div>
					<div className="h-1 w-24 bg-gradient-to-r from-primary to-[#cc0000] rounded-full"></div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
