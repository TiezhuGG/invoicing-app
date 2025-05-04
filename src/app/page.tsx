import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center h-full max-w-5xl mx-auto">
      <h1 className="text-5xl font-bold">
        <Link href="/dashboard">Invoicing</Link>
      </h1>
    </main>
  );
}
