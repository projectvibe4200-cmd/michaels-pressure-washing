import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service || !message) {
      return Response.json(
        { error: "Please complete all required fields." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Michael's Pressure Washing <onboarding@resend.dev>",
      to: ["projectvibe4200@gmail.com"],
      subject: `New Quote Request from ${name}`,
      text: `
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Project Details:
${message}
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Quote submission error:", error);

    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}