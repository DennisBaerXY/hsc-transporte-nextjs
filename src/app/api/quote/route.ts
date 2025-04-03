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
	phone: z.string().optional(),
	privacy: z.boolean()
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

		// E-Mail Betreff
		const subject = `Preisanfrage Containertransport von ${data.firstName} ${
			data.lastName
		} ${data.company ? "(" + data.company + ")" : ""}`;

		// Plain-Text Version der E-Mail
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

		// HTML Version der E-Mail mit Logo
		const htmlBody = `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Neue Preisanfrage</title>
    <style>
        body {
            font-family: Arial, Helvetica, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
        }
        .email-container {
            border: 1px solid #ddd;
            border-radius: 5px;
            overflow: hidden;
        }
        .email-header {
            background-color: #0000a0;
            color: white;
            padding: 15px 20px;
            display: flex;
            align-items: center;
        }
        .logo {
            margin-right: 15px;
        }
        .email-header h1 {
            margin: 0;
            font-size: 20px;
        }
        .email-content {
            padding: 20px;
        }
        .section {
            margin-bottom: 25px;
        }
        .section h2 {
            color: #0000a0;
            font-size: 18px;
            border-bottom: 1px solid #eee;
            padding-bottom: 8px;
            margin-top: 0;
        }
        .data-table {
            width: 100%;
            border-collapse: collapse;
        }
        .data-table td {
            padding: 8px;
            vertical-align: top;
        }
        .data-table tr {
            border-bottom: 1px solid #f0f0f0;
        }
        .data-table tr:last-child {
            border-bottom: none;
        }
        .label {
            font-weight: bold;
            width: 40%;
        }
        .value {
            width: 60%;
        }
        .remarks {
            background-color: #f9f9f9;
            padding: 10px;
            border-radius: 5px;
            margin-top: 5px;
        }
        .email-footer {
            background-color: #f5f5f5;
            padding: 15px 20px;
            font-size: 12px;
            color: #666;
            text-align: center;
        }
        a {
            color: #0000a0;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <img src="https://hsc-transporte.de/images/logo-hsc-remade.png" alt="HSC Transporte Logo" width="125" height="60" style="display: block; background-color: white; padding: 5px; border-radius: 4px;">
            <h1 style="margin-left: 15px;">Neue Preisanfrage für Containertransport</h1>
        </div>
        <div class="email-content">
            <div class="section">
                <h2>Transportdetails</h2>
                <table class="data-table">
                    <tr>
                        <td class="label">Startort:</td>
                        <td class="value">${data.startLocation}</td>
                    </tr>
                    <tr>
                        <td class="label">Zielort:</td>
                        <td class="value">${data.endLocation}</td>
                    </tr>
                    <tr>
                        <td class="label">Container Typ/Größe:</td>
                        <td class="value">${data.containerType}</td>
                    </tr>
                    <tr>
                        <td class="label">Transportart:</td>
                        <td class="value">${data.transportType}</td>
                    </tr>
                    <tr>
                        <td class="label">Wunschdatum:</td>
                        <td class="value">${data.desiredDate || "-"}</td>
                    </tr>
                    <tr>
                        <td class="label">Gewicht (ca.):</td>
                        <td class="value">${
													data.weightKg ? data.weightKg + " kg" : "-"
												}</td>
                    </tr>
                </table>
                
                <div style="margin-top: 15px;">
                    <div class="label">Bemerkungen:</div>
                    <div class="remarks">${
											data.remarks ? data.remarks.replace(/\n/g, "<br>") : "-"
										}</div>
                </div>
            </div>
            
            <div class="section">
                <h2>Kontaktdaten</h2>
                <table class="data-table">
                    <tr>
                        <td class="label">Name:</td>
                        <td class="value">${data.firstName} ${
			data.lastName
		}</td>
                    </tr>
                    <tr>
                        <td class="label">Firma:</td>
                        <td class="value">${data.company || "-"}</td>
                    </tr>
                    <tr>
                        <td class="label">E-Mail:</td>
                        <td class="value"><a href="mailto:${data.email}">${
			data.email
		}</a></td>
                    </tr>
                    <tr>
                        <td class="label">Telefon:</td>
                        <td class="value">${
													data.phone
														? `<a href="tel:${data.phone}">${data.phone}</a>`
														: "-"
												}</td>
                    </tr>
                </table>
            </div>
        </div>
        <div class="email-footer">
            <p>Diese E-Mail wurde automatisch vom Anfrage-Formular auf <a href="https://hsc-transporte.de">hsc-transporte.de</a> generiert.</p>
            <p style="margin-top: 10px;">
                <strong>HSC Transporte</strong> | Hölderlinstraße 4 | 70794 Filderstadt | Tel: 0177-5104005
            </p>
        </div>
    </div>
</body>
</html>
`;

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
