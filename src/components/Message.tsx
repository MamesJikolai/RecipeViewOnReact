function Message({ text }: { text: string }) {
    return (
        <div className="w-[90%] max-w-5xl mx-auto">
            <h1>{text}</h1>
        </div>
    );
}

export default Message;
