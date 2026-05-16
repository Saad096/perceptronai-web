import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

/**
 * Serves the most recent resume PDF placed in /public/resume.
 * If multiple PDFs exist, returns the alphabetically last one.
 * Override with RESUME_FILENAME env (filename inside /public/resume).
 */
export async function GET() {
  try {
    const dir = path.join(process.cwd(), "public", "resume");
    const files = await fs.readdir(dir);
    const pdfs = files.filter((f) => f.toLowerCase().endsWith(".pdf")).sort();
    const preferred = process.env.RESUME_FILENAME;
    const target = (preferred && pdfs.includes(preferred)) ? preferred : pdfs[pdfs.length - 1];
    if (!target) {
      return NextResponse.json({ error: "No resume available." }, { status: 404 });
    }
    const data = await fs.readFile(path.join(dir, target));
    const body = new Uint8Array(data);
    return new NextResponse(body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="${target}"`,
        "Cache-Control": "public, max-age=3600",
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume not available." }, { status: 404 });
  }
}
