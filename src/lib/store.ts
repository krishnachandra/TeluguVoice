import { create } from 'zustand';
import { NavState, NewsStore } from './types';

// Global Navigation State
export const useNavStore = create<NavState>((set) => ({
    isOpen: false,
    activeCategory: null,
    toggleMenu: () => set((state) => ({ isOpen: !state.isOpen })),
    setActiveCategory: (category) => set({ activeCategory: category }),
}));

// Global News State (For Breaking/Reactive updates)
export const useNewsStore = create<NewsStore>((set) => ({
    breakingNews: null,
    setBreakingNews: (news) => set({ breakingNews: news }),
}));
