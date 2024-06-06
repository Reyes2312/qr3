// qr.js
import React, { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { db, getDoc, setDoc, doc } from '../firebaseConfig'; // Ajusta la ruta según tu estructura

export const QRE = () => {
  const [qrValue, setQrValue] = useState('');

  useEffect(() => {
    const uniqueId = `qr_${Date.now()}`; // Generar un valor único para el QR
    setQrValue(uniqueId);
  }, []);

  const verifyQR = async () => {
    try {
      const qrDocRef = doc(db, 'qrcodes', qrValue);
      const qrDoc = await getDoc(qrDocRef);

      if (qrDoc.exists() && qrDoc.data().used) {
        alert('This QR code is no longer valid.');
      } else {
        await setDoc(qrDocRef, { used: true }, { merge: true });
        alert('QR code is valid and marked as used.');
      }
    } catch (error) {
      console.error("Error verifying QR code: ", error);
    }
  };

  return (
    <div>
      <QRCode value={qrValue} />
      <button onClick={verifyQR}>Verify QR Code</button>
    </div>
  );
};

export default QRE;
