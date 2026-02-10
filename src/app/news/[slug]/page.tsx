import { AdaptiveHeader } from '@/components/AdaptiveHeader';
import { NewsCard } from '@/components/NewsCard';
import { getPostBySlug } from '@/lib/service';
import { notFound } from 'next/navigation';
import { Share2, Clock, MapPin, MessageCircle, Bookmark } from 'lucide-react';
import Image from 'next/image';
import { formatDistanceToNow } from 'date-fns';

export default async function ArticlePage({ params }: { params: { slug: string } }) {
    const article = await getPostBySlug(params.slug);

    if (!article) {
        notFound();
    }

    // Mock related for now, extend service if needed
    const relatedStories: any[] = [];

    return (
        <main className="min-h-screen bg-charcoal-900 text-white pb-20">
            <AdaptiveHeader />

            {/* Hero Header */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    fill
                    className="object-cover brightness-[0.4]"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/50 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 container mx-auto">
                    <div className="max-w-4xl space-y-4">
                        <span className="inline-block px-3 py-1 bg-saffron-500 text-charcoal-900 font-bold text-xs uppercase tracking-widest rounded-sm">
                            {article.category}
                        </span>
                        <h1 className="text-3xl sm:text-5xl font-display font-bold leading-tight drop-shadow-lg">
                            {article.title}
                        </h1>
                        <div className="flex items-center gap-6 text-sm text-gray-300 font-medium pb-6 border-b border-gray-700/50">
                            <span className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-saffron-500" />
                                {formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true })}
                            </span>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-electric-500" />
                                Hyderabad, Telangana
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Main Article Content */}
                <article className="lg:col-span-8 space-y-6">
                    {/* Lead Paragraph */}
                    <p className="text-xl font-serif leading-relaxed text-gray-200 first-letter:text-5xl first-letter:font-bold first-letter:text-saffron-500 first-letter:mr-3 first-letter:float-left">
                        {article.summary} The announcement has sent ripples through the political landscape of the state, with opposition leaders scrambling to formulate a response. Experts believe this move could reshape the economic future of the region for decades to come.
                    </p>

                    <p className="text-lg font-serif leading-relaxed text-gray-300">
                        Speaking at a crowded press conference today, the Chief Minister outlined a comprehensive roadmap that includes not just the metro expansion, but also the development of three new satellite townships along the corridor. "This isn't just about transport; it's about transformation," he declared to thunderous applause.
                    </p>

                    <figure className="my-8">
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1570126618953-d437176e8c79?q=80&w=1000"
                                alt="Construction site"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <figcaption className="mt-2 text-sm text-gray-500 italic text-center">
                            Artist's rendition of the proposed Metro station at Financial District.
                        </figcaption>
                    </figure>

                    <h2 className="text-2xl font-bold font-display text-white mt-8">Opposition Cries Foul</h2>
                    <p className="text-lg font-serif leading-relaxed text-gray-300">
                        However, not everyone is convinced. The Leader of the Opposition has termed the project a "white elephant" designed to distract from rising inflation. In a statement released shortly after the announcement, he questioned the timing of the project, hinting at the upcoming elections.
                    </p>

                    <p className="text-lg font-serif leading-relaxed text-gray-300">
                        Despite the political slugfest, residents of the city seem optimistic. "Traffic is a nightmare here. If this metro line gets built, it will save me two hours every day," said Rajesh Kumar, a software engineer working in Hitech City.
                    </p>

                    {/* Engagement Bar */}
                    <div className="flex items-center justify-between py-6 mt-8 border-y border-charcoal-700">
                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-4 py-2 bg-charcoal-800 rounded-full hover:bg-charcoal-700 transition-colors text-sm">
                                <Share2 className="w-4 h-4 text-saffron-500" /> Share
                            </button>
                            <button className="flex items-center gap-2 px-4 py-2 bg-charcoal-800 rounded-full hover:bg-charcoal-700 transition-colors text-sm">
                                <Bookmark className="w-4 h-4 text-white" /> Save
                            </button>
                        </div>
                        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                            <MessageCircle className="w-5 h-5" /> 124 Comments
                        </button>
                    </div>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-4 space-y-8">
                    <div className="sticky top-24 space-y-8">
                        {/* Related Stories */}
                        <div className="bg-charcoal-800 p-6 rounded-xl border border-charcoal-700">
                            <h3 className="text-lg font-bold font-display text-white mb-4 border-l-4 border-saffron-500 pl-3">Related News</h3>
                            <div className="space-y-4">
                                {relatedStories.map(story => (
                                    <NewsCard key={story.id} item={story} variant="horizontal" showCategory={false} className="bg-transparent shadow-none hover:bg-charcoal-700/50 p-2 rounded-lg" />
                                ))}
                            </div>
                        </div>

                        {/* Ad Placeholder */}
                        <div className="w-full aspect-square bg-gradient-to-br from-charcoal-800 to-charcoal-700 rounded-xl flex items-center justify-center text-gray-500 text-xs tracking-widest border border-charcoal-600 border-dashed">
                            ADVERTISEMENT
                        </div>
                    </div>
                </aside>

            </div>
        </main>
    );
}
