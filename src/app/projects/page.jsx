import ProjectCard from "../component/ProjectCard"


const projects = () => {
    return (
        <>
            <main className="
                min-h-screen 
                
                p-6 pt-28
                grid 
                grid-cols-1 
                gap-6
                sm:grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                place-items-center
                ">

                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />

                <ProjectCard />

            </main>
        </>
    )
}

export default projects