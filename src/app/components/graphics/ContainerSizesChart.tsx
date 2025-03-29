// src/app/components/graphics/ContainerSizesChart.tsx
import React from "react";

const ContainerSizesChart = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 800 500"
			className="w-full h-auto"
		>
			{/* Hintergrund */}
			<rect width="800" height="500" fill="#f8fafc" rx="8" ry="8" />

			{/* Titel */}
			<text
				x="400"
				y="50"
				fontFamily="Arial, sans-serif"
				fontSize="24"
				fontWeight="bold"
				textAnchor="middle"
				fill="#1e293b"
			>
				Container-Größenvergleich
			</text>

			{/* Erklärung */}
			<text
				x="400"
				y="80"
				fontFamily="Arial, sans-serif"
				fontSize="14"
				textAnchor="middle"
				fill="#64748b"
			>
				Maßstabsgetreue Darstellung der gängigen Container-Größen
			</text>

			{/* Grundlinie */}
			<line
				x1="50"
				y1="400"
				x2="750"
				y2="400"
				stroke="#cbd5e1"
				strokeWidth="3"
			/>

			{/* Maßstabsleiste */}
			<line
				x1="50"
				y1="420"
				x2="250"
				y2="420"
				stroke="#94a3b8"
				strokeWidth="2"
			/>
			<line
				x1="50"
				y1="415"
				x2="50"
				y2="425"
				stroke="#94a3b8"
				strokeWidth="2"
			/>
			<line
				x1="250"
				y1="415"
				x2="250"
				y2="425"
				stroke="#94a3b8"
				strokeWidth="2"
			/>
			<text
				x="150"
				y="440"
				fontFamily="Arial, sans-serif"
				fontSize="12"
				textAnchor="middle"
				fill="#64748b"
			>
				10 Fuß (3.05m)
			</text>

			{/* 20' Standard Container */}
			<g>
				<rect
					x="100"
					y="280"
					width="150"
					height="120"
					fill="#dbeafe"
					stroke="#3b82f6"
					strokeWidth="3"
				/>
				<rect x="100" y="280" width="150" height="10" fill="#3b82f6" />
				<text
					x="175"
					y="330"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					20&apos; Standard
				</text>
				<text
					x="175"
					y="350"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					L: 6.06m
				</text>
				<text
					x="175"
					y="370"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					H: 2.59m
				</text>
			</g>

			{/* 40' Standard Container */}
			<g>
				<rect
					x="300"
					y="280"
					width="300"
					height="120"
					fill="#dbeafe"
					stroke="#3b82f6"
					strokeWidth="3"
				/>
				<rect x="300" y="280" width="300" height="10" fill="#3b82f6" />
				<text
					x="450"
					y="330"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					40&apos; Standard
				</text>
				<text
					x="450"
					y="350"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					L: 12.19m
				</text>
				<text
					x="450"
					y="370"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					H: 2.59m
				</text>
			</g>

			{/* 45' Standard Container */}
			<g>
				<rect
					x="650"
					y="280"
					width="100"
					height="120"
					fill="#dbeafe"
					stroke="#3b82f6"
					strokeWidth="3"
				/>
				<rect x="650" y="280" width="100" height="10" fill="#3b82f6" />
				<text
					x="700"
					y="330"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					45&apos;
				</text>
				<text
					x="700"
					y="350"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					+0.9m
				</text>
			</g>

			{/* High Cube Container (über 40' Standard) */}
			<g>
				<rect
					x="300"
					y="220"
					width="300"
					height="60"
					fill="#bfdbfe"
					stroke="#3b82f6"
					strokeWidth="3"
					rx="2"
					ry="2"
					strokeDasharray="5,3"
				/>
				<text
					x="450"
					y="250"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					High Cube: +0.3m Höhe
				</text>
			</g>

			{/* Reefer Container Beispiel */}
			<g>
				<rect
					x="100"
					y="150"
					width="150"
					height="120"
					fill="#bfdbfe"
					stroke="#3b82f6"
					strokeWidth="3"
				/>
				<rect x="100" y="150" width="150" height="10" fill="#2563eb" />
				<rect
					x="100"
					y="150"
					width="30"
					height="120"
					fill="#93c5fd"
					stroke="#3b82f6"
					strokeWidth="1"
				/>
				<text
					x="175"
					y="190"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					Reefer Container
				</text>
				<text
					x="175"
					y="210"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					Kühlcontainer mit
				</text>
				<text
					x="175"
					y="230"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					Kühlaggregat
				</text>
			</g>

			{/* Open Top Container Beispiel */}
			<g>
				<rect
					x="300"
					y="150"
					width="150"
					height="120"
					fill="#bfdbfe"
					stroke="#3b82f6"
					strokeWidth="3"
				/>
				<path
					d="M300,150 L450,150 L450,160 L435,170 L315,170 L300,160 Z"
					fill="#93c5fd"
					stroke="#3b82f6"
				/>
				<line
					x1="315"
					y1="170"
					x2="435"
					y2="170"
					stroke="#3b82f6"
					strokeWidth="2"
					strokeDasharray="10,5"
				/>
				<text
					x="375"
					y="200"
					fontFamily="Arial, sans-serif"
					fontSize="14"
					fontWeight="bold"
					textAnchor="middle"
					fill="#1e3a8a"
				>
					Open Top
				</text>
				<text
					x="375"
					y="220"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					Container mit
				</text>
				<text
					x="375"
					y="240"
					fontFamily="Arial, sans-serif"
					fontSize="12"
					textAnchor="middle"
					fill="#334155"
				>
					abnehmbarem Dach
				</text>
			</g>

			{/* Legende */}
			<rect
				x="600"
				y="130"
				width="150"
				height="120"
				fill="white"
				stroke="#cbd5e1"
				strokeWidth="1"
				rx="4"
				ry="4"
			/>
			<text
				x="675"
				y="150"
				fontFamily="Arial, sans-serif"
				fontSize="14"
				fontWeight="bold"
				textAnchor="middle"
				fill="#334155"
			>
				Legende
			</text>

			<rect
				x="610"
				y="170"
				width="20"
				height="10"
				fill="#dbeafe"
				stroke="#3b82f6"
				strokeWidth="1"
			/>
			<text
				x="670"
				y="180"
				fontFamily="Arial, sans-serif"
				fontSize="12"
				fill="#64748b"
			>
				Standard Container
			</text>

			<rect
				x="610"
				y="190"
				width="20"
				height="10"
				fill="#bfdbfe"
				stroke="#3b82f6"
				strokeWidth="1"
				strokeDasharray="5,3"
			/>
			<text
				x="670"
				y="200"
				fontFamily="Arial, sans-serif"
				fontSize="12"
				fill="#64748b"
			>
				High Cube (+0.3m)
			</text>

			<rect
				x="610"
				y="210"
				width="20"
				height="10"
				fill="#93c5fd"
				stroke="#3b82f6"
				strokeWidth="1"
			/>
			<text
				x="670"
				y="220"
				fontFamily="Arial, sans-serif"
				fontSize="12"
				fill="#64748b"
			>
				Spezialcontainer
			</text>

			{/* Copyright */}
			<text
				x="400"
				y="480"
				fontFamily="Arial, sans-serif"
				fontSize="10"
				textAnchor="middle"
				fill="#94a3b8"
			>
				© HSC Container Transporte Stuttgart
			</text>
		</svg>
	);
};

export default ContainerSizesChart;
