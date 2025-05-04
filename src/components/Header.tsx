import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Container } from "./Container";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="pt-5 pb-10">
      <Container>
        <div className="flex justify-between">
          <h1 className="font-bold">
            <Link href="/dashboard">Invoicing App</Link>
          </h1>
          <div className="flex justify-between">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </Container>
    </header>
  );
};
