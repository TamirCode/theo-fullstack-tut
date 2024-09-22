import { db } from '~/server/db'

// forces nextjs to treat this page as a dynamic route so data will be updated as expected
export const dynamic = "force-dynamic"

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

export default async function HomePage() {

	const posts = await db.query.posts.findMany()
	console.log(posts)
	return (
		<main>
			<div className="flex flex-wrap gap-4">
				{
					posts.map(post =>
						<div key={post.id}>{post.name}</div>)
				}
				{
					[...mockImages, ...mockImages, ...mockImages].map((image, index) =>
						<div key={image.id + "-" + index} className="w-48">
							<img src={image.url} />
						</div>)
				}
			</div>
		</main>
	)
}
