import { Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
    <Hero/>

    <div className="mt-12 padding-x padding-y max-width" id="discover">
<div className="home__text-container">
<h1 className="text-4xl font-extralight"> Car Catelogue</h1>
<p>Explore the cars you like </p>
</div>

<div className="home__filter">
  <SearchBar/>
  <div className="home__filter-container">
<CustomFilter  title="fuel"/>
<CustomFilter title="year"/>
  </div>
</div>

    </div>
    </main>
  );
}
