import React from "react";
import PropTypes from "prop-types";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import styles from "./bread-crumbs.module.scss";
import { getRoutes } from "pages/routes";

export const BreadCrumbs = ({ changeMatchedRoutes }) => {
  const location = useLocation();
  let routeMatches = matchRoutes(
    getRoutes(true),
    location
  ).filter((matchedRoute) => (matchedRoute.route.name ? true : false));

  if (changeMatchedRoutes) {
    routeMatches = changeMatchedRoutes(routeMatches);
  }

  return (
    <nav className={styles.breadCrumbsNavigation}>
      <ol className={styles.breadCrumbsNavigationList}>
        {routeMatches.map((matchedRoute, index, array) => {
          const { path, name } = matchedRoute.route;
          return (
            <li className={styles.breadCrumbsNavigationListItem} key={index}>
              {array.length - 1 !== index ? (
                <Link to={path} className={styles.breadCrumbsNavigationLinks}>
                  {name}
                </Link>
              ) : (
                <span className={styles.breadCrumbsNavigationText}>{name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

BreadCrumbs.propTypes = {
  changeMatchedRoutes: PropTypes.func,
};
