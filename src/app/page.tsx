import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex justify-between bg-[#15162c] text-white">
      <h1>hi main page</h1>
      <Link href="home">Home</Link>
      <Link href="dashboard">dashboard</Link>
    </main>
  );
}
