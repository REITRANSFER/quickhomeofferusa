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
        reason: body.reason || "",
        condition: body.condition || "",
        timeline: body.timeline || "",
        message: body.message || "",
        source: body.source || "multi-step-form",
        page_url: body.page_url || "",
        // Property details (from second form)
        bedrooms: body.bedrooms || "",
        bathrooms: body.bathrooms || "",
        sqft: body.sqft || "",
        year_built: body.year_built || "",
        garage: body.garage || "",
        occupied: body.occupied || "",
        mortgage_balance: body.mortgage_balance || "",
        asking_price: body.asking_price || "",
        additional_notes: body.additional_notes || "",
        // UTM tracking
        utm_source: body.utm_source || "",
        utm_medium: body.utm_medium || "",
        utm_campaign: body.utm_campaign || "",
        utm_content: body.utm_content || "",
        utm_term: body.utm_term || "",
        fbclid: body.fbclid || "",
        landing_page: body.landing_page || "",
      }),
    });
  } catch (err) {
    console.error("GHL webhook failed:", err);
  }

  return NextResponse.json({ success: true });
}
