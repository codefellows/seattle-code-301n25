import React, { Component } from "react";
// react-router-dom v5.3 docs here: https://v5.reactrouter.com/web/example/basic
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// At the core of every React Router application should be a router component. For web projects, react-router-dom provides <BrowserRouter> and <HashRouter> routers. The main difference between the two is the way they store the URL and communicate with your web server.
// A <BrowserRouter> uses regular URL paths. These are generally the best-looking URLs, but they require your server to be configured correctly. Specifically, your web server needs to serve the same page at all URLs that are managed client-side by React Router. Create React App supports this out of the box in development, and comes with instructions on how to configure your production server as well.
import $ from "jquery";
import "./App.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Home from "./components/Home";

class App extends Component {

  constructor(props) {
    super();
    this.state = {
      foo: "bar",
      resumeData: {},
      sharedData: {},
    };
  }

  applyPickedLanguage = (pickedLanguage, oppositeLangIconId) => {
    this.swapCurrentlyActiveLanguage(oppositeLangIconId);
    document.documentElement.lang = pickedLanguage;
    var resumePath =
      document.documentElement.lang === window.$primaryLanguage
        ? `res_primaryLanguage.json`
        : `res_secondaryLanguage.json`;
    this.loadResumeFromPath(resumePath);
  }

  swapCurrentlyActiveLanguage = (oppositeLangIconId) => {
    var pickedLangIconId =
      oppositeLangIconId === window.$primaryLanguageIconId
        ? window.$secondaryLanguageIconId
        : window.$primaryLanguageIconId;
    document
      .getElementById(oppositeLangIconId)
      .removeAttribute("filter", "brightness(40%)");
    document
      .getElementById(pickedLangIconId)
      .setAttribute("filter", "brightness(40%)");
  }

  componentDidMount = () => {
    this.loadSharedData();
    this.applyPickedLanguage(
      window.$primaryLanguage,
      window.$secondaryLanguageIconId
    );
  }

  loadResumeFromPath = (path) => {
    $.ajax({
      url: path,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  loadSharedData = () => {
    $.ajax({
      url: `portfolio_shared_data.json`,
      dataType: "json",
      cache: false,
      success: function (data) {
        this.setState({ sharedData: data });
        document.title = `${this.state.sharedData.basic_info.name}`;
      }.bind(this),
      error: function (xhr, status, err) {
        alert(err);
      },
    });
  }

  render() {
    return (
      // This site has 2 pages, all of which are rendered dynamically in the browser (not server rendered).
      // Although the page does not ever refresh, notice how
      // React Router keeps the URL up to date as you navigate
      // through the site. This preserves the browser history,
      // making sure things like the back button and bookmarks
      // work properly.
      <Router>
        {/* // To use a router, just make sure it is rendered at the root of your element hierarchy. Typically you’ll wrap your top-level <App> element in a router. */}
        <Header sharedData={this.state.sharedData.basic_info} />
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          {/* If none of the previous routes render anything,
            the "/" route acts as a fallback.
            A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
            {/* Another possible solution is to use <Route exact path="/"> (like we are doing below) which does match the entire URL. */}
          <Route exact path="/">
            {/* // You can think of this Home component as a "page" in your app. */}
            <Home
              resumeData={this.state.resumeData}
              sharedData={this.state.sharedData}
            />
          </Route>
          {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
          <Route path="/about">
            {/* // You can think of this About component as a "page" in your app. */}
            <About
              resumeBasicInfo={this.state.resumeData.basic_info}
              sharedBasicInfo={this.state.sharedData.basic_info}
            />
          </Route>
          {/* Below is an example of how to add an additional "page". You will need to do more to build out and render a Snacks component. */}
          {/* <Route path="/snacks">
            <Snacks />
          </Route> */}
        </Switch>
        <Footer 
          sharedBasicInfo={this.state.sharedData.basic_info}
          applyPickedLanguage={this.applyPickedLanguage} 
        />  
      </Router>
    );
  }
}

export default App;
