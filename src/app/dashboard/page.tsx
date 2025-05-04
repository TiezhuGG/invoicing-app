import { Container } from "@/components/Container";
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

  return (
    <main className="h-full">
      <Container>
        <div className="w-full flex justify-between mb-5">
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
            {results.map(({ id, name, status, value, email, createTs }) => {
              return (
                <TableRow key={id}>
                  <TableCell className="font-medium text-left">
                    <Link href={`/invoices/${id}`}>
                      <p className="font-bold py-3">
                        {new Date(createTs).toLocaleDateString()}
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell className="text-left">
                    <Link href={`/invoices/${id}`}>
                      <p className="font-bold py-3">{name}</p>
                    </Link>
                  </TableCell>
                  <TableCell className="text-left">
                    <Link href={`/invoices/${id}`}>
                      <p className="font-bold py-3">{email}</p>
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    <Link href={`/invoices/${id}`}>
                      <p>
                        <Badge
                          className={
                            status === "open"
                              ? `bg-cyan-500`
                              : status === "paid"
                              ? "bg-emerald-500"
                              : status === "void"
                              ? "text-gray-500"
                              : "text-red-500"
                          }
                        >
                          {status}
                        </Badge>
                      </p>
                    </Link>
                  </TableCell>
                  <TableCell className="text-right">
                    <Link href={`/invoices/${id}`}>
                      <p className="font-bold py-3">
                        ${(value / 100).toFixed(2)}
                      </p>
                    </Link>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </main>
  );
}
