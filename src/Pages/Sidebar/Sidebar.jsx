// @ts-nocheck
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Sidebar() {
    const socialMedia = [
        {
            title: "Instagram",
            url: "https://www.instagram.com/mr__nimesh__004",
            icon: <InstagramIcon style={{ color: '#E4405F',fontSize: 28 }} />,
        },
        {
            title: "LinkedIn",
            url: "https://in.linkedin.com/in/nimesh-devaliya-178bb9260",
            icon: <LinkedInIcon style={{ color: '#0077B5',fontSize: 28 }} />,
        },
        {
            title: "GitHub",
            url: "https://github.com//devaliyanimesh",
            icon: <GitHubIcon style={{ color: '#333',fontSize: 28 }} />,
        },
    ];

    const personalDetails = [
        { icon: <PhoneIcon className="text-blue-500" />,label: "Phone",value: "+91 ( 7041 ) 541-797" },
        { icon: <EmailIcon className="text-error" />,label: "Email",value: "devaliyanimesh61972@gmail.com" },
        { icon: <LocationOnIcon className="text-green-600" />,label: "Location",value: "Surat, Gujarat" },
    ];

    return (
        <div className="flex justify-center items-center flex-col gap-[1rem] relative bg-white p-6 rounded-xl shadow-md w-full  mx-auto">
            <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQE52LlYAiq3vQ/profile-displayphoto-shrink_200_200/B4DZYdmU1EG8AY-/0/1744253309888?e=2147483647&v=beta&t=kQBwnUShNjX3_57ws0ANjBYyvMD8sVyoNuCI6ObRPss"
                width="180"
                height="180"
                alt="Profile"
                className="object-cover rounded-full absolute -top-[90px] border-4 border-white shadow-md"
            />

            <div className="mt-[100px] text-center">
                <h1 className="font-bold text-2xl text-info">Nimesh Devaliya</h1>
                <p className="text-gray-600 text-md">Full Stack Developer</p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-4">
                {socialMedia.map((e,i) => (
                    <a
                        key={i}
                        href={e.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={e.title}
                        className="border p-2 rounded-md hover:scale-110 transition-transform bg-gray-50 shadow-sm"
                    >
                        {e.icon}
                    </a>
                ))}
            </div>

            {/* Personal Details Section */}
            <div className="mt-6 px-4 w-full">
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-sm">
                    <h3 className="text-gray-800 font-semibold text-md mb-3 border-b pb-1">Personal Details</h3>
                    <div className="flex flex-col gap-3 text-gray-700 text-sm">
                        {personalDetails.map((item,i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="text-lg">{item.icon}</div>
                                <div>
                                    <div className="font-medium">{item.label}</div>
                                    <div className="text-gray-600">{item.value}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Resume Button */}
            <div className="mt-6 w-full text-center">
                <a
                    href="/resume.pdf"
                    download
                    className="bg-info hover:bg-info/80 text-white px-6 py-2 rounded shadow-md transition"
                >
                    Download Resume
                </a>
            </div>
        </div>
    );
}
