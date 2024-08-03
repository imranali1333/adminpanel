import React from "react";

import CrudModule from "@/modules/CrudModule";
import LeadForm from "@/forms/LeadForm";

function Lead() {
  const entity = "lead";
  const searchConfig = {
    displayLabels: ["client"],
    searchFields: "title,description,genre,link,description",
    outputValue: "_id",
  };

  const panelTitle = "Video Panel";
  const dataTableTitle = "Video Lists";
  const entityDisplayLabels = ["Videos"];

  const readColumns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    {
      title: "Duration",
      dataIndex: "duration",
    },
    {
      title: "Release Date",
      dataIndex: "releaseDate",
      // render: (text: Date) => new Date(text).toLocaleDateString(), // Format date
    },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Link",
      dataIndex: "link",
      // render: (text: string) => <a href={text} target="_blank" rel="noopener noreferrer">Watch Video</a>, // Render video link
    },
    {
      title: "Added",
      dataIndex: "added",
      // render: (text: Date) => new Date(text).toLocaleDateString(), // Format date
    },
    {
      title: "Updated",
      dataIndex: "updated",
      // render: (text: Date) => new Date(text).toLocaleDateString(), // Format date
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      // render: (text: Date) => new Date(text).toLocaleDateString(), // Format date
    },
  ];
  const dataTableColumns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Description",
      dataIndex: "description",
    },
    // {
    //   title: "Duration",
    //   dataIndex: "duration",
    // },
    // {
    //   title: "Release Date",
    //   dataIndex: "releaseDate",
    //   // render: (text: Date) => new Date(text).toLocaleDateString(), // Format date
    // },
    {
      title: "Genre",
      dataIndex: "genre",
    },
    {
      title: "Link",
      dataIndex: "link",
      // render: (text: string) => <a href={text} target="_blank" rel="noopener noreferrer">Watch Video</a>, // Render video link
    },
  ];

  const ADD_NEW_ENTITY = "Add new lead";
  const DATATABLE_TITLE = "leads List";
  const ENTITY_NAME = "lead";
  const CREATE_ENTITY = "Create lead";
  const UPDATE_ENTITY = "Update lead";
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
      createForm={<LeadForm />}
      updateForm={<LeadForm isUpdateForm={true} />}
      config={config}
    />
  );
}

export default Lead;
