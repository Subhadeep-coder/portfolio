import { MailData, sendMessage } from "@/lib/mail";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, subject, message } = body as MailData;
        const res = await sendMessage({ name, email, subject, message });
        return NextResponse.json({
            message: res.message
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message: "Failed to send contact mail!"
        }, { status: 500 });
    }
}