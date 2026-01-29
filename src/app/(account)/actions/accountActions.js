'use server'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation';

export async function getAccount(uuid) {
    const supabase = await createClient();
    const { data, error } = await supabase.from('profile').select('*').eq('users_uuid', uuid).single()
    
    if (error) {
        console.log("Error:", error.message)
        return null
    }
    
    return data;
}

export async function updateAccount(formData) {
    const supabase = await createClient();
    const users_uuid = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profile')
    .update({ first_name: formData.get('first_name'), middle_name: formData.get('middle_name'), last_name: formData.get('last_name') })
    .eq('users_uuid', users_uuid.data.user.id)
    .select()

    if (error) {
        console.log("Error:", error.message)
        return null
    }
    
    redirect('/Home');
}

export async function initAccount(formData) {
    const supabase = await createClient();
    const users_uuid = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('profile')
    .insert({ users_uuid: users_uuid.data.user.id, first_name: formData.get('first_name'), middle_name: formData.get('middle_name'), last_name: formData.get('last_name') })
    .select()
    
    if (error) {
        console.log("Error:", error.message)
        return null
    }
    
    redirect('/Home');
}