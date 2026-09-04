import { Header } from "@/components/header";
import { SanityLive } from "@/sanity/lib/live";

export default function FrontendLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-white text-black antialiased">
			<body>
				<section className="bg-white min-h-screen">
					<Header />
					{children}
					<SanityLive />
				</section>
			</body>
		</html>
	);
}
