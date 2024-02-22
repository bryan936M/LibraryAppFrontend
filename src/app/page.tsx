import Menu from "@/components/Home/Menu";
import Trending from "@/components/Home/Trending";
import Main from "@/components/Home/Main";

export default function Home() {
  return (
    <main className="flex w-full p-3">
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
