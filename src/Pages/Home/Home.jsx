// @ts-nocheck

import CodeIcon from '@mui/icons-material/Code'
import AssignmentIcon from '@mui/icons-material/Assignment'
import GitHubIcon from '@mui/icons-material/GitHub'
import Card from '../Component/Card'
import { useEffect,useState } from 'react'
import HomeSkelo from '../Skeloton/HomeSkelo'

export default function Home() {

    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false),1000);
        return () => clearTimeout(timer);
    },[]);

    let data = [
        {
            title: "Web Development",
            icon: <CodeIcon style={{ color: "red",fontSize: 30 }} />,
            paragraph: "I specialize in building modern, responsive, and high-performance web applications using technologies like React, Svelte, and Tailwind CSS. My focus is on writing clean code, optimizing performance, and delivering seamless user experiences."
        },
        {
            title: "Task Management with Jira",
            icon: <AssignmentIcon style={{ color: "green",fontSize: 30 }} />,
            paragraph: "I use Jira for managing tasks, tracking project progress, and collaborating with cross-functional teams. It helps me break down complex features into manageable sprints, prioritize work efficiently, and ensure timely delivery of high-quality results."
        },
        {
            title: "Version Control with Git & GitHub",
            icon: <GitHubIcon style={{ color: '#333',fontSize: 30 }} />,
            paragraph: "I use Git and GitHub for efficient version control and team collaboration. I follow Git workflows like branching, pull requests, and code reviews to maintain a clean, reliable codebase across development cycles."
        }
    ]
    return (
        <>
            {loading ? (
                <HomeSkelo />

            ) : (

                <div className='flex flex-col gap-[3rem]'>
                    <div>

                        <section className="mb-6">
                            <h2 className="text-2xl font-semibold ">
                                About Me
                            </h2>
                            <div className="mt-1 w-28 h-1 bg-accent"></div>
                        </section>

                        {/* About Content */}
                        <section className=" space-y-4 text-lg mb-6">
                            <p>
                                I'm a passionate and experienced Frontend Developer with hands-on expertise in building scalable, modular applications using Microfrontend architecture. Currently, I’m working at a product-based company where I focus on developing modern, high-performance web interfaces using Svelte.js. I have a strong command of core frontend technologies including HTML, CSS, JavaScript, Tailwind CSS, React, and Svelte. My experience spans both UI/UX-focused development and component-driven architecture. I'm also familiar with backend technologies like Node.js, Express.js, and NestJS, which gives me a solid understanding of full-stack application flows. With a problem-solving mindset and attention to detail, I enjoy working on challenging projects that demand clean code, performance optimization, and seamless user experiences.
                            </p>
                        </section>

                    </div>



                    <Card data={data} whatIdoLable="What i do !" grid="3" />
                </div>
            )}


        </>
    )
}
