import { Code2 } from "lucide-react";

export const SKILLS_CATEGORY = [
    {
        title: "Frontend",
        icon: Code2,
        description: "Crafting beautiful, responsive user interfaces ",
        skills: [
            { name: "JavaScript", level: 80, color: "bg-blue-500" },
            { name: "React", level: 60, color: "bg-yellow-400" },
            { name: "Git", level: 65, color: "bg-cyan-500" },
            { name: "Tailwind", level: 75, color: "bg-pink-500" },
            { name: "Bootstrap", level: 70, color: "bg-purple-500" },
            { name: "HTML", level: 80, color: "bg-green-500" },
            { name: "CSS", level: 70, color: "bg-yellow-900" },
        ],
    },
];

export const TECH_STACK = ["JavaScript", "HTML", "CSS", "Vite"];

export const STATS = [{ number: "15+", label: "Projects Completed" }];

export const PROJECTS = [
    {
        id: 1,
        title: "sample1",
        description: "Demo desc 1",
        // image:
        tags: ["React", "Tailwind"],
        liveUrl: "#",
        githubUrl: "#",
        featured: false,
    },
];
