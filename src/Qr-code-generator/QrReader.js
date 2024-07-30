import React, { useState, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { saveAs } from 'file-saver';

const QrGenerator = ({
    upiID,
    amount,
    name,
    note,
    size = 256,
    fgColor = "#000000",
    bgColor = "#FFFFFF",
    filename = "qrcode.png"
}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        if (upiID) {
            setIsLoading(false);
        } else {
            setIsError(true);
        }
    }, [upiID]);

    const upiUrl = `upi://pay?pa=${upiID}&pn=${encodeURIComponent(name || '')}&am=${amount || ''}&tn=${encodeURIComponent(note || '')}`;

    const downloadQRCode = () => {
        const svg = document.getElementById("qr-code-svg");
        if (svg) {
            const svgData = new XMLSerializer().serializeToString(svg);
            const svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
            saveAs(svgBlob, filename);
        }
    };

    if (isError) {
        return <p>Error: No UPI ID provided for QR code generation.</p>;
    }

    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: size, width: "100%" }}>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <QRCode
                        id="qr-code-svg"
                        size={size}
                        value={upiUrl}
                        fgColor={fgColor}
                        bgColor={bgColor}
                    />
                    <button onClick={downloadQRCode}>Download QR Code</button>
                </>
            )}
        </div>
    );
};

export default QrGenerator;
