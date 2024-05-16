import { IoSearch } from "react-icons/io5";
export default function Search() {
  return (
    <>
      <div className="relative w-full ">
        <input type="text" className="w-full border border-[#4632326c] rounded-full px-10 py-2" placeholder="Search an Item" />
        <IoSearch className="absolute left-3 top-3" size={20} />
      </div>
    </>
  );
}
