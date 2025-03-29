// src/app/components/sections/ServiceCard.tsx
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react"; // Beispiel Icon

interface ServiceCardProps {
	title: string;
	description: string;
	slug: string;
	Icon?: LucideIcon; // Icon als Komponente übergeben
}

const ServiceCard = ({ title, description, slug, Icon }: ServiceCardProps) => {
	return (
		<Card className="flex flex-col h-full">
			<CardHeader>
				{Icon && <Icon className="h-8 w-8 mb-4 text-primary" />}
				<CardTitle>{title}</CardTitle>
			</CardHeader>
			<CardContent className="flex-grow">
				<CardDescription>{description}</CardDescription>
			</CardContent>
			<CardFooter>
				<Button asChild variant="link" className="p-0 h-auto">
					<Link href={`/leistungen/${slug}`}>
						Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
