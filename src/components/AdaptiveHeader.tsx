'use client';

import { useState } from 'react';
import { useNavStore } from '@/lib/store';
import { Menu, Search, User, X, Home, Flame, PlaySquare, Bell } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';

export function AdaptiveHeader() {
    const { isOpen, toggleMenu } = useNavStore();
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const pathname = usePathname();

    const navLinks = [
        { name: 'Home', href: '/', icon: Home },
        { name: 'Politics', href: '/politics', icon: Bell },
        { name: 'Cinema', href: '/cinema', icon: PlaySquare },
        { name: 'Trending', href: '/trending', icon: Flame },
        { name: 'Technology', href: '/tech', icon: User }, // Placeholder icon
    ];

    return (
        <>
            {/* Desktop & Mobile Sticky Header */}
            <header className="sticky top-0 z-50 w-full bg-charcoal-900/95 backdrop-blur-md border-b border-charcoal-800">
                <div className="container mx-auto px-4 h-16 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-saffron-500 rounded-lg flex items-center justify-center">
                            <span className="text-charcoal-900 font-bold text-xl">T</span>
                        </div>
                        <span className="text-xl font-display font-bold tracking-tight hidden sm:block">
                            Telugu<span className="text-saffron-500">Voice</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium hover:text-saffron-500 transition-colors",
                                    pathname === link.href ? "text-saffron-500" : "text-gray-300"
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="p-2 hover:bg-charcoal-800 rounded-full transition-colors"
                        >
                            <Search className="w-5 h-5 text-gray-300" />
                        </button>
                        <button className="hidden md:block p-2 hover:bg-charcoal-800 rounded-full transition-colors">
                            <User className="w-5 h-5 text-gray-300" />
                        </button>

                        {/* Mobile Menu Toggle */}
                        <button
                            onClick={toggleMenu}
                            className="md:hidden p-2 hover:bg-charcoal-800 rounded-full transition-colors"
                        >
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Bottom Navigation */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-charcoal-900 border-t border-charcoal-800 pb-safe">
                <div className="flex justify-around items-center h-16">
                    {navLinks.slice(0, 4).map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "flex flex-col items-center justify-center w-full h-full space-y-1",
                                pathname === link.href ? "text-saffron-500" : "text-gray-400"
                            )}
                        >
                            <link.icon className="w-5 h-5" />
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </nav>

            {/* Mobile Drawer (Antigravity Style) */}
            <div className={cn(
                "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden",
                isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            )} onClick={toggleMenu} />

            <aside className={cn(
                "fixed top-16 right-0 bottom-0 z-40 w-64 bg-charcoal-900 border-l border-charcoal-800 transform transition-transform duration-300 md:hidden",
                isOpen ? "translate-x-0" : "translate-x-full"
            )}>
                <div className="p-4 space-y-4">
                    <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">Menu</h3>
                    <div className="space-y-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block p-3 rounded-lg hover:bg-charcoal-800 transition-colors font-medium"
                                onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </aside>
        </>
    );
}
