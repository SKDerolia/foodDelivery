import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";






const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)





























// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child 1" }, [
//     React.createElement("h1", {}, "Namaste React"),
//     React.createElement("h2", {}, "This is an h2 nested tag child 1"),
//   ]),
//   React.createElement("div", { id: "child 2" }, [
//     React.createElement("h1", {}, "This is an h1 nested tag in child 2"),
//     React.createElement("h2", {}, "This is an h2 nested tag in child 2"),
//   ]),
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "This is an h1 nested tag")
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello word from ReactJS"
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(heading); // this is an object (react element)
// root.render(heading);
