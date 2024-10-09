import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";
import TableSearch from "@/components/tableSearch/tableSearch";
import { role, studentsData } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

type Student = {
  id: number,
  studentId: string,
  name: string,
  email?: string,
  photo: string,
  phone?: string,
  grade: number,
  class: string[],
  address: string
}

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Student ID",
    accessor: "studentId",
    className: "hidden md:table-cell",
  },
  {
    header: "Grade",
    accessor: "grade",
    className: "hidden md:table-cell",
  },
  {
    header: "Phone",
    accessor: "phone",
    className: "hidden lg:table-cell",
  },
  {
    header: "Address",
    accessor: "address",
    className: "hidden lg:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const StudentListPage = () => {

  const renderRow = (item: Student) => (
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100">
      <td className="flex items-center gap-4 p-4">
        <Image src={item.photo} alt="" width={40} height={40} className="md:hidden xl:block w-10 h-10 rounded-full object-cover" />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item.class}</p>
        </div>
      </td>
      <td className="hidden md:table-cell">{item.studentId}</td>
      <td className="hidden md:table-cell">{item.grade}</td>
      <td className="hidden md:table-cell">{item.phone}</td>
      <td className="hidden md:table-cell">{item.address}</td>
      <td>
        <div className=" flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-100">
              <Image src="/img/view.png" alt="" width={17} height={17} />
            </button>
          </Link>
          {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full  bg-red-100">
              <Image src="/img/delete.png" alt="" width={17} height={17} />
            </button>
          )}
        </div>
      </td>
    </tr>
  )

  return (
    <div className="bg-white p-4  rounded-md flex-1 m-4 mt-0 ">
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">All Students</h1>
        <div className=" flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className=" flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/filter.png" alt="" width={17} height={17} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/sort2.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && (
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/plus2.png" alt="" width={17} height={17} />
            </button>
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={studentsData} />
      <Pagination />
    </div>
  );
};

export default StudentListPage;
