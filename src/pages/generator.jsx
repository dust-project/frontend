'use client'

import React, { useState } from 'react'

export default function ContentGenerator() {
    const [activeTab, setActiveTab] = useState('podcast')
    const [level, setLevel] = useState('beginner')
    const [topics, setTopics] = useState(['AI', 'ML', 'Neural Network'])
    const [newTopic, setNewTopic] = useState('')
    const [creativity, setCreativity] = useState(50)
    const [duration, setDuration] = useState(45)
    const [customPrompt, setCustomPrompt] = useState('')

    const addTopic = (e) => {
        if (e.key === 'Enter' && newTopic.trim()) {
            setTopics([...topics, newTopic.trim()])
            setNewTopic('')
        }
    }

    const deleteTopics = (e) => {
        // delete the topic from the topics array
        const newTopics = topics.filter((topic) => topic !== e.innerText)
        setTopics(newTopics);

    }

    return (
        <div className="min-h-screen bg-black text-white p-6">
            <header className="flex justify-between items-center mb-8">
                <h1 className="text-4xl font-bold">BROKE</h1>
                <div className="flex items-center gap-4">
                    <button className="text-white hover:text-gray-300">HISTORY</button>
                    <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
            </header>

            <div className="flex justify-center mb-8">
                <div className="inline-flex">
                    <button
                        className={`px-4 py-2 ${activeTab === 'podcast' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                        onClick={() => setActiveTab('podcast')}
                    >
                        Podcast Generator
                    </button>
                    <button
                        className={`px-4 py-2 ${activeTab === 'audiobook' ? 'bg-white text-black' : 'bg-gray-800 text-white'}`}
                        onClick={() => setActiveTab('audiobook')}
                    >
                        Audiobook Generator
                    </button>
                </div>
            </div>

            <div className="flex gap-8">
                <div className="w-1/3 space-y-8">
                    <div>
                        <h2 className="text-2xl mb-4 text-left">Level</h2>
                        <div className="space-y-2">
                            {['Beginner', 'Intermediate', 'Advanced'].map((option) => (
                                <label key={option} className="flex items-center space-x-2">
                                    <input
                                        type="radio"
                                        value={option.toLowerCase()}
                                        checked={level === option.toLowerCase()}
                                        onChange={(e) => setLevel(e.target.value)}
                                        className="form-radio text-white"
                                    />
                                    <span>{option}</span>
                                </label>
                            ))}
                        </div>
                    </div>

                    <div className={"flex flex-col"}>
                        <h2 className="text-2xl mb-4 text-left">Creativity</h2>
                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={creativity}
                            onChange={(e) => setCreativity(Number(e.target.value))}
                            // make the slider white
                            className="range appearance-none rounded w-1/2 h-1"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl mb-4 text-left">Duration</h2>
                        <div className="flex items-center gap-2">
                            <input
                                type="number"
                                value={duration}
                                onChange={(e) => setDuration(Number(e.target.value))}
                                className="w-20 bg-gray-800 border border-gray-700 rounded p-2"
                            />
                            <span>minutes</span>
                        </div>
                    </div>
                </div>

                <div className="w-2/3 space-y-8">
                    <div>
                        <h2 className="text-2xl mb-4 text-left">Topics</h2>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {topics.map((topic) => (
                                <span key={topic} className="bg-gray-700 px-3 py-1 rounded-full text-sm" onClick={(e) => {
                                    deleteTopics(e.target);
                                }}>
                  {topic}
                </span>
                            ))}
                        </div>
                        <input
                            type="text"
                            value={newTopic}
                            onChange={(e) => setNewTopic(e.target.value)}
                            onKeyPress={addTopic}
                            placeholder="enter more topics here..."
                            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl mb-4 text-left">Advanced Settings</h2>
                        <label htmlFor="customPrompt" className="block mb-2 text-left">Custom Prompt</label>
                        <input
                            id="customPrompt"
                            type="text"
                            value={customPrompt}
                            onChange={(e) => setCustomPrompt(e.target.value)}
                            placeholder="enter specific prompt here"
                            className="w-full bg-gray-800 border border-gray-700 rounded p-2"
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button className="bg-white text-black text-lg px-16 py-3 rounded">
                    GENERATE
                </button>
            </div>
        </div>
    )
}