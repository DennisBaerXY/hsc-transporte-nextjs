// src/app/datenschutz/page.tsx
import { Metadata } from "next";
import Link from "next/link"; // Für interne Links (z.B. Impressum)

export const metadata: Metadata = {
	title: "Datenschutzerklärung | HSC Transporte",
	description:
		"Datenschutzerklärung für die Nutzung der Webseite hsc-transporte.de"
};

export default function DatenschutzPage() {
	const websiteUrl =
		process.env.NEXT_PUBLIC_WEBSITE_URL || "https://www.hsc-transporte.de"; // Lese aus env oder setze Standard
	const impressumPath = "/impressum"; // Passe dies ggf. an
	const datenschutzPath = "/datenschutz"; // Passe dies ggf. an

	return (
		<main className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
			<h1 className="mb-4 text-3xl font-bold text-primary md:text-4xl">
				Datenschutzerklärung
			</h1>
			<p className="mb-8 text-sm text-muted-foreground">
				Stand: 02. April 2025
			</p>

			<div className="space-y-8 text-foreground">
				<p>
					Der Schutz Ihrer personenbezogenen Daten hat für uns höchste
					Priorität. Nachfolgend informieren wir Sie gemäß den Anforderungen der
					Datenschutz-Grundverordnung (DSGVO) und weiterer relevanter
					Datenschutzvorschriften über die Erhebung, Verarbeitung und Nutzung
					personenbezogener Daten im Rahmen der Nutzung unserer Webseite{" "}
					<code className="rounded bg-muted px-1 py-0.5 text-sm">
						hsc-transporte.de
					</code>
					.
				</p>

				{/* Abschnitt 1 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						1. Name und Anschrift des Verantwortlichen
					</h2>
					<p className="mb-2">
						Der Verantwortliche im Sinne der Datenschutz-Grundverordnung (DSGVO)
						sowie sonstiger datenschutzrechtlicher Bestimmungen ist:
					</p>
					<address className="not-italic">
						HSC Transporte
						<br />
						Hölderlinstraße 4
						<br />
						70794 Filderstadt
						<br />
						<br />
						Telefon:{" "}
						<a href="tel:01775104005" className="text-primary hover:underline">
							0177-5104005
						</a>
						<br />
						E-Mail:{" "}
						<a
							href="mailto:info@hsc-transporte.de"
							className="text-primary hover:underline"
						>
							info@hsc-transporte.de
						</a>
						<br />
						Webseite:{" "}
						<a
							href={websiteUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							{websiteUrl}
						</a>
						<br />
						Impressum:{" "}
						<Link href={impressumPath} className="text-primary hover:underline">
							{websiteUrl}
							{impressumPath}
						</Link>
					</address>
				</section>

				{/* Abschnitt 2 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						2. Grundsätze der Datenverarbeitung
					</h2>
					<p>
						Die Verarbeitung personenbezogener Daten der Nutzer unserer Webseite
						erfolgt nach Maßgabe der geltenden Datenschutzvorschriften.
						Personenbezogene Daten werden grundsätzlich nur verarbeitet, soweit
						dies zur Bereitstellung einer funktionsfähigen Webseite sowie
						unserer Inhalte und Leistungen erforderlich ist oder eine
						entsprechende Rechtsgrundlage die Verarbeitung gestattet.
					</p>
				</section>

				{/* Abschnitt 3 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						3. Bereitstellung der Webseite und Erstellung von Server-Logfiles
					</h2>
					<p className="mb-2">
						Bei jedem Zugriff auf unsere Webseite werden durch den
						Internet-Browser des Nutzers automatisiert Daten an den Server
						unserer Webseite gesendet und temporär in Protokolldateien
						(Server-Logfiles) gespeichert. Folgende Daten werden dabei bis zur
						automatisierten Löschung protokolliert:
					</p>
					<ul className="mb-4 ml-6 list-disc space-y-1">
						<li>Browsertyp und -version</li>
						<li>Verwendetes Betriebssystem</li>
						<li>Referrer URL (die zuvor besuchte Webseite)</li>
						<li>Hostname des zugreifenden Endgeräts (IP-Adresse)</li>
						<li>Datum und Uhrzeit der Serveranfrage</li>
					</ul>
					<p className="mb-2">
						Die Verarbeitung dieser Daten erfolgt auf der Rechtsgrundlage des
						Art. 6 Abs. 1 S. 1 lit. f DSGVO. Unser berechtigtes Interesse ergibt
						sich aus folgenden Zwecken:
					</p>
					<ul className="mb-4 ml-6 list-disc space-y-1">
						<li>
							Gewährleistung eines reibungslosen Verbindungsaufbaus der
							Webseite,
						</li>
						<li>Gewährleistung einer komfortablen Nutzung unserer Webseite,</li>
						<li>Auswertung der Systemsicherheit und -stabilität sowie</li>
						<li>zu weiteren administrativen Zwecken.</li>
					</ul>
					<p className="mb-4">
						Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
						nicht vorgenommen. Die Daten in den Logfiles werden spätestens nach
						<strong className="text-destructive">24</strong> Stunden gelöscht
						oder anonymisiert, sofern eine längere Aufbewahrung nicht aus
						Sicherheitsgründen (z.B. zur Aufklärung von Missbrauchs- oder
						Betrugshandlungen) erforderlich ist.
					</p>

					<h3 className="mb-2 mt-6 text-xl font-semibold">
						Hosting via Vercel
					</h3>
					<p className="mb-2">
						Diese Webseite wird bei dem externen Dienstleister Vercel Inc., 340
						S Lemon Ave #4133, Walnut, CA 91789, USA gehostet. Vercel stellt die
						Infrastruktur zur Bereitstellung der Webseite zur Verfügung und
						verarbeitet dabei die oben genannten Server-Logfiles sowie weitere
						Daten, die zur Auslieferung und Sicherheit der Webseite notwendig
						sind. Der Einsatz von Vercel erfolgt im Interesse einer sicheren,
						schnellen und effizienten Bereitstellung unseres Online-Angebots
						(Art. 6 Abs. 1 lit. f DSGVO).
					</p>
					<p className="mb-2">
						Wir haben mit Vercel einen Auftragsverarbeitungsvertrag (Data
						Processing Addendum - DPA) abgeschlossen, der den Anforderungen des
						Art. 28 DSGVO entspricht. Da Vercel ein US-amerikanisches
						Unternehmen ist, können Daten in die USA übermittelt werden. Vercel
						verpflichtet sich im DPA zur Einhaltung europäischer
						Datenschutzstandards durch die Verwendung der
						EU-Standardvertragsklauseln (Standard Contractual Clauses - SCCs).{" "}
					</p>
					<p>
						Weitere Informationen zum Datenschutz bei Vercel finden Sie unter:{" "}
						<a
							href="https://vercel.com/legal/privacy-policy"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://vercel.com/legal/privacy-policy
						</a>{" "}
						und{" "}
						<a
							href="https://vercel.com/legal/dpa"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://vercel.com/legal/dpa
						</a>
						.
					</p>
				</section>

				{/* Abschnitt 4 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						4. Kontaktaufnahme (Kontaktformular und E-Mail)
					</h2>
					<p className="mb-2">
						Auf unserer Webseite stellen wir ein Kontaktformular unter{" "}
						<code className="rounded bg-muted px-1 py-0.5 text-sm">
							/api/contact
						</code>{" "}
						zur Verfügung. Bei Nutzung dieses Formulars werden die vom Nutzer
						eingegebenen Daten an uns übermittelt und verarbeitet. Hierbei
						handelt es sich um:
					</p>
					<ul className="mb-4 ml-6 list-disc space-y-1">
						<li>Name</li>
						<li>E-Mail-Adresse</li>
						<li>Telefonnummer (freiwillige Angabe)</li>
						<li>Inhalt der Nachricht</li>
					</ul>
					<p className="mb-2">
						Alternativ können Sie über die bereitgestellte E-Mail-Adresse
						Kontakt mit uns aufnehmen. In diesem Fall werden die mit Ihrer
						E-Mail übermittelten personenbezogenen Daten verarbeitet.
					</p>
					<p className="mb-2">
						Die Verarbeitung dieser Daten erfolgt zur Bearbeitung Ihrer Anfrage.
						Rechtsgrundlage hierfür ist Art. 6 Abs. 1 S. 1 lit. b DSGVO, sofern
						Ihre Anfrage auf den Abschluss eines Vertrages abzielt, oder Art. 6
						Abs. 1 S. 1 lit. f DSGVO, da wir ein berechtigtes Interesse an der
						effizienten Bearbeitung der an uns gerichteten Anfragen haben.
					</p>
					<p className="mb-2">
						Bei der reinen Nutzung und Absendung des Kontaktformulars werden von
						unserer Seite keine spezifischen Cookies auf Ihrem Endgerät
						gespeichert.
					</p>
					<p>
						Die Daten werden gelöscht, sobald sie für die Erreichung des Zwecks
						ihrer Erhebung nicht mehr erforderlich sind, d.h., wenn die
						jeweilige Konversation mit Ihnen beendet ist und der Sachverhalt
						abschließend geklärt wurde. Gesetzliche Aufbewahrungspflichten
						bleiben hiervon unberührt.
					</p>
				</section>

				{/* Abschnitt 5 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						5. Angebotsanfrageformular
					</h2>
					<p className="mb-2">
						Wir bieten ein Formular unter{" "}
						<code className="rounded bg-muted px-1 py-0.5 text-sm">
							/api/quote
						</code>{" "}
						zur Einholung von Transportangeboten an. Folgende Daten werden bei
						Nutzung dieses Formulars erhoben und verarbeitet:
					</p>
					<ul className="mb-4 ml-6 list-disc space-y-1">
						<li>Startort</li>
						<li>Zielort</li>
						<li>Container Typ/Größe</li>
						<li>Transportart</li>
						<li>Wunschdatum (freiwillige Angabe)</li>
						<li>Gewicht (ca., freiwillige Angabe)</li>
						<li>Bemerkungen (freiwillige Angabe)</li>
						<li>Vorname</li>
						<li>Nachname</li>
						<li>Firma (freiwillige Angabe)</li>
						<li>E-Mail-Adresse</li>
						<li>Telefonnummer (freiwillige Angabe)</li>
					</ul>
					<p className="mb-2">
						Die Verarbeitung dieser Daten erfolgt ausschließlich zum Zweck der
						Erstellung und Übermittlung eines angeforderten Angebots sowie zur
						diesbezüglichen Kommunikation mit Ihnen. Rechtsgrundlage für die
						Verarbeitung ist Art. 6 Abs. 1 S. 1 lit. b DSGVO (Durchführung
						vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person).
					</p>
					<p>
						Die Daten werden gespeichert, solange dies für die
						Angebotserstellung und die Kommunikation erforderlich ist. Kommt
						kein Vertrag zustande, werden die Daten nach Abschluss des
						Anfrageprozesses gelöscht, sofern keine gesetzlichen
						Aufbewahrungspflichten (z.B. aus HGB oder AO) entgegenstehen.
					</p>
				</section>

				{/* Abschnitt 6 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						6. E-Mail-Versanddienstleister (Mailgun)
					</h2>
					<p className="mb-2">
						Für den Versand von E-Mails, die durch Anfragen über unsere
						Formulare (Kontakt, Angebot) generiert werden, setzen wir den
						technischen Dienstleister Mailgun Technologies, Inc., 112 E Pecan St
						#1135, San Antonio, TX 78205, USA (nachfolgend „Mailgun“) ein. Unser
						Code in{" "}
						<code className="rounded bg-muted px-1 py-0.5 text-sm">
							lib/mail.ts
						</code>{" "}
						nutzt nodemailer zur Anbindung an die SMTP-Server von Mailgun.
					</p>
					<p className="mb-2">
						Der Einsatz von Mailgun erfolgt auf Grundlage unserer berechtigten
						Interessen an einem technisch sicheren, zuverlässigen und
						effizienten E-Mail-Versand (Art. 6 Abs. 1 lit. f DSGVO) sowie zur
						Erfüllung (vor-)vertraglicher Pflichten (Art. 6 Abs. 1 lit. b
						DSGVO). Mailgun verarbeitet dabei als Auftragsverarbeiter die
						Inhaltsdaten der E-Mails sowie Metadaten wie Empfänger- und
						Absenderadressen, IP-Adressen der einliefernden Systeme und
						Zeitstempel zur Sicherstellung der Zustellung und zur
						Missbrauchserkennung.
					</p>
					<p className="mb-2">
						Wir haben mit Mailgun einen Auftragsverarbeitungsvertrag (Data
						Processing Addendum - DPA) abgeschlossen, der den Anforderungen des
						Art. 28 DSGVO entspricht.
					</p>
					<p className="mb-2">
						<strong className="font-semibold">Drittlandtransfer:</strong> Da
						Mailgun ein US-amerikanisches Unternehmen ist, erfolgt eine
						Datenübermittlung in die USA. Diese Übermittlung stützt sich auf die
						Standardvertragsklauseln (SCCs) der Europäischen Kommission, die
						Bestandteil des DPAs mit Mailgun sind, um ein angemessenes
						Datenschutzniveau sicherzustellen.{" "}
					</p>
					<p>
						Weitere Informationen zum Datenschutz bei Mailgun finden Sie in
						deren Datenschutzerklärung unter:{" "}
						<a
							href="https://www.mailgun.com/legal/privacy-policy/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://www.mailgun.com/legal/privacy-policy/
						</a>{" "}
						und im DPA unter:{" "}
						<a
							href="https://www.mailgun.com/legal/dpa/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://www.mailgun.com/legal/dpa/
						</a>
						.
					</p>
				</section>

				{/* Abschnitt 7 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						7. Cookies und Einbindung von Diensten Dritter
					</h2>

					<h3 className="mb-2 mt-4 text-xl font-semibold">Cookies</h3>
					<p className="mb-2">
						Wir sind bestrebt, den Einsatz von Cookies auf unserer Webseite zu
						minimieren. Von unserer Seite werden keine Cookies für Zwecke der
						Analyse, des Trackings oder des Marketings gesetzt.
					</p>
					<p className="mb-2">
						Es ist jedoch möglich, dass für die technisch einwandfreie Funktion
						der Webseite (z.B. zur Aufrechterhaltung von Sessions) durch die
						eingesetzte Technologie oder den Hosting-Provider (Vercel) technisch
						notwendige Cookies oder ähnliche Speichertechnologien (z.B. Local
						Storage) zum Einsatz kommen. Die Verarbeitung von Daten durch
						technisch notwendige Cookies/Speicherungen erfolgt auf Grundlage von
						Art. 6 Abs. 1 lit. f DSGVO bzw. § 25 Abs. 2 Nr. 2 TTDSG, da wir ein
						berechtigtes Interesse an der Bereitstellung einer funktionsfähigen
						Webseite haben.
					</p>
					<p className="mb-4">
						Darüber hinaus können durch eingebundene Dienste Dritter (siehe
						unten) Cookies gesetzt werden, worauf wir gesondert hinweisen.
					</p>

					<h3 className="mb-2 mt-6 text-xl font-semibold">
						Einbindung von Google Maps
					</h3>
					<p className="mb-2">
						Auf dieser Webseite nutzen wir das Angebot von Google Maps, um
						geographische Informationen (z.B. unseren Standort) visuell
						darzustellen. Google Maps wird über einen iframe eingebunden. Dieser
						Dienst wird angeboten von Google Ireland Limited, Gordon House,
						Barrow Street, Dublin 4, Irland (für Nutzer aus dem EWR und der
						Schweiz) bzw. Google LLC, 1600 Amphitheatre Parkway, Mountain View,
						CA 94043, USA (für andere Nutzer).
					</p>
					<p className="mb-2">
						Bereits beim Aufruf der Seite, auf der die Google Maps Karte
						eingebunden ist, werden Informationen über Ihre Nutzung unserer
						Webseite (einschließlich Ihrer IP-Adresse) an einen Server von
						Google übertragen und dort gespeichert. Dies kann auch eine
						Übermittlung an Server der Google LLC in den USA beinhalten. Google
						Maps setzt zudem eigene Cookies oder nutzt andere
						Speichertechnologien im Browser des Nutzers, um Einstellungen zu
						speichern und Nutzerdaten zu verarbeiten. Wir haben keinen Einfluss
						auf diese Datenverarbeitung durch Google.
					</p>
					<p className="mb-1">
						<strong className="font-semibold">Zweck:</strong> Darstellung von
						Standortinformationen und Ermöglichung einer interaktiven Karte zur
						besseren Orientierung.
					</p>
					<p className="mb-2">
						<strong className="font-semibold">Rechtsgrundlage:</strong> Die
						Einbindung von Google Maps und die damit verbundene Datenübertragung
						an Google sowie die Speicherung von Informationen auf Ihrem Endgerät
						erfolgen idealerweise nur nach Ihrer ausdrücklichen Einwilligung
						gemäß Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG.{" "}
						<strong className="text-destructive">
							[WICHTIG: Sie müssen technisch sicherstellen, dass die Karte erst
							nach erteilter Einwilligung geladen wird, z.B. durch eine
							Zwei-Klick-Lösung oder eine Consent Management Plattform!]
						</strong>{" "}
						Alternativ könnte die Einbindung auf unser berechtigtes Interesse
						(Art. 6 Abs. 1 lit. f DSGVO) an einer ansprechenden Darstellung
						unseres Standorts gestützt werden; dies ist jedoch angesichts der
						Datenübertragung in die USA und der Nutzung von Cookies durch Google
						rechtlich risikobehafteter und erfordert eine sorgfältige Abwägung.
						Wir empfehlen dringend die Einholung einer Einwilligung.
					</p>
					<p className="mb-2">
						<strong className="font-semibold">Drittlandtransfer:</strong> Für
						Datenübermittlungen in die USA stützt sich Google auf
						Standardvertragsklauseln (SCCs) der Europäischen Kommission und ist
						ggf. unter dem EU-U.S. Data Privacy Framework zertifiziert, um ein
						angemessenes Datenschutzniveau sicherzustellen.
					</p>
					<p>
						<strong className="font-semibold">Weitere Informationen:</strong>{" "}
						Zweck und Umfang der Datenerhebung und die weitere Verarbeitung und
						Nutzung der Daten durch Google sowie Ihre diesbezüglichen Rechte und
						Einstellungsmöglichkeiten zum Schutz Ihrer Privatsphäre entnehmen
						Sie bitte den Datenschutzhinweisen von Google:{" "}
						<a
							href="https://policies.google.com/privacy?hl=de"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://policies.google.com/privacy?hl=de
						</a>{" "}
						sowie den zusätzlichen Nutzungsbedingungen für Google Maps:{" "}
						<a
							href="https://www.google.com/intl/de_US/help/terms_maps/"
							target="_blank"
							rel="noopener noreferrer"
							className="text-primary hover:underline"
						>
							https://www.google.com/intl/de_US/help/terms_maps/
						</a>
						.
					</p>
				</section>

				{/* Abschnitt 8 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						8. Ihre Rechte als betroffene Person
					</h2>
					<p className="mb-2">
						Ihnen stehen als von der Datenverarbeitung betroffene Person
						umfassende Rechte zu:
					</p>
					<ul className="mb-4 ml-6 list-disc space-y-2">
						<li>
							<strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Sie haben das
							Recht, Auskunft über Ihre von uns verarbeiteten personenbezogenen
							Daten zu verlangen.
						</li>
						<li>
							<strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie
							können unverzüglich die Berichtigung unrichtiger oder die
							Vervollständigung Ihrer bei uns gespeicherten personenbezogenen
							Daten verlangen.
						</li>
						<li>
							<strong>
								Recht auf Löschung („Recht auf Vergessenwerden“) (Art. 17
								DSGVO):
							</strong>{" "}
							Sie können die Löschung Ihrer bei uns gespeicherten
							personenbezogenen Daten verlangen, soweit keine vorrangigen Gründe
							(z.B. gesetzliche Aufbewahrungspflichten) entgegenstehen.
						</li>
						<li>
							<strong>
								Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO):
							</strong>{" "}
							Sie können unter bestimmten Voraussetzungen die Einschränkung der
							Verarbeitung Ihrer personenbezogenen Daten verlangen.
						</li>
						<li>
							<strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong>{" "}
							Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen
							und maschinenlesbaren Format zu erhalten oder die Übermittlung an
							einen anderen Verantwortlichen zu fordern.
						</li>
						<li>
							<strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie können aus
							Gründen, die sich aus Ihrer besonderen Situation ergeben,
							jederzeit gegen die Verarbeitung Sie betreffender
							personenbezogener Daten, die aufgrund von Art. 6 Abs. 1 lit. e
							oder f DSGVO erfolgt, Widerspruch einlegen; dies gilt auch für ein
							auf diese Bestimmungen gestütztes Profiling. Werden Ihre Daten zur
							Direktwerbung verarbeitet, haben Sie ein generelles
							Widerspruchsrecht.
						</li>
						<li>
							<strong>
								Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):
							</strong>{" "}
							Eine erteilte Einwilligung (z.B. für Google Maps) können Sie
							jederzeit mit Wirkung für die Zukunft uns gegenüber widerrufen.
						</li>
						<li>
							<strong>
								Beschwerderecht bei einer Aufsichtsbehörde (Art. 77 DSGVO):
							</strong>{" "}
							Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
							über die Verarbeitung Ihrer personenbezogenen Daten durch uns zu
							beschweren.
						</li>
					</ul>
					<p>
						Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an die unter
						Ziffer 1 genannten Kontaktdaten.
					</p>
				</section>

				{/* Abschnitt 9 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">9. Datensicherheit</h2>
					<p>
						Wir treffen angemessene technische und organisatorische
						Sicherheitsmaßnahmen (TOMs) gemäß Art. 32 DSGVO, um Ihre Daten gegen
						unbeabsichtigte oder unrechtmäßige Löschung, Veränderung, Verlust,
						unberechtigte Weitergabe oder unberechtigten Zugang zu schützen.
						Unsere Webseite nutzt aus Sicherheitsgründen und zum Schutz der
						Übertragung vertraulicher Inhalte eine SSL/TLS-Verschlüsselung. Eine
						verschlüsselte Verbindung erkennen Sie an dem „https://“ in der
						Adresszeile Ihres Browsers und an dem Schloss-Symbol.
					</p>
				</section>

				{/* Abschnitt 10 */}
				<section>
					<h2 className="mb-3 text-2xl font-semibold">
						10. Aktualität und Änderung dieser Datenschutzerklärung
					</h2>
					<p className="mb-2">
						Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 02.
						April 2025.
					</p>
					<p>
						Aufgrund der Weiterentwicklung unserer Webseite und Angebote oder
						aufgrund geänderter gesetzlicher bzw. behördlicher Vorgaben kann
						eine Anpassung dieser Datenschutzerklärung erforderlich werden. Die
						jeweils aktuelle Version kann jederzeit auf unserer Webseite unter{" "}
						<Link
							href={datenschutzPath}
							className="text-primary hover:underline"
						>
							{websiteUrl}
							{datenschutzPath}
						</Link>{" "}
						von Ihnen abgerufen und ausgedruckt werden.
					</p>
				</section>
			</div>
		</main>
	);
}
