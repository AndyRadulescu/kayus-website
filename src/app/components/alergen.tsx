'use client';

import React, {useState} from 'react';
import {ChevronDownIcon} from 'lucide-react';

const FullAllergenLink = ({lang = 'ro'}) => {
    const [isOpen, setIsOpen] = useState(false);

    const isRo = lang === 'ro';

    const content = {
        trigger: isRo
            ? 'Conform Regulamentului (UE) nr. 1169/2011 privind informarea consumatorilor'
            : 'In accordance with Regulation (EU) No. 1169/2011 on the provision of food information',
        disclaimer: isRo
            ? 'Preparatele noastre pot conține următorii alergeni:'
            : 'Our dishes may contain the following allergens:',
        items: isRo ? [
            'Cereale care conțin gluten (grâu, secară, orz, ovăz, speltă, kamut) și produse derivate',
            'Crustacee și produse derivate',
            'Ouă și produse derivate',
            'Pește și produse derivate',
            'Arahide și produse derivate',
            'Soia și produse derivate',
            'Lapte și produse derivate (inclusiv lactoză)',
            'Fructe cu coajă lemnoasă (migdale, alune de pădure, nuci, caju, nuci pecan, nuci de Brazilia, fistic, nuci macadamia) și produse derivate',
            'Țelină și produse derivate',
            'Muștar și produse derivate',
            'Semințe de susan și produse derivate',
            'Dioxid de sulf și sulfiți în concentrații mai mari de 10 mg/kg sau 10 mg/l',
            'Lupin și produse derivate',
            'Moluște și produse derivate'
        ] : [
            'Cereals containing gluten (wheat, rye, barley, oats, spelt, kamut) and derived products',
            'Crustaceans and derived products',
            'Eggs and derived products',
            'Fish and derived products',
            'Peanuts and derived products',
            'Soybeans and derived products',
            'Milk and derived products (including lactose)',
            'Nuts (almonds, hazelnuts, walnuts, cashews, pecan nuts, Brazil nuts, pistachios, macadamia nuts) and derived products',
            'Celery and derived products',
            'Mustard and derived products',
            'Sesame seeds and derived products',
            'Sulphur dioxide and sulphites at concentrations of more than 10 mg/kg or 10 mg/l',
            'Lupin and derived products',
            'Molluscs and derived products'
        ]
    };

    return (
        <div className="w-full max-w-2xl p-2">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-zinc-500 hover:text-zinc-300 text-xs transition-colors flex items-center gap-2 text-left">
                <span className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronDownIcon className="w-4 h-4"/>
                </span>
                <span className="underline underline-offset-2">
                  {content.trigger}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-700 ease-in-out ${
                    isOpen ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
                }`}>
                <p className="text-zinc-400 text-sm mb-4 font-medium italic">{content.disclaimer}</p>

                <div className="space-y-3 border-l border-zinc-800 pl-4">
                    {content.items.map((item, i) => (
                        <div key={i} className="flex gap-3 items-start group">
                            <span className="text-zinc-700 text-[10px] mt-1 font-mono">
                                {(i + 1).toString().padStart(2, '0')}
                            </span>
                            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullAllergenLink;
