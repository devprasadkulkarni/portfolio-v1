import React from "react";
import { motion } from "motion/react";
import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const ProjectCard = ({ project, index, toggleDarkMode }) => {
    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut",
            },
        },
    };
    return (
        <motion.div
            variants={cardVariants}
            whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            className=""
        >
            <div
                className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
                    toggleDarkMode ? "" : ""
                }`}
            ></div>
        </motion.div>
    );
};

export default ProjectCard;
