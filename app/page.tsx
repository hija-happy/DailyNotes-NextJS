"use client";

import { useState } from "react";
import AddNote from "./components/AddNote";

export default function Home() {

  const [notes, setNotes] = useState<string[]>([]);

  function handleAddNote(newNote: string){
    setNotes((prev) => [...prev, newNote])
  }
  return (

    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-2">Daily Notes</h1>
      <p className="text-gray-600">Note down your point in one go</p>

      <AddNote onAdd={handleAddNote}/>

      <ul className="">
         {notes.map((note,index) => (
          <li key={index}
          className="border-white bg-white text-black rounded my-5 p-4 text-lg" >
            {note}
          </li>
         ))}
      </ul>
    </main>
  );
}

