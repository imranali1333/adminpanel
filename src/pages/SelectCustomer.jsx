import React from "react";

import CustomCrudModule from "@/modules/CustomCrudModule";
import CustomerForm from "@/forms/CustomerForm";

function SelectCustomer() {
  const entity = "client";
  const searchConfig = {
    displayLabels: ["company", "surname", "name"],
    searchFields: "company,surname,name",
    outputValue: "_id",
  };

  const panelTitle = "SelectCustomer Panel";
  const dataTableTitle = "Customers Lists";
  const entityDisplayLabels = ["company"];

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
    // {
    //   title: "Profile Picture",
    //   dataIndex: "profilePicture",
    //   render: (text) => <img src={text} alt="Profile" style={{ width: 50, height: 50 }} />, // Render the profile picture
    // },

  ];
  const dataTableColumns = [
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
    <CustomCrudModule
      createForm={<CustomerForm />}
      updateForm={<CustomerForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default SelectCustomer;
