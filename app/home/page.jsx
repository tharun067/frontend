"use client";

import CareerMatch from '@/components/CareerMatch';
import GrowthPrediction from '@/components/GrowthPrediction';
import TrendForecast from '@/components/TrendForecast';
import { useState } from 'react';
import { motion } from 'framer-motion';

function Main() {
    const [activeForm, setActiveForm] = useState(null);

    const toggleForm = (form) => {
        setActiveForm(activeForm === form ? null : form);
    };

    return (
        <div className="p-6 justify-evenly ">
            <h1 className="text-center text-3xl mb-8">AI Career Guidance System</h1>

            <div className="space-y-4">
                <div className='m-7'>
                    <h2 className="cursor-pointer text-xl" onClick={() => toggleForm('careerMatch')}>
                        🔍 Career Match Finder
                    </h2>
                    {activeForm === 'careerMatch' && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                            <CareerMatch />
                        </motion.div>
                    )}
                </div>

                <div className='m-7'>
                    <h2 className="cursor-pointer text-xl" onClick={() => toggleForm('growthPrediction')}>
                        📈 Career Growth Predictor
                    </h2>
                    {activeForm === 'growthPrediction' && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                            <GrowthPrediction />
                        </motion.div>
                    )}
                </div>

                <div className='m-7'>
                    <h2 className="cursor-pointer text-xl" onClick={() => toggleForm('trendForecast')}>
                        🔮 Career Trend Forecaster
                    </h2>
                    {activeForm === 'trendForecast' && (
                        <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}>
                            <TrendForecast />
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
