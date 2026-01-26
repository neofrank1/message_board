import NotFoundLayout from "@/components/layout/notFoundLayout";
import Link from "next/link";

export default function NotFound() {
    return (
        <>
            <NotFoundLayout>
                <div className="flex flex-col items-center justify-center h-screen gap-4">
                    <h1 className="text-5xl font-bold">
                        404 - Page Not Found
                    </h1>
                    <p className="text-center">
                        The page you are looking for does not exist. Please try again.
                    </p>
                    <Link href="/" className="btn btn-primary">Back to Home</Link>
                </div>
            </NotFoundLayout>
        </>
    )
}