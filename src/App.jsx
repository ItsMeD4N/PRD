import React from "react";
import Navbar from "./pages/NavBar";
import Footer from "./pages/footer";
import Card from "./pages/card";
import logoItb from "./assets/itb.png";
import { TypeAnimation } from "react-type-animation";

function App() {
  return (
    <div>
      <main className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex flex-1 flex-col items-center justify-center text-center gap-6">
          <TypeAnimation
            sequence={["Selamat datang di Lost & Found", 5000]}
            speed={50}
            wrapper="h1"
            className="text-3xl md:text-4xl font-bold mb-2"
            repeat={1}
          />
          <img
            src={logoItb}
            alt="Logo ITB"
            className="w-64 h-64 object-contain mx-auto mb-4"
          />
          <h2 className="text-xl md:text-2xl font-medium mb-6">
            ITB Jatinangor
          </h2>
          <h1>11/100</h1>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
