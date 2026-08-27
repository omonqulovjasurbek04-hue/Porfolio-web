import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

// Tailwind + global styles
// Eski css/input.css dagi :root variable lar va Tailwind utility lari React da ham ishlashi uchun
import '../css/input.css';

// Agar src/index.css ishlatmoqchi bo'lsangiz, quyidagi qatorni yoqing:
// import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
