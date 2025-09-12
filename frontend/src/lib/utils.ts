import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const CONFIG = {
  API_URL: 'http://localhost:5678/webhook/basketball-chatbot',
  DEMO_MODE: false,
};

export async function sendMessage(message: string) {
  try {
    const response = await fetch(CONFIG.API_URL, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json; charset=utf-8',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ message })
    });

    if (!response.ok) {
      throw new Error('Network error');
    }

    return await response.json();
  } catch (error) {
    return {
      message: "Demo mode: This is a sample response. To see the full chatbot, run the n8n workflow locally.",
      timestamp: new Date().toISOString()
    };
  }
}
