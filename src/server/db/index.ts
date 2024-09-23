// import { drizzle } from 'drizzle-orm/vercel-postgres'
// import { sql } from "@vercel/postgres"
import * as schema from "./schema"

// Use this object to send drizzle queries to your DB
// export const db = drizzle(sql, { schema })



import { neon } from '@neondatabase/serverless'
import { drizzle } from 'drizzle-orm/neon-http'

const sql = neon(process.env.POSTGRES_URL!)
export const db = drizzle(sql, { schema })