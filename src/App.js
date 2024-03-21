import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

const AppLayout = () => {
    return (
        <div className="app">
        <Header/>
        <Body/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        errorElement:<Error />
    },
    {
        path:'/about',
        element:<About />
    },
    {
    path:'/contact',
    element:<Contact />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router = {appRouter} /> )





























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
