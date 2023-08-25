"use client";

import Header from "@/components/Header";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 10,
        }
    }
});

export default function CatsLayout({ children }) {

    return <div className="container">
        <Header/>
        <main>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </main>
    </div>
}