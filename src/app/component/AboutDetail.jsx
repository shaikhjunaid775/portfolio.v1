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
                        <p className="text-sm leading-5 text-gray-500  mt-2">I'm Ryan Evans, a UX designer based in London. I've always been passionate about technology and its potential to serve people, which is why I enjoy UX design so much. I find it incredibly satisfying to create digital experiences that are both functional and enjoyable to use, and I believe that good design can have a positive impact on people's lives.</p>
                        <p className="text-sm leading-5 text-gray-500 mt-4">When I'm not designing, I love to explore the outdoors. Hiking and camping are two of my favorite activities, and I'm always looking for new trails to conquer or campsites to set up in. I'm also an amateur guitarist, and I find that making music is a great way to unwind after a long day of work. I'm always seeking out new challenges and experiences, both in my personal life and in my design work.</p>
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