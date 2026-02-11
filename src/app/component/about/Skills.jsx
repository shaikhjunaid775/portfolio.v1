const Skills = () => {
  const skills = [
    {
      id: 1,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "html5",
    },
    {
      id: 2,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "css3",
    },
    {
      id: 3,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      id: 4,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "react",
    },
    {
      id: 5,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "nextjs",
    },
    {
      id: 6,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
      alt: "redux",
    },
    {
      id: 7,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "tailwindcss",
    },
    {
      id: 8,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "bootstrap",
    },
    {
      id: 9,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      alt: "mongodb",
    },
    {
      id: 10,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
      alt: "php",
    },
    {
      id: 11,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
      alt: "materialUi",
    },
    {
      id: 12,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
      alt: "java",
    },
    {
      id: 13,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      alt: "python",
    },
    {
      id: 14,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
      alt: "cplusplus",
    },
    {
      id: 15,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",
      alt: "c",
    },
    {
      id: 16,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      alt: "git",
    },
    {
      id: 17,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
      alt: "github",
    },
    {
      id: 18,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/netlify/netlify-original.svg",
      alt: "netlify",
    },
    {
      id: 19,
      link: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
      alt: "vuejs",
    },
  ];

  return (
    <>
      <section className="skill">
        <h3 className="text-lg font-semibold">My skills</h3>

        <div
          className="py-3 grid 
                gap-2
                grid-cols-5
                text-center
                xs:grid-cols-4
                md:grid-cols-6
                lg:grid-cols-9 "
        >
          {skills.map((items) => (
            <div
              key={items.id}
              className="hover:shadow-lg cursor-pointer text-zinc-800 border border-stone-500/40 p-3 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1"
            >
              <img src={items.link} alt={items.alt} width="40" height="40" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
