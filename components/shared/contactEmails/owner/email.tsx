import * as React from 'react';
import { Html } from '@react-email/html';

interface EmailProps {
  name: string;
  email: string;
  phoneNumber: string;
  city: string;
  message: string;
}

export const OwnerEmail: React.FC<Readonly<EmailProps>> = ({ name, email, phoneNumber, city, message }) => {
  return (
    <Html>
      <head>
        <title>New Contact Form Submission</title>
      </head>
      <body style={{
        textAlign: 'center',
        fontFamily: 'Inter, sans-serif',
      }}>
        {/* HIPAA Compliance Header */}
        <div style={{
          backgroundColor: '#EDEDED',
          padding: '10px',
          textAlign: 'center',
          borderBottom: '1px solid #CCCCCC'
        }}>
          <p style={{ fontSize: '12px', color: '#444444' }}>
            This email is HIPAA compliant and intended solely for the addressee. It contains confidential or privileged information.
          </p>
        </div>

        <div style={{
          border: '3px solid #E76067',
          backgroundColor: '#FFCFD8',
          margin: '20px',
          boxShadow: '0px 0px 25px 0px rgba(0, 0, 0, 0.25)',
        }}>
          <h1 style={{ color: '#E76067' }}>New Contact Form Submission</h1>
          <p style={{ color: '#444444', fontWeight: 600 }}><strong>Name:</strong> {name}</p>
          <p style={{ color: '#444444', fontWeight: 600 }}><strong>Email:</strong> {email}</p>
          <p style={{ color: '#444444', fontWeight: 600 }}><strong>Phone Number:</strong> {phoneNumber}</p>
          <p style={{ color: '#444444', fontWeight: 600 }}><strong>City:</strong> {city}</p>
          <p style={{ color: '#444444', fontWeight: 600 }}><strong>Message:</strong></p>
          <p style={{ color: '#444444', fontWeight: 600 }}>{message}</p>
        </div>

        {/* HIPAA Compliance Footer */}
        <div style={{
          backgroundColor: '#EDEDED',
          padding: '10px',
          textAlign: 'center',
          borderTop: '1px solid #CCCCCC'
        }}>
          <p style={{ fontSize: '12px', color: '#444444' }}>
            If you are not the intended recipient, you are hereby notified that any dissemination, distribution, or copying of this email is strictly prohibited. Please inform the sender immediately and destroy all copies of this email.
          </p>
        </div>
      </body>
    </Html>
  );
};
