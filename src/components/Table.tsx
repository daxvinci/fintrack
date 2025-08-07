import { TableData, tableHeadData } from "@/db/db";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Badge from "./Badge";

const Table = () => {
    return (
      <>
        <table className="w-full text-left border-separate border-spacing-x-2">
          <thead className="bg-[#fcfdfd] w-full">
            <tr>
              <th className="py-2 w-1/2">
                <span className="flex items-center gap-2 border-b border-gray-300 py-3 mr-2">
                  {tableHeadData.date}
                  <MdOutlineArrowDropDown className="hover:cursor-pointer" />
                </span>
              </th>
              <th className="py-2">
                <span className="flex items-center gap-2 border-b border-gray-300 py-3 mr-2">
                  {tableHeadData.remark}
                  <MdOutlineArrowDropDown className="hover:cursor-pointer" />
                </span>
              </th>
              <th className="py-2">
                <span className="flex items-center gap-2 border-b border-gray-300 py-3 mr-2">
                  {tableHeadData.amount}
                  <MdOutlineArrowDropDown className="hover:cursor-pointer" />
                </span>
              </th>
              <th className="py-2">
                <span className="flex items-center gap-2 border-b border-gray-300 py-3 mr-2">
                  {tableHeadData.currency}
                  <MdOutlineArrowDropDown className="hover:cursor-pointer" />
                </span>
              </th>
              <th className="py-2">
                <span className="flex items-center gap-2 border-b border-gray-300 py-3 mr-2">
                  {tableHeadData.type}
                  <MdOutlineArrowDropDown className="hover:cursor-pointer" />
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {TableData.map((data, index) => (
              <tr key={index}>
                <td className="border-b border-gray-300 py-3">{data.date}</td>
                <td className="border-b border-gray-300 py-3">{data.remark}</td>
                <td className="border-b border-gray-300 py-3">
                  {data.amount < 1 ? "-" : ""}${Math.abs(data.amount)}
                </td>
                <td className="border-b border-gray-300 py-3">
                  {data.currency}
                </td>
                <td className="border-b border-gray-300 py-3 px-3">
                  <Badge
                    text={data.type}
                    color={data.type === "Credit" ? "#087a2e" : "#c6381b"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
}
 
export default Table;