export default function ProductSkeleton({ listStyle }) {
  return (
    <>
      <div
        className={` h-fit flex flex-wrap justify-center  ${
          listStyle === "Grid" ? "flex-row" : "flex-col"
        } ${listStyle === "Grid" ? "w-full" : "w-full"} gap-2`}
      >
        {/* Product Card List */}
        <div className="w-[48%] lg:h-60 h-44 bg-[white] border rounded-md flex flex-col animate-pulse p-3 gap-3">
          <span className=" bg-slate-300 animate-pulse w-full h-20 lg:h-30"></span>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
        </div>

        <div className="w-[48%] lg:h-60 h-44 bg-[white] border rounded-md flex flex-col animate-pulse p-3 gap-3">
          <span className=" bg-slate-300 animate-pulse w-full h-20 lg:h-30"></span>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
        </div>

        <div className="w-[48%] lg:h-60 h-44 bg-[white] border rounded-md flex flex-col animate-pulse p-3 gap-3">
          <span className=" bg-slate-300 animate-pulse w-full h-20 lg:h-30"></span>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
        </div>

        <div className="w-[48%] lg:h-60 h-44 bg-[white] border rounded-md flex flex-col animate-pulse p-3 gap-3">
          <span className=" bg-slate-300 animate-pulse w-full h-20 lg:h-30"></span>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
          <p className=" bg-red-300 animate-pulse w-full h-5 lg:h-10"></p>
        </div>
      </div>
    </>
  );
}
