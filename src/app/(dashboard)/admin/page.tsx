import CountChart from "@/components/countChart/countChart"
import UserCard from "@/components/userCard/userCard"

const AdminPage = () => {
    return (
        <div className="p-4 flex gap-4 flex-col md:flex-row">
            {/*LEFT*/}
            <div className="w-full lg:w-2/3 flex flex-col gap-8">
                <div className="flex gap-4 justify-between flex-wrap">
                    <UserCard type="student" />
                    <UserCard type="teacher" />
                    <UserCard type="parent" />
                    <UserCard type="staff" />
                </div>

                {/*Middle charts*/}
                <div className="flex gap-4 flex-col lg:flex-row">
                    <div className="w-full lg:w-1/3 h-[450px]">
                        <CountChart />
                    </div>
                    <div className="w-full lg:w-1/3 h-[450px]"></div>
                </div>
            </div>
            {/*Right*/}
            <div className="w-full lg:w-1/3">3</div>
        </div>
    )
}

export default AdminPage