"use client";

import { CardRequestTableType } from "@/types/card-request-table";
import { customStyles } from "@/utils/custom-table-styles";
import Link from "next/link";
import React, { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface CardRequestTableProps {
  tableData: CardRequestTableType[];
}

const CardRequestTable: React.FC<CardRequestTableProps> = ({ tableData }) => {
  const columns: TableColumn<CardRequestTableType>[] = useMemo(
    () => [
      {
        name: "Branch",
        selector: (row: CardRequestTableType) => row.branch || "-",
      },
      {
        name: "Initiator",
        center: true,
        selector: (row: CardRequestTableType) => row.initiator || "-",
      },
      {
        name: "Quantity",
        center: true,
        selector: (row: CardRequestTableType) => row.quantity || "-",
      },
      {
        name: "Batch",
        center: true,
        selector: (row: CardRequestTableType) => row.batch || "-",
      },

      {
        name: "Date Requested",
        center: true,
        selector: (row: CardRequestTableType) => row.dateRequested || "-",
      },

      {
        name: "Status",
        center: true,
        minWidth: "120px",
        cell: (row: CardRequestTableType) => {
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
    <div className="border rounded-2xl overflow-hidden">
      <DataTable
        data={tableData}
        columns={columns}
        customStyles={customStyles}
      />
    </div>
  );
};

export default CardRequestTable;
