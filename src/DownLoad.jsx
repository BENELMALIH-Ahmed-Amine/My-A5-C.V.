import React from 'react';

const DownLoad = () => {
    const downloadPDF = () => {
        window.open('http://localhost:3001/generate-pdf');
    };
    return (
        <button className='w-fit h-fit p-2 bg-amber-700 hover:bg-amber-500' onClick={downloadPDF} data-html2canvas-ignore="true">
            Download High-Quality PDF
        </button>
    );
}

export default DownLoad;