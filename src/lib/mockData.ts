import { NewsItem } from './types';

export const mockValues = {
    breaking: {
        id: 'b1',
        title: "CM Reddy Announces Massive Infrastructure Project for Hyderabad Metro Expansion",
        slug: 'cm-reddy-metro-expansion',
        summary: "The new phase will cover 70km of new tracks connecting the airport to the Financial district.",
        imageUrl: 'https://images.unsplash.com/photo-1573167243872-43c6433b9d40?q=80&w=1000&auto=format&fit=crop',
        category: 'Politics',
        publishedAt: new Date().toISOString(),
        isBreaking: true,
    } as NewsItem,

    topStories: [
        {
            id: 't1',
            title: "Prabhas's New Look for 'Spirit' Leaked Online, Fans Go Berserk",
            slug: 'prabhas-spirit-look',
            summary: "The pan-India star was spotted at a private event sporting a rugged beard and long hair.",
            imageUrl: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop',
            category: 'Cinema',
            publishedAt: new Date(Date.now() - 1000 * 60 * 30).toISOString(),
        },
        {
            id: 't2',
            title: "IPL Auction 2026: SRH Breaks Bank for Australian Skipper",
            slug: 'ipl-auction-srh',
            summary: "Sunrisers Hyderabad shattered all records with a ₹35 Crore bid.",
            imageUrl: 'https://images.unsplash.com/photo-1631194758628-71ec7c35137e?q=80&w=800&auto=format&fit=crop',
            category: 'Sports',
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 2).toISOString(),
        },
        {
            id: 't3',
            title: "New IT Policy to Attract Global Giants to Visakhapatnam",
            slug: 'vizag-it-policy',
            summary: "Tax incentives and land subsidies announced for major tech parks.",
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
            category: 'Technology',
            publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 5).toISOString(),
        }
    ] as NewsItem[],

    viralVideos: [
        {
            id: 'v1',
            title: "Audio Launch Highlights: Emotional Speech",
            slug: 'audio-launch-speech',
            summary: "",
            imageUrl: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800',
            category: 'Cinema',
            publishedAt: new Date().toISOString(),
            videoUrl: '#',
            videoDuration: '4:12',
            trendingScore: 15400
        },
        {
            id: 'v2',
            title: "Opposition Leader Storms Out of Assembly",
            slug: 'assembly-walkout',
            summary: "",
            imageUrl: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?q=80&w=800',
            category: 'Politics',
            publishedAt: new Date().toISOString(),
            videoUrl: '#',
            videoDuration: '1:25',
            trendingScore: 8900
        },
        {
            id: 'v3',
            title: "Incredible Finish! Last Over Drama",
            slug: 'cricket-last-over',
            summary: "",
            imageUrl: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800',
            category: 'Sports',
            publishedAt: new Date().toISOString(),
            videoUrl: '#',
            videoDuration: '2:10',
            trendingScore: 12100
        },
        {
            id: 'v4',
            title: "Students Erupt After Exam Results",
            slug: 'exam-results-celebration',
            summary: "",
            imageUrl: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=800',
            category: 'General',
            publishedAt: new Date().toISOString(),
            videoUrl: '#',
            videoDuration: '3:45',
            trendingScore: 6500
        },
        {
            id: 'v5',
            title: "First Look: The Superstar of Tomorrow",
            slug: 'superstar-look',
            summary: "",
            imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800',
            category: 'Cinema',
            publishedAt: new Date().toISOString(),
            videoUrl: '#',
            videoDuration: '0:45',
            trendingScore: 9800
        },
    ] as NewsItem[],

    latestStories: Array.from({ length: 6 }).map((_, i) => ({
        id: `l${i}`,
        title: [
            "Why Regional Cinema is Dominating Global Box Office",
            "Analysis: The Impact of New Budget on Middle Class",
            "Opposition Leader Claims New Bill is Anti-People",
            "Tech Layoffs: How Indian Startups are Coping",
            " Monsoon Forecast: Heavy Rains Expected in Coastal Districts",
            "Exclusive: Interview with the Director of the Year"
        ][i],
        slug: `story-${i}`,
        summary: "An in-depth analysis of how storytelling rooted in local culture is finding resonance with international audiences...",
        imageUrl: [
            'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=800',
            'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800',
            'https://images.unsplash.com/photo-1575320181282-9afab399332c?q=80&w=800',
            'https://images.unsplash.com/photo-1504384308090-c54be3853247?q=80&w=800',
            'https://images.unsplash.com/photo-1514632595-4944383f27f4?q=80&w=800',
            'https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=800'
        ][i],
        category: ['Cinema', 'Politics', 'Politics', 'Technology', 'General', 'Cinema'][i],
        publishedAt: new Date(Date.now() - 1000 * 60 * 60 * (i + 1)).toISOString(),
    })) as NewsItem[],

    trendingTags: [
        '#MaheshBabu',
        '#APCapitalCity',
        '#BiggBossTelugu7',
        '#APElections',
        '#GlobalInvestorsSummit',
        '#SSRajamouli',
        '#TupakiUpdates'
    ]
};
