"use client";

import { Button } from "@/components/ui/button";
import { PackageData } from "@/type/dataTypes";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowRight } from "lucide-react";

export type PricingPlan = {
  slug: string;
  name?: string;

  memory?: string;
  vcpu?: string;
  gpu?: string;
  bandwidth?: string;
  storage?: string;
  transfer?: string;
  ssd?: string;

  timezone?: string;
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

export const vmColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "memory",
      header: "Memory",
    },
    {
      accessorKey: "cpu",
      header: "CPU",
    },
    {
      accessorKey: "gpu",
      header: "GPU",
    },
    {
      accessorKey: "storage",
      header: "Storagee",
    },
    {
      accessorKey: "bandwidth",
      header: "Bandwidth",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const vmRouterColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "bandwidth",
      header: "Bandwidth",
    },
    {
      accessorKey: "networkRate",
      header: "Network Rate",
    },
    {
      accessorKey: "cpu",
      header: "CPU",
    },
    {
      accessorKey: "memory",
      header: "Memory",
    },
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const lbColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "bandwidth",
      header: "Bandwidth",
    },
    {
      accessorKey: "region",
      header: "Region",
    },
    {
      accessorKey: "cloudProvider",
      header: "Cloud Platform",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const k8Columns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "memory",
      header: "Memory",
    },
    {
      accessorKey: "cpu",
      header: "CPU",
    },
    {
      accessorKey: "bandwidth",
      header: "Bandwidth",
    },
    {
      accessorKey: "region",
      header: "Region",
    },
    {
      accessorKey: "cloudProvider",
      header: "Cloud Platform",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
}

export const ipColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "displayName",
      header: "Cloud Provider",
    },
    {
      accessorKey: "region",
      header: "Region",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const blockStorageColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
    },
    {
      accessorKey: "cpu",
      header: "CPU",
    },
    {
      accessorKey: "ram",
      header: "RAM",
    },
    {
      accessorKey: "storage",
      header: "Storage",
    },
    {
      accessorKey: "displayName",
      header: "Cloud Provider",
    },
    {
      accessorKey: "region",
      header: "Region",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const objectStorageComlumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "capacity",
      header: "Capacity",
    },
    {
      accessorKey: "cpu",
      header: "CPU",
    },
    {
      accessorKey: "ram",
      header: "RAM",
    },
    {
      accessorKey: "storage",
      header: "Storage",
    },
    {
      accessorKey: "displayName",
      header: "Cloud Provider",
    },
    {
      accessorKey: "region",
      header: "Region",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const vmSnapshotColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "storage",
      header: "Storage",
    },
    {
      accessorKey: "displayName",
      header: "Cloud Provider",
    },
    {
      accessorKey: "region",
      header: "Region",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PackageData object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};

export const templateColumns = ( serviceName: string ): ColumnDef<PackageData>[] => {
  return [
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "storage",
      header: "Storage",
    },
    {
      accessorKey: "displayName",
      header: "Cloud Provider",
    },
    {
      accessorKey: "region",
      header: "Region",
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
      cell: ({ row }) => {
        const plan = row.original; // This is your PricingPlan object

        const handleClick = () => {
          window.location.href = `https://stack-console-lab/service/${encodeURIComponent(
            serviceName
          )}/${encodeURIComponent(plan.slug)}`;
        };

        return (
          <div className="flex justify-end">
            <Button
              className="flex items-center gap-2 rounded-full w-8 h-8 bg-gcxPrimary p-0 hover:bg-gcxPrimary/90"
              onClick={handleClick}
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        );
      },
    },
  ];
};





