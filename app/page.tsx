"use client";

import { useEffect, useState } from "react";
import AddNote from "./components/AddNote";

export default function Home() {

  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    const savedNotes = localStorage.getItem("daily-notes");
    if (savedNotes) {
      try {
        setNotes(JSON.parse(savedNotes));
      } catch (error) {
        console.error("Error parsing saved notes:", error);
      }
    }
  }, [])


  useEffect(() => {
  localStorage.setItem("daily-notes", JSON.stringify(notes));
}, [notes]);
  

  function handleAddNote(newNote: string){
    setNotes((prev) => [...prev, newNote])
  }

  function handleDeleteNote(indexToDelete: number){
    setNotes((prev) => prev.filter((_, i) => i !== indexToDelete));
  }
  return (

    <main className="min-h-screen p-6">
      <h1 className="text-3xl font-bold mb-2">Daily Notes</h1>
      <p className="text-gray-600">Note down your point in one go</p>

      <AddNote onAdd={handleAddNote}/>

      <ul className="">
         {notes.map((note,index) => (
          <li 
            key={index}
            className="border-white bg-white text-black rounded my-5 p-4 text-lg flex justify-between items-center"
            >
           <span> {note}</span>
           <button 
           className="flex"
            onClick ={() => handleDeleteNote(index)}
            > 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30"  height="30" fill="red" viewBox="0 0 20 24">
                <path d="M 10 2 L 9 3 L 5 3 C 4.448 3 4 3.448 4 4 C 4 4.552 4.448 5 5 5 L 7 5 L 17 5 L 19 5 C 19.552 5 20 4.552 20 4 C 20 3.448 19.552 3 19 3 L 15 3 L 14 2 L 10 2 z M 5 7 L 5 20 C 5 21.105 5.895 22 7 22 L 17 22 C 18.105 22 19 21.105 19 20 L 19 7 L 5 7 z">
                </path>
            </svg>
           </button>
          </li>
         ))}
      </ul>
    </main>
  );
}

