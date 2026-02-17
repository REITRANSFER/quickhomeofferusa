import { NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/0o1uWDm0YePDYTD1tGtf/webhook-trigger/220338a9-1ad7-430c-8527-aaa382e28576";

export async function POST(request: Request) {
  const body = await request.json();

  // Forward lead to GoHighLevel
  try {
    await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: body.name || "",
        email: body.email || "",
        phone: body.phone || "",
        address: body.address || "",
        condition: body.condition || "",
        timeline: body.timeline || "",
        message: body.message || "",
        source: body.source || "multi-step-form",
        page_url: body.page_url || "",
      }),
    });
  } catch (err) {
    console.error("GHL webhook failed:", err);
  }

  return NextResponse.json({ success: true });
}
