import { NextResponse } from "next/server";

export async function GET() {
  try {
    const url = `${process.env.STACK_API_BASE_URL}/admin/plans/service/Virtual Machine`;

    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
      },
      cache: "no-store",
    });

    const data = await res.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
