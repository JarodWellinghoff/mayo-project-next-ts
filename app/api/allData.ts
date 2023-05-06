import { db } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// live build
	// const client = await db.connect();

	// try {
	// 	const result = await client.query("SELECT * FROM test_table");
	// 	const rows = result.rows;
	// 	res.status(200).json(rows);
	// } catch (error) {
	// 	res.status(500).json({ error });
	// }

	// Update the following config object with your local MySQL credentials
	const config = {
		host: "localhost",
		user: "root",
		password: "l9T!88w6VZAr",
		database: "mayo_project_db",
	};

	try {
		const connection = await mysql.createConnection(config);
		const [rows] = await connection.execute("SELECT * FROM test_table");
		await connection.end();

		res.status(200).json(rows);
	} catch (error) {
		res.status(500).json({ error });
	}
}
