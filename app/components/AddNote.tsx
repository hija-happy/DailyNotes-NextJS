"use client";

import { useState } from "react";

import React from 'react'

export default function AddNote({
    onAdd,
}: {
    onAdd: (note: string) => void;
}) {

    const [note, setNote] = useState("");

    function handleAdd() {
        const trimmed = note.trim();
        if(!trimmed) return;
        onAdd(trimmed);
        setNote("");
    }

  return (
    <div className="mt-4 gap-4 flex just">
        <input
        
        value={note}
        onChange={(e) =>setNote(e.target.value)}
        placeholder="Type your note..."
        className="border rounded px-3 py-2 flex-1"
        />

        <button
            onClick={handleAdd}
            className=" border-white rounded px-6 py-2 bg-white text-black font-bold hover:bg-gray-400 transition text-2xl"
        >
            Add
        </button>


    </div>
  )
}
