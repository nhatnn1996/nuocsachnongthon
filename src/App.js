import React, { createContext, useState } from "react";
import Search from "./components/search";
import WarterBill from "./components/water-bill";
import "antd/dist/antd.css";
import "./App.css";

export const WarterBillCtx = createContext();

function App() {
  const [store, setStore] = useState({});
  return (
    <div className="App">
      <WarterBillCtx.Provider value={{ store, setStore }}>
        <header className="App-header">Ứng dụng tra cứu tiền nước</header>
        <main className="Main">
          <Search />
          <WarterBill />
        </main>
      </WarterBillCtx.Provider>
    </div>
  );
}

export default App;
