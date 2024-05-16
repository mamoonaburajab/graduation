import React from "react";
import { Space, Table, Tag, Button } from "antd";
import "./ViewAppointments.css";
import NavbarM from "../navbarMom/NavbarM";

const handleDelete = (key) => {
  console.log("Deleted item with key:", key);
  // Implement deletion logic here
};

const handleEdit = (key) => {
  console.log("Edited item with key:", key);
  // Implement edit logic here
};

const columns = [
  {
    title: 'الإجراءات', // Actions
    key: 'actions',
    dataIndex: 'actions',
    render: (_, record) => (
      <Space size="middle">
        <Button type="link" onClick={() => handleDelete(record.key)}>حذف</Button>
      </Space>
    ),
    fixed: 'left', // This will fix the column to the left
  },
  {
    title: "حالة الموعد",
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
    title: "اليوم",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "التاريخ",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "العمر",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "اسم الطفل",
    dataIndex: "name",
    key: "name",
    align: "right",
    render: (text) => <div>{text}</div>,
  },
];

const data = [
  {
    key: "1",
    name: "جون براون",
    age: 10,
    day: "الاحد",
    date: "10/5/2020",
    tags: ["تم"],
  },
  {
    key: "2",
    name: "جيم جرين",
    age: 12,
    day: "الاحد",
    date: "10/5/2020",
    tags: ["ملغي"],
  },
  {
    key: "3",
    name: "جو بلاك",
    age: 4,
    date: "10/5/2020",
    day: "الاحد",
    tags: ["تم"],
  },
];

const ViewAppointments = () => (
  <div>
    <NavbarM/>
    <div className="table-container">
      <Table columns={columns} dataSource={data} scroll={{ x: 1000 }} />
    </div>
  </div>
);

export default ViewAppointments;
