"use client";

import { CardFeesType } from "@/types/profile-table";
import { customStyles } from "@/utils/custom-table-styles";
import React, { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface CardFeesTableProps {
  tableData: CardFeesType[];
}

const CardFeesTable: React.FC<CardFeesTableProps> = ({ tableData }) => {
  const columns: TableColumn<CardFeesType>[] = useMemo(
    () => [
      {
        name: "Name",
        selector: (row: CardFeesType) => row.name || "-",
      },
      {
        name: "Value",
        center: true,
        selector: (row: CardFeesType) => row.value || "-",
      },
      {
        name: "Frequency",
        center: true,
        selector: (row: CardFeesType) => row.frequency || "-",
      },
      {
        name: "Currency",
        center: true,
        selector: (row: CardFeesType) => row.currency || "-",
      },

      {
        name: "Time",
        center: true,
        selector: (row: CardFeesType) => row.time || "-",
      },
      {
        name: "Account Pad",
        center: true,
        selector: (row: CardFeesType) => row.accountPad || "-",
      },
      {
        name: "Account",
        center: true,
        selector: (row: CardFeesType) => row.account || "-",
      },
    ],
    []
  );
  return (
    <div className="border rounded-2xl overflow-hidden mt-5">
      <DataTable
        data={tableData}
        columns={columns}
        customStyles={customStyles}
      />
    </div>
  );
};

export default CardFeesTable;
