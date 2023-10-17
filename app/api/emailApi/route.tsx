import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { render } from '@react-email/render';
import * as React from 'react';
import { Email as ThankYouEmail } from '../../../util/email';
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

type EmailRequestBody = {
  email: string;
  name: string;
  companyName: string;
  interests: string;
  description: string;
};

// Initialize the Amazon SES client
const sesClient = new SESClient({ region: "us-east-1" });

export async function POST(req: Request) {
  const data = await req.json();

  // Generate the HTML email content for thank-you email
  const thankYouEmailElement = React.createElement(ThankYouEmail, { url: "https://www.omnireality.us" });
  const thankYouEmailHtml = render(thankYouEmailElement);


  const infoEmailHtml = `
    <div>
      <h1>New Inquiry</h1>
      <p>Name: ${data.name}</p>
      <p>Email: ${data.email}</p>
      <p>Company Name: ${data.companyName}</p>
      <p>Interests: ${data.interests}</p>
      <p>Description: ${data.description}</p>
    </div>
  `;

  const thankYouParams = {
    Destination: {
      ToAddresses: [data.email], // Sending to the user
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: thankYouEmailHtml,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Thanks For Connecting!',
      },
    },
    Source: 'no_reply@omnireality.us',
  };

  const infoParams = {
    Destination: {
      ToAddresses: ['hello@omnireality.us'],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: infoEmailHtml,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'New Inquiry from Website!',
      },
    },
    Source: 'no_reply@omnireality.us',
  };

  try {
    // Send thank-you email to user
    await sesClient.send(new SendEmailCommand(thankYouParams));

    // Send informational email to you
    await sesClient.send(new SendEmailCommand(infoParams));

    return NextResponse.json({ message: "MESSAGE SENT SUCCESSFULLY", success: true });

  } catch (err) {
    console.error(err);
    await sesClient.send(new SendEmailCommand(infoParams));
    return NextResponse.json({ message: 'MESSAGE COULD NOT BE SENT: ' + err, success: false });
  }
}
