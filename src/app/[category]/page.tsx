import { AdaptiveHeader } from '@/components/AdaptiveHeader';
import { NewsCard } from '@/components/NewsCard';
import { getPostsByCategory } from '@/lib/service';
import { mockValues } from '@/lib/mockData';

// Reusable Category Page Component
export default async function CategoryPage({ params }: { params: { category: string } }) {
    const categoryName = params.category ? (params.category.charAt(0).toUpperCase() + params.category.slice(1)) : 'News';

    // Fetch real data or mock fallback
    const stories = await getPostsByCategory(params.category);

    // Fallback if API returns empty during dev
    const displayStories = stories.length > 0 ? stories : [...mockValues.topStories, ...mockValues.latestStories];

    return (
        <main className="min-h-screen bg-charcoal-900 text-white pb-20">
            <AdaptiveHeader />

            <div className="bg-charcoal-800 border-b border-charcoal-700 py-12">
                <div className="container mx-auto px-4">
                    <span className="text-saffron-500 font-bold uppercase tracking-widest text-xs mb-2 block">Category</span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white">{categoryName}</h1>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12 space-y-12">

                {/* Featured Story */}
                <section>
                    {displayStories[0] && (
                        <NewsCard item={displayStories[0]} variant="hero" className="h-[400px]" />
                    )}
                </section>

                {/* Latest Grid */}
                <section>
                    <h2 className="text-2xl font-bold mb-6 border-l-4 border-electric-500 pl-3">Latest in {categoryName}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {displayStories.slice(1).map((item: any) => (
                            <NewsCard key={item.id} item={item} variant="vertical" showCategory={false} />
                        ))}
                    </div>
                </section>

            </div>
        </main>
    );
}
