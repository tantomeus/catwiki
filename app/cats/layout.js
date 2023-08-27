import Header from "@/components/Header";

export default function CatsLayout({ children }) {

    return <div className="container">
        <Header/>
        <main>
            {children}
        </main>
    </div>
}