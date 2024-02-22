import Menu from "@/components/Home/Menu";
import Trending from "@/components/Home/Trending";
import Main from "@/components/Home/Main";

export default function Home() {
  return (
    <main className="bg-slate-100 w-full flex-1 flex ">
      {/* Menu side */}
      <Menu />
      <div className="flex-1 flex">
        {/* Main Section */}
        <Main />

        {/* Trending section */}
        <Trending />
      </div>
    </main>
  );
}
