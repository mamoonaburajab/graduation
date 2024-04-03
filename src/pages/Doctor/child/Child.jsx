// Child.js
import React, { useState, useEffect } from "react";
import NavbarD from "../../../component/NavbarDoc/NavbarDoc";
import CardChildDoc from "../../../component/cardChildDoc/CardChildDoc";
import SearchBar from "../../../component/Searchbar/SearchBar";
import axios from "axios";

const Child = () => {
  const [children, setChildren] = useState([]);
  const [filteredChildren, setFilteredChildren] = useState([]);

  useEffect(() => {
    // Fetch children data when the component mounts
    fetchChildren();
  }, []);

  const fetchChildren = async () => {
    try {
      // Make API call to fetch children data
      const response = await axios.get("http://localhost:3015/api/doctor/child");
      // Update state with fetched children data
      setChildren(response.data);
      setFilteredChildren(response.data); // Set filtered children initially
    } catch (error) {
      console.error("Error fetching children:", error);
    }
  };

  const handleSearch = searchQuery => {
    const filtered = children.filter(child =>
      child.first_name.includes(searchQuery) || String(child.ID).includes(searchQuery)
    );
    setFilteredChildren(filtered);
  };

  return (
    <div>
      <NavbarD />
      <div className="childHeader">
        <div style={{ marginTop: "100px" }}>
          <SearchBar onSearch={handleSearch} />
        </div>
        <div>
          {/* Render child cards based on fetched and filtered data */}
          {filteredChildren.map(child => (
            <CardChildDoc
              key={child.ID}
              name={child.first_name}
              id={child.ID}
              age={child.age}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Child;
