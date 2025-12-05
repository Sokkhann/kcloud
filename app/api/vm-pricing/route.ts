// import { NextResponse } from "next/server";

// export async function GET() {
//   try {
//     // Full API URL with query parameters
//     const url = `${process.env.STACK_API_BASE_URL}/admin/plans/service/Virtual Machine?sort=-created_at&page=1&limit=1&planable=default&planable_type=RateCard&include=cloud_provider,cloud_provider_setup,plan_region,plan_category`;

//     const res = await fetch(url, {
//       headers: {
//         Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
//       },
//       cache: "no-store",
//     });

//     if (!res.ok) {
//       console.error("Stack Console API error:", res.status, await res.text());
//       return NextResponse.json({ error: "Failed to fetch pricing" }, { status: res.status });
//     }

//     const data = await res.json();

//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Server error:", error);
//     return NextResponse.json({ error: "Server Error" }, { status: 500 });
//   }
// }
