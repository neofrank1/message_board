import AppLayout from "@/components/layout/appLayout";
import React from "react";
import HomeComponents from "@/components/home/homeComponents";

export const metadata = {
  title: "Home - Message Board",
  description: "A simple message board built with Next.js",
};


export default function Home() {
    return (
        <AppLayout>
            <HomeComponents />
        </AppLayout>
    )
}