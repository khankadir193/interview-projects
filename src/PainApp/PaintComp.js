import React from 'react';
import ReactPainter from 'react-painter';
import './PaintComp.css';
import { SketchPicker } from 'react-color';

const CustomPainter = () => {
    const handleSave = (blob) => {
        console.log('Saved image:', blob);
        // Here you can handle the saved image blob (e.g., upload it, display it, etc.)
    };

    return (
        <div className='container'>
            <SketchPicker />
            <ReactPainter
                width={1000}
                height={300}
                onSave={handleSave}
                render={({ triggerSave, canvas, imageCanDownload }) => (
                    <div className='sub-container'>
                        <h2 className='heading'>Awesome Heading</h2>
                        {imageCanDownload && (
                            <p className='errorText'>Sorry, the image that you have provided is not accessible.</p>
                        )}
                        <div className='canvasContainer'>
                            {canvas}
                        </div>
                        <button className='saveButton' type='button' title='Save' aria-label='Save' onClick={triggerSave}>
                            Save
                        </button>
                    </div>
                )}
            />
        </div>

    );
};

// const styles = {
//   container: {
//     textAlign: 'center',
//     padding: '20px',
//     backgroundColor: '#f4f4f4',
//     borderRadius: '8px',
//     boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
//   },
//   heading: {
//     fontSize: '24px',
//     marginBottom: '20px',
//     color: '#333',
//   },
//   errorText: {
//     color: 'red',
//     fontSize: '16px',
//     marginBottom: '10px',
//   },
//   canvasContainer: {
//     marginBottom: '20px',
//     border: '2px solid #ddd',
//     borderRadius: '4px',
//     overflow: 'hidden',
//   },
//   saveButton: {
//     padding: '10px 20px',
//     fontSize: '16px',
//     color: '#fff',
//     backgroundColor: '#007bff',
//     border: 'none',
//     borderRadius: '4px',
//     cursor: 'pointer',
//   },
// };

export default CustomPainter;
