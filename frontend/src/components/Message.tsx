function Message({ text }: { text: string }) {
    return (
        <h1 className="font-bold text-4xl text-gray-800 text-center">{text}</h1>
    );
}

export default Message;
