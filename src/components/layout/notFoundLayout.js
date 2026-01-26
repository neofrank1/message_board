export default function NotFoundLayout({ children }) {
    return (
        <>
            <main className="max-w-full mx-auto min-h-screen max-h-full bg-base-200 border-t border-transparent">
                {children}
            </main>
        </>
    )
}