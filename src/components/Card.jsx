"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

function Card({ country }) {
  const router = useRouter();

  function handleClick() {
    return router.push(`/Country?name=${country.name}`);
  }

  return (
    <div
      onClick={() => handleClick()}
      className="bg-White dark:bg-Dark-Mode-Elements cursor-pointer rounded my-10 sm:my-0 w-5/6 mx-auto sm:w-full shadow dark:shadow-Light-Mode-Text"
    >
      <Image
        src={country.flag}
        alt={country.name}
        width={320}
        height={213}
        className="w-full object-cover rounded-t aspect-[13/8]"
      />
      <div className="p-6 ">
        <h1 className="font-extrabold text-lg mb-3">{country.name}</h1>
        <p>
          <span className="font-semibold">Population: </span>
          {country.population}
        </p>
        <p>
          <span className="font-semibold">Region: </span>
          {country.region}
        </p>
        <p>
          <span className="font-semibold">Capital: </span>
          {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
