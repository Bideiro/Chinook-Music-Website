import { usePage } from "@inertiajs/react";
import Sidebar from "../../Layouts/Sidebar";



function Dashboard({ }) {

    const { user } = usePage().props;
    return (
        <>
            <div className="flex p-10">
                <div className=" font-bebas text-6xl">
                    Hello {user.FirstName}
                </div>
                
                

            </div>
        </>
    )
}

Dashboard.layout = page => <Sidebar>{page}</Sidebar>;

export default Dashboard;