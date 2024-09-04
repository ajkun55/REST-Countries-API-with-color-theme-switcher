"use client";
import BackButton from "@/components/BackButton";
import Data from "../data.json";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import NotFound from "../not-found";

const Page2 = () => {
  const params = useSearchParams();
  const countryName = params.get("name");
  const data = Data.filter((country) => country.name === countryName)[0];
  if (!data) return <NotFound />;

  const alpha3CodesToFind = data.borders;
  const codesSet = new Set(alpha3CodesToFind);

  const countriesWithAlpha3Codes = Data.filter((country) =>
    codesSet.has(country.alpha3Code)
  ).map((country) => country.name);

  return (
    <div className="text-base">
      {data && (
        <>
          <BackButton />
          <div className="lg:flex lg:items-center lg justify-between lg:gap-4">
            <Image
              src={data.flag}
              alt="image"
              width={320}
              height={213}
              className="w-full object-cover aspect-[13/8] mt-15 mb-8 lg:max-w-[560px] lg:w-1/2"
            />

            <div className="lg:max-w-[575px] ">
              <h1 className="text-2xl font-extrabold">{data.name}</h1>

              <div className="lg:flex lg:items-start lg justify-between lg:gap-2">
                <div className="my-8">
                  <p>
                    <span className="font-semibold">Native Name: </span>
                    {data.nativeName}
                  </p>
                  <p>
                    <span className="font-semibold">Population: </span>
                    {data.population.toLocaleString()}
                  </p>
                  <p>
                    <span className="font-semibold">Region: </span>
                    {data.region}
                  </p>
                  <p>
                    <span className="font-semibold">Sub Region: </span>
                    {data.subregion}
                  </p>
                  <p>
                    <span className="font-semibold">Capital: </span>
                    {data.capital}
                  </p>
                </div>

                <div className="my-8">
                  <p>
                    <span className="font-semibold">Top Level Domain: </span>
                    {data.topLevelDomain}
                  </p>
                  <p>
                    <span className="font-semibold">Currencies: </span>
                    {data.currencies.map((c) => c.name).join(", ")}
                  </p>
                  <p>
                    <span className="font-semibold">Languages: </span>
                    {data.languages.map((language) => language.name).join(", ")}
                  </p>
                </div>
              </div>

              <div>
                <p>
                  <span className="font-semibold text-lg">
                    Border Countries:{" "}
                  </span>
                </p>
                <div className="flex flex-row items-center flex-wrap mt-5">
                  {countriesWithAlpha3Codes.map((c) => (
                    <Link
                      href={`/Country?name=${c}`}
                      key={c}
                      className="w-[100px] grid place-content-center mr-5 shadow-around max-w-none min-w-fit px-3 h-9 my-3 rounded bg-White dark:bg-Dark-Mode-Elements dark:shadow-Light-Mode-Text hover:brightness-75 dark:hover:brightness-150"
                    >
                      {c}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Page2;
