// PDF.js
import React, { useState, useEffect } from "react";
import { Document, Page, Text, StyleSheet, Image } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { db, setDoc, doc } from '../../firebaseConfig'; // Ajusta la ruta según tu estructura

const PDF = () => {
  const [qrDataURL, setQRDataURL] = useState("");

  useEffect(() => {
    const uniqueId = `qr_${Date.now()}`; // Generar un ID único basado en el timestamp

    QRCode.toDataURL(uniqueId)
      .then((url) => {
        setQRDataURL(url);
        setDoc(doc(db, 'qrcodes', uniqueId), { used: false }) // Almacenar el QR en Firestore
          .then(() => {
            console.log("QR code successfully stored in Firestore");
          })
          .catch((error) => {
            console.error("Error storing QR code: ", error);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.text}>Aquí está el QR</Text>
        {qrDataURL && <Image style={styles.image} src={qrDataURL} />}
      </Page>
    </Document>
  );
};

const styles = StyleSheet.create({
  body: {
    padding: 10,
  },
  text: {
    fontSize: 12,
    marginBottom: 10,
  },
  image: {
    width: 128,
    height: 128,
  },
});

export default PDF;
