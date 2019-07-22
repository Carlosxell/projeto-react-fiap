import '../node_modules/bootstrap/scss/bootstrap.scss';
import './scss/app.scss';
import React from 'react';
import Header from './components/Header/Header'

function App() {
  return (
    <div className="appFaculdade">
      <Header />

      <main className="main d-inline-flex w-100 justify-content-center align-items-center">
        <div className="main_content">Teste</div>
      </main>
    </div>
  );
}

export default App;
