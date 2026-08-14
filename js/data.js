/* =========================================================================
   DIPAN NANDI — PORTFOLIO CONTENT
   -------------------------------------------------------------------------
   This is the ONLY file you should need to edit to update your info.
   Change any text, number, or link below — the page updates automatically.
   Do not remove commas or quotation marks. When in doubt, copy the pattern
   of the item above/below the one you're editing.
   ========================================================================= */

const SITE_DATA = {

  /* ---------------------------------------------------------------------
     1. PROFILE — used in the nav, hero, and footer
  --------------------------------------------------------------------- */
  profile: {
    name: "Dipan Nandi",
    initials: "DN",
    role: "Data Analyst",
    eyebrow: "Data Analyst · Barishal, Bangladesh",
    roleTags: ["Data Analyst", "Power BI", "Advanced Excel", "SQL", "R"],
    bio: "I turn raw data into insights that drive better decisions — cleaning, analyzing, and visualizing information through interactive Power BI dashboards and clear, actionable reporting.",
    location: "Barishal, Bangladesh",
    email: "dipannandi.bu@gmail.com",
    phone: "+880 1640-287714",
    linkedin: "https://www.linkedin.com/in/dipannandi",
    github: "https://github.com/dipan007",
    photo: "assets/images/profile/profile.jpeg",
    resume: "assets/docs/Dipan_Nandi_Resume.pdf",
    availability: "Open to Data Analyst / BI / MIS roles",
  },

  /* ---------------------------------------------------------------------
     2. HERO MINI-PANEL — the small "What I Work With" proficiency card
     value = 0-100, used to draw the bar width
  --------------------------------------------------------------------- */
  proficiency: [
    { label: "Advanced Excel", value: 95 },
    { label: "Power BI", value: 92 },
    { label: "Data Visualization", value: 90 },
    { label: "SQL", value: 85 },
    { label: "Statistical Analysis", value: 88 },
  ],

  /* ---------------------------------------------------------------------
     3. INSIGHT TICKER — real, verified numbers pulled straight from your
     project results. This scrolls across the dark strip under the hero.
  --------------------------------------------------------------------- */
  ticker: [
    "16.12% ATTRITION RATE UNCOVERED — HR ANALYTICS",
    "$24.91M REVENUE MODELED — ADVENTUREWORKS SALES",
    "$3.36M BILLING SURFACED — HEALTHCARE ANALYSIS",
    "35+ TEAM MEMBERS LED — BUITS",
    "30+ EVENTS DELIVERED WITH UNDP & GRAMEENPHONE",
    "60% LESS MANUAL PAPERWORK — PROCESS AUTOMATION",
    "$10.46M PROFIT TRACKED — SALES DASHBOARD",
  ],

  /* ---------------------------------------------------------------------
     4. QUICK STATS BAR — the 5 icon cards under the ticker
     icon options: "folder", "dashboard", "tools", "team", "target"
  --------------------------------------------------------------------- */
  quickStats: [
    { icon: "folder", value: 5, suffix: "+", label: "Analytics Projects Delivered" },
    { icon: "dashboard", value: 3, suffix: "", label: "Power BI Dashboards Built" },
    { icon: "tools", value: 8, suffix: "+", label: "Tools & Technologies" },
    { icon: "team", value: 35, suffix: "+", label: "Team Members Led" },
    { icon: "target", value: 100, suffix: "%", label: "Dedicated to Data-Driven Impact" },
  ],

  /* ---------------------------------------------------------------------
     5. SKILLS & TOOLS GRID
     icon options: "powerbi","excel","r","sql","spss","python","dax","query","html"
  --------------------------------------------------------------------- */
  skills: [
    { icon: "powerbi", name: "Power BI" },
    { icon: "excel", name: "Advanced Excel" },
    { icon: "sql", name: "SQL" },
    { icon: "r", name: "R" },
    { icon: "python", name: "Python" },
    { icon: "spss", name: "IBM SPSS" },
    { icon: "dax", name: "DAX" },
    { icon: "query", name: "Power Query" },
  ],

  /* ---------------------------------------------------------------------
     6. FEATURED PROJECTS
     image = path under assets/images/projects/
     link  = live report / sheet / or your GitHub
  --------------------------------------------------------------------- */
  projects: [
    {
      tag: "Power BI · HR Analytics",
      title: "HR Attrition Analysis",
      image: "assets/images/projects/hr-attrition.png",
      description: "Interactive workforce report covering headcount, attrition, salary bands, job roles, overtime, and satisfaction — built with Power Query and reusable DAX measures.",
      stat: "1.47K employees · 237 exits · 16.12% attrition rate",
      linkLabel: "View Live Report",
      link: "https://app.powerbi.com/view?r=eyJrIjoiMmU5ZWVkZTQtOWQyYy00M2NlLWFmMjgtMWQzYTQ4NGNkMTliIiwidCI6IjNjZDA3OTg4LTUyNjMtNDA2NC1hZDU1LWU5NTZhYjNkZDExNyIsImMiOjEwfQ%3D%3D",
    },
    {
      tag: "Power BI · Healthcare",
      title: "Healthcare Billing & Operations",
      image: "assets/images/projects/healthcare.png",
      description: "Transformed eight source tables into an analytical model covering billing, treatment, insurance, procedures, and diagnoses, with a dynamic date table and location field parameters.",
      stat: "$3.36M in billing surfaced across departments",
      linkLabel: "View Live Report",
      link: "https://app.powerbi.com/view?r=eyJrIjoiZjFmN2FmYTMtNTBiMi00NmI3LTg2NDUtMzVhMjU1Y2ZjNDI0IiwidCI6IjNjZDA3OTg4LTUyNjMtNDA2NC1hZDU1LWU5NTZhYjNkZDExNyIsImMiOjEwfQ%3D%3D",
    },
    {
      tag: "Power BI · Sales",
      title: "AdventureWorks Sales Analysis",
      image: "assets/images/projects/adventureworks.png",
      description: "End-to-end BI solution combining sales, customer, product, geography, and returns data into a centralized star-schema model with time-intelligence DAX.",
      stat: "$24.91M revenue · $10.46M profit analyzed",
      linkLabel: "View on GitHub",
      link: "https://github.com/dipan007",
    },
    {
      tag: "Excel · Retail Analytics",
      title: "Retail Sales Analytics Case Study",
      image: "assets/images/projects/excel-dashboard.png",
      description: "A Bangladesh retail case study covering sales performance, target achievement, profit, discount, delivery, and salesperson performance in a single management dashboard.",
      stat: "Store, region & salesperson-level drill-down",
      linkLabel: "View on GitHub",
      link: "https://github.com/dipan007",
    },
    {
      tag: "Google Sheets · Automation",
      title: "Sales Tracker Automation",
      image: "assets/images/projects/sales-tracker.png",
      description: "A controlled Form → Database → Dashboard workflow with data validation and custom macros — reducing repetitive copying, sorting, and formatting for the sales team.",
      stat: "Live dashboard, protected master database",
      linkLabel: "View Live Tracker",
      link: "https://docs.google.com/spreadsheets/d/1TK7DMBhOknn1WobVjUFcyenDR0r7Q_iWPYRZpOH5Dc0/edit?gid=1955352547#gid=1955352547",
    },
    {
      tag: "Excel · Skills Portfolio",
      title: "Excel Skills Portfolio",
      image: "assets/images/projects/excel-skills.png",
      description: "Practical workbooks covering data cleaning, Power Query, XLOOKUP/VLOOKUP, INDEX-MATCH, PivotTables, and conditional formatting across business scenarios.",
      stat: "10+ workbooks · 8 skill categories",
      linkLabel: "View on GitHub",
      link: "https://github.com/dipan007",
    },
  ],

  /* ---------------------------------------------------------------------
     7. WHAT I DO — icon options: "clean","analyze","visualize","report","decide"
  --------------------------------------------------------------------- */
  whatIDo: [
    { icon: "clean", title: "Data Cleaning", text: "Clean, transform, and prepare raw data so every analysis starts from a trustworthy base." },
    { icon: "analyze", title: "Data Analysis", text: "Explore data to find patterns, test hypotheses, and extract meaningful insight." },
    { icon: "visualize", title: "Data Visualization", text: "Build interactive Power BI and Excel dashboards that communicate clearly at a glance." },
    { icon: "report", title: "Reporting", text: "Write clear, structured reports and documentation for both technical and non-technical stakeholders." },
    { icon: "decide", title: "Decision Support", text: "Translate findings into recommendations that support faster, more confident decisions." },
  ],

  /* ---------------------------------------------------------------------
     8. ABOUT — short paragraph + quick facts list
  --------------------------------------------------------------------- */
  about: {
    paragraph1: "I'm a Statistics graduate (M.S. & B.S. Hons., University of Barishal) with a strong analytical foundation and hands-on experience across Power BI, Advanced Excel, SQL, Python, R, and IBM SPSS.",
    paragraph2: "Beyond the numbers, I've led large-scale teams and high-stakes projects for partners including UNDP, LG, and Grameenphone — experience that sharpened my stakeholder management and communication alongside my technical skills.",
    facts: [
      { label: "Location", value: "Barishal, Bangladesh" },
      { label: "Languages", value: "Bengali, English, Hindi" },
      { label: "Focus", value: "Data Analytics · BI · MIS" },
      { label: "Status", value: "Open to full-time roles" },
    ],
  },

  /* ---------------------------------------------------------------------
     9. EDUCATION — shown as a vertical timeline, most recent first
  --------------------------------------------------------------------- */
  education: [
    { degree: "M.S. in Statistics", place: "University of Barishal", date: "2022 – 2023", detail: "CGPA 3.31 / 4.00 — Thesis defended 2025" },
    { degree: "B.S. (Hons.) in Statistics", place: "University of Barishal", date: "2019 – 2022", detail: "CGPA 3.16 / 4.00" },
    { degree: "Higher Secondary Certificate, Science", place: "Narail Govt. Victoria College", date: "May 2018", detail: "GPA 4.75 / 5.00" },
    { degree: "Secondary School Certificate, Science", place: "Maizpara Secondary School", date: "2016", detail: "GPA 5.00 / 5.00" },
  ],

  /* ---------------------------------------------------------------------
     10. LEADERSHIP & IMPACT
  --------------------------------------------------------------------- */
  leadership: [
    {
      role: "Secretary General",
      org: "Barishal University IT Society (BUITS)",
      date: "Dec 2023 – Dec 2024",
      bullets: [
        "Directed an operational team of 35+ to execute 30+ large-scale projects on schedule.",
        "Served as primary liaison with UNDP and Grameenphone for high-impact events.",
      ],
      badges: ["UNDP Certificate of Appreciation", "Best Committee Member Award"],
    },
    {
      role: "Office Maintenance Secretary",
      org: "Barishal University IT Society (BUITS)",
      date: "Nov 2022 – Nov 2023",
      bullets: [
        "Reduced manual paperwork by 60% by implementing digital registration workflows.",
        "Managed corporate sponsorship contracts, including LG (UltraGear).",
      ],
      badges: ["Dedicated Organizer Award", "Best Volunteer Award"],
    },
  ],

  /* ---------------------------------------------------------------------
     11. CERTIFICATIONS
  --------------------------------------------------------------------- */
  certifications: [
    "Business Analytics with Power BI",
    "Data Science with Python — Ministry of ICT & Dept. of CSE, University of Barishal",
    "Aspire Leaders Program — Aspire Institute",
    "Introduction to Corporate Finance",
    "Art of Communication",
    "Web Development — Creative IT Institute",
  ],

  /* ---------------------------------------------------------------------
     12. PUBLICATION
  --------------------------------------------------------------------- */
  publication: {
    title: "Navigating Economic Realities: A Comprehensive Study on Income Dynamics and Its Consequences on the University Students",
    authors: "Nandi, D., Barai, P., & Ali, M. (2025)",
    venue: "13th International Conference on Social Sciences & Humanities (ISPEC), Dubai, UAE",
    link: "https://www.researchgate.net/publication/396250930",
  },

  /* ---------------------------------------------------------------------
     13. TOOLS I USE DAILY — reuses the skills icon set above by name
  --------------------------------------------------------------------- */
  dailyTools: ["powerbi", "excel", "sql", "r", "python", "spss", "dax", "query"],

};
