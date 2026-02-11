"use client";


export default function ProfileCard() {
    return (
        <>
            <div className="md:sticky  top-28 w-full h-max rounded-3xl bg-[#f8f8f8] p-4 shadow-lg">


                {/* Gradient mockup container */}
                <div className="relative w-full flex justify-center rounded-2xl bg-gradient-to-b from-[#f7a98b] to-[#f6d2a4] p-6">
                </div>

                {/* Text section */}
                <div className="mt-4">
                    <h3 className="text-xl font-semibold">Hey </h3>
                    <p className="text-sm leading-5 text-gray-500"> With over three years of hands-on experience in crafting dynamic and user-centric web interfaces, I specialize in translating complex requirements into elegant, functional designs. My expertise lies in HTML, CSS, JavaScript, and modern frameworks i.e React.js/React Native, combined with a keen eye for detail and a commitment to delivering high-quality user experiences.</p>

                    <div className="mt-3 flex gap-2 px-3 rounded-full w-fit border">
                        <div className="flex items-center gap-1 justify-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" /><circle cx="12" cy="10" r="3" /></svg>
                            <span className="  py-1 text-xs text-gray-600">
                                MH, India
                            </span>
                        </div>
                       
                    </div>
                </div>
            </div>
        </>
    );
}
