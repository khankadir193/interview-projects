import React from 'react';
import QRCode from 'react-qr-code';

const QrGenerator = ({value}) => {
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 256, width: "100%" }}>
            <QRCode
                size={256}
                style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                value={value}
            />
        </div>
    );
}

export default QrGenerator;