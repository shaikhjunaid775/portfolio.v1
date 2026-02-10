import AboutDetail from "../component/AboutDetail"
import ProfileCard from "../component/about/profileCard"


const AboutScreen = () => {
    return (
        <>

            <main className="
                min-h-screen 
                p-6 pt-28
                grid 
                gap-6
                sm:grid-cols-1
                md:grid-cols-2
                place-items-center
                ">
                <ProfileCard />
                <AboutDetail />
            </main>
        </>
    )
}

export default AboutScreen