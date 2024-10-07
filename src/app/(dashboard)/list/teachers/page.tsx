import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";
import TableSearch from "@/components/tableSearch/tableSearch";
import Image from "next/image";

type Teacher = [
  id: number,
  teacherId: string,
  name: string,
  email: string,
  photo: string,
  phone: string,
  subjects: string[],
  classe: string[],
  addres: string
];

const columns = [
  {
    header: "Info",
    accessor: "info",
  },
  {
    header: "Teacher ID",
    accessor: "teacherId",
    className: "hidden md:table-cell",
  },
  {
    header: "Subjects",
    accessor: "subjectsId",
    className: "hidden md:table-cell",
  },
  {
    header: "Classes",
    accessor: "classes",
    className: "hidden lg:table-cell",
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

const TeacherListPage = () => {
  const renderRow = (item: Teacher) => {};

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
      <Table columns={columns} />
      <Pagination />
    </div>
  );
};

export default TeacherListPage;
