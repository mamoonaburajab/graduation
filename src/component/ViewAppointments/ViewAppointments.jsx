import React from "react";
import { Space, Table, Tag } from "antd";
import "./ViewAppointments.css"; // Import the updated CSS file for styling
import NavbarM from "../navbarMom/NavbarM";

const columns = [
  {
    title: "حالة الموعد", // Tags
    key: "tags",
    dataIndex: "tags",
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 5 ? "geekblue" : "green";
          if (tag === "loser") {
            color = "volcano";
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: "اليوم", // day
    dataIndex: "day",
    key: "day",
  },
  {
    title: "التاريخ", // Date
    dataIndex: "date",
    key: "date",
  },
  {
    title: "العمر", // Age
    dataIndex: "age",
    key: "age",
  },
  {
    title: "اسم الطفل", // Child's Name
    dataIndex: "name",
    key: "name",
    align: "right", // Align the text to the right
    render: (text) => <div>{text}</div>,
  },
];

const data = [
  {
    key: "1",
    name: "جون براون", // John Brown
    age: 10,
    day: "الاحد",
    date:"10/5/2020", // New York No. 1 Lake Park
    tags: ["تم"], // ['nice', 'developer']
  },
  {
    key: "2",
    name: "جيم جرين", // Jim Green
    age: 12,
    day: "الاحد",
    date:"10/5/2020", // London No. 1 Lake Park
    tags: ["ملغي"], // ['loser']
  },
  {
    key: "3",
    name: "جو بلاك", // Joe Black
    age: 4,
    date:"10/5/2020",
    day: "الاحد", // Sydney No. 1 Lake Park
    tags: ["تم"], // ['cool', 'teacher']
  },
];

const ViewAppointments = () => (
  <div>
    <NavbarM/>
    <div className="table-container">
    <Table columns={columns} dataSource={data} />
  </div>
  </div>
);

export default ViewAppointments;
