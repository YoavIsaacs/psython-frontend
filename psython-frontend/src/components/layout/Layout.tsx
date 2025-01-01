import React from "react";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}


export default function Layour({ children }: LayoutProps) {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                {children}
            </main>
            <Footer />
        </div>
    );
}