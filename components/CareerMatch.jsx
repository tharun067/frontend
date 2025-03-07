"use client"

import { useState } from "react"
import axios from 'axios'

function CareerMatch() {
  const [interests, setInterests] = useState("");
  const [suggestion, setSuggestion] = useState("");


  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/career_match', {
        params: { interests }
      });
      console.log(response.data);
      setSuggestion(response.data["Career Suggestion"]);
    } catch (error) {
      console.log(error.message);
      setSuggestion("Error fetching data.")
    }
  };


  return (
    <div className="flex my-6 flex-col ">
      <h2 className="m-2">Career Match Finder</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="m-1 p-2"
          type="text"
          placeholder="Enter Your Interests(e.g.,AI,cloud)"
          value={interests}
          onChange={(e) => setInterests(e.target.value)}
          required
        />
        <button type="submit" className="btn">Find Career Match</button>
      </form>
      {suggestion && <div className="result">🔍Suggested Career: {suggestion}</div>}
    </div>
  );
}

export default CareerMatch
