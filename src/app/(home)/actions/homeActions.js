'use server';

export async function postMessage(messageState, messageData) {
    
    const message = messageData.get("message");

    if (!message || message.trim() === "") {
        return {
            error: "Message cannot be empty."
        };
    }

    return messageState ? [...messageState, message] : [message];
}