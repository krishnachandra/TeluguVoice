import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import { NewsItem } from '@/lib/types';
import { PlayCircle } from 'lucide-react';

interface NewsCardProps {
    item: NewsItem;
    variant?: 'vertical' | 'horizontal' | 'hero';
    className?: string;
    showCategory?: boolean;
}

export function NewsCard({
    item,
    variant = 'vertical',
    className,
    showCategory = true
}: NewsCardProps) {
    const isHorizontal = variant === 'horizontal';
    const isHero = variant === 'hero';

    return (
        <Link
            href={`/news/${item.slug}`}
            className={cn(
                "group flex w-full bg-charcoal-800 rounded-xl overflow-hidden shadow-sm hover:shadow-saffron-500/20 transition-all duration-300",
                isHorizontal ? "flex-row items-center h-28 sm:h-32" : "flex-col",
                isHero ? "h-full" : "",
                className
            )}
        >
            {/* Image Container */}
            <div className={cn(
                "relative overflow-hidden shrink-0",
                isHorizontal ? "w-1/3 h-full" : "w-full aspect-video",
                isHero ? "h-full absolute inset-0 z-0 !w-full !aspect-auto" : ""
            )}>
                <Image
                    src={item.imageUrl}
                    alt={item.title}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-500 group-hover:scale-105",
                        isHero ? "brightness-[0.4]" : ""
                    )}
                    sizes={isHorizontal ? "(max-width: 768px) 33vw, 20vw" : "(max-width: 768px) 100vw, 33vw"}
                />

                {/* Play Icon Overlay for Videos */}
                {item.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition-colors">
                        <PlayCircle className="w-10 h-10 text-white/90 drop-shadow-lg group-hover:scale-110 transition-transform" />
                    </div>
                )}

                {/* Breaking Badge */}
                {item.isBreaking && !isHero && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-xs font-bold bg-saffron-500 text-black uppercase tracking-wider rounded-sm animate-pulse">
                        Breaking
                    </span>
                )}
            </div>

            {/* Content Container */}
            <div className={cn(
                "flex flex-col justify-between p-3",
                isHorizontal ? "w-2/3 h-full py-2" : "w-full flex-grow",
                isHero ? "relative z-10 h-full justify-end p-6 bg-gradient-to-t from-charcoal-900/90 via-transparent to-transparent" : ""
            )}>
                <div className="space-y-1.5">
                    {/* Metadata Row */}
                    <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-medium text-gray-400 uppercase tracking-wide">
                        {showCategory && (
                            <span className={cn(
                                item.category === 'Politics' ? 'text-electric-500' :
                                    item.category === 'Cinema' ? 'text-yellow-500' :
                                        'text-saffron-500'
                            )}>
                                {item.category}
                            </span>
                        )}
                        <span>•</span>
                        <span>{formatDistanceToNow(new Date(item.publishedAt), { addSuffix: true })}</span>
                    </div>

                    {/* Title */}
                    <h3 className={cn(
                        "font-display font-semibold leading-tight text-slate-100 group-hover:text-saffron-500 transition-colors line-clamp-2",
                        isHero ? "text-2xl sm:text-4xl font-bold mb-2 text-white shadow-black drop-shadow-md" : "text-sm sm:text-base"
                    )}>
                        {item.title}
                    </h3>

                    {/* Summary (Vertical Only) */}
                    {!isHorizontal && !isHero && item.summary && (
                        <p className="text-xs text-slate-400 line-clamp-2 mt-1 hidden sm:block">
                            {item.summary}
                        </p>
                    )}

                    {/* Hero Summary */}
                    {isHero && item.summary && (
                        <p className="text-sm sm:text-base text-slate-200 line-clamp-2 max-w-2xl mb-4 drop-shadow-md hidden sm:block">
                            {item.summary}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
}
