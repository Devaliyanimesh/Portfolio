// @ts-nocheck

import SchoolIcon from '@mui/icons-material/School'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import ApartmentIcon from '@mui/icons-material/Apartment'

import Card from '../Component/Card'
import SkillTag from '../Skeloton/SkillTag'
import ResumeSkeleton from '../Skeloton/ResumeSkeleton'
import { useEffect,useState } from 'react'

export default function Resume() {
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1000);
    return () => clearTimeout(timer);
  },[]);
  const educationData = [
    {
      icon: <SchoolIcon className="text-yellow-500" fontSize="medium" />,
      title: 'Bachelor of Computer Applications (BCA) (2024–2026)',
      paragraph: 'Vivekananda Global University',
    },
    {
      icon: <SchoolIcon className="text-red-500" fontSize="medium" />,
      title: 'HSC (2018–2020)',
      paragraph: 'K & M P Sarvajanik Vidhyalay',
    },
  ]

  const experienceData = [
    {
      icon: <ApartmentIcon className="text-green-500" fontSize="medium" />,
      title: 'Computer Operator & Programming Assistant (2022–2023)',
      paragraph: 'Larsen & Toubro',
    },
    {
      icon: <LaptopMacIcon className="text-blue-500" fontSize="medium" />,
      title: 'Frontend Developer (2024–Present)',
      paragraph: 'MediaNV',
    },
  ]

  const softSkills = [
    'Time Management',
    'Mentorship',
    'Impeccable Communication',
    'Flexibility',
    'Research',
    'Writing',
  ]

  const libarySkill = [
    'Reactjs',
    'HTML 5',
    'CSS 3',
    'Tailwind CSS',
    'JavaScript',
    'Git',
    "nest.js",
    "Svelte js",
    "Bootstrap",


  ]
  if (loading) {

    return <ResumeSkeleton />
  }

  return (
    <section className=" flex flex-col gap-5">
      {/* Resume Title */}
      <div>
        <h2 className="text-2xl font-semibold">Resume</h2>
        <div className="mt-2 w-24 h-1 bg-accent" />
      </div>

      {/* Education & Experience */}
      <div className="grid md:grid-cols-2 gap-8">
        <Card whatIdoLable="Education" data={educationData} grid={1} />
        <Card whatIdoLable="Experience" data={experienceData} grid={1} />
      </div>

      {/* Skills Section */}
      {/* Soft Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
        <div className="w-24 h-1 bg-accent mb-4" />
        <div className="flex flex-wrap gap-3">
          {softSkills.map((skill,index) => (
            <SkillTag key={index} skill={skill} />
          ))}
        </div>
      </div>

      {/* Work Skills */}
      <div>
        <h2 className="text-xl font-semibold mb-2">Work Skills</h2>
        <div className="w-24 h-1 bg-accent mb-4" />
        <div className="flex flex-wrap gap-3">
          {libarySkill.map((lib,index) => (
            <SkillTag key={index} skill={lib} />
          ))}
        </div>
      </div>
    </section>
  )
}
