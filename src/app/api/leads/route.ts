import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  // TODO: Integrate with CRM (GoHighLevel, HubSpot, etc.)
  // TODO: Send webhook for speed-to-lead automation
  // TODO: Send email notification
  console.log("New lead received:", body);

  return NextResponse.json({ success: true });
}
