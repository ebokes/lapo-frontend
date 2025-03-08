"use client";

import { RecentCardRequestTableType } from "@/types/card-request-table";
import { customStyles } from "@/utils/custom-table-styles";
import { Maximize2 } from "lucide-react";
import Link from "next/link";
import React, { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

interface RecentCardRequestTableProps {
  tableData: RecentCardRequestTableType[];
}

const RecentCardRequestTable: React.FC<RecentCardRequestTableProps> = ({
  tableData,
}) => {
  const columns: TableColumn<RecentCardRequestTableType>[] = useMemo(
    () => [
      {
        name: "Branch",
        selector: (row: RecentCardRequestTableType) => row.branch || "-",
      },
      {
        name: "Card Type",
        center: true,
        selector: (row: RecentCardRequestTableType) => row.cardType || "-",
      },
      {
        name: "Quantity",
        center: true,
        selector: (row: RecentCardRequestTableType) => row.quantity || "-",
      },
      {
        name: "Status",
        center: true,
        minWidth: "120px",
        cell: (row: RecentCardRequestTableType) => {
          return <Badge variant={row.status}>{row.status}</Badge>;
        },
      },

      {
        name: "Action",
        center: true,
        cell: () => {
          return (
            <Button variant="ghost" asChild>
              <Link href="card-request/request-details">View</Link>
            </Button>
          );
        },
      },
    ],
    []
  );
  return (
    <div className="border rounded-2xl bg-white p-6">
      <div className="flex justify-between mb-9">
        <h2 className="font-medium text-3xl">Recent Card Requests</h2>
        <Maximize2 className="text-gray-300" />
      </div>
      <div className="overflow-hidden">
        <DataTable
          data={tableData}
          columns={columns}
          customStyles={customStyles}
        />
      </div>
    </div>
  );
};

export default RecentCardRequestTable;
