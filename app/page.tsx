import { sql } from "@vercel/postgres";

export default function Home() {
	const query = sql`SELECT * FROM test_table`;
	console.log(query);

	return <></>;
}
