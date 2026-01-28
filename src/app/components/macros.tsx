'use client';

import {useState} from 'react';

export function Macros({macros}: { macros: string }) {
    const [open, setOpen] = useState(false);


    return (
        <div>
            <button onClick={() => setOpen(o => !o)} className="text-xs text-gray-500 underline">
                {open ? 'Hide macros' : 'Show macros'}
            </button>
            <div className={`
                overflow-hidden transition-all duration-300 ease-out
                ${open ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                `}>
                <p className="text-center text-xs mt-2">{macros}</p>
            </div>
        </div>
    );
}
