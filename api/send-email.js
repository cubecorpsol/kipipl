
export const config = {
  runtime: "nodejs",
};

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  const { name, email, message } = req.body;

  try {

    // SAVE TO GOOGLE SHEET

    await fetch("https://sheetdb.io/api/v1/h5roka0nyaipg", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
"name": String(name),
"email": String(email),
"message": String(message),
"createdAt": new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", }),
        
      }),
    });

    // SEND EMAIL

    await resend.emails.send({

      from: "KIPIPL <onboarding@kipipl.com>",

      to: email,

      subject: "Thank You for Contacting Kannan Blue Metals",

      html: `
        <div style="font-family:Arial;padding:20px">

          <h2>Dear ${name},</h2>

          <p>
            Thank you for contacting
            Kannan Infra Projects India Private Limited.
          </p>

          <p>
            We have successfully received your enquiry.
            Our team will get in touch with you shortly.
          </p>

          <br>

          <p>
            Regards,<br>
            Kannan Infra Projects India Private Limited
          </p>

        </div>
      `,
    });

    return res.status(200).json({
      message: "Email sent successfully",
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      error: error.message,
    });
  }
}
