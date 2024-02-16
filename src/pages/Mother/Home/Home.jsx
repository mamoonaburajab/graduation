import React, { useState } from "react";
import "./Home.css";
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

const Home = () => {
  const [visible, setVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("home"); // State to track active item

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
  };

  return (
    <div className="home">
      <CNavbar expand="lg" colorScheme="light" className="bg-light fixed-top">
        <CContainer fluid>
          <CNavbarBrand href="#">تسجيل الخروج</CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse" visible={visible}>
            <CNavbarNav className="ms-auto">
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "notes"}
                  onClick={() => handleNavItemClick("notes")}
                >
                  اضافة ملاحظات
                </CNavLink>
              </CNavItem>
              <CDropdown variant="nav-item" popper={false}>
                <CDropdownToggle color="secondary">ادارة الموعيد</CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem href="#" onClick={() => handleNavItemClick("action1")}>
                    إجراء
                  </CDropdownItem>
                  <CDropdownItem href="#" onClick={() => handleNavItemClick("action2")}>
                    إجراء آخر
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem href="#" onClick={() => handleNavItemClick("other")}>
                    شيء آخر هنا
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "health"}
                  onClick={() => handleNavItemClick("health")}
                >
                  الوضع الصحي للطفل
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="#"
                  active={activeNavItem === "home"}
                  onClick={() => handleNavItemClick("home")}
                >
                  الصفحة الرئيسية
                </CNavLink>
              </CNavItem>
            </CNavbarNav>
            <CForm className="d-flex"></CForm>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </div>
  );
};

export default Home;
