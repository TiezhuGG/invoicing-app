"use server";

import { db } from "@/db";
import { Invoice } from "@/db/schema";
import { redirect } from "next/navigation";

export async function createAction(formData: FormData) {
  const value = Math.floor(parseFloat(String(formData.get("value")))) * 100;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const description = formData.get("description") as string;

  const results = await db
    .insert(Invoice)
    .values({ name, email, value, description, status: "open" })
    .returning({ id: Invoice.id });

  redirect(`/invoices/${results[0].id}`);
}
