import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Catalogue from "../containers/Catalogue/Catalogue";

import "./App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <section className="section">
          <Catalogue />
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
