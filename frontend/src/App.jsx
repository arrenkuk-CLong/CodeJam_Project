import { useState } from 'react'

export default function App() {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const sendToPython = async () => {
    const res = await fetch('http://127.0.0.1:5000/api/test', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: input }),
    })
    const data = await res.json()
    setResponse(data.reply)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-md bg-slate-800 p-6 rounded-xl shadow-lg space-y-4">
        <h1 className="text-2xl font-bold text-sky-400">Hackathon Boilerplate</h1>
        
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something for Python..."
          className="w-full p-3 rounded-lg bg-slate-700 border border-slate-600 focus:outline-none focus:border-sky-400"
        />

        <button
          onClick={sendToPython}
          className="w-full py-3 bg-sky-500 hover:bg-sky-600 font-semibold rounded-lg transition cursor-pointer"
        >
          Send to Flask
        </button>

        {response && (
          <div className="p-4 bg-slate-900 rounded-lg border border-sky-500/30 text-emerald-400">
            {response}
          </div>
        )}
      </div>
    </div>
  )
}