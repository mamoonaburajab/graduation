import React, { useState } from "react";
import {
  CNavbarToggler,
  CCollapse,
  CNavbarNav,
  CNavItem,
  CNavLink,
  CNavbar,
  CContainer,
  CNavbarBrand,
  CForm,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CDropdownDivider,
} from "@coreui/react";
import "./NavbarM";
const NavbarM = () => {
  const [visible, setVisible] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState("/mother/home");

  const handleNavItemClick = (itemName) => {
    setActiveNavItem(itemName);
    setVisible(false); // Close the menu after clicking an item on small devices
  };

  return (
    <div>
      <CNavbar expand="lg" colorScheme="light" className="bg-dark fixed-top">
        <CContainer fluid>
          <CNavbarBrand className="text-white" href="/login">
            تسجيل الخروج
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse className="navbar-collapse " visible={visible}>
            <CNavbarNav className="ms-auto ·">
              <CNavItem>
                <CNavLink
                  href="/mother/Note"
                  active={activeNavItem === "notes"}
                  onClick={() => handleNavItemClick("notes")}
                  className="text-white"
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
                    href="/Mother/ViewApp"
                    onClick={() => handleNavItemClick("action1")}
                  >
                    مشاهدة المواعيد
                  </CDropdownItem>
                  <CDropdownItem
                    href="/mother/Appointment"
                    onClick={() => handleNavItemClick("action2")}
                  >
                    حجز موعد جديد
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem
                    href=""
                    onClick={() => handleNavItemClick("other")}
                  >
                    الغاء موعد
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CNavItem>
                <CNavLink
                  href="/mother/MotherChildCard"
                  active={activeNavItem === "health"}
                  onClick={() => handleNavItemClick("health")}
                  className="text-white"
                >
                  الوضع الصحي للطفل
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="home"
                  active={activeNavItem === "home"}
                  onClick={() => handleNavItemClick("home")}
                  className="text-white"
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

export default NavbarM;

