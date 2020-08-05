/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import brand from "dan-api/dummy/brand";
import BlankPage from "../BlankPage";
import UserListTable from "../../Tables/kitchen/UserListTable";
import { adminDashboardUsers } from "../../../data/data";

const UserList = () => {
  const [tableData, settableData] = useState([]);

  useEffect(() => {
    adminDashboardUsers().then((res) => {
      if (res.isError || res.shouldLogin) {
        console.error("errors");
      }
      if (res.error) {
        console.error("error");
      }
      let table_data = [];
      res.data.map(element => {
        table_data.push([element.profile.first_name, element.email, element.profile.telephone_number, element.profile.city, '', 'link']);
      })
      console.log(table_data);
      settableData(table_data)
    });
  }, []);
  const title = brand.name + " - Blank Page";
  const description = brand.desc;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <BlankPage desc="Some text description">
        <UserListTable tableData={tableData} />
      </BlankPage>
    </div>
  );
};

export default UserList;
