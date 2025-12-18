import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "events.json");
  const file = await fs.readFile(filePath, "utf-8");
  const events = JSON.parse(file);

  return NextResponse.json(
    { events },
    {
      headers: {
        "cache-control": "public, max-age=60, stale-while-revalidate=300",
      },
    },
  );
}
