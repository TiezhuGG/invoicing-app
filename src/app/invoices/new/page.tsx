"use client";

import { createAction } from "@/app/actions";
import { SubmitButton } from "@/components/SubmitButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function createInvoice() {
  return (
    <main className="flex flex-col gap-5 h-screen max-w-5xl mx-auto p-10">
      <div className="w-full flex justify-between">
        <h1 className="text-3xl font-bold">Create Invoice</h1>
      </div>

      <form action={createAction} className="grid gap-4 max-w-xs">
        <div>
          <Label className="font-bold mb-3" htmlFor="name">
            Billing Name
          </Label>
          <Input id="name" name="name" type="text" />
        </div>
        <div>
          <Label className="font-bold mb-3" htmlFor="email">
            Billing Email
          </Label>
          <Input id="email" name="email" type="text" />
        </div>
        <div>
          <Label className="font-bold mb-3" htmlFor="value">
            Value
          </Label>
          <Input id="value" name="value" type="text" />
        </div>
        <div>
          <Label className="font-bold mb-3" htmlFor="description">
            Description
          </Label>
          <Textarea className="h-[100px]" id="description" name="description" />
        </div>
        <div>
          <SubmitButton></SubmitButton>
        </div>
      </form>
    </main>
  );
}
