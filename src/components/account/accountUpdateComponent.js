'use client';

import { initAccount, updateAccount } from "@/app/(account)/actions/accountActions";

export default function AccountUpdateComponent({ account }) {
    console
    return (
            <div className='flex flex-col items-center justify-center'>
            <form>
                <div className='card w-lg mt-5 bg-base-100 shadow-xl'>
                    <div className='card-body'>
                        <h1 className='card-title'>Account</h1>
                        <div className='grid grid-rows mt-2'>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">First Name</legend>
                                <input type="text" className="input w-full" placeholder="First Name" name="first_name" defaultValue={account?.first_name} />
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Middle Name</legend>
                                <input type="text" className="input w-full" placeholder="Middle Name" name="middle_name" defaultValue={account?.middle_name} />
                                <p className="label">Optional</p>
                            </fieldset>
                            <fieldset className="fieldset">
                                <legend className="fieldset-legend">Last Name</legend>
                                <input type="text" className="input w-full" placeholder="Last Name" name="last_name" defaultValue={account?.last_name} />
                            </fieldset>
                        </div>
                    </div>
                    <div className='card-actions justify-end p-4'>
                        <button className='btn btn-secondary' onClick={() => router.push('/Home')}>Cancel</button>
                        <button className='btn btn-primary' formAction={account ? updateAccount : initAccount} type="submit">Save</button>
                    </div>
                </div>
            </form>
        </div>
    )
}