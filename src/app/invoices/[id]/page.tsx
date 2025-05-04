import { Badge } from "@/components/ui/badge";
import { db } from "@/db";
import { Invoice } from "@/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";

export default async function InvoiceDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (isNaN(+id)) {
    throw new Error("Invalid id");
  }

  const [result] = await db
    .select()
    .from(Invoice)
    .where(eq(Invoice.id, +id))
    .limit(1);

  if (!result) notFound();

  return (
    <main className="flex flex-col gap-5 h-screen max-w-5xl mx-auto p-10">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold flex items-center gap-4">
          <span>Invoice {result.id}</span>
          <Badge
            className={
              result.status === "open"
                ? `bg-cyan-500`
                : result.status === "paid"
                ? "bg-emerald-500"
                : result.status === "void"
                ? "text-gray-500"
                : "text-red-500"
            }
          >
            {result.status}
          </Badge>
        </h1>
      </div>
      <div>
        <p className="text-3xl font-bold">${(result.value / 100).toFixed(2)}</p>
        <div className="grid gap-3 mt-8">
          <p className="text-xl font-bold">Billing Details</p>
          <div className="flex">
            <p className="w-[120px] mr-10">Invoice Id</p>
            <span>{result.id}</span>
          </div>
          <div className="flex">
            <p className="w-[120px] mr-10">Invoice Date</p>
            <span>{new Date(result.createTs).toLocaleDateString()}</span>
          </div>
          <div className="flex">
            <p className="w-[120px] mr-10">Invoice Name</p>
            <span>{result.name}</span>
          </div>
          <div className="flex">
            <p className="w-[120px] mr-10">Invoice Email</p>
            <span>{result.email}</span>
          </div>
        </div>
      </div>
    </main>
  );
}
