"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";

export type PricingPlan = {
  slug: string;
  memory: string;
  vcpu: string;
  transfer: string;
  ssd: string;
  priceHour: string | number;
  priceMonth: string | number;
};

export const columns: ColumnDef<PricingPlan>[] = [
  {
    accessorKey: "memory",
    header: "Memory",
  },
  {
    accessorKey: "vcpu",
    header: "vCPU",
  },
  {
    accessorKey: "transfer",
    header: "Transfer",
  },
  {
    accessorKey: "ssd",
    header: "SSD",
  },
  {
    accessorKey: "priceHour",
    header: "$/hr",
    cell: ({ row }) => {
      const value = row.original.priceHour;
      return <span className="text-gcxPrimary font-semibold">{value}</span>;
    },
  },
  {
    accessorKey: "priceMonth",
    header: "$/mo",
    cell: ({ row }) => {
      const value = row.original.priceMonth;
      return <span className="text-gcxPrimary font-semibold">{value}</span>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-right"></div>,
    cell: () => {
      return (
        <div className="flex justify-end">
          <Button className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
