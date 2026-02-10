"use client";

import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Footer = () => {
    const router  = useRouter();
    const meuns = [
        {
            id: 1,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>,
            tooltipContent: 'Home',
            link: '/',
            bgColor: "amber-300"
        },
        {
            id: 2,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>,
            tooltipContent: 'Project',
            link: '/projects',
            bgColor: "amber-300"
        },
        {
            id: 3,
            icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>,
            tooltipContent: 'About Me',
            link: '/about',
            bgColor: "amber-300"
        },
        {
            id: 4,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" /><rect x="2" y="4" width="20" height="16" rx="2" /></svg>,
            tooltipContent: 'shaikhjunaid775@gmail.com',
            link: 'mailto:shaikhjunaid775@gmail.com',
            bgColor: "amber-300"
        },
        {
            id: 5,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>,
            tooltipContent: '@junedshaikh775',
            link: 'https://github.com/shaikhjunaid775',
            bgColor: "amber-300"
        },
        {
            id: 6,
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>,
            tooltipContent: '@juned-shaikh-a5358016a',
            link: 'https://www.linkedin.com/in/juned-shaikh-a5358016a/',
        },
    ]
    const firstGroup = meuns.slice(0, 3);
    const secondGroup = meuns.slice(3);
    return (
        <>
            <div className="fixed top-4 right-0 left-0 z-10 px-2">
                <div
                    className="flex items-center justify-between rounded-3xl backdrop-blur-lg bg-[#f8f8f8d6] text-gray-200 font-medium font-mono px-3 py-3 shadow-lg max-w-md mx-auto transition-all duration-300 hover:shadow-xl hover:bg-opacity-90 border border-white "
                >
                    {firstGroup.map((item) => (
                        <Tooltip
                            key={item.id}
                            content={item.tooltipContent}
                            classNames={{
                                content:
                                    "py-1 px-3 shadow-xl rounded-xl mt-3 text-black bg-[#f8f8f8ef] ",
                            }}
                        >
                                <button  onClick={() => item.link && router.push(item.link)} className={`hover:bg-${item.bgColor} hover:shadow-lg cursor-pointer text-zinc-800 border border-stone-500/40 p-3 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1`}>
                                    {item.icon}
                                </button>
                        </Tooltip>

                    ))}
                    <div className="bg-black/10 w-0.5 h-9 "></div>
                    {secondGroup.map((item) => (
                        <Tooltip
                            key={item.id}
                            content={item.tooltipContent}
                            classNames={{
                                content:
                                    "py-1 px-3 shadow-xl rounded-xl mt-3 text-black bg-[#f8f8f8ef]",
                            }}
                        >
                            <Link href={item.link || "#"}
                                target="_blank"
                                rel="noopener noreferrer">
                                <button className="cursor-pointer text-zinc-800 border border-stone-500/40 p-3 rounded-2xl transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
                                    {item.icon}
                                </button>
                            </Link>
                        </Tooltip>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Footer