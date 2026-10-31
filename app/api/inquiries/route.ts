import { NextRequest, NextResponse } from 'next/server';

const VPS_API_URL =
  process.env.INTERNAL_API_URL ||
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, '') ||
  'https://api.ethertrix.com/v1';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const backendEndpoint = VPS_API_URL.endsWith('/v1')
      ? `${VPS_API_URL}/inquiries`
      : `${VPS_API_URL}/v1/inquiries`;

    const res = await fetch(backendEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (err) {
    console.error('[API Proxy] Error forwarding inquiry to VPS:', err);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to deliver inquiry to backend service. Please email contact@ethertrix.com directly.',
      },
      { status: 500 }
    );
  }
}
