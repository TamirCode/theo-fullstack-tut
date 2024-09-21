import Link from "next/link"


const mockUrls = [
	"https://utfs.io/f/PSUWmjBduwh1vjZ3UlLNbAGOhHa1UkIBPQRxogTnz476sZ92",
	"https://utfs.io/f/PSUWmjBduwh1etXPIAE8w6cdfFx729nHA05ShTv4EjIBug1M",
	"https://utfs.io/f/PSUWmjBduwh1TgV42bDPJp0obvW8DOh63e4nxHqw17U9mGjc",
	"https://utfs.io/f/PSUWmjBduwh1WmltVGpzHpbmNvRMljAC3sUqB19nGT8FIS5P",
]

const mockImages = mockUrls.map((url, index) => ({
	id: index + 1,
	url
}))

export default function HomePage() {
	return (
		<main>
			<div className="flex flex-wrap gap-4">
				{
					[...mockImages, ...mockImages, ...mockImages].map(image =>
						<div key={image.id} className="w-48">
							<img src={image.url} />
						</div>)
				}
			</div>
		</main>
	)
}
