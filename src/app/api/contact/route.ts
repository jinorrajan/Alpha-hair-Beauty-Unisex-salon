import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, branch, message, channel, subscribe } = body;

    if (!name) {
      return NextResponse.json(
        { error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (channel === "email" && !email) {
      return NextResponse.json(
        { error: "Please provide your email address." },
        { status: 400 }
      );
    }

    const selectedBranch = branch || "Chromepet";
    const contactChannel = channel || "email";

    // Format professional inquiry summary
    const inquiryPayload = {
      recipient: "alphahairandbeautyunisexsaloon@gmail.com",
      timestamp: new Date().toISOString(),
      channel: contactChannel,
      clientDetails: {
        name,
        email: email || "Not provided",
        phone: phone || "Not provided",
        branch: selectedBranch,
        message: message || "General Appointment Inquiry",
        subscribeToSpecials: !!subscribe,
      },
    };

    console.log(`=== NEW SALON APPOINTMENT / CONTACT INQUIRY [${contactChannel.toUpperCase()}] ===`);
    console.log(JSON.stringify(inquiryPayload, null, 2));

    // Support optional Resend or Nodemailer if API keys are configured in environment
    if (process.env.RESEND_API_KEY) {
      try {
        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Alpha Salon Inquiries <onboarding@resend.dev>",
            to: ["alphahairandbeautyunisexsaloon@gmail.com"],
            subject: `[${contactChannel === "whatsapp" ? "WhatsApp Lead" : "Email Inquiry"}] ${selectedBranch}: ${name}`,
            html: `
              <h2>New Client Inquiry (${contactChannel === "whatsapp" ? "WhatsApp" : "Email"})</h2>
              <p><strong>Preferred Branch:</strong> ${selectedBranch}</p>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
              <p><strong>Email:</strong> ${email || "Not provided"}</p>
              <p><strong>Channel Chosen:</strong> ${contactChannel}</p>
              <p><strong>Message:</strong></p>
              <p>${(message || "General Appointment Inquiry").replace(/\n/g, "<br/>")}</p>
              <p><strong>Newsletter / Offers:</strong> ${subscribe ? "Yes" : "No"}</p>
            `,
          }),
        });
        if (!res.ok) {
          console.warn("Resend API responded with error:", await res.text());
        }
      } catch (err) {
        console.warn("Could not dispatch via Resend API:", err);
      }
    }

    return NextResponse.json({
      success: true,
      channel: contactChannel,
      message: `Inquiry registered successfully!`,
    });
  } catch (error) {
    console.error("Contact Form API Error:", error);
    return NextResponse.json(
      { error: "Failed to process message. Please try again or call us directly." },
      { status: 500 }
    );
  }
}

