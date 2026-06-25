import React, { useState } from 'react'
import { X } from 'lucide-react';

const App = () => {
   const [title,setTitle] = useState('')
   const [details, setDetails] = useState('')
   const [task, setTask] = useState([])

  const submitHandler = (e) =>{
    e.preventDefault()

    const copyTask = [...task];
    copyTask.push({title,details})
    setTask(copyTask)

    setTitle('')
    setDetails('')
  }
  const deleteNote = (idx) =>{
    const copyTask = [...task]
    copyTask.splice(idx,1)
    setTask(copyTask)

    
  }
 


  return (
  <div className="min-h-screen bg-zinc-950 text-white">

    <div className="flex flex-col lg:flex-row">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-zinc-700">

        <form
          onSubmit={submitHandler}
          className="max-w-xl mx-auto p-6 sm:p-8 lg:p-10 flex flex-col gap-6"
        >
          <div>
            <h1 className="text-4xl font-bold">Add Notes</h1>
            <p className="text-zinc-400 mt-2">
              Save your important ideas and tasks.
            </p>
          </div>

          <input
            type="text"
            placeholder="Enter Notes Heading"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 outline-none focus:border-white transition"
          />

          <textarea
            placeholder="Write Details..."
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="h-44 resize-none w-full rounded-xl border border-zinc-600 bg-zinc-900 px-4 py-3 outline-none focus:border-white transition"
          />

          <button className="w-full rounded-xl bg-white py-3 text-black font-semibold hover:bg-zinc-200 active:scale-95 transition">
            Add Note
          </button>
        </form>

      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10">

        <div className="sticky top-0 bg-zinc-950 pb-4 z-10">
          <h1 className="text-4xl font-bold">Recent Notes</h1>
          <p className="text-zinc-400 mt-2">
            {task.length} Notes Available
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-6 max-h-[75vh] overflow-y-auto pr-2">

          {task.map((elem, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between h-56 w-44 rounded-xl bg-cover bg-center px-4 pt-10 pb-4 shadow-xl transition hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')",
              }}
            >
              <div className="overflow-hidden">
                <h3 className="text-xl font-bold break-words text-black">
                  {elem.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 break-words overflow-hidden">
                  {elem.details}
                </p>
              </div>

              <button
                onClick={() => deleteNote(idx)}
                className="mt-4 rounded-lg bg-red-500 py-2 text-sm font-semibold text-white hover:bg-red-600 active:scale-95 transition"
              >
                Delete
              </button>
            </div>
          ))}

        </div>

      </div>

    </div>
  </div>
);
}

export default App