"use server";

import { Resend } from "resend";
import { z } from "zod";

// Menggunakan kunci API dari .env. Pastikan server telah direstart selepas menetapkan kunci.
const resend = new Resend(process.env.RESEND_API_KEY);

// Skema Zod untuk memastikan data yang diterima sah
const ContactSchema = z.object({
  name: z.string().min(1, "Sila masukkan nama penuh anda."),
  email: z.string().email("Sila masukkan alamat e-mel yang sah."),
  subject: z.string().optional(),
  message: z.string().min(5, "Mesej mestilah sekurang-kurangnya 5 aksara."),
});

/**
 * Server Action untuk memproses borang kontak dan menghantar e-mel.
 * Kami menggunakan arg1 dan arg2 dan menentukan secara defensif yang mana FormData,
 * kerana susunan argumen dari useActionState sering tidak menentu.
 */
// Menerima dua argumen generik (arg1, arg2) untuk pertahanan terhadap konflik susunan.
export async function sendContactEmail(arg1, arg2) {
  // 1. Kenal pasti Objek FormData
  // FormData adalah objek yang mempunyai method .get(). Kita cari argumen yang memilikinya.
  const isArg1FormData = arg1 && typeof arg1.get === "function";
  const formData = isArg1FormData ? arg1 : arg2;

  // Semakan keselamatan kritikal untuk memastikan kita mempunyai objek FormData
  if (!formData || typeof formData.get !== "function") {
    // PERUBAHAN KRITIKAL DI SINI:
    // Jika FormData tiada, ini hampir pasti adalah panggilan reset state manual
    // dari client (page.js -> setTimeout). Daripada mengembalikan ralat kritikal,
    // kita mengembalikan state neutral (initial state) untuk menetapkan semula UI secara senyap.
    console.log(
      "[LOG DARI SERVER] Gagal mengenal pasti FormData. Menganggap sebagai cubaan reset state. Mengembalikan state neutral."
    );
    return {
      success: null, // Reset state kembali ke neutral
      message: null, // Reset mesej kembali ke null
    };
  }

  // Ambil nilai dari objek FormData yang telah dikenalpasti
  const name = formData.get("name");
  const email = formData.get("email");
  const subject = formData.get("subject") || "No Subject Provided";
  const message = formData.get("message");

  // 2. Validasi Input
  const parsedData = ContactSchema.safeParse({
    name,
    email,
    subject,
    message,
  });

  if (!parsedData.success) {
    const errorsArray = parsedData.error.errors || [];
    const errorMessages = errorsArray.map(
      (err) => `${err.path[0]}: ${err.message}`
    );

    return {
      success: false,
      message: `Confirmation Error: ${errorMessages.join(", ")}`,
    };
  }

  // 3. Semak Kunci API
  if (!process.env.RESEND_API_KEY || process.env.RESEND_API_KEY.length < 5) {
    console.error(
      "[LOG DARI SERVER] RESEND_API_KEY: Undefined/Missing! Please check .env file and restart server."
    );
    return {
      success: false,
      message:
        "Ralat Server: Kunci API Resend hilang. Sila semak fail .env dan mulakan semula pelayan.",
    };
  }

  // 4. Hantar E-mel
  try {
    const data = await resend.emails.send({
      from: "onboarding@resend.dev", // Sila ganti dengan domain anda yang telah disahkan
      to: "aaqilmustaqim16@gmail.com", // Ganti dengan alamat e-mel penerima anda
      reply_to: email, // Membalas kepada pengirim borang
      subject: `[Portfolio Contact] ${subject} from ${name}`,
      html: `
        <h1>Mesej Baru dari Borang Kontak</h1>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <hr>
        <p><strong>Mesej:</strong></p>
        <p>${message}</p>
      `,
    });

    if (data.error) {
      console.error("Resend API Error:", data.error);
      return {
        success: false,
        message: `Email Delivery Error: ${data.error.message || "Please check the server console for details."}`,
      };
    }

    // 5. Maklum Balas Berjaya
    return {
      success: true,
      message:
        "Your message has been successfully sent! I will reply as soon as possible.",
    };
  } catch (error) {
    console.error("Server Action Catch Error:", error);
    return {
      success: false,
      message:
        "Unexpected Server Error. Please try again later or check the server console.",
    };
  }
}
