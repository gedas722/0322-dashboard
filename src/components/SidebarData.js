import React from "react";

// Icons
import Dashboard from "@mui/icons-material/Dashboard";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import BarChart from "@mui/icons-material/BarChart";
import School from "@mui/icons-material/School";
import Description from "@mui/icons-material/Description";

//SidebarData
export const SidebarData = [
  {
    title: "Dashboard",
    icon: <Dashboard />,
    link: "/",
  },
  {
    title: "Orders",
    icon: <ShoppingCart />,
    link: "/orders",
  },
  {
    title: "Customers",
    icon: <PeopleAlt />,
    link: "/customers",
  },
  {
    title: "Reports",
    icon: <BarChart />,
    link: "/reports",
  },
  {
    title: "Integration",
    icon: <School />,
    link: "/integrations",
  },
  {
    title: "Current month",
    icon: <Description />,
    link: "/current_month",
  },
  {
    title: "Last quater",
    icon: <Description />,
    link: "/last_quater",
  },
  {
    title: "Year-end sale",
    icon: <Description />,
    link: "/year-end_sale",
  },
];
