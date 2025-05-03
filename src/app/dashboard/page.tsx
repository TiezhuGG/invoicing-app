import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { db } from "@/db";
import { Invoice } from "@/db/schema";
import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const results = await db.select().from(Invoice);
  console.log("results", results);
  return (
    <main className="flex flex-col items-center gap-5 h-screen max-w-5xl mx-auto p-10">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Button className="inline-flex gap-2" variant="outline" asChild>
          <Link href="/invoices/new">
            <CirclePlus className="w-4 h-4" />
            Create Invoice
          </Link>
        </Button>
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[150px]">Date</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead className="text-right">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {results.map(({ id, name, status, value, email }) => {
            return (
              <TableRow key={id}>
                <TableCell className="font-medium text-left">
                  <span className="font-bold">10/31/2024</span>
                </TableCell>
                <TableCell className="text-left">
                  <span className="font-bold">{name}</span>
                </TableCell>
                <TableCell className="text-left">
                  <span className="font-bold">{email}</span>
                </TableCell>
                <TableCell className="text-center">
                  <Badge className="bg-emerald-500">{status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <span className="font-bold">${value}</span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </main>
  );
}
