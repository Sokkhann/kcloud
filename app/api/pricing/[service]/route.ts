import { NextResponse } from "next/server";

export async function GET(req: Request, context: { params: { service: string } }) {
  try {
    // MUST await context.params
    const { service } = await context.params;
    const decodedService = decodeURIComponent(service);

    console.log("Requested service:", decodedService);

    const url = `${process.env.STACK_API_BASE_URL}/admin/plans/service/${decodedService}?sort=-created_at&page=1&limit=1&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

    console.log("URL IS HERE: => ", url)
    
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch pricing" },
        { status: res.status }
      );
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
