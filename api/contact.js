import nodemailer from "nodemailer";
import mongoose from "mongoose";

// 🍃 MongoDB Schema
const ContactSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String,
    date: { type: Date, default: Date.now },
});

// Prevent model recompilation check
const Contact = mongoose.models.Contact || mongoose.model("Contact", ContactSchema);

// 🔌 Database Connection (Cached)
let isConnected = false;

async function connectToDatabase() {
    if (mongoose.connections[0].readyState) {
        return;
    }

    let uri = process.env.MONGODB_URI;
    if (!uri) {
        throw new Error("MONGODB_URI is not defined");
    }

    // Clean connection string (remove quotes/whitespace)
    uri = uri.replace(/^["']|["']$/g, '').trim();

    try {
        await mongoose.connect(uri, {
            bufferCommands: false, // Fail fast if not connected
        });
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        throw error; // Rethrow to stop execution
    }
}

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {
        // 1. Connect to DB and Save
        try {
            await connectToDatabase();
            const newContact = new Contact({ name, email, message });
            await newContact.save();
            console.log("📝 Message saved to database");
        } catch (dbError) {
            console.error("❌ Database Error:", dbError);
            // Optional: Don't fail the whole request if DB fails, just log it?
            // For now, let's bubble it up but with a clear prefix.
            throw new Error(`Database Error: ${dbError.message}`);
        }

        // 2. Setup Email Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 🔗 Your Social Links
        const linkedin = "https://www.linkedin.com/in/ashwin-kumar-s-5053bb272/";
        const instagram = "https://www.instagram.com/ash_brave_2004/?hl=en-gb";
        const x = "https://x.com/ash_marvel_15";

        // 3. Send Main Email (Critical)
        try {
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: process.env.EMAIL_USER,
                subject: "New Portfolio Message",
                text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Message: ${message}

-----------------------------------
LinkedIn: ${linkedin}
Instagram: ${instagram}
X: ${x}
          `,
            });
        } catch (emailError) {
            console.error("❌ Owner Email Error:", emailError);
            throw new Error(`Owner Notification Failed: ${emailError.message}`);
        }

        // 4. Send Auto-Reply (Non-Critical)
        try {
            console.log(`📧 Attempting Auto-Reply to: ${email}`);
            await transporter.sendMail({
                from: process.env.EMAIL_USER,
                to: email, // Send to the user's email
                subject: "Thank you for contacting me",
                text: `
Hi ${name},

Thank you for reaching out! I have received your message.

I will get back to you soon.

Meanwhile, feel free to connect with me:

LinkedIn: ${linkedin}
Instagram: ${instagram}
X: ${x}

Best regards,
Ashwin
          `,
            });
        } catch (autoReplyError) {
            console.warn("⚠️ Auto-Reply Failed (Non-fatal):", autoReplyError.message);
            // Do not throw, letting the request succeed
        }

        return res.status(200).json({ message: "Message sent and saved successfully!" });

    } catch (error) {
        console.error("API Error:", error);
        return res.status(500).json({ error: error.message || "Failed to process request" });
    }
}
