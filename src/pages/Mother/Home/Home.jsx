import React, { useState } from "react";
import {
  CNavbar,
  CContainer,
  CNavbarBrand,
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
  CForm,
  CFormInput,
  CButton,
} from "@coreui/react";
import "./Home.css";

import CardArticle from "../../../component/article/Article";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home"); // State to track active item

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <div className="home">
      <CNavbar expand="lg" colorScheme="light" className="bg-dark fixed-top">
        <CContainer fluid>
          <CNavbarBrand className="text-white" href="#">تسجيل الخروج</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} /> {/* Add CNavbarToggler for mobile */}
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ms-auto">
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "notes"}
                  onClick={() => handleNavItemClick("notes")}
                  className="text-white" // Add text-white class to each CNavLink
                >
                  اضافة ملاحظات
                </CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary right" className="text-white">
                  ادارة الموعيد
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem
                    href="#"
                    onClick={() => handleNavItemClick("action1")}
                  >
                    إجراء
                  </CDropdownItem>
                  <CDropdownItem
                    href="#"
                    onClick={() => handleNavItemClick("action2")}
                  >
                    إجراء آخر
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem
                    href="#"
                    onClick={() => handleNavItemClick("other")}
                  >
                    شيء آخر هنا
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "health"}
                  onClick={() => handleNavItemClick("health")}
                  className="text-white" // Add text-white class to each CNavLink
                >
                  الوضع الصحي للطفل
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "home"}
                  onClick={() => handleNavItemClick("home")}
                  className="text-white" // Add text-white class to each CNavLink
                >
                  الصفحة الرئيسية
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex"></CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
      <CardArticle className="card-article" />
   
    </div>
  );
};

export default Home;