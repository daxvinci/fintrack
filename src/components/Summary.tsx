import { MdOutlineMoreHoriz } from "react-icons/md";
import { summaryData } from "@/db/db";

const Summary = () => {
  return (
    <>
      <div className="grid w-full lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
        {summaryData.map((item, index) => (
          <div
            key={index}
            className="gridlet flex flex-col gap-4 bg-gray-200 p-6 rounded-2xl"
          >
            <div className="title-line flex gap-2 justify-between items-center">
              <h2 className="title font-bold">{item.title}</h2>
              <MdOutlineMoreHoriz className="hover:cursor-pointer" />
            </div>
            <div className="big-value text-4xl font-bold">
              ${item.value.toLocaleString()}
            </div>
            <p className="percentage text-[#3E7383]">{item.percentage}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Summary;
