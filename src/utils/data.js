import {
    BookOpen,
    Code2,
    Coffee,
    Heart,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import qtify from "../assets/qtify.png";
import netflix_clone from "../assets/netflix-clone.png";
import youtube_clone from "../assets/youtube-clone.png";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces ",
        skills: [
            { name: "JavaScript", level: 80, color: "bg-blue-500" },
            { name: "React", level: 60, color: "bg-green-400" },
            { name: "Tailwind", level: 75, color: "bg-purple-500" },
            { name: "Bootstrap", level: 70, color: "bg-orange-500" },
            { name: "Git", level: 65, color: "bg-pink-500" },
            // { name: "HTML", level: 80, color: "bg-cyan-500" },
            // { name: "CSS", level: 70, color: "bg-yellow-900" },
        ],
    },
];

export const TECH_STACK = ["HTML", "CSS", "Vite"];

export const STATS = [{ number: "15+", label: "Projects Completed" }];

export const PROJECTS = [
    {
        id: 1,
        title: "Qtify",
        description: "Demo desc 1",
        image: qtify,
        tags: ["React", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 2,
        title: "Netflix Clone",
        description: "Demo desc 1",
        image: netflix_clone,
        tags: ["React", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
    {
        id: 3,
        title: "Youtube Clone",
        description: "Demo desc 1",
        image: youtube_clone,
        tags: ["React", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
];

// export const JOURNEY_STEPS = [{}];

export const PASSIONS = [
    {
        icon: Heart,
        title: "User Experience",
        description: "Crafting intuitive interfaces",
    },
    {
        icon: Coffee,
        title: "Problem Solving",
        description: "Turning challenges into elegant solutions",
    },
    {
        icon: BookOpen,
        title: "Continuous Learning",
        description: "Always exploring new technologies and best practices",
    },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/devprasadkulkarni",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "https://www.linkedin.com/in/devprasadkulkarni/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:dev.prasad.kulkarni@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
];

export const CONTACT_INFO = [
    {
        icon: MapPin,
        label: "Location",
        value: "Pune, IN",
    },
    {
        icon: Mail,
        label: "Email",
        value: "dev.prasad.kulkarni@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+91 950 381 7665",
    },
];
