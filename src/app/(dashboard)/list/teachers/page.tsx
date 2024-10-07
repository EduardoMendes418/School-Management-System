import Pagination from "@/components/pagination/pagination";
import TableSearch from "@/components/tableSearch/tableSearch";
import Image from "next/image";

const TeacherListPage = () => {
  return (
    <div className="bg-white rounded-md flex-1 m-4 mt-0 p-4 ">
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">All Teachers</h1>
        <div className=" flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className=" flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/filter.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/sort.png" alt="" width={14} height={14} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/plus.png" alt="" width={14} height={14} />
            </button>
          </div>
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
