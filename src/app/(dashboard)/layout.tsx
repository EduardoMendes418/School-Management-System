import Link from "next/link";
import Image from 'next/image';
import Menu from "@/components/menu/menu";
import Navbar from "@/components/navbar/navbar";

export default function DashboardLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/*LEFT*/}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
                <Link href="/" className="flex items-center justify-center lg:justify-start gap-2">
                    <Image src="/img/logo.png" alt="logo" width={50} height={50} />
                    <span className="hidden lg:block">Environmental <br /> School</span>
                </Link>
                <Menu />
            </div>
            {/*Right*/}
            <div className="w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%] bg-[#F7F8FA] overflow-scroll">
                <Navbar />
                {children}
            </div>
        </div>
    );
}