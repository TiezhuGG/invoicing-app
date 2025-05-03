import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-5 h-screen max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">Invoicing Management</h1>
      <p>
        <Button asChild>
          <Link href="/dashboard">Sign in</Link>
        </Button>
      </p>
    </main>
  );
}
