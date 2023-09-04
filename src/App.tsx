import { ChangeEvent, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { State } from "./redux/store";
import "./App.css";

function App() {
  const addTag = useSelector<State, string>((state) => state.addTag);
  const tags = useSelector<State, string[]>((state) => state.tags);
  const dispatch = useDispatch();

  const handleChange = (event: any) => {
    dispatch({ type: "CHANGE_INPUT", payload: event.target.value });
  };

  function handleTag(event: any) {
    dispatch({ type: "ADD_TAG" });
  }

  function deleteTag(index: number) {
    dispatch({ type: "DELETE_TAG", payload: index });
  }

  return (
    <div id="App">
      <div className="input-field">
        <input
          type="text"
          placeholder="placeholder"
          onChange={handleChange}
          value={addTag}
        />
        <button
          className="addTag-btn"
          disabled={addTag.length === 0}
          onClick={handleTag}
        >
          Add tag
        </button>
      </div>

      <div>
        {tags.map((tag, index) => {
          return (
            <button className="tag-btn" onClick={() => deleteTag(index)}>
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
