// src/app/components/sections/QuoteRequestForm.tsx
"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { toast } from "sonner";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select"; // Select für Container

// Erweitertes Schema für Preisanfrage
const quoteFormSchema = z.object({
	// Transport Details
	startLocation: z
		.string()
		.min(3, { message: "Bitte Startort angeben (PLZ oder Bahnhof)." }),
	endLocation: z
		.string()
		.min(3, { message: "Bitte Zielort angeben (PLZ oder Bahnhof)." }),
	containerType: z.string({
		required_error: "Bitte Containergröße/Typ auswählen."
	}),
	transportType: z.string({ required_error: "Bitte Transportart auswählen." }), // Oneway, Rundlauf, Shuttle?
	desiredDate: z.string().optional(), // Optionales Datum
	weightKg: z.number().positive().optional(), // Optionales Gewicht
	remarks: z.string().optional(), // Zusätzliche Bemerkungen

	// Kontaktdaten (ähnlich wie ContactForm)
	firstName: z.string().min(2, { message: "Vorname benötigt." }),
	lastName: z.string().min(2, { message: "Nachname benötigt." }),
	company: z.string().optional(),
	email: z.string().email({ message: "Gültige E-Mail benötigt." }),
	phone: z.string().optional(),
	privacy: z
		.boolean()
		.refine((val) => val === true, { message: "Zustimmung erforderlich." })
});

// Container-Optionen
const containerOptions = [
	"20'",
	"40'",
	"45'",
	"40' HC",
	"45' HC",
	"20' Reefer",
	"40' Reefer",
	"OpenTop",
	"Andere"
];
const transportTypeOptions = [
	"Oneway",
	"Rundlauf",
	"Shuttle",
	"Unbekannt/Flexibel"
];

export default function QuoteRequestForm() {
	const [isLoading, setIsLoading] = useState(false);

	const form = useForm<z.infer<typeof quoteFormSchema>>({
		resolver: zodResolver(quoteFormSchema),
		defaultValues: {
			startLocation: "",
			endLocation: "",
			// containerType: undefined, // Wird durch Select gesteuert
			// transportType: undefined,
			desiredDate: "",
			// weightKg: undefined,
			remarks: "",
			firstName: "",
			lastName: "",
			company: "",
			email: "",
			phone: "",
			privacy: false
		}
	});

	async function onSubmit(values: z.infer<typeof quoteFormSchema>) {
		setIsLoading(true);
		try {
			// An eine neue API-Route oder die bestehende mit Kennzeichnung senden
			const response = await fetch("/api/quote", {
				// NEUE API ROUTE
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(values)
			});

			if (!response.ok) throw new Error("Fehler beim Senden der Anfrage.");

			toast("Anfrage erfolgreich gesendet!", {
				description:
					"Vielen Dank, wir erstellen Ihr Angebot und melden uns bald."
			});

			form.reset();
		} catch (error) {
			console.error(error);
			toast.error("Fehler beim Senden der Anfrage.", {
				description:
					"Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt."
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
				<h3 className="text-lg font-semibold border-b pb-2 mb-4">
					Transportdetails
				</h3>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Start Location */}
					<FormField
						control={form.control}
						name="startLocation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Startort*</FormLabel>
								<FormControl>
									<Input placeholder="PLZ / Ort / Bahnhof" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* End Location */}
					<FormField
						control={form.control}
						name="endLocation"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Zielort*</FormLabel>
								<FormControl>
									<Input placeholder="PLZ / Ort / Bahnhof" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Container Type */}
					<FormField
						control={form.control}
						name="containerType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Container Typ/Größe*</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Bitte auswählen" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{containerOptions.map((opt) => (
											<SelectItem key={opt} value={opt}>
												{opt}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Transport Type */}
					<FormField
						control={form.control}
						name="transportType"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Transportart*</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder="Bitte auswählen" />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										{transportTypeOptions.map((opt) => (
											<SelectItem key={opt} value={opt}>
												{opt}
											</SelectItem>
										))}
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Desired Date */}
					<FormField
						control={form.control}
						name="desiredDate"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Wunschdatum/-zeitraum</FormLabel>
								<FormControl>
									<Input placeholder="z.B. KW 15, asap" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					{/* Weight */}
					<FormField
						control={form.control}
						name="weightKg"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Gewicht (ca. in kg)</FormLabel>
								<FormControl>
									<Input
										type="number"
										placeholder="z.B. 15000"
										{...field}
										onChange={(event) => field.onChange(+event.target.value)}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{/* Remarks */}
				<FormField
					control={form.control}
					name="remarks"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Bemerkungen</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Zusätzliche Informationen (z.B. Gefahrgut, spezielle Anforderungen)"
									className="resize-none"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>

				<h3 className="text-lg font-semibold border-b pb-2 mb-4 pt-6">
					Ihre Kontaktdaten
				</h3>
				{/* Contact Fields (similar to ContactForm) */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<FormField
						control={form.control}
						name="firstName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Vorname*</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="lastName"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Nachname*</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="company"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Firma</FormLabel>
								<FormControl>
									<Input {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>E-Mail*</FormLabel>
								<FormControl>
									<Input type="email" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Telefon</FormLabel>
								<FormControl>
									<Input type="tel" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				{/* Privacy Checkbox */}
				<FormField
					control={form.control}
					name="privacy"
					render={({ field }) => (
						<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
								/>
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel>
									Ich habe die{" "}
									<Link
										href="/datenschutz"
										className="text-primary hover:underline"
										target="_blank"
									>
										Datenschutzerklärung
									</Link>{" "}
									gelesen und stimme zu.*
								</FormLabel>
								<FormMessage />
							</div>
						</FormItem>
					)}
				/>

				<Button type="submit" disabled={isLoading} className="w-full">
					{isLoading ? "Sende..." : "Angebot anfordern"}
				</Button>
			</form>
		</Form>
	);
}
