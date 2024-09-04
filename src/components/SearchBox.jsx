"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearch } from "react-icons/fa";

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = search.charAt(0).toUpperCase() + search.slice(1);
    router.push(`/Country/?name=${name}`);
  };
  return (
    <form
      className="flex justify-between flex-1 md:max-w-[480px] my-6 relative rounded-md bg-White dark:bg-Dark-Mode-Elements shadow dark:shadow-Light-Mode-Text"
      onSubmit={handleSubmit}
    >
      <FaSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-Light-Mode-Input dark:text-White" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full h-14 pl-16 rounded-md placeholder-Light-Mode-Input outline-none bg-transparent flex-1 dark:bg-Dark-Mode-Elements"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="hidden" disabled={search === ""}>
        Search
      </button>
    </form>
  );
}
