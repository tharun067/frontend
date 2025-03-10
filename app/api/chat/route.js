export async function POST(req) {
  try {
    const { message } = await req.json();

    const api_key = 'api_key';
    const api_url = 'https://openrouter.ai/api/v1/chat/completions';

    const response = await fetch(api_url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${api_key}`,
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [{ role: 'user', content: message }],
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to communicate with OpenRouter API');
    }

    const data = await response.json();
    return new Response(JSON.stringify({ reply: data.choices[0].message.content }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ reply: 'Error communicating with OpenRouter API' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
