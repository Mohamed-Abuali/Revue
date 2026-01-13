import { NextResponse } from "next/server";
import { scanProject } from "@/lib/ats";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { path } = body;

    if (!path) {
      return NextResponse.json({ error: "Path is required" }, { status: 400 });
    }

    console.log(`Scanning project at: ${path}`);
    const issues = scanProject(path);
    
    return NextResponse.json({ success: true, issues });
  } catch (error) {
    console.error("Scan failed:", error);
    return NextResponse.json({ error: "Scan failed", details: String(error) }, { status: 500 });
  }
}