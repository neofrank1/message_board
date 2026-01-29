import AppLayout from "@/components/layout/appLayout";
import React from "react";
import HomeComponents from "@/components/home/homeComponents";
import { createClient } from '@/lib/supabase/server'
import { redirect } from "next/navigation";
import { getAccount } from "@/app/(account)/actions/accountActions";

export const metadata = {
  title: "Home - Message Board",
  description: "A simple message board built with Next.js",
};

export default async function Home() {
    const supabase = await createClient()
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
        redirect('/')
    }
    const account = await getAccount(user.id);

    return (
        <AppLayout>
            <HomeComponents userData={ user } account={account}/>
        </AppLayout>
    )
}