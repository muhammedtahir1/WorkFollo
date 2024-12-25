import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { auth } from "@/lib/auth";
import prisma from "@/lib/db";
import Link from "next/link";
import React from "react";
import CreateButton from "./create-button";
import { Edit, Plus } from "lucide-react";
import Deletebtn from "./delete-btn";

async function TranscationTable() {
  const session = await auth();
  const transaction = await prisma.transaction.findMany({
    include: {
      Client: true,
      Project: true,
    },
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return (
    <div className="p-2 shadow-sm border min-h-60">
      {transaction.length > 0 ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="">Company Name</TableHead>
              <TableHead className="">Project Name</TableHead>
              <TableHead className=""> Contact Name</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Amount</TableHead>
              {/* <TableHead className="">Note</TableHead> */}
              <TableHead className="">Type</TableHead>
              <TableHead className="">Date</TableHead>
     
            </TableRow>
          </TableHeader>
          <TableBody>
            {transaction.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">
                  {""}
                  <Link href={`/app/clients/${transaction?.Client?.id}`}>
                    {" "}
                    {transaction?.Client?.companyName}
                  </Link>
                </TableCell>

                <TableCell className="font-medium">
                  <Link
                    href={`/app/clients/${transaction.Client?.id}/transactions`}
                  >
                    {transaction?.Project?.name}
                  </Link>
                </TableCell>
                <TableCell className="font-medium">
                  {transaction?.Client?.contactName}
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.title}
                </TableCell>
                <TableCell className="font-medium">
                  {transaction.amount}
                </TableCell>
                {/* <TableCell className="font-medium">
                  {transaction.description}
                </TableCell> */}
                <TableCell className="font-medium">
                  {transaction.type}
                </TableCell>

                <TableCell className="font-medium">
                  {transaction.date.toDateString()}
                </TableCell>
                <TableCell className="flex gap-5 items-center ">
                <Link
                    href={`/app/transactions/create?query=${transaction.id}`}
                    className=""
                  >
                    <Edit size={18} />
                  </Link>

                  
                  <Deletebtn id={transaction.id} action="transaction"/>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className=" flex  flex-col  items-center justify-center p-14">
          <h2 className="text-xl font-semibold text-gray-800">
            No Transaction found
          </h2>
          <p className="text-gray-500 mb-4 text-sm">
          It looks like you haven’t made any transactions yet. Start by recording your first transaction now!
          </p>
          <CreateButton className="" link="/app/transactions/create">
            Create new <Plus />
          </CreateButton>
        </div>
      )}
    </div>
  );
}

export default TranscationTable;
