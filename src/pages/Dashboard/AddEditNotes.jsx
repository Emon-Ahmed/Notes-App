import React, { useState } from "react";
import TagInput from "../../components/ui/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ onClose, noteData, type }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState([]);
  const [error, setError] = useState(null);

  // Add Note
  const addNewNote = async () => {};

  // Add Note
  const editNote = async () => {};

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");
    if (type === "edit") {
      editNote();
    } else {
      addNewNote();
    }
  };
  return (
    <div className="relative">
      <button
        className="absolute flex items-center justify-center w-10 h-10 rounded-full -top-3 -right-3 hover:bg-slate-50"
        onClick={onClose}
      >
        <MdClose className="text-xl text-slate-400" />
      </button>
      <div className="flex flex-col gap-2">
        <label className="input-label">Title</label>
        <input
          type="text"
          className="text-2xl outline-none text-slate-950"
          placeholder="Go To Gym At 5"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-label">CONTENT</label>
        <textarea
          type="text"
          className="p-2 text-sm rounded outline-none text-slate-90 bg-slate-50"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label className="input-label">
          <TagInput tags={tags} setTags={setTags} />
        </label>
      </div>
      {error && <p className="pt-4 text-xs text-red-500">{error}</p>}
      <button
        className="p-3 mt-5 font-medium btn-primary"
        onClick={handleAddNote}
      >
        ADD
      </button>
    </div>
  );
};

export default AddEditNotes;
