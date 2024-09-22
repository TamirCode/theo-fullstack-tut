import { db } from '~/server/db'

// forces nextjs to treat this page as a dynamic route so data will be updated as expected and bypass nextjs Cache
// https://nextjs.org/docs/basic-features/data-fetching#force-dynamic-routes
export const dynamic = "force-dynamic"

export default async function HomePage() {

	const images = await db.query.images.findMany({
		orderBy: (model, { desc }) => desc(model.id)
	})

	return (
		<main>
			<div className="flex flex-wrap gap-4">
				{
					[...images, ...images, ...images].map((image, index) =>
						<div key={image.id + "-" + index} className="w-48 flex flex-col">
							<img src={image.url} />
							<div>{image.name}</div>
						</div>)
				}
			</div>
		</main>
	)
}
