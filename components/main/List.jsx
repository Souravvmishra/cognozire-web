'use client'
import React, { useState, useEffect } from 'react';


const ListComponent = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 3000);

        return () => clearTimeout(timer);
    }, [currentIndex, items]);

    return (
        <div className="flex flex-col items-center justify-start">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`absolute transition-all duration-300 transform ${index === currentIndex ? 'opacity-100 translate-y-0   ' : 'opacity-0 -translate-y-4'
                        }`}
                    style={{ marginTop: '1rem' }}
                >
                    <span className="text-3xl font-semibold">{item}</span>
                </div>
            ))}
        </div>
    );
};

export default ListComponent;