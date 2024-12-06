"use client";
import { useState } from "react";

import moment from "moment";
import { ManageUser } from "@/components/Admin/ManageUsers";
import { ManageUserSubscription } from "@/components/Admin/ManageUserSubscription";
import { AgGridReact } from "ag-grid-react"; // AG Grid Component

import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-quartz.css";

export function UsersList({ users = {}, subscriptions = {} }) {
  const ActionButtonComponent = (props) => {
    const { data } = props;
    return (
      <div
        className="css-bbq5bh"
        style={{
          fontSize: "12px",
        }}
      >
        <ManageUserSubscription
          details={data}
          subscriptionList={subscriptions}
        />
        <ManageUser action={"EDIT"} details={data} />
        <ManageUser action={"DELETE"} details={data} />
      </div>
    );
  };

  const getSubscriptionName = (user) => {
    const { data } = user;
    return data?.subscription?.name;
  };

  const getSubscriptionEndDate = (user) => {
    const { data } = user;
    return data?.subscriptionEndDate && data?.subscription?.name === "Basic1"
      ? "N/A"
      : moment(data?.subscriptionEndDate).format("MM/DD/YYYY");
  };

  // Column Definitions: Defines the columns to be displayed.
  const [colDefs, setColDefs] = useState([
    { field: "firstName", filter: true },
    { field: "lastName", filter: true },
    {
      field: "subscriptionName",
      valueGetter: (user) => getSubscriptionName(user),
      filter: true,
    },
    {
      field: "endDate",
      valueGetter: (user) => getSubscriptionEndDate(user),
      filter: true,
    },
    { field: "action", cellRenderer: ActionButtonComponent, flex: 2 },
  ]);

  return (
    <>
      <div
        className="ag-theme-quartz" // applying the grid theme
        style={{ height: 500 }} // the grid will fill the size of the parent container
      >
        <AgGridReact rowData={users} columnDefs={colDefs} />
      </div>
    </>
  );
}

export default UsersList;
