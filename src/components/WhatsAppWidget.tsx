'use client';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

export default function WhatsAppWidget() {
  return (
    <FloatingWhatsApp
      phoneNumber="+919890101050"
      accountName="Shree Sai Chemicals"
      statusMessage="Available 9:00 AM to 9:00 PM"
      chatMessage="Hello, how can I help you?"
      avatar="/ssc-logo.png"
      darkMode={true}
      allowEsc
      allowClickAway={false}
      notification
      notificationSound
    />
  );
}
