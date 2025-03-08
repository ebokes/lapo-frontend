"use client";

import { FeesType } from "@/types/profile-table";
import { customStyles } from "@/utils/custom-table-styles";
import React, { useMemo } from "react";
import DataTable, { TableColumn } from "react-data-table-component";

interface FeesTableProps {
  tableData: FeesType[];
}

const FeesTable: React.FC<FeesTableProps> = ({ tableData }) => {
  const columns: TableColumn<FeesType>[] = useMemo(
    () => [
      {
        name: "Name",
        selector: (row: FeesType) => row.name || "-",
      },
      {
        name: "Value",
        center: true,
        selector: (row: FeesType) => row.value || "-",
      },
      {
        name: "Frequency",
        center: true,
        selector: (row: FeesType) => row.frequency || "-",
      },
      {
        name: "Currency",
        center: true,
        selector: (row: FeesType) => row.currency || "-",
      },

      {
        name: "Time",
        center: true,
        selector: (row: FeesType) => row.time || "-",
      },
      {
        name: "Account Pad",
        center: true,
        selector: (row: FeesType) => row.accountPad || "-",
      },
      {
        name: "Account",
        center: true,
        selector: (row: FeesType) => row.account || "-",
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

export default FeesTable;
