// lib/mail.ts
import nodemailer from "nodemailer";

type EmailPayload = {
	to: string;
	subject: string;
	text: string;
	html: string;
};

// Erstelle den Transporter für Nodemailer
const getTransporter = () => {
	// Wenn wir uns in der Entwicklungsumgebung befinden, verwenden wir Ethereal für Testzwecke
	if (process.env.NODE_ENV === "development") {
		return nodemailer.createTransport({
			host: "smtp.ethereal.email",
			port: 587,

			auth: {
				user: process.env.ETHEREAL_EMAIL,
				pass: process.env.ETHEREAL_PASSWORD
			}
		});
	}

	// mail gun für dev

	// Produktionsumgebung: Verwende die tatsächlichen SMTP-Einstellungen
	return nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: Number(process.env.SMTP_PORT) || 587,
		secure: process.env.SMTP_SECURE === "true",
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASSWORD
		}
	});
};

export async function sendMail(data: EmailPayload) {
	const transporter = getTransporter();

	// E-Mail-Senderadresse aus der Umgebungsvariable oder Fallback
	const sender = process.env.SMTP_FROM_EMAIL || "info@hsc-transporte.de";
	const senderName = process.env.SMTP_FROM_NAME || "HSC Transporte Webseite";

	try {
		const info = await transporter.sendMail({
			from: `"${senderName}" <${sender}>`,
			to: data.to,
			subject: data.subject,
			text: data.text,
			html: data.html,
			// Optional: Füge eine Antwort-Adresse hinzu
			replyTo:
				data.to === process.env.CONTACT_FORM_RECEIVER_EMAIL
					? data.html.match(/mailto:(.*?)"/)?.[1] || sender
					: undefined
		});

		console.log(`E-Mail gesendet: ${info.messageId}`);

		// Für Entwicklungsumgebung: URL zum Vorschau der E-Mail in Ethereal
		if (process.env.NODE_ENV === "development" && info.messageId) {
			console.log(`Ethereal URL: ${nodemailer.getTestMessageUrl(info)}`);
		}

		return { success: true, messageId: info.messageId };
	} catch (error) {
		console.error("Fehler beim Senden der E-Mail:", error);
		if (error instanceof Error) {
			throw new Error(`Fehler beim Senden der E-Mail: ${error.message}`);
		} else {
			throw new Error("Fehler beim Senden der E-Mail: Unbekannter Fehler");
		}
	}
}
