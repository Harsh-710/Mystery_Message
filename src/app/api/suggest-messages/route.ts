import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const token = process.env.GITHUB_TOKEN;

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction. For example, your output should be structured like this: 'What's a hobby you've recently started?||If you could have dinner with any historical figure, who would it be?||What's a simple thing that makes you happy?'. Ensure the questions are intriguing, foster curiosity, and contribute to a positive and welcoming conversational environment.";

      const client = new OpenAI({
        baseURL: "https://models.inference.ai.azure.com",
        apiKey: token
      });
    
      const response = await client.chat.completions.create({
        messages: [
          { role:"system", content: "" },
          { role:"user", content: prompt }
        ],
        model: "gpt-4o-mini",
        temperature: 1,
        max_tokens: 4096,
        top_p: 1
      });
      // console.log(response.choices[0].message.content);

      return Response.json(
        {
            success: true,
            message: "Suggested messages fetched successfully",
            messages: response.choices[0].message.content
        },
        { status: 200 }
      );
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      // OpenAI API error handling
      const { name, status, headers, message } = error;
      return NextResponse.json({ name, status, headers, message }, { status });
    } else {
      // General error handling
      console.error('An unexpected error occurred:', error);
      throw error;
    }
  }
}