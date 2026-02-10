import { fetchAPI } from './api';
import { GET_POSTS, GET_POST_BY_SLUG, GET_CATEGORIES } from './queries';
import { mockValues } from './mockData';
import { NewsItem } from './types';

// Helper to transform WPGraphQL response to our NewsItem schema
const transformPost = (node: any): NewsItem => ({
    id: node.id,
    title: node.title,
    slug: node.slug,
    summary: node.excerpt ? node.excerpt.replace(/<[^>]+>/g, '') : '', // Strip HTML
    imageUrl: node.featuredImage?.node?.sourceUrl || 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=800',
    category: node.categories?.nodes[0]?.name || 'General',
    publishedAt: node.date,
    isBreaking: false, // In real app, check custom field or tag
});

export const getHomePageData = async () => {
    if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
        console.log('Using Mock Data');
        return mockValues;
    }

    try {
        const data: any = await fetchAPI(GET_POSTS, { first: 10 });
        const posts = data?.posts?.nodes?.map(transformPost) || [];

        // Distribute posts (in real app, you'd have specific queries for each section)
        return {
            breaking: posts[0] || mockValues.breaking,
            topStories: posts.slice(1, 4),
            latestStories: posts.slice(4, 10),
            viralVideos: mockValues.viralVideos, // Still mock until we add video support in CMS
            trendingTags: mockValues.trendingTags,
        };
    } catch (error) {
        console.error('Error fetching home page data:', error);
        return mockValues; // Fallback
    }
};

export const getPostBySlug = async (slug: string): Promise<NewsItem | null> => {
    if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
        // Find in mock data
        const all = [mockValues.breaking, ...mockValues.topStories, ...mockValues.latestStories];
        return all.find((p) => p.slug === slug) || null;
    }

    try {
        const data: any = await fetchAPI(GET_POST_BY_SLUG, { id: slug, idType: 'SLUG' });
        return data?.post ? transformPost(data.post) : null;
    } catch (error) {
        console.error(`Error fetching post ${slug}:`, error);
        return null;
    }
};

export const getPostsByCategory = async (category: string) => {
    if (!process.env.NEXT_PUBLIC_WORDPRESS_API_URL) {
        return [...mockValues.topStories, ...mockValues.latestStories];
    }
    // In real implementation, add category filtering to query
    // For now, return generic posts
    const data: any = await fetchAPI(GET_POSTS, { first: 10 });
    return data?.posts?.nodes?.map(transformPost) || [];
};
