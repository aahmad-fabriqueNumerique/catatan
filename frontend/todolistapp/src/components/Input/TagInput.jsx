import React, { useState } from "react";
import { MdAdd, MdClose } from "react-icons/md";

const TagInput = ({ tags, setTags }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addNewTag = () => {
    if (inputValue.trim() !== "") {
      setTags([...tags, inputValue.trim()]);
      setInputValue("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNewTag();
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div>
      

      <div className="flex items-center gap-4 mt-4">
        <input
          type="text"
          value={inputValue}
          className="text-sm bg-transparent border px-3 py-2 rounded outline-none"
          placeholder="Add a tag"
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={addNewTag}
          className="w-8 h-8 flex items-center justify-center bg-slate-400 hover:bg-slate-600 rounded "
        >
          <MdAdd className="text-xl text-slate-500 hover:text-slate-200" />
        </button>
      </div>


      {tags?.length > 0 && (
        <div className="flex items-center gap-2 flex-wrap mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="flex items-center gap-2 text-slate-600 bg-slate-200 px-2 py-1 rounded"
            >
              #{tag}
              <button
                onClick={() => handleRemoveTag(tag)}
                className="ml-2 text-slate-500 hover:text-slate-700"
              >
                <MdClose />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TagInput;
