import Link from "next/link";

export default function NotFound() {
  return (
    <main className="pt-16 p-4 container mx-auto text-center">
      <h1 className="text-4xl font-bold">404</h1>
      <p className="mt-2">The requested page could not be found.</p>
      <Link href="/" className="mt-4 inline-block text-blue-500 underline">
        Go back home
      </Link>
    </main>
  );
}