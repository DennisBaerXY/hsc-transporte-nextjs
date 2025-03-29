// src/app/api/quote/route.ts
import { NextResponse } from "next/server";
import { sendMail } from "@/lib/mail";

import * as z from "zod";

// Passendes Schema für die Server-Validierung
const quoteSchema = z.object({
	startLocation: z.string().min(1),
	endLocation: z.string().min(1),
	containerType: z.string().min(1),
	transportType: z.string().min(1),
	desiredDate: z.string().optional(),
	weightKg: z.number().optional(),
	remarks: z.string().optional(),
	firstName: z.string().min(1),
	lastName: z.string().min(1),
	company: z.string().optional(),
	email: z.string().email(),
	phone: z.string().optional()
});

export async function POST(request: Request) {
	try {
		const body = await request.json();
		const validation = quoteSchema.safeParse(body);

		if (!validation.success) {
			console.error("Quote Validation Error:", validation.error.errors);
			return NextResponse.json(
				{ message: "Ungültige Eingabedaten." },
				{ status: 400 }
			);
		}

		const data = validation.data;
		const recipientEmail = process.env.CONTACT_FORM_RECEIVER_EMAIL; // Oder eine spezielle E-Mail für Angebote?
		if (!recipientEmail) {
			console.error("Empfänger E-Mail nicht konfiguriert!");
			throw new Error("Server-Konfigurationsfehler.");
		}

		// E-Mail mit allen Details formatieren
		const subject = `Preisanfrage Containertransport von ${data.firstName} ${
			data.lastName
		} ${data.company ? "(" + data.company + ")" : ""}`;
		const textBody = `Neue Preisanfrage für Containertransport:

Transportdetails:
--------------------
Startort: ${data.startLocation}
Zielort: ${data.endLocation}
Container Typ/Größe: ${data.containerType}
Transportart: ${data.transportType}
Wunschdatum: ${data.desiredDate || "-"}
Gewicht (ca.): ${data.weightKg ? data.weightKg + " kg" : "-"}
Bemerkungen: ${data.remarks || "-"}

Kontaktdaten:
--------------------
Name: ${data.firstName} ${data.lastName}
Firma: ${data.company || "-"}
Email: ${data.email}
Telefon: ${data.phone || "-"}
`;
		// HTML Body ähnlich formatieren...
		const htmlBody = `<h2>Neue Preisanfrage für Containertransport</h2>
        <h3>Transportdetails</h3>
        <ul>
            <li><strong>Startort:</strong> ${data.startLocation}</li>
            <li><strong>Zielort:</strong> ${data.endLocation}</li>
            <li><strong>Container Typ/Größe:</strong> ${data.containerType}</li>
             <li><strong>Transportart:</strong> ${data.transportType}</li>
            <li><strong>Wunschdatum:</strong> ${data.desiredDate || "-"}</li>
            <li><strong>Gewicht (ca.):</strong> ${
							data.weightKg ? data.weightKg + " kg" : "-"
						}</li>
            <li><strong>Bemerkungen:</strong> ${data.remarks || "-"}</li>
        </ul>
        <h3>Kontaktdaten</h3>
        <ul>
            <li><strong>Name:</strong> ${data.firstName} ${data.lastName}</li>
            <li><strong>Firma:</strong> ${data.company || "-"}</li>
            <li><strong>Email:</strong> <a href="mailto:${data.email}">${
			data.email
		}</a></li>
            <li><strong>Telefon:</strong> ${data.phone || "-"}</li>
        </ul>`;

		await sendMail({
			to: recipientEmail,
			subject: subject,
			text: textBody,
			html: htmlBody
		});

		return NextResponse.json(
			{ message: "Anfrage erfolgreich gesendet!" },
			{ status: 200 }
		);
	} catch (error) {
		console.error("Fehler in API Route /api/quote:", error);
		return NextResponse.json(
			{ message: "Fehler beim Senden der Anfrage auf dem Server." },
			{ status: 500 }
		);
	}
}
