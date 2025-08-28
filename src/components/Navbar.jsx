import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Code2, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
    const { toggleDarkMode, setToggleDarkMode } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <motion.nav
            style={{ opacity: 1 }}
            className={`fixed top-0 w-full z-50 px-6 py-4 ${
                toggleDarkMode ? "bg-gray-950/80" : "bg-gray-50/80"
            } backdrop-blur-md border-b ${
                toggleDarkMode ? "border-gray-800" : "border-gray-200"
            }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center space-x-2"
                >
                    <Code2 size={24} className="text-blue-500" />
                    <span
                        className={`text-lg ml-1 ${
                            toggleDarkMode
                                ? "text-gray-400 hover:text-white"
                                : "text-gray-600 hover:text-gray-900"
                        }`}
                    >
                        Time to Program
                    </span>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {["Home", "Skills", "Work", "About", "Contact"].map(
                        (item) => (
                            <motion.button
                                key={item}
                                whileHover={{ y: -2 }}
                                onClick={() =>
                                    scrollToSection(item.toLocaleLowerCase())
                                }
                                className={`text-sm uppercase tracking-wider transition-colors ${
                                    toggleDarkMode
                                        ? "text-gray-400 hover:text-white"
                                        : "text-gray-600 hover:text-gray-900"
                                }`}
                            >
                                {item}
                            </motion.button>
                        )
                    )}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            setToggleDarkMode(toggleDarkMode ? "light" : "dark")
                        }
                        className={`p-2 rounded-full transition-colors ${
                            toggleDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {toggleDarkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </motion.button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center space-x-4">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                            setToggleDarkMode(toggleDarkMode ? "light" : "dark")
                        }
                        className={`p-2 rounded-full transition-colors ${
                            toggleDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {toggleDarkMode ? (
                            <Sun size={18} />
                        ) : (
                            <Moon size={18} />
                        )}
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className={`p-2 rounded-full transition-colors ${
                            toggleDarkMode
                                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                                : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                        }`}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={`md:hidden mt-4 p-4 rounded-lg ${
                            toggleDarkMode ? "bg-gray-900" : "bg-white"
                        } border ${
                            toggleDarkMode
                                ? "border-gray-800"
                                : "border-gray-200"
                        } `}
                    >
                        {["Home", "Skills", "Work", "About", "Contact"].map(
                            (item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ x: 5 }}
                                    onClick={() =>
                                        scrollToSection(
                                            item.toLocaleLowerCase()
                                        )
                                    }
                                    className={`block w-full text-left py-2 text-sm uppercase tracking-wider transition-colors ${
                                        toggleDarkMode
                                            ? "text-gray-400 hover:text-white"
                                            : "text-gray-600 hover:text-gray-900"
                                    }`}
                                >
                                    {item}
                                </motion.button>
                            )
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
