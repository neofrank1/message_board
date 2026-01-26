import AppHeader from "../header/appHeader";
import AppFooter from "../footer/appFooter";

export default function AppLayout({ children }) {
    return (
        <>
            <AppHeader />
                <main className="max-w-full mx-auto min-h-screen max-h-full bg-base-200 border-t border-transparent">
                    {children}
                </main>
            <AppFooter />
        </>
    )
}