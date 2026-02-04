import type { Metadata } from "next";
import PageComponent from "@/components/page/OverviewPage";

export const metadata: Metadata = {
  title: "Cloud Connectivity",
  description: "High-performance cloud connection services for enterprises.",
};

export default function Home() {
  return (
    <div className=" bg-gray-100">
      <PageComponent/>
    </div>
  );
}
