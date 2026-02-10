const Skills = () => {
    return (
        <>
            <section className="skill">
                <h3 className="text-lg font-semibold">My skills</h3>

                <ul className="skills-list content-card">
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Html/Css</h5>
                            <data value="85">85%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "85%" }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Javascript</h5>
                            <data value="75">75%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "75%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">React/React native</h5>
                            <data value="70">70%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Boostrap</h5>
                            <data value="90">90%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "90%" }}></div>
                        </div>
                    </li>

                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Tailwind CSS</h5>
                            <data value="50">50%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "50%" }}></div>
                        </div>
                    </li>
                    <li className="skills-item">
                        <div className="title-wrapper">
                            <h5 className="h5">Flutter</h5>
                            <data value="20">20%</data>
                        </div>

                        <div className="skill-progress-bg">
                            <div className="skill-progress-fill" style={{ width: "20%" }}></div>
                        </div>
                    </li>
                </ul>
            </section>
        </>
    )
}

export default Skills