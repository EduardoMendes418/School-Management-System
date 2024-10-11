import FormModal from "@/components/form/formModal";
import Pagination from "@/components/pagination/pagination";
import Table from "@/components/table/table";
import TableSearch from "@/components/tableSearch/tableSearch";
import { role, announcementsData } from "@/lib/data";
import Image from "next/image";

type Announcement = {
  id: number;
  title: string;
  class: string;
  date: string;
};

const columns = [
  {
    header: "Title",
    accessor: "title",
  },
  {
    header: "Class",
    accessor: "class",
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

const AnnouncementListPage = () => {
  const renderRow = (item: Announcement) => (
    <tr
      key={item.id}
      className="border-b border-gray-200 even:bg-slate-50 text-sm hover:bg-slate-100"
    >
      <td className="flex items-center gap-4 p-4">{item.title}</td>
      <td>{item.class}</td>
      <td className="hidden md:table-cell">{item.date}</td>
      <td>
        <div className=" flex items-center gap-2">
          {role === "admin" && (
            <>
              <FormModal table='announcement' type="update" data={item} />
              <FormModal table='announcement' type="delete" data={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );

  return (
    <div className="bg-white p-4  rounded-md flex-1 m-4 mt-0 ">
      <div className="flex items-center justify-between ">
        <h1 className="hidden md:block text-lg font-semibold">
          All Announcements
        </h1>
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
                <FormModal table="teacher" type="create" />
            )}
          </div>
        </div>
      </div>
      <Table columns={columns} renderRow={renderRow} data={announcementsData} />
      <Pagination />
    </div>
  );
};

export default AnnouncementListPage;
