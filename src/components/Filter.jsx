export default function Filter({ region, setRegion }) {
  const handleChange = (event) => {
    setRegion(event.target.value);
  };
  return (
    <form className="h-14 bg-White dark:bg-Dark-Mode-Elements flex items-center max-w-60 pr-4 *:font-semibold rounded-md">
      <select
        value={region}
        onChange={handleChange}
        className="*:font-semibold px-6 w-full outline-none border-none cursor-pointer *:cursor-pointer *: h-full"
      >
        <option value="" className="rounded-t-md">
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas" className="h-14 cursor-pointer">
          America
        </option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania" className="rounded-b-md">
          Oceania
        </option>
      </select>
    </form>
  );
}
