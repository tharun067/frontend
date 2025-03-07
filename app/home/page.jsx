"use client";

import CareerMatch from "@/components/CareerMatch";
import GrowthPrediction from "@/components/GrowthPrediction";
import TrendForecast from "@/components/TrendForecast";
import { useState } from "react";
import { motion } from "framer-motion";
import ChatPage from "@/components/Chat";
import Chatbot from "@/components/Chat";

function Main() {
  const [activeForm, setActiveForm] = useState(null);

  const toggleForm = (form) => {
    setActiveForm(activeForm === form ? null : form);
  };

  return (
    <div className="flex">
      <main className=" relative flex items-center justify-end w-screen min-h-screen bg-gradient mr-40 flex-grow ">
        <div className="glassmorphism-container p-8 w-full max-w-2xl">
          <h1 className="orange_gradient text-3xl font-bold text-gray-800">AI Career Guidance</h1>
          <p className="text-gray-600 mt-2">Find your perfect career path.</p>

          <div className="space-y-5 mt-6">
            {[
              { id: "careerMatch", title: "Career Match Finder", Component: CareerMatch },
              { id: "growthPrediction", title: "Career Growth Predictor", Component: GrowthPrediction },
              { id: "trendForecast", title: "Career Trend Forecaster", Component: TrendForecast },
            ].map(({ id, title, Component }) => (
              <div key={id} className="glassmorphism-card p-5">
                <h2
                  className="cursor-pointer text-lg font-medium flex justify-between items-center hover:text-orange-600"
                  onClick={() => toggleForm(id)}
                >
                  {title}
                  <span className={`transition-transform ${activeForm === id ? "rotate-180" : "rotate-0"}`}>▼</span>
                </h2>
                {activeForm === id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-4 p-4"
                  >
                    <Component />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
      <Chatbot/>
    </div>
  );
}

export default Main;
