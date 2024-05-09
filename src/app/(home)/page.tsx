import { MainProducts } from "app/components/home/mainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Future world",
  description: "Welcome to the future world",
  keywords: ["future", "world"],
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
