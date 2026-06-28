import React from 'react';
// We import the NEW library here instead of html2canvas
import * as htmlToImage from 'html-to-image';
import jsPDF from 'jspdf';

const Download = () => {
    const downloadPDF = () => {
        //    Getting the id of the content
        const toPDF = document.querySelector('#toPDF');
        if (!toPDF) {
            alert('Content not found!');
            return;
        }

        // convert the HTML into image
        htmlToImage.toJpeg(toPDF, {
            filter: (node) => {
                // If the node has the attribute 'data-html2canvas-ignore', skip it
                return !node.dataset?.html2canvasIgnore;
            },
            quality: 1,          // Max quality
            pixelRatio: 2,       // High resolution (Retina)
        })
            .then((dataUrl) => {
                // Get the element's exact pixel dimensions
                const imgWidth = toPDF.scrollWidth;   // 795px
                const imgHeight = toPDF.scrollHeight; // 1125px

                // Convert pixels to PDF points
                const pdfWidth = imgWidth * 0.75;  
                const pdfHeight = imgHeight * 0.75; 

                // Create PDF with matching dimensions
                const pdf = new jsPDF({
                    orientation: 'portrait',
                    unit: 'pt', // Use points as unit
                    format: [pdfWidth, pdfHeight], // Custom page size
                });

                // Add the image with exact dimensions
                pdf.addImage(dataUrl, 'JPEG', 0, 0, pdfWidth, pdfHeight);

                // Save it
                pdf.save('my-page.pdf');
            })
            .catch((error) => {
                console.error('PDF generation error:', error);
                alert('Failed to generate PDF. Check console for details.');
            });
    };

    return (
        <button className='w-fit h-fit p-2 bg-amber-700 hover:bg-amber-500' onClick={downloadPDF} data-html2canvas-ignore="true">
            Download High-Quality PDF
        </button>
    );
};

export default Download;