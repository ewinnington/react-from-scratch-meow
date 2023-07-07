import React, { useState } from 'react';

export default function Greeting() {
  const [name, setName] = useState('');
  const [greeting, setGreeting] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleGreetingClick = () => {
    setGreeting(`Hello, ${name}!`);
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <label className="block font-medium mb-2">What's your name?</label>
      <input
        type="text"
        className="border border-gray-300 rounded-md px-3 py-2 w-full mb-4"
        value={name}
        onChange={handleNameChange}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md"
        onClick={handleGreetingClick}
      >
        Say hello
      </button>
      {greeting && <p className="mt-4">{greeting}</p>}
    </div>
  );
}