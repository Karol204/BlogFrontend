import React, { Component } from "react";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import HomeView from "../src/Views/HomeView/HomeVIew";
import ArticlesView from "../src/Views/ArticlesView/ArticlesView";
import AboutView from "../src/Views/AboutView/AboutView";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

class App extends Component {
  state = {
    posts: [],
  };

  // componentDidMount() {
  //   this.getPosts();
  // }

  // getPosts() {
  //   axios
  //     .get("http://127.0.0.1:8000/api/")
  //     .then((res) => {
  //       this.setState({ posts: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeView />} />
          <Route path="/my-blog" element={<ArticlesView />} />
          <Route path="/about" element={<AboutView />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
