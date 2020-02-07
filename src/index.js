import React from "react"
import ReactDOM from "react-dom"

// 拡張子はいらない
// import Element from "./Element"
import App from "./App"

// ReactDOM.render(<h1>Hello world</h1>,
//     document.getElementById("root")
// )

// const Element = () => {
//     return (
//         <h1>こんにちは</h1>
//     )
// }

// const App = () => {
//     return (
//         <>
//             <Element />
//             <Element />
//         </>
//     )
// }

ReactDOM.render(<App />,
    document.getElementById("root")
)