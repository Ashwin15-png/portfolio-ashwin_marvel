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
    if (isConnected) return;

    if (!process.env.MONGODB_URI) {
        throw new Error("MONGODB_URI is not defined");
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        isConnected = true;
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
    }
}

export default async function handler(req, res) {

    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    try {
        // 1. Connect to DB and Save
        await connectToDatabase();

        const newContact = new Contact({ name, email, message });
        await newContact.save();
        console.log("📝 Message saved to database");

        // 2. Setup Email Transporter
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // 🔗 Your Social Links
        const linkedin = "https://linkedin.com/in/s-ashwin-kumar-5053bb272/";
        const instagram = "https://www.instagram.com/ash_brave_2004/?hl=en-gb";
        const x = "https://x.com/ash_marvel_15";

        // 📩 Email to you (Owner Notification)
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

        // 📧 Auto Reply to Sender
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: email,
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

        return res.status(200).json({ message: "Message sent and saved successfully!" });

    } catch (error) {
        console.error("API Error:", error);
        return res.status(500).json({ error: "Failed to process request" });
    }
}
