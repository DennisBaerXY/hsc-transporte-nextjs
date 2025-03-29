// src/app/components/layout/Footer.tsx
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-secondary text-secondary-foreground mt-auto">
			<div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
					{/* Spalte 1: Unternehmen */}
					<div>
						<h3 className="text-lg font-semibold mb-3">HSC Transporte</h3>
						<p className="text-sm">
							Ihr zuverlässiger Partner für Spedition & Logistik im Raum
							Stuttgart.
						</p>
						{/* Optional: Social Media Icons */}
					</div>

					{/* Spalte 2: Navigation */}
					<div>
						<h3 className="text-lg font-semibold mb-3">Navigation</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/leistungen"
									className="hover:text-primary transition-colors"
								>
									Leistungen
								</Link>
							</li>
							<li>
								<Link
									href="/ueber-uns"
									className="hover:text-primary transition-colors"
								>
									Über Uns
								</Link>
							</li>
							<li>
								<Link
									href="/kontakt"
									className="hover:text-primary transition-colors"
								>
									Kontakt
								</Link>
							</li>
						</ul>
					</div>

					{/* Spalte 3: Rechtliches */}
					<div>
						<h3 className="text-lg font-semibold mb-3">Rechtliches</h3>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/impressum"
									className="hover:text-primary transition-colors"
								>
									Impressum
								</Link>
							</li>
							<li>
								<Link
									href="/datenschutz"
									className="hover:text-primary transition-colors"
								>
									Datenschutz
								</Link>
							</li>
						</ul>
					</div>

					{/* Spalte 4: Kontakt */}
					<div>
						<h3 className="text-lg font-semibold mb-3">Kontakt</h3>
						<address className="not-italic text-sm space-y-1">
							HSC Transporte
							<br />
							[Ihre Straße + Nr.]
							<br />
							[Ihre PLZ] Stuttgart
							<br />
							Tel:{" "}
							<a
								href="tel:+49711XXXXXX"
								className="hover:text-primary transition-colors"
							>
								[Ihre Telefonnummer]
							</a>
							<br />
							Mail:{" "}
							<a
								href="mailto:info@hsc-transporte.de"
								className="hover:text-primary transition-colors"
							>
								[Ihre E-Mail-Adresse]
							</a>
						</address>
					</div>
				</div>

				<Separator className="bg-muted-foreground/20" />

				<div className="text-center text-sm text-muted-foreground pt-8">
					&copy; {currentYear} HSC Transporte. Alle Rechte vorbehalten.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
