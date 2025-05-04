import { Container } from "./Container";

export const Footer = () => {
  return (
    <footer className="pb-10">
      <Container className="flex flex-col justify-between items-center">
        <p className="text-center">Copyright &copy; 2025</p>
        <p>Created by FFF with Next.js、Xata and Clerk</p>
      </Container>
    </footer>
  );
};
