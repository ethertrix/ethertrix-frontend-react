import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050B18] text-white">
      <Navbar />

      <section className="flex min-h-screen items-center justify-center pt-20">
        <h1 className="text-4xl font-bold">
          Ethertrix - Engineering the digital solutions of tomorrow, today.
        </h1>
      </section>
    </main>
  );
}