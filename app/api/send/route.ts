import { NextResponse } from "next/server";
import { Resend } from "resend";

// Initialize Resend client with your API key
const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder');

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, objective } = await req.json();

    // Validation
    if (!firstName || !lastName || !email || !objective) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    // Send email via Resend
    await resend.emails.send({
      from: "GCX Website <onboarding@resend.dev>", // You can change this
      to: "sokkhann.pol02@gmail.com",
      subject: "New Contact Form Submission",
      text: `
                You have a new message:
                Name: ${firstName} ${lastName}
                Email: ${email}
                Objective:
                ${objective}
            `,
    });

    return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Email sending failed" }, { status: 500 });
  }
}
