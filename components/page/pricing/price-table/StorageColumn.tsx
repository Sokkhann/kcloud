"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";

export type StoragePlan = {
  slug: string;
  storage: string;

  priceHour: string | number;
  priceMonth: string | number;
};

export const storageColumns: ColumnDef<StoragePlan>[] = [
  {
    accessorKey: "storage",
    header: "Storage",
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
          <Button className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary">
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];
