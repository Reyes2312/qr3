// App.js
import React from "react";
import './App.css';
import PDF from './components/pdf/Pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';
import QRE from './components/qr'; // Importa QRE

function App() {
  return (
    <div className="App">
      <PDFDownloadLink document={<PDF />} fileName="MiBoleto.pdf">
        {({ loading }) =>
          loading ? (
            <button>Loading document...</button>
          ) : (
            <button>Download now!</button>
          )
        }
      </PDFDownloadLink>
      <QRE /> {/* Usa el componente QRE */}
    </div>
  );
}

export default App;
