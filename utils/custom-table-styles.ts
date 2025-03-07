import { TableStyles } from "react-data-table-component";

export const customStyles: TableStyles = {
  table: {
    style: {
      height: "fit-content",
    },
  },
  headRow: {
    style: {
      display: "flex",
      gap: "0.5rem",
      backgroundColor: "#F9fafb",
      padding: "1rem",
      color: "#A0A0AB",
    },
  },
  headCells: {
    style: {
      padding: "0",
      letterSpacing: "0.2px",
      fontSize: "13px",
    },
  },
  rows: {
    style: {
      display: "flex",
      gap: "0.5rem",
      padding: "1rem",
    },
  },
  cells: {
    style: {
      padding: "0",
      letterSpacing: "0.2px",
      fontSize: "13px",
      minWidth: "unset",
      textTransform: "capitalize",
    },
  },
};
