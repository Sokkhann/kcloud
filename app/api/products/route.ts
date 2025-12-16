export async function getMenu() {
  const res = await fetch(
    `${process.env.STACK_API_BASE_URL}/admin/cloud-provider/nimbo/services`,
    {
      headers: {
        Authorization: `Bearer ${process.env.STACK_API_TOKEN}`,
      },
      next: { revalidate: 3600 }, // 🔥 auto update every hour
    }
  );

  const data = await res.json();
  return data.data ?? [];
}
