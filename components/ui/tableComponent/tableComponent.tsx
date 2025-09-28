import { cn } from "@/libs/utils";
import { ReactNode } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./table";

export interface Column<T> {
  title: string;
  key: keyof T;
  render?: (value: T[keyof T], record: T) => ReactNode;
  headerClassName?: string;
  columnClassName?: string;
  noMobile?: true;
}

export interface TableComponentProps<T> {
  title?: string;
  columns: Column<T>[];
  data: T[];
  className?: string;
  containerClassName?: string;
  path?: string;
  handleRowClick?: (row: T) => void;
}

export default function TableComponent<T extends Record<string, any>>(
  props: TableComponentProps<T>,
) {
  const {
    title,
    columns,
    data,
    className,
    containerClassName,
    handleRowClick,
  } = props;

  return (
    <Table
      containerClassName={containerClassName}
      className={`${className ? className : ""} `}
    >
      {title && <TableCaption className="sr-only">{title}</TableCaption>}

      <TableHeader className="">
        <TableRow>
          {columns.map((column, index) => (
            <TableHead
              key={index}
              className={cn(
                "text-grey-500 text-sm font-medium whitespace-nowrap uppercase",
                column?.noMobile ? "hidden lg:table-cell" : "",
                column.headerClassName,
              )}
            >
              {column.title}
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>

      <TableBody>
        {data?.length > 0 ? (
          data.map((row, rowIndex) => (
            <TableRow
              key={row.id || rowIndex}
              onClick={() => handleRowClick && handleRowClick(row)}
              className="hover:bg-grey-25"
            >
              {columns.map((column) => {
                return (
                  <TableCell
                    key={`${rowIndex}-${column.key.toString()}`}
                    className={cn(
                      "text-grey-800 py-5 font-medium whitespace-nowrap",
                      column?.noMobile ? "hidden lg:table-cell" : "",
                      handleRowClick ? "cursor-pointer" : "",
                      column.columnClassName,
                    )}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : (row[column.key] as ReactNode)}
                  </TableCell>
                );
              })}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell
              className="text-grey-800/50 py-4 text-center text-sm font-medium"
              colSpan={columns.length}
            >
              No row
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
