"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "@/navigation";
import Image from "next/image";

export default function HeroAdsSlider() {
    const [ads, setAds] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAds = async () => {
            try {
                const res = await fetch("/api/admin/ads");
                const data = await res.json();
                if (data.success) {
                    setAds(data.data);
                }
            } catch (error) {
                console.error("Failed to fetch ads:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAds();
    }, []);

    const paginate = (newDirection) => {
        if (ads.length === 0) return;
        setDirection(newDirection);
        setCurrentIndex((prevIndex) => (prevIndex + newDirection + ads.length) % ads.length);
    };

    // Auto-play
    useEffect(() => {
        if (ads.length <= 1) return;
        const timer = setInterval(() => paginate(1), 6000);
        return () => clearInterval(timer);
    }, [currentIndex, ads.length]);

    if (loading) {
        return (
            <div className="relative h-[80vh] w-full overflow-hidden rounded-[2.5rem] mt-4 bg-primary/5 animate-pulse flex items-center justify-center">
                <Sparkles className="h-12 w-12 text-primary/20 animate-spin" />
            </div>
        );
    }

    if (ads.length === 0) return null;

    const currentAd = ads[currentIndex];

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="relative h-[80vh] w-full overflow-hidden rounded-[2.5rem] mt-4 shadow-2xl">
            <AnimatePresence initial={false} custom={direction}>
                <motion.div
                    key={currentIndex}
                    custom={direction}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            paginate(1);
                        } else if (swipe > swipeConfidenceThreshold) {
                            paginate(-1);
                        }
                    }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src={currentAd.imageUrl}
                            alt={currentAd.title}
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary-dark/40 to-transparent"></div>
                    </div>

                    {/* Content Layer */}
                    <div className="absolute inset-0 flex items-center">
                        <div className="container mx-auto px-8 md:px-16">
                            <div className="max-w-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-[2rem] shadow-2xl">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-white border border-white/10 text-xs font-bold mb-6"
                                >
                                    <Sparkles className="h-4 w-4 text-yellow-400" />
                                    <span>{currentAd.badge || "Featured Entry"}</span>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight"
                                >
                                    {currentAd.title}
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                    className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed"
                                >
                                    {currentAd.subtitle}
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <Link
                                        href={currentAd.link}
                                        className="btn-premium bg-white text-primary hover:bg-white/90 px-10 py-4 shadow-xl flex items-center gap-2 text-lg w-fit"
                                    >
                                        Explore Now <ArrowRight className="h-5 w-5" />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Controls */}
            {ads.length > 1 && (
                <>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-10">
                        {ads.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-12 bg-white" : "w-2.5 bg-white/40 hover:bg-white/60"}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(-1)}
                        className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-white/30 transition-all z-10 md:flex hidden"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <button
                        onClick={() => paginate(1)}
                        className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full text-white hover:bg-white/30 transition-all z-10 md:flex hidden"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </>
            )}
        </div>
    );
}
