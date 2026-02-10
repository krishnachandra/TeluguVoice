'use client';

import { useState, useRef, useEffect } from 'react';
import { NewsItem } from '@/lib/types';
import { cn } from '@/lib/utils';
import { Play, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import Image from 'next/image';

interface VideoCarouselProps {
    items: NewsItem[];
    title?: string;
    className?: string;
}

export function VideoCarousel({ items, title = "Viral Clips & Videos", className }: VideoCarouselProps) {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { clientWidth } = scrollRef.current;
            const scrollAmount = direction === 'left' ? -clientWidth / 2 : clientWidth / 2;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            setTimeout(checkScroll, 300);
        }
    };

    return (
        <section className={cn("py-8 space-y-4", className)}>
            {/* Header */}
            <div className="flex items-center justify-between px-4 sm:px-0">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Play className="w-6 h-6 text-saffron-500 fill-saffron-500" />
                    {title}
                </h2>

                {/* Navigation Contols */}
                <div className="flex gap-2">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className="p-2 rounded-full bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className="p-2 rounded-full bg-charcoal-800 hover:bg-charcoal-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Carousel Container */}
            <div
                ref={scrollRef}
                onScroll={checkScroll}
                className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-4 sm:px-0 pb-4"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="relative flex-shrink-0 w-[160px] sm:w-[220px] aspect-[9/16] rounded-xl overflow-hidden snap-center group cursor-pointer"
                    >
                        {/* Thumbnail */}
                        <Image
                            src={item.imageUrl}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 640px) 160px, 220px"
                        />

                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                        {/* Play Button (Center) */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                                <Play className="w-8 h-8 text-white fill-white" />
                            </div>
                        </div>

                        {/* Badges & Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-3 space-y-1">
                            {/* Duration Badge */}
                            {item.videoDuration && (
                                <span className="absolute top-2 right-2 px-1.5 py-0.5 text-[10px] font-bold bg-black/60 backdrop-blur-md rounded text-white flex items-center gap-1">
                                    {item.videoDuration}
                                </span>
                            )}

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-white leading-tight line-clamp-2 group-hover:text-saffron-500 transition-colors">
                                {item.title}
                            </h3>

                            {/* View Count */}
                            <div className="flex items-center gap-1 text-[10px] text-gray-300">
                                <Eye className="w-3 h-3" />
                                <span>{item.trendingScore ? `${(item.trendingScore / 1000).toFixed(1)}k` : '1.2k'} views</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
