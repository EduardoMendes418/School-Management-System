import Image from "next/image"

const Navbar = () => {
    return (
        <div className=" flex items-center justify-between p-4">
            <div className="hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2">
                <Image src="/img/search.png" alt="" width={14} height={14} />
                <input type="text" placeholder="Search..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>
            <div className="flex  items-center gap-6 justify-end w-full">
                <div className="bg-white flex rounded-full w-9 h-9 items-center justify-center cursor-pointer">
                    <Image src="/img/message.png" alt="" width={19} height={19} />
                </div>
                <div className="bg-white flex rounded-full w-9 h-9 items-center justify-center cursor-pointer relative">
                    <Image src="/img/announcement.png" alt="" width={20} height={20} />
                    <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center bg-green02 text-slate-500 rounded-full text-xs">2</div>
                </div>
                <div className="flex flex-col">
                    <span className="text-xs leading-3 font-medium">Eduardo Mendes</span>
                    <span className="text-[10px] text-gray-500 text-right">Admin</span>
                </div>
                    <Image src="/img/avatar3.png" alt="" width={36} height={36} className="rounded-full" />
            </div>
        </div>
    )
}

export default Navbar