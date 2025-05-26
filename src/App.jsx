import React from "react";
import Navbar from "./pages/NavBar";
import Footer from "./pages/footer";
import Card from "./pages/card";
import CardGrid from "./pages/CardGrid";

function App() {
  return (
    <div>
      <Navbar />
      {/* Konten halaman utama */}
      <main className="p-4">
        <h1 className="text-2xl font-bold">Selamat Datang!</h1>
        <p></p>
      </main>
      <CardGrid />
      <CardGrid />
      <Footer />
    </div>
  );
}

export default App;
