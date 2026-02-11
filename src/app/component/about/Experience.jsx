const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Smartinfologiks",
      role: "Software Developer",
      duration: "July 2025 — Present",
      description:
        "Proficient in React, React Native, and Flutter, with expertise in Hooks, Props, Vite, and CSS libraries like Bootstrap, Tailwind, and Material UI. Developed MLM software and e-commerce platforms.",
    },
    {
      id: 2,
      company: "Soonx Technology",
      role: "Sr. Frontend Developer",
      duration: "Nov 2023 — April 2025",
      description:
        "Proficient in React, React Native, and Flutter, with expertise in Hooks, Props, Vite, and CSS libraries like Bootstrap, Tailwind, and Material UI. Developed MLM software and e-commerce platforms.",
    },
    {
      id: 3,
      company: "Spotpixel Technology",
      role: "Jr. Frontend Developer",
      duration: "Aug 2022 — Oct 2023",
      description:
        "Skilled in HTML, CSS, JavaScript, and Bootstrap for UI, PHP and MySQL for back-end, email integration, SSL security, and managing hosting on platforms.",
    },
    {
      id: 4,
      company: "Hasbasoft Pvt Ltd",
      role: "Full Stack Trainee (Internship)",
      duration: "Aug 2021 — March 2022",
      description:
        "Designed and maintained web apps, including a Netflix frontend and Amazon clone. Utilized JSX, hooks, props, and Material UI. Completed a full-stack course with strong frontend skills.",
    },
  ];

  return (
    <section className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="text-lg font-semibold">Experience</h3>
      </div>

      <ol className="timeline-list">
        {experiences.map((exp) => (
          <li key={exp.id} className="timeline-item flex flex-col">
            <h4 className="h4 timeline-item-title">{exp.company}</h4>

            <small className="contact-title">{exp.role}</small>

            <span>{exp.duration}</span>

            <p className="timeline-text">{exp.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default Experience;
