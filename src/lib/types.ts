export interface NewsItem {
    id: string;
    title: string;
    slug: string;
    summary: string;
    imageUrl: string;
    category: 'Politics' | 'Cinema' | 'Technology' | 'Sports' | 'General';
    publishedAt: string;
    isBreaking?: boolean;
    videoUrl?: string; // For viral clips
    videoDuration?: string;
    trendingScore?: number;
}

export interface NavState {
    isOpen: boolean;
    activeCategory: string | null;
    toggleMenu: () => void;
    setActiveCategory: (category: string | null) => void;
}

export interface NewsStore {
    breakingNews: NewsItem | null;
    setBreakingNews: (news: NewsItem | null) => void;
}
