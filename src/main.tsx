import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './css/style.scss';

createRoot(document.getElementById('root')!).render(
    <App />
)
