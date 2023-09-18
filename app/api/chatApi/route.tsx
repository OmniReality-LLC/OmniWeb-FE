import { NextRequest, NextResponse } from 'next/server';

interface BodyData {
  question?: string;
}

export async function POST(req: NextRequest) {
  let bodyData: BodyData;

  try {
    const rawBody = await req.text();
    bodyData = JSON.parse(rawBody);
  } catch (error) {
    return NextResponse.json({ message: 'Invalid JSON payload', success: false });
  }

  const { question } = bodyData;

  if (!question) {
    return NextResponse.json({ message: 'Question is missing', success: false });
  }
  try {
    const response = await fetch('https://localhost:7294/Chatbot/RequestHelpResponse', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Question: question }),
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json({ ...data, success: true });
    } else {
      return NextResponse.json({ message: 'Failed to get GPT answer', success: false });
    }
  } catch (error) {
    return NextResponse.json({ message: `An error occurred: ${error}`, success: false });
  }
}
