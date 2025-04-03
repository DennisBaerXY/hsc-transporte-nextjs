// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

// Schema zur Validierung der eingehenden Daten
import * as z from "zod";
const contactSchema = z.object({
	name: z.string().min(1, "Name wird benötigt"),
	email: z.string().email("Gültige E-Mail-Adresse erforderlich"),
	phone: z.string().optional(),
	message: z.string().min(1, "Nachricht wird benötigt")
});

export async function POST(request: Request) {
	try {
		// Daten aus dem Request extrahieren
		const body = await request.json();

		// Serverseitige Validierung
		const validation = contactSchema.safeParse(body);
		if (!validation.success) {
			console.error("Validation Error:", validation.error.errors);
			return NextResponse.json(
				{ message: "Ungültige Eingabe.", errors: validation.error.errors },
				{ status: 400 }
			);
		}

		const { name, email, phone, message } = validation.data;

		// E-Mail senden mit der importierten sendMail-Funktion
		await sendMail({
			to: process.env.CONTACT_FORM_RECEIVER_EMAIL!,
			replyTo: email,
			subject: `Neue Kontaktanfrage von ${name} (hsc-transporte.de)`,
			text: `Neue Anfrage von:\nName: ${name}\nEmail: ${email}\nTelefon: ${
				phone || "-"
			}\n\nNachricht:\n${message}`,
			html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #0061a8; border-bottom: 1px solid #eee; padding-bottom: 10px;">Neue Kontaktanfrage über die Webseite</h2>
          
          <h3 style="margin-top: 20px;">Kontaktdaten:</h3>
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 8px;"><strong>Name:</strong> ${name}</li>
            <li style="margin-bottom: 8px;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0061a8;">${email}</a></li>
            <li style="margin-bottom: 8px;"><strong>Telefon:</strong> ${
							phone || "-"
						}</li>
          </ul>
          
          <h3 style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 15px;">Nachricht:</h3>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, "<br>")}
          </div>
          
          <p style="margin-top: 20px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            Diese E-Mail wurde automatisch von der Webseite hsc-transporte.de generiert.
          </p>
        </div>
      `
		});

		return NextResponse.json(
			{ message: "Nachricht erfolgreich gesendet!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Fehler in API Route /api/contact:", error);
		return NextResponse.json(
			{
				message: "Fehler beim Senden der Nachricht.",
				error:
					process.env.NODE_ENV === "development"
						? (error as Error).message
						: undefined
			},
			{ status: 500 }
		);
	}
}
