import React from "react"
import PropTypes from "prop-types"
import Link from "gatsby-link"
import Helmet from "react-helmet"
import Logo from '../components/Logo';

import "../css/typography.css"

export default class Template extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <div>
        <Helmet
          title="Sussex Comedy Society"
          meta={[
            { name: "description", content: "The Sussex Comedy Society" },
          ]}
        />
        <div
          style={{
            background: '#50E3C2',
            marginBottom: `1.45rem`,
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 960,
              padding: `1.45rem 1.0875rem`,
            }}
          >
            <Logo />
          </div>
        </div>
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {this.props.children()}
        </div>
      </div>
    )
  }
}
