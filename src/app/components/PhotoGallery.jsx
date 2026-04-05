"use client"

import { motion } from "motion/react"
import { Camera, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function PhotoGallery({ onNext }) {

    const photos = [
        { id: 1, src: "/images/1.jpg" },
        { id: 2, src: "/images/2.jpg" },
        { id: 3, src: "/images/3.jpg" },
        { id: 4, src: "/images/4.jpg" },
        { id: 5, src: "/images/1.jpg" },
        { id: 6, src: "/images/2.jpg" },
    ]

    const [currentFace, setCurrentFace] = useState('initial-position')

    return (
        <motion.div
            className="min-h-screen flex flex-col items-center justify-center p-8 relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div
                className="text-center mb-8"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <motion.div
                    className="mb-8"
                    animate={{
                        rotate: [0, -10, 10, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                >
                    <Camera className="w-16 h-16 text-pink-400 mx-auto" />
                </motion.div>

                <h1 className="text-4xl md:text-6xl py-1 md:py-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 mb-6">
                    Moments with You
                </h1>
                <p className="text-xl text-purple-300">Beautiful moments with Madam Jii 📸</p>
            </motion.div>

            <div className="scene">
                <div className={`cube ${currentFace}`}>
                    <div className="cube__face cube__face--front"><img src={photos[0].src} alt="Front" /></div>
                    <div className="cube__face cube__face--right"><img src={photos[1].src} alt="Right" /></div>
                    <div className="cube__face cube__face--back"><img src={photos[2].src} alt="Back" /></div>
                    <div className="cube__face cube__face--left"><img src={photos[3].src} alt="Left" /></div>
                    <div className="cube__face cube__face--top"><img src={photos[4].src} alt="Top" /></div>
                    <div className="cube__face cube__face--bottom"><img src={photos[5].src} alt="Bottom" /></div>
                </div>
            </div>

            <div className="thumbnails">
                <img src={photos[0].src} alt="Front" onClick={() => setCurrentFace('show-front')} />
                <img src={photos[1].src} alt="Right" onClick={() => setCurrentFace('show-right')} />
                <img src={photos[2].src} alt="Back" onClick={() => setCurrentFace('show-back')} />
                <img src={photos[3].src} alt="Left" onClick={() => setCurrentFace('show-left')} />
                <img src={photos[4].src} alt="Top" onClick={() => setCurrentFace('show-top')} />
                <img src={photos[5].src} alt="Bottom" onClick={() => setCurrentFace('show-bottom')} />
            </div>
            <motion.div
                className="mt-12"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
            >
                <button
                    onClick={onNext}
                    className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 text-white text-lg px-8 py-4 rounded-full shadow-xl border-2 border-white/70 transition-all duration-300 hover:scale-[103%]"
                >
                    <motion.div className="flex items-center space-x-2" whileHover={{ x: 5 }}>
                        <span>One Last Thing</span>
                        <ArrowRight className="w-5 h-5" />
                    </motion.div>
                </button>
            </motion.div>
        </motion.div>
    )
}
