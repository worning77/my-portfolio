import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faAutoprefixer } from "@fortawesome/free-brands-svg-icons";
import { faFileUser, faChevronLeft } from "@fortawesome/pro-regular-svg-icons";
import { faEnvelope, faPlayCircle } from "@fortawesome/free-regular-svg-icons";
import { faPaw, faWrench, faCog } from "@fortawesome/free-solid-svg-icons";

library.add(
  faFileUser,
  faEnvelope,
  fab,
  faPaw,
  faWrench,
  faCog,
  faChevronLeft,
  faPlayCircle
);

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: "description", content: data.site.siteMetadata.description },
        { name: "keywords", content: data.site.siteMetadata.keywords }
      ]}
    />

    {children()}
  </div>
);
if (typeof document !== `undefined`) {
  document.getElementsByTagName("body")[0].style.zoom = 0.85;
}
Layout.propTypes = {
  children: PropTypes.func
};

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
