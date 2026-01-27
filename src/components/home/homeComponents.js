'use client';

import React from "react";
import { useActionState, useState } from "react";
import { postMessage } from "@/app/(home)/actions/homeActions";
import { HiOutlineThumbUp, HiOutlineUserGroup, HiOutlineNewspaper, HiOutlineChat } from "react-icons/hi";

export default function HomeComponents() {
    const [message, messageAction, isPending] = useActionState(postMessage, null);
    const [likes, setLikes] = useState(false);

    const handleLike = () => {
        if (likes) {
            setLikes(false);
        } else {
            setLikes(true);
        }
    }

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
                                            <button className="btn btn-primary loading loading-spinner loading-xl" disabled>Posting...</button>
                                        ) : 
                                        (
                                            <button className="btn btn-primary">Post</button>
                                        )
                                    }
                                    {
                                        message && message.error ? (
                                            <NoMessages error={message.error} />
                                        ) : null
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
                            { isPending ? (
                                <span className="loading loading-dots loading-xl text-center"></span>
                            ) : message && message.length > 0 ? (
                                message.map((msg, index) => (
                                    <div key={index} className="card bg-base-100 shadow-lg mb-4">
                                        <div className="card-body">
                                            <div className="flex flex-row gap-5 mt-2">
                                                <div className="flex flex-col items-center mt-5">
                                                    <div className="avatar">
                                                        <div className="w-16 rounded-full">
                                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                                        </div>
                                                    </div>
                                                    <p className="text-md font-bold">Neo Frank Uy</p>
                                                </div>
                                                <div className="divider lg:divider-horizontal m-0"></div>
                                                <div className="flex flex-col w-full">
                                                    <div className="grow mb-10">
                                                        <h2 className="text-lg text-justify">{msg}</h2>
                                                    </div>
                                                    <div className="divider"></div>
                                                    <div className="flex flex-row gap-2 justify-start">
                                                        <button className={`btn btn-circle ${likes ? "btn-accent" : ""}`} onClick={handleLike}><HiOutlineThumbUp className={likes ? "text-alert" : ""}/></button>
                                                        <button className="btn btn-circle"><HiOutlineChat/></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="card bg-base-100 shadow-lg mb-4">
                                    <div className="card-body">
                                        <h2 className="text-xl font-bold mb-2">No messages yet.</h2>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="col-span-1 hidden md:hidden lg:block">
                    <div className="card bg-base-100 shadow-lg">
                        <div className="card-body m-0 p-5">
                            <div className="grid grid-cols-3 mt-2">
                                <div className="col-span-1">
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <h3 className="text-2xl font-bold text-left">Neo Frank Uy</h3>
                                    <p className="text-sm text-justify text-gray-500">Full Stack Developer</p>
                                </div>
                            </div>
                            <div className="divider mt-2"></div>
                            <div className="flex flex-row gap-4 justify-around">
                                <div className="flex flex-col items-center">
                                    <HiOutlineThumbUp className="text-2xl" />
                                    <span>Likes: 100</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <HiOutlineNewspaper className="text-2xl" />
                                    <span>Posts: 500</span>
                                </div>
                                <div className="flex flex-col items-center">
                                    <HiOutlineUserGroup className="text-2xl" />
                                    <span>Followers: 1.1k</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function NoMessages({ error }) {
    return (
        <div className="toast toast-end">
            <div className="alert alert-error">
                <span>{error}</span>
            </div>
        </div>
    );
}