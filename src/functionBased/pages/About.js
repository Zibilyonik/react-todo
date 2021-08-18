import React from "react"
import { useRouteMatch, Link, Route } from "react-router-dom"
import SinglePage from "./SinglePage"

const About = props => {
  const { url, path } = useRouteMatch()
  console.log(useRouteMatch())
  return (
    <div>
      <ul>
        <li><Link to={`${url}/about-app`}>About App</Link></li>
        <li><Link to={`${url}/about-author`}>About Author</Link></li>
      </ul>
      <Route path={`${path}/:slug`}>
        <SinglePage />
      </Route>
    </div>
  )
}
export default About