const Experience = () =>{
    return(
        <>
             <section className="timeline">
                            <div className="title-wrapper">
                                <div className="icon-box">
                                    <ion-icon name="book-outline"></ion-icon>
                                </div>

                                <h3 className="text-lg font-semibold">Experience</h3>
                            </div>

                            <ol className="timeline-list">
                                <li className="timeline-item flex flex-col">
                                    <h4 className="h4 timeline-item-title">
                                        Soonx Technology
                                    </h4>
                                    <small className="contact-title">Sr. frontend Developer</small>

                                    <span>Nov 2023 — Present</span>

                                    <p className="timeline-text">
                                        Proficient in React, React Native, and Flutter, with expertise
                                        in Hooks, Props, Vite, and CSS libraries like Bootstrap,
                                        Tailwind, and Material UI. Developed MLM software and
                                        e-commerce platforms.
                                    </p>
                                </li>

                                <li className="timeline-item flex flex-col">
                                    <h4 className="h4 timeline-item-title">
                                        Spotpixel Technology
                                    </h4>
                                    <small className="contact-title">Jr. frontend Developer</small>

                                    <span>Aug 2022 — Oct 2023</span>

                                    <p className="timeline-text">
                                        Skilled in HTML, CSS, JavaScript, and Bootstrap for UI, PHP
                                        and MySQL for back-end, email integration, SSL security, and
                                        managing hosting on platforms.
                                    </p>
                                </li>

                                <li className="timeline-item flex flex-col">
                                    <h4 className="h4 timeline-item-title">
                                        Hasbasoft Pvt Ltd
                                    </h4>
                                    <small className="contact-title"
                                    >Full Stack trainee (Internships)</small
                                    >

                                    <span>Aug 2021 — March 2022</span>

                                    <p className="timeline-text">
                                        Designed and maintained web apps, including a Netflix frontend
                                        and Amazon clone. Utilized JSX, hooks, props, and Material UI.
                                        Completed a full-stack course with strong frontend skills.
                                    </p>
                                </li>
                            </ol>
                        </section>
        </>
    )
}

export default Experience