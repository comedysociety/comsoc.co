import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ textAlign: 'center' }}>We are the Sussex Comedy Society</h1>
        <div style={{ maxWidth: '500px', margin: '0 auto' }}>
          <p>
          Comedy can take many styles over many mediums.
          Sussex Comedy Society is community to collaborate in the process - be it writing and filming sketches, performing stand up or publishing satire.</p>
          <p>We have weekly meetings where we play improv games and show ideas. Come along to just have some fun and enjoy comedy.</p>
        </div>
      </div>
    )
  }
}
