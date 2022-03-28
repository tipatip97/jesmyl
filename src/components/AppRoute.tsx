import React from "react";
import {
  Link,
  LinkProps,
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
  Route,
  Routes,
  RoutesProps,
} from "react-router-dom";

const prefix = "/app";

const repPathname = (pathname?: string) =>
  pathname && !pathname.startsWith(".")
    ? `${prefix}/${pathname.replace(/^\/?/, "")}`
    : pathname || "";

const repSearch = (search?: string) =>
  search ? `?${search.replace(/^\??/, "")}` : "";

const repHash = (hash?: string) => (hash ? `#${hash.replace(/^#?/, "")}` : "");

export function AppLink(
  props: LinkProps & React.RefAttributes<HTMLAnchorElement>
) {
  const toLink = props.to
    ? typeof props.to === "string"
      ? repPathname(props.to)
      : `${repPathname(props.to.pathname)}${repSearch(
          props.to.search
        )}${repHash(props.to.hash)}`
    : "";

  console.log(toLink);

  return (
    <Link {...props} to={`${toLink}`}>
      {props.children}
    </Link>
  );
}

type AppRouteProps = PathRouteProps | LayoutRouteProps | IndexRouteProps;

export type AppRoutesProps = RoutesProps & { routes: AppRouteProps[] };

export function AppRoutes(props: AppRoutesProps) {
  return (
    <Routes {...props}>
      {props.routes.map((routeProps, routePropsi) => {
        const path = (routeProps as PathRouteProps).path;
        const propsClone: AppRouteProps = Object.assign({}, routeProps);

        if (path) {
          (propsClone as PathRouteProps).path = repPathname(path);
        }

        return (
          <Route
            key={`route-key+${path || routePropsi}`}
            {...propsClone}
          ></Route>
        );
      })}
    </Routes>
  );
}
