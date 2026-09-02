import nodemailer from "nodemailer";
import mongoose from "mongoose";

// 🍃 MongoDB Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    message: String,
    date: { type: Date, default: Date.now },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// 🔌 Database Connection (Cached)
async function connectToDatabase() {
    if (mongoose.connections[0].readyState) {
        return;
    }

    let uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined");
    }

    uri = uri.replace(/^["']|["']$/g, '').trim();

    try {
        await mongoose.connect(uri, {
            bufferCommands: false,
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw error;
    }
}

// 🛡️ Security Helper: HTML Escaping
function escapeHtml(str) {
    if (!str) return "";
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

// 🛡️ Email Validation Helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(String(email).toLowerCase());
}

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const rawName = req.body.name || "";
    const rawEmail = req.body.email || "";
    const rawSubject = req.body.subject || "";
    const rawMessage = req.body.message || "";

    // 1. Input Sanitization & Validation
    const name = escapeHtml(rawName.trim());
    const email = rawEmail.trim();
    const subject = escapeHtml(rawSubject.trim());
    const message = escapeHtml(rawMessage.trim());

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Please fill out all required fields." });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: "Please enter a valid email address." });
    }

    const currentYear = new Date().getFullYear();
    const formattedTimestamp = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium"
    });

    const portfolioUrl = "https://portfolio-ashwin-marvel.vercel.app";
    const linkedinUrl = "https://www.linkedin.com/in/ashwin-kumar-s-5053bb272/";
    const instagramUrl = "https://www.instagram.com/ash_brave_2004/?hl=en-gb";
    const xUrl = "https://x.com/ash_marvel_15";

    try {
        // 2. Database Record Save (Non-fatal if fails)
        try {
            await connectToDatabase();
            const newContact = new Contact({
                name: rawName,
                email: rawEmail,
                subject: rawSubject,
                message: rawMessage
            });
            await newContact.save();
            console.log("📝 Message saved to database");
        } catch (dbError) {
            console.warn("⚠️ Database Save Warning (Non-fatal):", dbError.message);
        }

        // 3. Setup Email Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const ownerEmail = process.env.EMAIL_USER;

        // 4. Send Owner Notification Email (Critical)
        const ownerMailSubject = `NEW PORTFOLIO INQUIRY — ${name}`;
        const ownerMailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { background-color: #07070a; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #0f1017; border: 1px solid #1e293b; border-radius: 16px; padding: 32px; }
        .header { border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px; }
        .tag { font-family: monospace; font-size: 10px; color: #38bdf8; background: rgba(56, 189, 248, 0.1); border: 1px solid rgba(56, 189, 248, 0.2); padding: 4px 10px; border-radius: 99px; text-transform: uppercase; font-weight: bold; }
        .title { font-size: 22px; font-weight: 800; color: #ffffff; margin-top: 12px; margin-bottom: 4px; }
        .meta-table { width: 100%; border-collapse: collapse; margin-top: 16px; margin-bottom: 24px; }
        .meta-table td { padding: 10px 12px; border-bottom: 1px solid #1e293b; font-size: 13px; }
        .meta-label { font-family: monospace; font-size: 10px; color: #94a3b8; text-transform: uppercase; width: 100px; }
        .meta-val { color: #f8fafc; font-weight: 600; }
        .msg-box { background: #08080c; border: 1px solid #334155; border-radius: 12px; padding: 20px; margin-top: 16px; font-size: 14px; line-height: 1.6; color: #e2e8f0; white-space: pre-wrap; }
        .btn { display: inline-block; background: #38bdf8; color: #000000; text-decoration: none; font-weight: 700; font-size: 13px; font-family: monospace; text-transform: uppercase; padding: 12px 28px; border-radius: 99px; margin-top: 24px; }
        .footer { border-top: 1px solid #1e293b; margin-top: 32px; padding-top: 16px; font-size: 11px; color: #64748b; font-family: monospace; text-align: center; }
    </style>
</head>
<body>
    <div class="card">
        <div class="header">
            <span class="tag">NEW CONTACT FORM SUBMISSION</span>
            <div class="title">Incoming Visitor Message</div>
        </div>

        <table class="meta-table">
            <tr>
                <td class="meta-label">NAME</td>
                <td class="meta-val">${name}</td>
            </tr>
            <tr>
                <td class="meta-label">EMAIL</td>
                <td class="meta-val"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
                <td class="meta-label">SUBJECT</td>
                <td class="meta-val">${subject}</td>
            </tr>` : ""}
            <tr>
                <td class="meta-label">TIMESTAMP</td>
                <td class="meta-val">${formattedTimestamp}</td>
            </tr>
        </table>

        <div style="font-family: monospace; font-size: 10px; color: #94a3b8; text-transform: uppercase;">MESSAGE CONTENT:</div>
        <div class="msg-box">${message}</div>

        <div style="text-align: center;">
            <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" class="btn">REPLY TO ${name} →</a>
        </div>

        <div class="footer">
            Portfolio Contact System · ${ownerEmail}
        </div>
    </div>
</body>
</html>
`;

        try {
            await transporter.sendMail({
                from: `"Portfolio Contact Form" <${ownerEmail}>`,
                to: ownerEmail,
                replyTo: email,
                subject: ownerMailSubject,
                html: ownerMailHtml,
                text: `New Inquiry from ${name} (${email}):\n\nSubject: ${subject || "N/A"}\nTimestamp: ${formattedTimestamp}\n\nMessage:\n${rawMessage}`,
            });
            console.log("✉️ Owner Notification Sent");
        } catch (emailError) {
            console.error("❌ Owner Email Error:", emailError);
            throw new Error(`Owner Notification Failed: ${emailError.message}`);
        }

        // 5. Send Auto-Reply Visitor Email (Non-Critical)
        const visitorMailSubject = subject ? `Re: ${subject} · Ashwin Kumar S` : `Thanks for reaching out, ${name} — Ashwin Kumar S`;
        const visitorMailHtml = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <style>
        body { background-color: #07070a; color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 20px; }
        .card { max-width: 600px; margin: 0 auto; background: #0b0c10; border: 1px solid #1e293b; border-radius: 20px; padding: 36px 32px; shadow: 0 20px 50px rgba(0,0,0,0.8); }
        .header { text-align: center; border-bottom: 1px solid #1e293b; padding-bottom: 24px; margin-bottom: 28px; }
        .brand { font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; font-family: monospace; }
        .brand-sub { font-size: 10px; color: #38bdf8; font-family: monospace; letter-spacing: 2px; text-transform: uppercase; margin-top: 4px; font-weight: 700; }
        .greeting { font-size: 18px; font-weight: 700; color: #ffffff; margin-bottom: 12px; }
        .body-text { font-size: 14px; line-height: 1.7; color: #cbd5e1; font-weight: 300; margin-bottom: 24px; }
        .confirm-box { background: #050508; border: 1px solid #1e293b; border-radius: 14px; padding: 20px; margin-bottom: 28px; }
        .confirm-label { font-family: monospace; font-size: 10px; color: #38bdf8; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
        .confirm-row { font-size: 12px; color: #94a3b8; margin-bottom: 6px; }
        .confirm-val { color: #f1f5f9; font-size: 13px; font-weight: 500; margin-top: 2px; }
        .links-title { font-family: monospace; font-size: 10px; color: #94a3b8; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; text-align: center; font-weight: 700; }
        .links-grid { text-align: center; margin-bottom: 28px; }
        .social-link { display: inline-block; padding: 8px 16px; margin: 4px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; color: #f8fafc; font-size: 12px; font-family: monospace; text-decoration: none; font-weight: 600; }
        .btn-primary { display: inline-block; background: #38bdf8; color: #000000; text-decoration: none; font-weight: 800; font-size: 12px; font-family: monospace; text-transform: uppercase; padding: 14px 32px; border-radius: 99px; letter-spacing: 1px; }
        .btn-secondary { display: inline-block; background: rgba(255,255,255,0.05); color: #f1f5f9; border: 1px solid rgba(255,255,255,0.15); text-decoration: none; font-weight: 700; font-size: 12px; font-family: monospace; text-transform: uppercase; padding: 12px 28px; border-radius: 99px; margin-top: 10px; }
        .footer { border-top: 1px solid #1e293b; margin-top: 32px; padding-top: 20px; font-size: 11px; color: #64748b; text-align: center; font-family: monospace; line-height: 1.6; }
    </style>
</head>
<body>
    <div class="card">
        <!-- Header -->
        <div class="header">
            <div class="brand">ASHWIN KUMAR S</div>
            <div class="brand-sub">SOFTWARE ENGINEER · FULL STACK · AI/ML · CLOUD</div>
        </div>

        <!-- Greeting -->
        <div class="greeting">Hi ${name},</div>
        <div class="body-text">
            Thanks for reaching out! I've received your message and will review it shortly.
        </div>

        <!-- Message Confirmation Box -->
        <div class="confirm-box">
            <div class="confirm-label">● MESSAGE RECEIVED</div>
            ${subject ? `<div class="confirm-row">SUBJECT: <span class="confirm-val">${subject}</span></div>` : ""}
            <div class="confirm-row">SUMMARY:</div>
            <div class="confirm-val" style="font-size: 13px; line-height: 1.5; color: #e2e8f0;">"${message.length > 280 ? message.substring(0, 280) + '...' : message}"</div>
        </div>

        <div class="body-text" style="margin-bottom: 24px;">
            I'll get back to you as soon as possible. For professional inquiries, I usually review messages and respond directly by email.
        </div>

        <!-- Social Connect Grid -->
        <div class="links-title">// CONNECT WITH ME</div>
        <div class="links-grid">
            <a href="${linkedinUrl}" class="social-link" target="_blank">LinkedIn →</a>
            <a href="${instagramUrl}" class="social-link" target="_blank">Instagram →</a>
            <a href="${xUrl}" class="social-link" target="_blank">X / Twitter →</a>
            <a href="${portfolioUrl}" class="social-link" target="_blank">Portfolio →</a>
        </div>

        <!-- Primary CTA Buttons -->
        <div style="text-align: center; margin-bottom: 24px;">
            <a href="${portfolioUrl}" class="btn-primary" target="_blank">VIEW MY PORTFOLIO →</a>
            <br>
            <a href="${linkedinUrl}" class="btn-secondary" target="_blank">CONNECT ON LINKEDIN →</a>
        </div>

        <!-- Footer -->
        <div class="footer">
            <strong style="color: #cbd5e1;">Ashwin Kumar S</strong> · Software Engineer<br>
            Full Stack · AI/ML · Cloud Systems<br><br>
            © ${currentYear} Ashwin Kumar S. All rights reserved.<br>
            <span style="font-size: 10px; color: #475569;">This message was automatically generated because you submitted the contact form on my portfolio.</span>
        </div>
    </div>
</body>
</html>
`;

        try {
            console.log(`📧 Attempting Auto-Reply to: ${email}`);
            await transporter.sendMail({
                from: `"Ashwin Kumar S" <${ownerEmail}>`,
                to: email,
                replyTo: ownerEmail,
                subject: visitorMailSubject,
                html: visitorMailHtml,
                text: `Hi ${name},\n\nThanks for reaching out! I've received your message and will review it shortly.\n\nMessage Received:\n${rawMessage}\n\nI'll get back to you as soon as possible.\n\nConnect with me:\nLinkedIn: ${linkedinUrl}\nInstagram: ${instagramUrl}\nX: ${xUrl}\nPortfolio: ${portfolioUrl}\n\nBest regards,\nAshwin Kumar S\nSoftware Engineer`,
            });
            console.log("✉️ Visitor Auto-Reply Sent");
        } catch (autoReplyError) {
            console.warn("⚠️ Auto-Reply Failed (Non-fatal):", autoReplyError.message);
        }

        return res.status(200).json({ message: "Message sent and saved successfully!" });

    } catch (error) {
        console.error("API Error:", error);
        return res.status(500).json({ error: "Failed to send message. Please try again or contact me directly by email." });
    }
}
