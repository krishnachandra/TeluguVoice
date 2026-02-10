import { AdaptiveHeader } from '@/components/AdaptiveHeader';
import { NewsCard } from '@/components/NewsCard';
import { VideoCarousel } from '@/components/VideoCarousel';
import { getHomePageData } from '@/lib/service'; // Use Service
import { Flame, Activity, ChevronRight } from 'lucide-react';

export default async function Home() {
  const { breaking, topStories, viralVideos, latestStories, trendingTags } = await getHomePageData(); // Async Call

  return (
    <main className="min-h-screen bg-charcoal-900 text-white pb-20 md:pb-10">
      <AdaptiveHeader />

      {/* Trending Strip (LCP Optimized Text) */}
      <div className="bg-charcoal-800 border-b border-charcoal-700 overflow-hidden">
        <div className="container mx-auto px-4 py-2 flex items-center gap-4 text-xs font-medium uppercase tracking-wider text-gray-400 overflow-x-auto scrollbar-hide">
          <span className="text-saffron-500 flex items-center gap-1 shrink-0 z-10 bg-charcoal-800 pr-2">
            <Flame className="w-3 h-3" /> Trending Now
          </span>
          <span className="w-px h-3 bg-charcoal-600 shrink-0 z-10" />

          <div className="flex overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] relative">
            <div className="flex animate-marquee gap-8 pr-8 shrink-0">
              {trendingTags?.map((tag: string) => (
                <span key={tag} className="text-gray-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex animate-marquee gap-8 pr-8 shrink-0" aria-hidden="true">
              {trendingTags?.map((tag: string) => (
                <span key={`${tag}-copy`} className="text-gray-400 hover:text-white cursor-pointer transition-colors whitespace-nowrap">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 space-y-12">
        {/* Section 1: Hero & Top Stories */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Hero (Left - 8 cols) */}
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-0.5 text-[10px] font-bold bg-red-600 text-white uppercase rounded-sm animate-pulse">
                Breaking News
              </span>
              <span className="text-xs text-gray-400 flex items-center gap-1">
                <Activity className="w-3 h-3" /> Live Updates
              </span>
            </div>

            <NewsCard
              item={breaking}
              variant="hero"
              className="h-[400px] sm:h-[500px]"
            />
          </div>

          {/* Top Stories (Right - 4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center justify-between border-l-4 border-saffron-500 pl-3">
              <h2 className="text-xl font-display font-bold text-white">Top Stories</h2>
              <button className="text-xs text-saffron-500 hover:text-white font-medium flex items-center group">
                VIEW ALL <ChevronRight className="w-3 h-3 ml-0.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="space-y-4 flex flex-col h-full">
              {topStories.map((item: any) => (
                <NewsCard key={item.id} item={item} variant="horizontal" className="flex-1" />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Latest Stories Grid */}
        <section>
          <div className="flex items-center gap-3 mb-6 border-l-4 border-saffron-500 pl-3">
            <h2 className="text-2xl font-display font-bold text-white">Latest Stories</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestStories.map((item: any) => (
              <NewsCard key={item.id} item={item} variant="horizontal" showCategory />
            ))}
          </div>
        </section>

        {/* Section 3: Viral Videos (Full Width) */}
        <div className="border-t border-charcoal-800 pt-8 mt-12">
          <VideoCarousel items={viralVideos} />
        </div>

        {/* Section 4: Cinema & Entertainment (Placeholder for now) */}
        <section>
          <div className="flex items-center justify-between mb-6 border-l-4 border-saffron-500 pl-3">
            <h2 className="text-2xl font-display font-bold text-white">Cinema & Entertainment</h2>
            <button className="text-sm text-saffron-500 hover:text-white font-bold uppercase tracking-wider">
              More News
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Visual placeholders for Cinema section */}
            <NewsCard item={topStories[0]} variant="hero" className="h-[250px]" />
            <NewsCard item={latestStories[5]} variant="hero" className="h-[250px]" />
          </div>
        </section>

      </div>

      {/* Footer Simple Placeholder */}
      <footer className="mt-20 border-t border-charcoal-800 py-12 bg-charcoal-900 text-center text-gray-500 text-sm">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 text-left">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-saffron-500 rounded flex items-center justify-center">
                <span className="text-charcoal-900 font-bold text-sm">T</span>
              </div>
              <span className="font-bold text-white">TeluguVoice</span>
            </div>
            <p className="text-xs leading-relaxed">The most trusted source for Telugu news, politics, cinema, and entertainment updates. Bringing you stories that matter, 24/7.</p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Categories</h4>
            <ul className="space-y-2 text-xs">
              <li>Andhra Pradesh</li>
              <li>Telangana</li>
              <li>National Politics</li>
              <li>Cinema Reviews</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li>About Us</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
              <li>Advertise</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider">Follow Us</h4>
            <div className="flex gap-2">
              {[1, 2, 3, 4].map(i => <div key={i} className="w-8 h-8 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-saffron-500 hover:text-charcoal-900 transition-colors cursor-pointer text-xs">+</div>)}
            </div>
          </div>
        </div>
        <p>© 2026 TeluguVoice Media Pvt Ltd. All rights reserved.</p>
      </footer>
    </main>
  );
}
