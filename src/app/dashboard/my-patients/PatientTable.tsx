"use client"

import * as React from "react"
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ChevronRight } from "lucide-react"
import { CiStethoscope } from "react-icons/ci"

import { GoMail } from "react-icons/go";
import { Label } from "@/components/ui/label"
import { DatePickerDemo } from "./PickDate"

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    name: "Chisom Udeo",
    status: "success",
    email: "ken99@yahoo.com",
    date: "3/4/2009",
    diseases: "Malaria",
    gender: "Male",
    visitId: "HHFD-39432"
  },
  {
    id: "3u1reuv4",
    amount: 242,
    name: "Eze Harrit",
    status: "success",
    email: "Abe45@gmail.com",
    date: "3/4/2009",
    diseases: "Malaria",
    gender: "Male",
    visitId: "HHFD-39432"
  },
  {
    id: "derv1ws0",
    name: "Asije  Memd",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
    date: "3/4/2009",
    diseases: "Malaria",
    gender: "Male",
    visitId: "HHFD-39432"
  },
  {
    id: "5kma53ae",
    amount: 874,
    name: "Virign Make",
    status: "success",
    email: "Silas22@gmail.com",
    date: "3/4/2009",
    diseases: "Malaria",
    gender: "Male",
    visitId: "HHFD-39432"
  },
  {
    id: "bhqecj4p",
    name: "Emaek Make",
    amount: 721,
    status: "failed",
    email: "carmella@hotmail.com",
    date: "3/4/2009",
    diseases: "Malaria",
    gender: "Male",
    visitId: "HHFD-39432"
  },
]

export type Payment = {
    id: string
    name: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string;
    date: string;
    visitId: string;
    diseases: string;
    gender: string
  }
  
  export const columns: ColumnDef<Payment>[] = [
      {
          accessorKey: "name",
          header: "Patient Name",
          cell: ({ row }) => (
            <div className="capitalize">{row.getValue("name")}</div>
          ),
        },
    {
      accessorKey: "visitId",
      header: "visit id",
      cell: ({ row }) => <div className="lowercase">{row.getValue("visitId")}</div>,
    },
    {
      accessorKey: "date",
      header: () => <div className="">Date</div>,
      cell: ({ row }) => {
  
  
        return <div className="">{row.getValue("date")}</div>
      },
    },
    {
      accessorKey: "gender",
      header: "gender",
      cell: ({ row }) => <div className="lowercase">{row.getValue("gender")}</div>,
    },
    {
      accessorKey: "diseases",
      header: () => <div className="">diseases</div>,
      cell: ({ row }) => {
  
  
        return <div className=" ">{row.getValue("diseases")}</div>
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("status")}</div>
      ),
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
  
        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <DotsHorizontalIcon className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="space-x-4 flex gap-2 cursor-pointer"><CiStethoscope /> Log Consulting</DropdownMenuItem>
              <DropdownMenuItem className="space-x-4 flex gap-2 cursor-pointer"><GoMail /> Message</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
  
  export function PatientTable() {
    const [sorting, setSorting] = React.useState<SortingState>([])
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
      []
    )
    const [columnVisibility, setColumnVisibility] =
      React.useState<VisibilityState>({})
    const [rowSelection, setRowSelection] = React.useState({})
  
    const table = useReactTable({
      data,
      columns,
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      getCoreRowModel: getCoreRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      onColumnVisibilityChange: setColumnVisibility,
      onRowSelectionChange: setRowSelection,
      state: {
        sorting,
        columnFilters,
        columnVisibility,
        rowSelection,
      },
    })
  
    return (
      <div className="w-full bg-background p-4 mt-4">

  
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
          <div>
            <Label>Patients</Label>
            <Input
                placeholder="Search Patients, PatientId"
                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
          </div>
          <div>
            <Label>Category</Label>
            <Input
                placeholder="Category"
                value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
                onChange={(event) =>
                table.getColumn("email")?.setFilterValue(event.target.value)
                }
                className="max-w-sm"
            />
          </div>
          <div className="grid grid-cols-1">
              <Label>Date Of Joining</Label>
                <DatePickerDemo />
          </div>
  
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader className="bg-secondary">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="capitalize">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-end space-x-2 py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{" "}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    )
  }