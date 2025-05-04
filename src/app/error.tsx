"use client";

import NextError from 'next/error'

export default function Error({ error }: { error: Error }) {
  return (
    <main className="flex flex-col items-center gap-5 h-screen max-w-5xl mx-auto p-10">
      <NextError statusCode={500} title={error.message}/>
    </main>
  );
}
