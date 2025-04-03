// src/app/impressum/page.tsx
import { Metadata } from "next";
import Link from "next/link"; // Import Link for potential internal links

export const metadata: Metadata = {
	title: "Impressum | HSC Transporte",
	description: "Impressum (Anbieterkennzeichnung) der HSC Transporte Webseite"
};

export default function ImpressumPage() {
	return (
		<main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
			<h1 className="mb-6 text-3xl font-bold text-primary md:text-4xl">
				Impressum
			</h1>

			<div className="space-y-8 text-foreground">
				<section>
					<h2 className="mb-3 text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
					<address className="not-italic space-y-1">
						HSC Transporte
						<br />
						<strong className="font-semibold text-destructive">
							Sasa Jocic
						</strong>
						<br />
						Hölderlinstraße 4<br />
						70794 Filderstadt
					</address>
				</section>

				{/* Abschnitt: Kontakt */}
				<section>
					<h2 className="mb-3 text-xl font-semibold">Kontakt</h2>
					<p>
						Telefon:{" "}
						<a href="tel:01775104005" className="text-primary hover:underline">
							0177-5104005
						</a>
					</p>
					<p>
						E-Mail:{" "}
						<a
							href="mailto:info@hsc-transporte.de"
							className="text-primary hover:underline"
						>
							info@hsc-transporte.de
						</a>
					</p>
				</section>

				{/* Abschnitt: Umsatzsteuer-ID */}
				<section>
					<h2 className="mb-3 text-xl font-semibold">Umsatzsteuer-ID</h2>
					<p className="mb-1">
						Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
					</p>
					{/* TODO: Bitte die USt-IdNr. nochmals auf Korrektheit prüfen. */}
					<p className="font-mono">DE237138918</p>
				</section>

				{/* NEU & WICHTIG: Abschnitt zur Online-Streitbeilegung (OS-Plattform)
          und Verbraucherschlichtung (VSBG).
          Fast immer erforderlich, wenn Geschäfte mit Verbrauchern gemacht werden könnten.
         */}

				{/* Abschnitt: Haftungsausschluss */}
				<section>
					<h2 className="mb-3 text-xl font-semibold">
						Haftungsausschluss (Disclaimer)
					</h2>

					<h3 className="mb-2 mt-4 text-lg font-semibold">
						Haftung für Inhalte
					</h3>
					<p className="mb-2">
						Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
						auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
						§§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
						verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
						überwachen oder nach Umständen zu forschen, die auf eine
						rechtswidrige Tätigkeit hinweisen.
					</p>
					<p>
						Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
						Informationen nach den allgemeinen Gesetzen bleiben hiervon
						unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
						Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
						Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
						Inhalte umgehend entfernen.
					</p>

					<h3 className="mb-2 mt-4 text-lg font-semibold">Haftung für Links</h3>
					<p className="mb-2">
						Unser Angebot enthält Links zu externen Websites Dritter, auf deren
						Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
						fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
						verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
						der Seiten verantwortlich. Die verlinkten Seiten wurden zum
						Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
						Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
						erkennbar.
					</p>
					<p>
						Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
						jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
						zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
						derartige Links umgehend entfernen.
					</p>

					<h3 className="mb-2 mt-4 text-lg font-semibold">Urheberrecht</h3>
					<p className="mb-2">
						Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
						diesen Seiten unterliegen dem deutschen Urheberrecht. Die
						Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
						Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
						schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
						Downloads und Kopien dieser Seite sind nur für den privaten, nicht
						kommerziellen Gebrauch gestattet.
					</p>
					<p>
						Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
						wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
						werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
						trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten
						wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
						Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
					</p>
				</section>
			</div>
		</main>
	);
}
