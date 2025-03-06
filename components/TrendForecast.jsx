"use client"

import axios from "axios";
import { useState } from "react"

function TrendForecast() {
    const [periods, setPeriods] = useState("");
    const [forecast, setForecast] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/forecast_trends', {
                params: { periods }
            });
            setForecast(response.data["Career Trends"]);
        } catch (error) {
            console.log(error.message);
            setForecast([]);
        }
    }
    return (
        <div>
            <h2>Career Trend Forecaster</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Forecast Years (e.g., 5)"
                    value={periods}
                    onChange={(e) => setPeriods(e.target.value)}
                    required
                />
                <button type="submit" className="btn">Get Forecast</button>
                {forecast.length > 0 && (
                    <div className="result">
                        <h3>🔮 Forecast Data:</h3>
                        {forecast.map((entry, index) => (
                            <p key={index}>{entry.ds}:{entry.yhat.toFixed(2)}%</p>
                        ))}
                    </div>
                )}
            </form>
        </div>
    );
}

export default TrendForecast
