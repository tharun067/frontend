"use client"

import axios from "axios";
import { useState } from "react"

function GrowthPrediction() {
    const [education, setEducation] = useState("");
    const [year, setYear] = useState("");
    const [growth, setGrowth] = useState("");


    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/predict_growth', {
                params: { education_level: education, year }
            });
            setGrowth(response.data["Predicted Growth"]);
        } catch (error) {
            console.log(error.message);
            setGrowth("Error fetching data")
        }
    }
    return (
        <div>
            <h2>Career Growth Predictor</h2>
            <form onSubmit={handleSubmit}>
                <select value={education} onChange={(e) => setEducation(e.target.value)} required>
                    <option value="">Select Education Level</option>
                    <option value="Bachelor's">Bachelor's</option>
                    <option value="Master's">Master's</option>
                    <option value="PhD">PhD</option>
                </select>
                <input
                    type="number"
                    placeholder="Enter Year (e.g., 2025)"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Predict Growth</button>
            </form>
            {growth && <div className="result">📈 Predicted Growth: {growth}%</div>}
        </div>
    );
}

export default GrowthPrediction
