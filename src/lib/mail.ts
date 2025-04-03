// lib/mail.ts
import nodemailer from "nodemailer";

// Interface für die E-Mail-Daten, jetzt mit optionalem replyTo
type EmailPayload = {
	to: string;
	subject: string;
	text: string;
	html: string;
	replyTo?: string;
};

/**
 * Erstellt und konfiguriert den Nodemailer Transporter basierend auf Umgebungsvariablen.
 * Wirft einen Fehler, wenn notwendige Konfigurationsvariablen fehlen.
 */
const getTransporter = () => {
	const nodeEnv = process.env.NODE_ENV || "production";

	if (nodeEnv === "development") {
		// --- ENTWICKLUNGSUMGEBUNG: Ethereal ---
		// Logging hier beibehalten für Debugging
		console.log("INFO (Dev): Verwende Ethereal für E-Mail-Transport.");
		if (!process.env.ETHEREAL_EMAIL || !process.env.ETHEREAL_PASSWORD) {
			throw new Error(
				"FEHLER: ETHEREAL_EMAIL und ETHEREAL_PASSWORD Umgebungsvariablen sind im Entwicklungsmodus erforderlich."
			);
		}
		return nodemailer.createTransport({
			host: process.env.ETHEREAL_HOST || "smtp.ethereal.email",
			port: Number(process.env.ETHEREAL_PORT) || 587,
			auth: {
				user: process.env.ETHEREAL_EMAIL,
				pass: process.env.ETHEREAL_PASSWORD
			}
		});
	} else {
		// --- PRODUKTIONSUMGEBUNG (oder andere): Konfigurierter SMTP-Server ---
		// KEIN unnötiges Info-Logging mehr hier
		if (
			!process.env.SMTP_HOST ||
			!process.env.SMTP_USER ||
			!process.env.SMTP_PASSWORD
		) {
			// Kritischer Konfigurationsfehler -> Fehler werfen (wird in sendMail gefangen)
			throw new Error(
				"FEHLER: SMTP_HOST, SMTP_USER und SMTP_PASSWORD Umgebungsvariablen sind für den Produktions-E-Mail-Versand erforderlich."
			);
		}

		return nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT) || 587,
			secure: process.env.SMTP_SECURE?.toLowerCase() === "true",
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASSWORD
			}
		});
	}
};

/**
 * Sendet eine E-Mail unter Verwendung des konfigurierten Transporters.
 * Reduziertes Logging im Produktionsbetrieb.
 *
 * @param data Die E-Mail-Daten (Empfänger, Betreff, Inhalt, optional replyTo).
 * @returns Ein Promise, das ein Objekt mit `{ success: boolean, messageId?: string, error?: string }` zurückgibt.
 */
export async function sendMail(
	data: EmailPayload
): Promise<{ success: boolean; messageId?: string; error?: string }> {
	let transporter;
	try {
		transporter = getTransporter();
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		// Wichtig: Fehler beim Erstellen des Transporters immer loggen!
		console.error(
			"FEHLER: E-Mail-Transporter konnte nicht erstellt werden:",
			errorMessage
		);
		return {
			success: false,
			error: `Konfigurationsfehler des Mailservers: ${errorMessage}`
		};
	}

	const senderEmail = process.env.SMTP_FROM_EMAIL;
	const senderName = process.env.SMTP_FROM_NAME || "HSC Transporte Webseite";

	if (!senderEmail) {
		// Wichtig: Fehlende Absenderadresse immer loggen!
		console.error(
			"FEHLER: SMTP_FROM_EMAIL Umgebungsvariable ist nicht gesetzt. E-Mail kann nicht gesendet werden."
		);
		return {
			success: false,
			error: "Server-Konfigurationsfehler: Absender-E-Mail-Adresse fehlt."
		};
	}

	const mailOptions = {
		from: `"${senderName}" <${senderEmail}>`,
		to: data.to,
		subject: data.subject,
		text: data.text,
		html: data.html,
		replyTo: data.replyTo
	};

	try {
		const info = await transporter.sendMail(mailOptions);

		// Erfolgs-Logging nur noch in Entwicklungsumgebung
		if (process.env.NODE_ENV === "development") {
			console.log(
				`INFO (Dev): E-Mail erfolgreich gesendet an ${data.to}. Message ID: ${info.messageId}`
			);
			const etherealUrl = nodemailer.getTestMessageUrl(info);
			if (etherealUrl) {
				console.log(`INFO (Dev): Ethereal Vorschau URL: ${etherealUrl}`);
			}
		}
		// KEIN Erfolgs-Logging mehr im Produktionsbetrieb

		return { success: true, messageId: info.messageId };
	} catch (error: unknown) {
		const errorMessage = error instanceof Error ? error.message : String(error);
		// Wichtig: Fehler beim Senden immer loggen!
		console.error(
			`FEHLER: Fehler beim Senden der E-Mail an ${data.to}:`,
			errorMessage,
			error
		);
		return {
			success: false,
			error: `Fehler beim Senden der E-Mail: ${errorMessage}`
		};
	}
}
