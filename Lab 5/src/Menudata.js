
const menuData = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
    dropdown: [
      { label: "Overview", path: "/about/overview" },
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "History", path: "/about/history" },
      { label: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    label: "Academics",
    path: "/academics",
    dropdown: [
      { label: "Departments", path: "/academics/departments" },
      { label: "Courses Offered", path: "/academics/courses" },
      { label: "Faculty", path: "/academics/faculty" },
      { label: "Academic Calendar", path: "/academics/calendar" },
    ],
  },
  {
    label: "Admissions",
    path: "/admissions",
    dropdown: [
      { label: "Undergraduate", path: "/admissions/undergraduate" },
      { label: "Postgraduate", path: "/admissions/postgraduate" },
      { label: "PhD Programs", path: "/admissions/phd" },
      { label: "Scholarships", path: "/admissions/scholarships" },
    ],
  },
  {
    label: "Research",
    path: "/research",
    dropdown: [
      { label: "Research Centers", path: "/research/centers" },
      { label: "Publications", path: "/research/publications" },
      { label: "Ongoing Projects", path: "/research/projects" },
    ],
  },
  {
    label: "Campus Life",
    path: "/campus-life",
    dropdown: [
      { label: "Hostel & Residence", path: "/campus-life/hostel" },
      { label: "Clubs & Societies", path: "/campus-life/clubs" },
      { label: "Sports", path: "/campus-life/sports" },
      { label: "Events", path: "/campus-life/events" },
    ],
  },
  {
    label: "Placements",
    path: "/placements",
    // No dropdown — direct link
  },
  {
    label: "Contact Us",
    path: "/contact",
    // No dropdown — direct link
  },
];

export default menuData;