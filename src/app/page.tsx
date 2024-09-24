import { SignedIn, SignedOut } from '@clerk/nextjs'
import { getMyImages } from '~/server/queries'

// forces nextjs to treat this page as a dynamic route so data will be updated as expected and bypass nextjs Cache
// https://nextjs.org/docs/basic-features/data-fetching#force-dynamic-routes
export const dynamic = "force-dynamic"


async function Images() {

	const images = await getMyImages()

	return (
		<div className="flex flex-wrap gap-4">
			{
				images.map(image =>
					<div key={image.id} className="w-48 flex flex-col">
						<img src={image.url} />
						<div>{image.name}</div>
					</div>)
			}
		</div>
	)
}
export default async function HomePage() {


	return (
		<main>
			<SignedOut>
				<div className="h-full w-full text-2xl text-center">
					Please sign in
				</div>
			</SignedOut>
			<SignedIn>
				<Images />
			</SignedIn>
		</main>
	)
}
