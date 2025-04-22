"use client"; // WICHTIG! Diese Komponente braucht Client-Interaktivität

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

import Link from "next/link"; // Für Datenschutzlink
import { toast } from "sonner";

// Schema für Validierung mit Zod
const formSchema = z.object({
	name: z
		.string()
		.min(2, { message: "Name muss mindestens 2 Zeichen lang sein." }),
	email: z
		.string()
		.email({ message: "Bitte geben Sie eine gültige E-Mail-Adresse ein." }),
	phone: z.string().optional(),
	message: z
		.string()
		.min(10, { message: "Nachricht muss mindestens 10 Zeichen lang sein." }),
	privacy: z.boolean().refine((val) => val === true, {
		message: "Sie müssen der Datenschutzerklärung zustimmen."
	})
});

export default function ContactForm() {
	const [isLoading, setIsLoading] = useState(false);

	// React Hook Form Setup
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email: "",
			phone: "",
			message: "",
			privacy: false
		}
	});

	// Submit Handler
	async function onSubmit(values: z.infer<typeof formSchema>) {
		setIsLoading(true);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify(values)
			});

			if (!response.ok) {
				throw new Error("Fehler beim Senden der Nachricht.");
			}

			toast.message("Nachricht gesendet!", {
				description: "Vielen Dank, wir werden uns bald bei Ihnen melden."
			});

			form.reset(); // Formular zurücksetzen
		} catch (error) {
			console.error(error);
			toast.error("Fehler beim Senden der Nachricht.", {
				description:
					"Bitte versuchen Sie es später erneut oder rufen Sie uns an."
			});
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className="bg-white rounded-xl shadow-lg p-6 border border-primary/10 relative overflow-hidden">
			{/* Farbiger dekorativer Header */}
			<div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-primary to-[#40a0ff]"></div>

			{/* Dekorativer Eckenakzent */}
			<div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full"></div>

			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="space-y-5 md:space-y-6 relative"
				>
					{/* Name */}
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm md:text-base font-semibold text-slate-700">
									Firma / Name*
								</FormLabel>
								<FormControl>
									<Input
										placeholder="Ihr Name oder Firmenname"
										{...field}
										disabled={isLoading}
										className="text-sm md:text-base h-10 md:h-11 border-slate-300 focus:border-primary"
									/>
								</FormControl>
								<FormMessage className="text-xs md:text-sm" />
							</FormItem>
						)}
					/>
					{/* Email */}
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm md:text-base font-semibold text-slate-700">
									E-Mail*
								</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="ihre@email.de"
										{...field}
										disabled={isLoading}
										className="text-sm md:text-base h-10 md:h-11 border-slate-300 focus:border-primary"
									/>
								</FormControl>
								<FormMessage className="text-xs md:text-sm" />
							</FormItem>
						)}
					/>
					{/* Telefon (Optional) */}
					<FormField
						control={form.control}
						name="phone"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm md:text-base font-semibold text-slate-700">
									Telefon
								</FormLabel>
								<FormControl>
									<Input
										type="tel"
										placeholder="Ihre Telefonnummer"
										{...field}
										disabled={isLoading}
										className="text-sm md:text-base h-10 md:h-11 border-slate-300 focus:border-primary"
									/>
								</FormControl>
								<FormMessage className="text-xs md:text-sm" />
							</FormItem>
						)}
					/>
					{/* Nachricht */}
					<FormField
						control={form.control}
						name="message"
						render={({ field }) => (
							<FormItem>
								<FormLabel className="text-sm md:text-base font-semibold text-slate-700">
									Ihre Nachricht / Anfrage*
								</FormLabel>
								<FormControl>
									<Textarea
										placeholder="Beschreiben Sie kurz Ihr Anliegen..."
										className="resize-none text-sm md:text-base min-h-32 border-slate-300 focus:border-primary"
										{...field}
										rows={4}
										disabled={isLoading}
									/>
								</FormControl>
								<FormMessage className="text-xs md:text-sm" />
							</FormItem>
						)}
					/>
					{/* Datenschutz Checkbox */}
					<FormField
						control={form.control}
						name="privacy"
						render={({ field }) => (
							<FormItem className="space-y-2 bg-slate-50 p-3 rounded-md border border-slate-200">
								<div className="flex items-top gap-2">
									<Checkbox
										checked={field.value}
										onCheckedChange={field.onChange}
										id="privacy-checkbox"
										className="mt-1 border-slate-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
									/>
									<label
										htmlFor="privacy-checkbox"
										className="text-sm cursor-pointer text-slate-700"
									>
										Ich habe die{" "}
										<Link
											href="/datenschutz"
											target="_blank"
											className="text-primary hover:underline font-medium"
										>
											Datenschutzerklärung
										</Link>{" "}
										gelesen und stimme zu.*
									</label>
								</div>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						disabled={isLoading}
						className="w-full h-11 md:h-12 text-sm md:text-base mt-6 bg-primary hover:bg-primary/90 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
					>
						{isLoading ? (
							<>
								<svg
									className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
								>
									<circle
										className="opacity-25"
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="4"
									></circle>
									<path
										className="opacity-75"
										fill="currentColor"
										d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
									></path>
								</svg>
								Wird gesendet...
							</>
						) : (
							"Anfrage absenden"
						)}
					</Button>

					{/* Zusätzlicher Servicehinweis */}
					<div className="text-xs text-center text-slate-500 mt-4">
						* Pflichtfelder. Wir melden uns innerhalb von 24 Stunden zurück.
					</div>
				</form>
			</Form>
		</div>
	);
}
