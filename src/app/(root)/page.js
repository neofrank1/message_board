import Image from "next/image";
import IndexLayout from "@/components/layout/indexLayout";

export default function Home() {
  return (
    <>
      <IndexLayout>
          <div className="hero bg-base-200 min-h-[calc(80vh-6rem)] shadow-lg">
            <div className="hero-content text-center">
              <div className="max-w-md">
                <h1 className="text-5xl font-bold">Welcome to the Message Board</h1>
                <p className="py-6">
                  This is a simple message board built with Next.js. It allows you to post messages and view them in a list.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
      </IndexLayout>
    </>
  );
}