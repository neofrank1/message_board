import { getAccount } from '../../actions/accountActions'
import { redirect } from 'next/navigation'
import AppLayout from '@/components/layout/appLayout'
import AccountUpdateComponent from '@/components/account/accountUpdateComponent'

export default async function AccountPage({ params }) {
    const { uuid } = await params
    if (!uuid) {
        redirect('/')
    }
    const account = await getAccount(uuid)
    
    return (
        <AppLayout>
            <AccountUpdateComponent account={account} />
        </AppLayout>
    )
}