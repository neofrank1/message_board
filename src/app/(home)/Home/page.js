import AppLayout from "@/components/layout/appLayout";
import React from "react";
import HomeComponents from "@/components/home/homeComponents";
import { createClient } from '@/lib/supabase/server'

export const metadata = {
  title: "Home - Message Board",
  description: "A simple message board built with Next.js",
};

export default async function Home() {
    const supabase = await createClient()
    const user = await supabase.auth.getUser()

    return (
        <AppLayout>
            <HomeComponents />
        </AppLayout>
    )
}