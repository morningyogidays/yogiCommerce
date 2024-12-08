import React from 'react';
import ExpandMoreIcon from '@/assets/icons/expand_more.svg';

const Sorter = () => {
    return (
        <div className="flex items-center gap-5">
            <p className='font-xs-regular'>Sort by</p>
            <div className="flex items-center gap-3 border border-[#D9D9D9] w-[180px] py-2 px-4">
                <p className='font-xs-regular'>Price : High - Low</p>
                <img src={ExpandMoreIcon.src} alt="Expand more" className="w-2 h-2" /> 
            </div>
        </div>
    );
};

export default Sorter;
