import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mailer"; // Beispiel-Funktion für E-Mail Versand

// Schema zur Validierung der eingehenden Daten (optional, aber empfohlen)
import * as z from "zod";
const contactSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	phone: z.string().optional(),
	message: z.string().min(1)
});

export async function POST(request: Request) {
	try {
		const body = await request.json();

		// Serverseitige Validierung (optional, da Client bereits validiert)
		const validation = contactSchema.safeParse(body);
		if (!validation.success) {
			console.error("Validation Error:", validation.error.errors);
			return NextResponse.json(
				{ message: "Ungültige Eingabe." },
				{ status: 400 }
			);
		}

		const { name, email, phone, message } = validation.data;

		// Hier E-Mail senden Logik einfügen
		// Beispiel mit einer hypothetischen sendMail Funktion
		await sendMail({
			to: process.env.CONTACT_FORM_RECEIVER_EMAIL, // Empfänger aus Umgebungsvariable
			subject: `Neue Kontaktanfrage von ${name} (hsc-transporte.de)`,
			text: `Neue Anfrage von:\nName: ${name}\nEmail: ${email}\nTelefon: ${
				phone || "-"
			}\n\nNachricht:\n${message}`,
			html: `<p>Neue Anfrage von:</p>
               <ul>
                 <li><strong>Name:</strong> ${name}</li>
                 <li><strong>Email:</strong> <a href="mailto:${email}">${email}</a></li>
                 <li><strong>Telefon:</strong> ${phone || "-"}</li>
               </ul>
               <p><strong>Nachricht:</strong></p>
               <p>${message.replace(/\n/g, "<br>")}</p>` // Newlines in HTML umwandeln
		});

		return NextResponse.json(
			{ message: "Nachricht erfolgreich gesendet!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Fehler in API Route /api/contact:", error);
		return NextResponse.json(
			{ message: "Fehler beim Senden der Nachricht." },
			{ status: 500 }
		);
	}
}
