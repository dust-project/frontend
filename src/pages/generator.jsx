'use client'
import React, { useState, useEffect } from 'react'

export default function ContentGenerator() {
    const [activeTab, setActiveTab] = useState('audiobook')
    const [level, setLevel] = useState('beginner')
    const [topics, setTopics] = useState([])
    const [newTopic, setNewTopic] = useState('')
    const [creativity, setCreativity] = useState(50)
    const [duration, setDuration] = useState(45)
    const [customPrompt, setCustomPrompt] = useState('')
    const [activeContent, setActiveContent] = useState(null)
    const [file, setFile] = useState("");
    const [bb, setBB] = useState();

    const submitHandler = async (e) => {

        if (activeTab === 'audiobook') {
            var data = new FormData();

            data.append("file", file);

            let res = await fetch("http://localhost:8080/api/pdf", {
                method: "POST",
                body: data
            });

            const blob = await res.blob();

            // Create a URL for the Blob
            const blobUrl = URL.createObjectURL(blob);


            // Create an anchor element
            alert(blobUrl)
            setBB(blobUrl)

            // play audio
        }
    }


    useEffect(() => {
        const podcastContent = (
            <div className="w-2/3 space-y-10">
                <div className="bg-white/30 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Topics</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {topics.map((topic) => (
                            <span
                                key={topic}
                                className="bg-beige-tan-100 text-beige-tan-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-opacity-90 transition-colors duration-200 shadow-sm"
                                onClick={() => deleteTopics(topic)}
                            >
                                {topic}
                                <span className="ml-2 hover:text-beige-tan-300">×</span>
                            </span>
                        ))}
                    </div>
                    <input
                        type="text"
                        value={newTopic}
                        onChange={(e) => setNewTopic(e.target.value)}
                        onKeyPress={addTopic}
                        placeholder="Enter topics and press Enter..."
                        className="w-full bg-white/50 border border-beige-tan-200 rounded-lg p-4 text-beige-tan-100 placeholder-beige-tan-200 font-medium"
                    />
                </div>

                <div className="bg-white/30 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Advanced Settings</h2>
                    <label htmlFor="customPrompt" className="block mb-3 text-beige-tan-100 font-medium">Custom Prompt</label>
                    <input
                        id="customPrompt"
                        type="text"
                        value={customPrompt}
                        onChange={(e) => setCustomPrompt(e.target.value)}
                        placeholder="Enter specific prompt here..."
                        className="w-full bg-white/50 border border-beige-tan-200 rounded-lg p-4 text-beige-tan-100 placeholder-beige-tan-200 font-medium"
                    />
                </div>
            </div>
        )

        const audiobookContent = (
            <div className="w-2/3 space-y-10">
                <div className="bg-white/30 rounded-xl p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Upload Files</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {topics.map((topic) => (
                            <span
                                key={topic}
                                className="bg-beige-tan-100 text-beige-tan-400 px-4 py-2 rounded-full text-sm font-medium cursor-pointer hover:bg-opacity-90 transition-colors duration-200 shadow-sm"
                                onClick={() => deleteTopics(topic)}
                            >
                                {topic}
                                <span className="ml-2 hover:text-beige-tan-300">×</span>
                            </span>
                        ))}
                    </div>
                    <label className="relative flex flex-col items-center justify-center w-full bg-white/50 border-2 border-dashed border-beige-tan-200 rounded-lg p-8 cursor-pointer hover:border-beige-tan-100 transition-all duration-200 group">
                        <div className="flex flex-col items-center justify-center">
                            <svg className="w-10 h-10 text-beige-tan-100 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="text-lg font-semibold text-beige-tan-100 mb-1">Click to upload or drag and drop</p>
                            <p className="text-sm text-beige-tan-200">PDF files only</p>
                        </div>
                        <input
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={onFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                    </label>
                    {topics.length > 0 && (
                        <div className="mt-4 text-sm text-beige-tan-100">
                            Click on a file tag to remove it
                        </div>
                    )}
                </div>
            </div>
        )

        setActiveContent(activeTab === 'podcast' ? podcastContent : audiobookContent)
    }, [activeTab, topics, newTopic, customPrompt]) // Dependencies that will trigger a re-render


    useEffect(() => {
        setTopics([...topics, file.name])
    }, [file])

    const onFileChange = (e) => {
        setFile(e.target.files[0])
        // const file =e.target.files[0]
        // if (file) {
        //     if (file.type === 'application/pdf') {
        //         setTopics([...topics, file.name])
        //     } else {
        //         alert('Please upload only PDF files')
        //     }
        // }
        // e.target.value = ''
    }

    const addTopic = (e) => {
        if (e.key === 'Enter' && newTopic.trim()) {
            setTopics([...topics, newTopic.trim()])
            setNewTopic('')
        }
    }

    const deleteTopics = (text) => {
        const newTopics = topics.filter((topic) => topic !== text)
        setTopics(newTopics)
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-beige-tan-300 to-beige-tan-400 p-8">
            <div className="max-w-6xl mx-auto">
                <header className="flex justify-between items-center mb-12">
                    <h1 className="text-5xl font-bold text-beige-tan-100 drop-shadow-lg">
                        SunoPustak
                    </h1>
                </header>

                <div className="flex justify-center mb-10">
                    <div className="inline-flex rounded-lg overflow-hidden shadow-lg">
                        <button
                            className={`px-8 py-3 font-semibold transition-all duration-200 ${activeTab === 'podcast'
                                ? 'bg-beige-tan-100 text-beige-tan-400'
                                : 'bg-beige-tan-200 text-beige-tan-100 hover:bg-beige-tan-300'
                                }`}
                            onClick={() => setActiveTab('podcast')}
                        >
                            Podcast Generator
                        </button>
                        <button
                            className={`px-8 py-3 font-semibold transition-all duration-200 ${activeTab === 'audiobook'
                                ? 'bg-beige-tan-100 text-beige-tan-400'
                                : 'bg-beige-tan-200 text-beige-tan-100 hover:bg-beige-tan-300'
                                }`}
                            onClick={() => setActiveTab('audiobook')}
                        >
                            Audiobook Generator
                        </button>
                    </div>
                </div>

                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                    <div className="flex gap-12">
                        <div className="w-1/3 space-y-10">
                            <div className="bg-white/30 rounded-xl p-6">
                                <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Level</h2>
                                <div className="space-y-4">
                                    {['Beginner', 'Intermediate', 'Advanced'].map((option) => (
                                        <label key={option} className="flex items-center space-x-3 cursor-pointer">
                                            <input
                                                type="radio"
                                                value={option.toLowerCase()}
                                                checked={level === option.toLowerCase()}
                                                onChange={(e) => setLevel(e.target.value)}
                                                className="w-4 h-4 text-beige-tan-100"
                                            />
                                            <span className="text-beige-tan-100 font-medium">{option}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-white/30 rounded-xl p-6">
                                <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Creativity</h2>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    value={creativity}
                                    onChange={(e) => setCreativity(Number(e.target.value))}
                                    className="w-full h-2 bg-beige-tan-200 rounded-lg appearance-none cursor-pointer"
                                />
                                <div className="flex justify-between mt-2">
                                    <span className="text-sm text-beige-tan-100">Conservative</span>
                                    <span className="text-sm text-beige-tan-100">Creative</span>
                                </div>
                            </div>

                            <div className="bg-white/30 rounded-xl p-6">
                                <h2 className="text-2xl font-semibold mb-6 text-beige-tan-100">Duration</h2>
                                <div className="flex items-center gap-3">
                                    <input
                                        type="number"
                                        value={duration}
                                        onChange={(e) => setDuration(Number(e.target.value))}
                                        className="w-24 bg-white/50 border border-beige-tan-200 rounded-lg p-3 text-beige-tan-100 font-medium"
                                    />
                                    <span className="text-beige-tan-100 font-medium">minutes</span>
                                </div>
                            </div>
                        </div>
                        {activeContent}
                    </div>
                </div>

                <div className="flex justify-center mt-12">
                    <button className="bg-beige-tan-100 text-beige-tan-400 text-xl font-bold px-16 py-4 rounded-xl shadow-lg hover:transform hover:scale-105 transition-all duration-200 hover:shadow-xl"
                        onClick={submitHandler}>
                        GENERATE
                    </button>

                    {bb && <audio controls>
                        <source src={bb} type="audio/wav" />
                    </audio>
                    }
                </div>
            </div>
        </div>
    )
}
