"use client";


export default function ProjectCard() {
    return (
        <>
            <div className="relative max-w-md rounded-3xl bg-white p-4 shadow-lg">


                {/* Gradient mockup container */}
                <div className="relative flex justify-center rounded-2xl bg-gradient-to-b from-[#f7a98b] to-[#f6d2a4] p-6">

                    {/* Left phone */}
                    <div className="relative z-10 -mr-6 w-[160px] rounded-2xl bg-white p-2 shadow-xl">
                        <div className="h-6 w-full rounded-md bg-gray-200 mb-2" />
                        <p className="text-center text-xs font-semibold tracking-wide">
                            UNLEASH YOUR<br />CREATIVITY WITH AI
                        </p>

                        <div className="mt-3 grid grid-cols-2 gap-2">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg bg-gradient-to-br from-purple-200 to-gray-300"
                                />
                            ))}
                        </div>

                        <button className="mt-4 w-full rounded-full bg-orange-300 py-1 text-xs font-semibold text-white">
                            GET STARTED
                        </button>
                    </div>

                    {/* Right phone */}
                    <div className="relative z-20 w-[170px] rounded-2xl bg-white p-2 shadow-2xl">
                        <div className="mb-2 h-6 w-full rounded-md bg-gray-200" />

                        <div className="mb-2 flex gap-2 text-[10px]">
                            <span className="rounded-full bg-orange-300 px-2 py-0.5 text-white">
                                POPULAR
                            </span>
                            <span className="rounded-full bg-gray-200 px-2 py-0.5">
                                NEW
                            </span>
                            <span className="rounded-full bg-gray-200 px-2 py-0.5">
                                TOP
                            </span>
                        </div>

                        <div className="grid grid-cols-2 gap-2">
                            {[...Array(6)].map((_, i) => (
                                <div
                                    key={i}
                                    className="aspect-square rounded-lg bg-gradient-to-br from-gray-200 to-purple-300"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Text section */}
                <div className="mt-4">
                    <h3 className="text-lg font-semibold">Nexus</h3>
                    <p className="text-sm text-gray-500">Designing the Nexus app</p>

                    <div className="mt-3 flex gap-2">
                        <span className="rounded-full border px-3 py-1 text-xs text-gray-600">
                            UX DESIGN
                        </span>
                        <span className="rounded-full border px-3 py-1 text-xs text-gray-600">
                            RESEARCH
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
