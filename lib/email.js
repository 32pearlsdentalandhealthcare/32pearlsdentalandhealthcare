import nodemailer from 'nodemailer';

export async function sendBookingNotification(appointment) {
  const recipient = '32pearlsdentalandhealthcare@gmail.com';
  
  // Load SMTP credentials
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  
  if (!emailUser || !emailPass) {
    console.warn('⚠️ EMAIL SYSTEM WARNING: SMTP credentials not set (EMAIL_USER, EMAIL_PASS are missing in environment). Skipping email notification.');
    return { success: false, reason: 'Credentials not configured' };
  }

  // Create standard secure SMTP transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass
    }
  });

  const mailOptions = {
    from: `"32 Pearls Clinical Registry" <${emailUser}>`,
    to: recipient,
    subject: `🚨 NEW PATIENT LEAD: ${appointment.name}`,
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 30px; border: 1px solid #e5e7eb; border-radius: 24px; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
        <div style="text-align: center; margin-bottom: 30px; padding-bottom: 25px; border-bottom: 1px solid #f3f4f6;">
          <h2 style="color: #00BFA5; margin: 0; font-size: 26px; font-weight: 900; letter-spacing: -0.5px; text-transform: uppercase;">32 Pearls Dental</h2>
          <p style="color: #6B7280; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 3px; margin: 6px 0 0 0;">Elite Patient Registry Control</p>
        </div>
        
        <p style="font-size: 14px; color: #4B5563; line-height: 1.6; margin-bottom: 25px;">You have received a new priority patient consultation request from your website registry:</p>
        
        <div style="background-color: #f9fafb; border: 1px solid #f3f4f6; border-radius: 16px; padding: 25px; margin-bottom: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; font-size: 11px; color: #9CA3AF; text-transform: uppercase; font-weight: 800; width: 35%; border-bottom: 1px solid #f3f4f6;">Patient Name</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111827; font-weight: 700; border-bottom: 1px solid #f3f4f6;">${appointment.name || 'Anonymous'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; color: #9CA3AF; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #f3f4f6;">Contact Phone</td>
              <td style="padding: 10px 0; font-size: 14px; color: #00BFA5; font-weight: 700; border-bottom: 1px solid #f3f4f6;">
                <a href="tel:${appointment.phone}" style="color: #00BFA5; text-decoration: none;">${appointment.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; color: #9CA3AF; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #f3f4f6;">Service</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111827; font-weight: 700; border-bottom: 1px solid #f3f4f6;">${appointment.service}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; color: #9CA3AF; text-transform: uppercase; font-weight: 800; border-bottom: 1px solid #f3f4f6;">Deployment</td>
              <td style="padding: 10px 0; font-size: 14px; color: #111827; font-weight: 700; border-bottom: 1px solid #f3f4f6;">${appointment.type || 'Clinic'}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; font-size: 11px; color: #9CA3AF; text-transform: uppercase; font-weight: 800;">Proposed Slot</td>
              <td style="padding: 10px 0; font-size: 14px; color: #4B5563; font-weight: 700;">${appointment.date} · ${appointment.time}</td>
            </tr>
          </table>
        </div>
        
        <div style="background-color: #FFFDF5; border: 1px solid #FDF0CD; border-radius: 16px; padding: 20px; text-align: center;">
          <p style="font-size: 10px; color: #C9A84C; margin: 0; font-weight: 800; text-transform: uppercase; letter-spacing: 2px;">Clinical Response Protocol</p>
          <p style="font-size: 12px; color: #7F6D3B; margin: 6px 0 0 0; line-height: 1.5; font-weight: 500;">
            Please contact the patient within 24 hours to finalize and secure their scheduling.
          </p>
        </div>
      </div>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('✅ Gmail notification successfully dispatched:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (err) {
    console.error('❌ Failed to dispatch Gmail notification:', err.message);
    return { success: false, error: err.message };
  }
}
