import React from 'react';
import Campagne from './campagne';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";

export default function Cards() {


    return (
        <Link to="/personnage"><div className="max-w-sm rounded overflow-hidden shadow-lg">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    titre
                </div>
                <p className="text-gray-700 text-base">
                    image en fond
                </p>
            </div>
            
        </div></Link>
    )
}

