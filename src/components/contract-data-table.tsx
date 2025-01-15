import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Edit } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";
import Deletebtn from "./delete-btn";
async function ContractDataTable() {
  const contract = await prisma.contract.findMany({
    include: {
      Client: true, // This will include the full client information
    },
  });
  return (
    <div className=" p-2 shadow-sm border min-h-60">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="">Contract Name</TableHead>
            <TableHead>Client Name</TableHead>
            <TableHead>Contact Number</TableHead>
            <TableHead className="">Status</TableHead>
            <TableHead className="">Date</TableHead>
            <TableHead className="">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {contract.map((contract) => {
            return (
              <TableRow key={contract.id}>
                <TableCell>{contract.contractName}</TableCell>
                <TableCell>{contract.Client.contactName}</TableCell>
                <TableCell>{contract.Client.contactPhone}</TableCell>
                <TableCell>{contract.Client.status}</TableCell>
                <TableCell>{contract.Client.address}</TableCell>
                <TableCell className="flex gap-5 items-center ">
                  <DropdownMenu>
                    <DropdownMenuTrigger className="text-xl">
                      ...
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem>
                        <Link
                          href={`/app/contract/create?query=${contract.id}`}
                          className="flex items-center justify-between"
                        >
                          <span>Edit</span>
                          <Edit className="ml-[52]" size={16} />
                        </Link>
                      </DropdownMenuItem>
                      <Separator />
                      <DropdownMenuItem className="flex items-center text-destructive justify-between">
                        Delete
                        <Deletebtn id={contract.id} action="contract" />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default ContractDataTable;
