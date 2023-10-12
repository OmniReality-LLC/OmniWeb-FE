import { SendEmailCommand, SESClient } from "@aws-sdk/client-ses";
import { render } from '@react-email/render';
import * as React from 'react';
import { Email } from '../../../util/email'
import { NextResponse } from "next/server";


// Initialize the Amazon SES client
const sesClient = new SESClient({ region: "us-east-1" });

export async function POST(req: Request) {

  // Generate the HTML email content
  const emailElement = React.createElement(Email, { url: "https://www.omnireality.us" });
  const emailHtml = render(emailElement);

  // Create sendEmail parameters
  const params = {
    Destination: {
      ToAddresses: [
        'contact@omnireality.us',
      ],
    },
    Message: {
      Body: {
        Html: {
          Charset: 'UTF-8',
          Data: emailHtml,
        },
      },
      Subject: {
        Charset: 'UTF-8',
        Data: 'Thanks For Connecting!',
      },
    },
    Source: 'no_reply@omnireality.us',
  };

  try {
    // Send the email
    const command = new SendEmailCommand(params);
    const res = await sesClient.send(command);
    console.log(res);
    return NextResponse.json({ message: "MESSAGE SENT SUCCESSFULLY", success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: 'MESSAGE COULD NOT BE SENT: ' + err, success: false });
  }
}
