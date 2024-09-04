import { useRouter } from "next/navigation";
import { FaArrowLeftLong } from "react-icons/fa6";

function BackButton() {
  const router = useRouter();
  return (
    <button
      className="flex justify-center items-center gap-2 border-none w-[110px] md:w-[136px] h-10 shadow-around rounded my-10 font-semibold dark:shadow-Light-Mode-Text"
      onClick={() => router.back()}
    >
      <FaArrowLeftLong /> Back
    </button>
  );
}

export default BackButton;
