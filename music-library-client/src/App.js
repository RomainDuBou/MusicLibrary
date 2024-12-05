import React from 'react';
import Artists from './components/Artist';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className="App">
            <Navbar />
            <header className="App-header">
                <h1>Bibliothèque Musicale</h1>
            </header>
            <main>
                <Artists />
            </main>
        </div>
    );
}

export default App;
