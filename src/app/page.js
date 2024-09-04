"use client";
import Card from "@/components/Card";
import Data from "./data.json";
import SearchBox from "@/components/SearchBox";
import NewFilter from "@/components/NewFilter";
import { useEffect, useState } from "react";

export default function Home() {
  const [region, setRegion] = useState("");
  const [List, setList] = useState(Data);

  useEffect(() => {
    if (region !== "") {
      setList(Data.filter((c) => c.region === region));
    } else {
      setList(Data);
    }
  }, [region]);

  return (
    <main className="min-h-screen text-sm leading-normal">
      <section className="md:flex items-center justify-between my-6">
        <SearchBox />
        <NewFilter region={region} setRegion={setRegion} />
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 sm:gap-6 md:gap-10 xl:gap-[75px]">
        {List.map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </div>
    </main>
  );
}
