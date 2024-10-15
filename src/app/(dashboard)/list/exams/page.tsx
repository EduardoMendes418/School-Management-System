import FormModal from "@/components/modal/formModal";
import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";
import TableSearch from "@/components/tableSearch/tableSearch";
import { role, examsData } from "@/lib/data";
import Image from "next/image";

type Exam = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  date: string;
};

const columns = [
  {
    header: "Subject Name",
    accessor: "name",
  },
  {
    header: "Class",
    accessor: "class",
    className: "hidden md:table-cell",
  },
  {
    header: "Teacher",
    accessor: "teacher",
    className: "hidden md:table-cell",
  },
  {
    header: "Date",
    accessor: "date",
    className: "hidden md:table-cell",
  },
  {
    header: "Actions",
    accessor: "action",
  },
];

const ExamsListPage = () => {
  const renderRow = (item: Exam) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100"
    >
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className=" flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table="exam" type="update" data={item} />
              <FormModal table="exam" type="delete" data={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4  rounded-md flex-1 m-4 mt-0 ">
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">All Exams</h1>
        <div className=" flex flex-col md:flex-row items-center w-full md:w-auto gap-4">
          <TableSearch />
          <div className=" flex items-center gap-4 self-end">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/filter.png" alt="" width={17} height={17} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-100">
              <Image src="/img/sort2.png" alt="" width={20} height={20} />
            </button>
            {role === "admin" && <FormModal table="exam" type="create" />}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={examsData} />
      <Pagination />
    </div>
  );
};

export default ExamsListPage;
