"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST || "smtp.gmail.com",
    port: Number(process.env.EMAIL_SERVER_PORT) || 587,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER || "",
        pass: process.env.EMAIL_PASSWORD || "",
    },
});

export type MailData = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export async function sendMessage(mailData: MailData) {
    const { name, email, message, subject } = mailData;

    if (!name || !email || !message) {
        throw new Error("Please fill out all fields.");
    }

    try {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            throw new Error("Please provide a valid email address.");
        }

        // Define the email options
        const mailOptions = {
            from: email,
            to: process.env.RECIPIENT_EMAIL || "dharsubhadeep5@gmail.com",
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: message,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #4a90e2; color: white; padding: 20px; text-align: center;">
        <h2 style="margin: 0;">📬 New Message from Your Portfolio</h2>
      </div>
      <div style="padding: 20px;">
        <p style="margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
        ${subject
                    ? `<p style="margin-bottom: 10px;"><strong>Subject:</strong> ${subject}</p>`
                    : ""
                }
        <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
        <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
        <p style="white-space: pre-line;">${message}</p>
      </div>
      <div style="background-color: #f5f5f5; padding: 15px; font-size: 12px; text-align: center; color: #777;">
        This message was sent via your portfolio contact form.
      </div>
    </div>
  </div>
      `,
        };

        await transporter.sendMail(mailOptions);
        console.log("[Contact] Message sent successfully from:", {
            name,
            email,
        });

        return {
            ok: true,
            message: `Thanks ${name}, I'll get back to you at ${email} soon!`,
        };
    } catch (error) {
        console.error("[Contact] Error sending message:", error);
        throw new Error("Failed to send message. Please try again or contact me directly via email.");
    }
}