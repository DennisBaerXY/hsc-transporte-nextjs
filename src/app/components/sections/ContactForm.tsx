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
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-4 md:space-y-6"
			>
				{/* Name */}
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-sm md:text-base">
								Firma / Name*
							</FormLabel>
							<FormControl>
								<Input
									placeholder="Ihr Name oder Firmenname"
									{...field}
									disabled={isLoading}
									className="text-sm md:text-base h-9 md:h-10"
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
							<FormLabel className="text-sm md:text-base">E-Mail*</FormLabel>
							<FormControl>
								<Input
									type="email"
									placeholder="ihre@email.de"
									{...field}
									disabled={isLoading}
									className="text-sm md:text-base h-9 md:h-10"
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
							<FormLabel className="text-sm md:text-base">Telefon</FormLabel>
							<FormControl>
								<Input
									type="tel"
									placeholder="Ihre Telefonnummer"
									{...field}
									disabled={isLoading}
									className="text-sm md:text-base h-9 md:h-10"
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
							<FormLabel className="text-sm md:text-base">
								Ihre Nachricht / Anfrage*
							</FormLabel>
							<FormControl>
								<Textarea
									placeholder="Beschreiben Sie kurz Ihr Anliegen..."
									className="resize-none text-sm md:text-base min-h-32"
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
						<FormItem className="flex flex-row items-start space-x-2 md:space-x-3 space-y-0 rounded-md border p-3 md:p-4">
							<FormControl>
								<Checkbox
									checked={field.value}
									onCheckedChange={field.onChange}
									disabled={isLoading}
								/>
							</FormControl>
							<div className="space-y-1 leading-none">
								<FormLabel className="text-xs md:text-sm">
									Ich habe die{" "}
									<Link
										href="/datenschutz"
										className="text-blue-600 hover:underline"
										target="_blank"
									>
										Datenschutzerklärung
									</Link>{" "}
									gelesen und stimme zu.*
								</FormLabel>
								<FormMessage className="text-xs md:text-sm" />
							</div>
						</FormItem>
					)}
				/>

				<Button
					type="submit"
					disabled={isLoading}
					className="w-full h-9 md:h-10 text-sm md:text-base mt-4"
				>
					{isLoading ? "Sende..." : "Anfrage absenden"}
				</Button>
			</form>
		</Form>
	);
}
