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
	Icon?: LucideIcon; // Icon als Komponente übergeben
	color?: string; // Optional color for the icon
}

const ServiceCard = ({
	title,
	description,
	Icon,
	color = "#0051a3"
}: ServiceCardProps) => {
	return (
		<Card className="card-colorful flex flex-col h-full transition-all duration-300 border-t-4 hover:shadow-lg">
			<CardHeader className="relative pb-2">
				{Icon && (
					<div
						className="p-3 rounded-full mb-4 w-fit"
						style={{ background: `${color}20` }}
					>
						<Icon className="h-8 w-8" style={{ color: color }} />
					</div>
				)}
				<CardTitle className="relative">
					{title}
					<div
						className="absolute -bottom-3 left-0 w-12 h-1 mt-2"
						style={{ background: color }}
					></div>
				</CardTitle>
			</CardHeader>
			<CardContent className="flex-grow pt-2">
				<CardDescription className="text-base text-foreground/80">
					{description}
				</CardDescription>
			</CardContent>
			<CardFooter className="pt-2">
				<Button
					asChild
					variant="link"
					className="p-0 h-auto font-medium"
					style={{ color: color }}
				>
					<Link href={`/leistungen`} className="group flex items-center">
						Mehr erfahren
						<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
					</Link>
				</Button>
			</CardFooter>
		</Card>
	);
};

export default ServiceCard;
