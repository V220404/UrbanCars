import { CarCard, Hero } from "@/components";
import CustomFilter from "@/components/CustomFilter";
import SearchBar from "@/components/SearchBar";
import Image from "next/image";
import {fetchCars} from '@/utils'
import { fuels, manufacturers, yearsOfProduction } from "@/constants";

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer  ||'' ,
    year:searchParams.year || 2022,
    fuel:searchParams.fuel || '',
    limit:searchParams.limit || '10',
    model:searchParams.model || '',

  });
  console.log(allCars)
const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars; 

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
<CustomFilter  title="fuel" options={fuels}/>
<CustomFilter title="year" options={yearsOfProduction}/>
{/* <CustomFilter  />
<CustomFilter /> */}
  </div>
</div>
{!isDataEmpty ? (
  <section>
    <div className="home__cars-wrapper ">
{allCars?.map((car)=>
(<CarCard car={car}/>))}
    </div>
  </section>
): (
  <div className="home__error-container">
<h2 className="text-black text-xl font-bold">Oops ! ,No Car Found </h2>
<p>{allCars?.message}</p>

    </div>
) }


    </div>
    </main>
  );
}
