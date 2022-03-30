import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: "0 0 0 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  backgroundColor: "#F3f3f3",
  height:"100vh",
  margin:"0 0 0 0"
}
const headingStyles = {
  textAlign: "center",
  margin:0
}
const paragraphStyles = {
  margin: 0,
  textAlign: "center"
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Lua Colaborativa</title>
      <h1 style={headingStyles}>
        Welcome, to .LuaColab
      </h1>
      <p style={paragraphStyles}>
        A starter project to create simple solutions for the market with persons that love colaborate with persons.
      </p>
    </main>
  )
}

export default IndexPage
