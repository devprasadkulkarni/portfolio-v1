import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Code2, Globe, Zap, Users } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { PROJECTS } from "../../utils/data";
import { containerVariants, itemVariants } from "../../utils/helper";
import ProjectCard from "../ProjectCard";

const ProjectsSection = () => {
    const { toggleDarkMode } = useTheme();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            id="work"
            ref={sectionRef}
            className={`py-24 px-6 relative overflow-hidden ${
                toggleDarkMode
                    ? "bg-gray-950 text-white"
                    : "bg-gray-50 text-gray-900"
            }`}
        >
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className={`absolute top-20 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-5 ${
                        toggleDarkMode ? "bg-blue-500" : "bg-blue-400"
                    }`}
                />
                <div
                    className={`absolute bottom-20 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
                        toggleDarkMode ? "bg-purple-500" : "bg-purple-400"
                    }`}
                />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={itemVariants}
                        className={`text-sm uppercase tracking-widest mb-4 ${
                            toggleDarkMode ? "text-gray-500" : "text-gray-600"
                        }`}
                    >
                        Featured Work
                    </motion.div>
                    <motion.h2
                        variants={itemVariants}
                        className="text-3xl md:text-5xl font-light mb-6"
                    >
                        Recent{" "}
                        <span className="text-blue-500 font-medium">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        variants={itemVariants}
                        className={`text-lg max-w-2xl mx-auto font-light ${
                            toggleDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                    >
                        A collection of projects that showcase my expertise in
                        building modern web applications.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                    className="gird md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                            toggleDarkMode={toggleDarkMode}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;
