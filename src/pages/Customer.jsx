import React from "react";

import CrudModule from "@/modules/CrudModule";
import CustomerForm from "@/forms/CustomerForm";

function Customer() {
  const entity = "client";
  const searchConfig = {
    displayLabels: ["firstName", "telegramId", "telegramUsername"],
    searchFields: "firstName,telegramId,telegramUsername",
    outputValue: "_id",
  };

  const panelTitle = "Customer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["User Details"];

  const readColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "Telegram ID",
      dataIndex: "telegramId",
    },
    {
      title: "Telegram Username",
      dataIndex: "telegramUsername",
    },
    {
      title: "Profile Picture",
      dataIndex: "profilePicture",
      render: (text) => (
        <img src={text} alt="Profile" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      title: "Auth Date",
      dataIndex: "authDate",
    },
    {
      title: "Added",
      dataIndex: "added",
    },
    {
      title: "Updated",
      dataIndex: "updated",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
    },
    {
      title: "Wallet",
      dataIndex: "wallet",
      render: (wallet) =>
        wallet && wallet.length > 0
          ? wallet.map((w) => `ID: ${w.id}, Balance: ${w.balance}`).join("; ")
          : "No wallet",
    },
    {
      title: "All Coins",
      dataIndex: "allCoins",
      render: (coins) => (coins ? `ID: ${coins.id}, Balance: ${coins.balance}` : "No coins"),
    },
    // {
    //   title: "Transactions",
    //   dataIndex: "transactions",
    //   render: (transactions) =>
    //     transactions && transactions.length > 0
    //       ? transactions.map((transaction) => `ID: ${transaction.id}, Amount: ${transaction.amount}`).join("; ")
    //       : "No transactions",
    // },
    // {
    //   title: "From Transactions",
    //   dataIndex: "fromTransactions",
    //   render: (fromTransactions) =>
    //     fromTransactions && fromTransactions.length > 0
    //       ? fromTransactions.map((transaction) => `ID: ${transaction.id}, Amount: ${transaction.amount}`).join("; ")
    //       : "No from transactions",
    // },
    // {
    //   title: "To Transactions",
    //   dataIndex: "toTransactions",
    //   render: (toTransactions) =>
    //     toTransactions && toTransactions.length > 0
    //       ? toTransactions.map((transaction) => `ID: ${transaction.id}, Amount: ${transaction.amount}`).join("; ")
    //       : "No to transactions",
    // },
    // {
    //   title: "Invitations Sent",
    //   dataIndex: "invitationsSent",
    //   render: (invitationsSent) =>
    //     invitationsSent && invitationsSent.length > 0
    //       ? invitationsSent.map((invitation) => `ID: ${invitation.id}, Accepted: ${invitation.accepted}`).join("; ")
    //       : "No invitations sent",
    // },
    // {
    //   title: "Invitations Received",
    //   dataIndex: "invitationsReceived",
    //   render: (invitationsReceived) =>
    //     invitationsReceived && invitationsReceived.length > 0
    //       ? invitationsReceived.map((invitation) => `ID: ${invitation.id}, Accepted: ${invitation.accepted}`).join("; ")
    //       : "No invitations received",
    // },
    // {
    //   title: "Events Attending",
    //   dataIndex: "eventsAttending",
    //   render: (eventsAttending) =>
    //     eventsAttending && eventsAttending.length > 0
    //       ? eventsAttending.map((event) => `ID: ${event.id}, Name: ${event.name}`).join("; ")
    //       : "No events attending",
    // },
    // {
    //   title: "Tasks Assigned",
    //   dataIndex: "tasksAssigned",
    //   render: (tasksAssigned) =>
    //     tasksAssigned && tasksAssigned.length > 0
    //       ? tasksAssigned.map((task) => `ID: ${task.id}, Name: ${task.name}`).join("; ")
    //       : "No tasks assigned",
    // },
  ];
  
  const dataTableColumns = [
     {
      title: "First Name",
      dataIndex: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
    },
    {
      title: "telegramUsername",
      dataIndex: "telegramUsername",
    },
    {
      title: "telegramId",
      dataIndex: "telegramId",
    },
  ];

  const ADD_NEW_ENTITY = "Add new customer";
  const DATATABLE_TITLE = "customers List";
  const ENTITY_NAME = "customer";
  const CREATE_ENTITY = "Create customer";
  const UPDATE_ENTITY = "Update customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    readColumns,
    dataTableColumns,
    searchConfig,
    entityDisplayLabels,
  };
  return (
    <CrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Customer;
