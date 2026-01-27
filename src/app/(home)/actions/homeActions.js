'use server';

export async function postMessage(messageState, messageData) {
    
    const message = messageData.get("message");

    if (!message || message.trim() === "") {
        return {
            error: "Message cannot be empty."
        };
    }

    // Initialize messageState if it's null or undefined
    if (!messageState) {
        messageState = [];
    }

    if (!messageState.error) {
        messageState = [...messageState, message];
    } else {
        messageState = [];
        messageState.push(message);
    }

    return messageState;
}