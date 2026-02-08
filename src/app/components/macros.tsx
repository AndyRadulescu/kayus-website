'use client';
import {useTranslation} from 'react-i18next';
import {useState} from 'react';

export function Macros({macros, hideLabel, showLabel}: { macros: string, hideLabel: string, showLabel: string }) {
    const [open, setOpen] = useState(false);
    useTranslation();
    return (
        <div>
            <button onClick={() => setOpen(o => !o)} className="text-xs text-gray-500 underline">
                {open ? hideLabel : showLabel}
            </button>
            <div className={`
                overflow-hidden transition-all duration-300 ease-out
                ${open ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'}
                `}>
                <p className="text-center text-xs mt-2 px-2">{macros}</p>
            </div>
        </div>
    );
}
