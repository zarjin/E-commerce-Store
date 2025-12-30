import { TbLogin2 } from "react-icons/tb";

export default function Button({ buttonName }) {
  return (
    <>
      <button class="bg-[#00AEEF]/10 border-2 border-[#00AEEF]/50 text-[#00AEEF] hover:bg-[#00AEEF] hover:text-white px-6 py-3 rounded-xl transition-all flex items-center space-x-3 cursor-pointer">
        {buttonName}
        <TbLogin2 size={24} />
      </button>
    </>
  );
}
