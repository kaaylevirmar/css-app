import React, { useEffect, useState } from 'react';

const FlashMessage = (props) => {
    const{message, type} = props.flashMessage;
    if (!message) return null;

    const getBackgroundColor = () => {
        switch (type) {
            case 'success':
                return 'bg-green-500';
            case 'danger':
                return 'bg-red-500';
            case 'warning':
                return 'bg-yellow-500';
            default:
                return 'bg-blue-500';
        }
    };

    const getTextColor = () => {
        switch (type) {
            case 'success':
                return 'text-green-700';
            case 'danger':
                return 'text-red-700';
            case 'warning':
                return 'text-yellow-700';
            default:
                return 'text-blue-700';
        }
    };

    return (
        <div className='px-10 mt-5'>
            <div role="alert">
                <div className={`${getBackgroundColor()} text-white font-bold rounded-t px-4 py-2`}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                </div>
                <div className={`border border-t-0 rounded-b bg-${type}-100 px-4 py-3 ${getTextColor()}`}>
                    <p>{message}</p>
                </div>
            </div>
        </div>
    );
}

export default FlashMessage;