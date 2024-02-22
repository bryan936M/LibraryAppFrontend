import Menu from "@/components/Home/Menu";
import Trending from "@/components/Home/Trending";
import Main from "@/components/Home/Main";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full">
      {/* Menu side */}
      <Menu />

      {/* Main Section */}
      <Main />

      {/* Trending section */}
      <Trending />

    </main>
  );
}
