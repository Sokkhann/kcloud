import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const baseUrl = process.env.STACK_API_BASE_URL;
  const token = process.env.STACK_API_TOKEN;

  // Replicating the Query Parameters from your curl example
  const queryParams = new URLSearchParams({
    planable: 'default',
    planable_type: 'RateCard',
    include: 'cloud_provider,cloud_provider_setup,plan_region'
  });

  try {
    const targetUrl = `${baseUrl}/admin/plans/${slug}?${queryParams.toString()}`;

    const res = await fetch(targetUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`, // Injecting the secret token here
      },
    });

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Connection to API failed" }, { status: 500 });
  }
}