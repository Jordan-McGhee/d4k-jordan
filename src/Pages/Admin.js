import React from "react";
import AdminTable from "../Components-Admin/AdminTable";

// dummy
import data from "../DUMMY/DUMMY_DATA"

const Admin = () => {

    return (
        <div>

            {/* IN PROGRESS DIV */}
            <div>
                <p className="my-5 text-4xl font-bold uppercase text-green-600">WORKING ON IT</p>
                <AdminTable data = { data.ORDERS.filter((order) => order.deliveredToCustomer === false) }/>
            </div>

            {/* completed DIV */}
            <div>
                <p className="my-5 text-4xl font-bold uppercase text-green-600">Completed</p>
                <AdminTable data = { data.ORDERS.filter((order) => order.deliveredToCustomer === true) }/>
            </div>

        </div>
    )
}

export default Admin