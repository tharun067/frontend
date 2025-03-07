import React from 'react'
import ChatPage from "@/components/Chat";
function Footer() {
    return (
        <>
            <footer className="bg-gray-900 text-white absolute inset-x-0 bottom-0">
                <div className="container mx-auto px-6 text-center">

                    {/* Copyright Section */}
                    <p className="text-sm mb-4">
                        &copy; {new Date().getFullYear()} Career Navigator. All Rights Reserved.
                    </p>

                    {/* Navigation Links */}
                    <nav className="flex justify-center space-x-8 mb-4">
                        <a href="/about" className="hover:text-blue-400 transition duration-300">About Us</a>
                        <a href="/contact" className="hover:text-blue-400 transition duration-300">Contact</a>
                        <a href="/privacy-policy" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
                        <a href="/terms" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
                    </nav>

                    {/* Tagline */}
                    <p className="text-sm italic mb-4">
                        Empowering your career journey with AI-driven insights and future-ready skills.
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6">
                        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">Twitter</a>
                        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">LinkedIn</a>
                        <a href="https://github.com/yourrepository" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">GitHub</a>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer
