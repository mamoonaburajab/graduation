import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search } = Input;
const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: "#1677ff",
    }}
  />
);
const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchBar = () => (
  <Space direction="vertical">
    <Search
      placeholder="ادخل نص البحث"
      allowClear
      enterButton="بحث"
      size="large"
      onSearch={onSearch}
      style={{ direction: 'rtl' }}
    />
  </Space>
);
export default SearchBar;
