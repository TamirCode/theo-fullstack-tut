import { createRouteHandler } from "uploadthing/next"
import { ourFileRouter } from "./core"

// Export routes for Next App Router
export const { GET, POST } = createRouteHandler({
	router: ourFileRouter,
})



// $ curl localhost:3000/api/uploadthing
// export function GET() {
// 	return new Response("Hello from GET")
// }