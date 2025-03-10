"use client";

import { CardProfileType } from "@/types/profile-table";
import { customStyles } from "@/utils/custom-table-styles";
import { Pen, Trash2 } from "lucide-react";
import React, { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface CardProfileTableProps {
  tableData: CardProfileType[];
}

const CardProfileTable: React.FC<CardProfileTableProps> = ({ tableData }) => {
  const columns: TableColumn<CardProfileType>[] = useMemo(
    () => [
      {
        name: "Card Name",
        selector: (row: CardProfileType) => row.cardName || "-",
      },
      {
        name: "Currency",
        center: true,
        selector: (row: CardProfileType) => row.currency || "-",
      },
      {
        name: "Expiration",
        center: true,
        selector: (row: CardProfileType) => row.expiration || "-",
      },
      {
        name: "Bin Prefix",
        center: true,
        selector: (row: CardProfileType) => row.binPrefix || "-",
      },

      {
        name: "Date Created",
        center: true,
        selector: (row: CardProfileType) => row.dateCreated || "-",
      },
      {
        name: "Action",
        center: true,
        cell: () => {
          return (
            <div className="flex gap-5 items-center">
              <Trash2 size={20} strokeWidth={1} className="cursor-pointer" />
              <Pen size={18} strokeWidth={1} className="cursor-pointer" />
            </div>
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

export default CardProfileTable;
