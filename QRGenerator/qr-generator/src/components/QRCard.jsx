import React from 'react'
import QRCode from "react-qr-code"
import './QRCard.css'

const QRCard = ({ value }) => {
    return (
            <QRCode id="qrCard"
                size={256}
                value={value}
                viewBox={`0 0 256 256`}
            />
    )
}

export default QRCard