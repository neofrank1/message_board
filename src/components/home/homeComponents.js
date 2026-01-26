'use client';
import React from "react";
import { useActionState } from "react";
import { postMessage } from "@/app/(home)/actions/homeActions";

export default function HomeComponents() {
    const [message, messageAction, isPending] = useActionState(postMessage, null);

    return (
        <div className="mt-4 p-4 max-w-[90vw] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
                <div className="col-span-2">
                    <form action={messageAction}>
                        <div className="card bg-base-100 shadow-lg">
                            <div className="card-body">
                                <div className="text-left">
                                    <h2 className="text-xl font-bold mb-2">Post a Message</h2>
                                    <textarea className="textarea textarea-ghost w-full resize-none" placeholder="Write your message here..." name="message"></textarea>
                                </div>
                                <div className="flex justify-end mt-2">
                                    {
                                        isPending ? (
                                            <button className="btn btn-primary loading loading-spinner " disabled>Posting...</button>
                                        ) : 
                                        <button className="btn btn-primary">Post</button>
                                    }

                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="grid-rows-auto mt-5">
                        <div className="text-left">
                            <h2 className="text-2xl font-bold mb-2">Messages</h2>
                        </div>
                        <div className="overflow-x-auto">
                            { message && message.length > 0 ? (
                                message.map((msg, index) => (
                                    <div key={index} className="border-2 p-4 shadow-lg mb-4">
                                        {msg}
                                    </div>
                                ))
                            ) : (
                                <div className="border-2 p-4 shadow-lg mb-4">
                                    No messages yet.
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body">
                        Hello 2
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}