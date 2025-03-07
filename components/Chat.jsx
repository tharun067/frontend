"use client"
import { useState, useEffect, useRef } from 'react';

export default function Chatbot() {
  const [userMessage, setUserMessage] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const chatboxRef = useRef(null);

  const handleSendMessage = async () => {
    if (!userMessage.trim()) return;

    const outgoingMessage = { role: 'user', content: userMessage };
    setChatMessages((prev) => [...prev, outgoingMessage]);
    setUserMessage('');

    const incomingMessage = { role: 'assistant', content: 'Thinking...' };
    setChatMessages((prev) => [...prev, incomingMessage]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await response.json();

      setChatMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: data.reply },
      ]);
    } catch (error) {
      setChatMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'assistant', content: 'Oops! Something went wrong. Please try again.' },
      ]);
    }
  };

  useEffect(() => {
    chatboxRef.current?.scrollTo(0, chatboxRef.current.scrollHeight);
  }, [chatMessages]);

  return (
    <div className="fixed bottom-4 right-4 w-80 h-[100px] flex flex-col shadow-lg rounded-xl">
      <ul
        className="flex-1 overflow-y-auto space-y-4 p-2 border rounded-lg bg-white"
        ref={chatboxRef}
      >
        {chatMessages.map((msg, index) => (
          <li
            key={index}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-xl max-w-xs ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {msg.role === 'assistant' && (
                <span className="text-gray-500 mr-2">🤖</span>
              )}
              <p>{msg.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex items-center gap-2 mt-4">
        <textarea
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-lg resize-none focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}