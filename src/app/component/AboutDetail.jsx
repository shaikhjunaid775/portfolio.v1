import '../style.css'
import Education from './about/Education'
import Experince from './about/Experience'
import Skills from './about/Skills'

const AboutDetail = () => {
    return (
        <>
            <div className="w-full flex flex-col gap-3">

                <div className="relative w-full rounded-3xl bg-[#f8f8f8] p-4 shadow-lg">

                    {/* Text section */}
                    <div className="">
                        <h3 className="text-lg font-semibold">A little bit about me </h3>
                        <p className="text-sm leading-5 text-gray-500  mt-2">Hello! I'm Juned Shaikh, a passionate Frontend Developer from Navi Mumbai, Maharashtra. With over three years of hands-on experience in crafting dynamic and user-centric web interfaces, I specialize in translating complex requirements into elegant, functional designs. My expertise lies in HTML, CSS, JavaScript, and modern frameworks i.e React.js/React Native, combined with a keen eye for detail and a commitment to delivering high-quality user experiences.</p>
                        <p className="text-sm leading-5 text-gray-500 mt-4">I thrive in collaborative environments and am dedicated to staying abreast of the latest industry trends to continuously enhance my skills and drive innovation. Let's connect and explore how I can contribute to your next project!</p>
                    </div>
                </div>
                <div className="relative w-full rounded-3xl bg-[#f8f8f8] p-4 shadow-lg">

                    <article className="resume" >
                       <Experince />

                    </article>
                </div>
                <div className="relative w-full rounded-3xl bg-[#f8f8f8] p-4 shadow-lg">

                    <article className="resume" >
                       <Education />
                    </article>
                </div>
                <div className="relative w-full rounded-3xl bg-[#f8f8f8] p-4 shadow-lg">                    
                    <article className="resume" >
                        <Skills />
                    </article>
                </div>
            </div>




        </>
    )
}

export default AboutDetail