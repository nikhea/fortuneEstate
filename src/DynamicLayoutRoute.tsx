// @ts-nocheck

import { FC } from "react";
import { Routes, Route } from "react-router-dom";
import { RouteComponentProps } from "@reach/router";

import LayoutNav from "./Layout/Layout";
import LayoutNav2 from "./Layout/Layout";
interface DynamicLayoutRouteProps {
  props?: any;
  element?: any;
  layout?: any;
  path?: any;
}
interface Render {
  render: any;
}
// wrapper component
const DynamicLayoutRoute: FC<DynamicLayoutRouteProps> = (props) => {
  const { element: RoutedComponent, layout, path, ...rest } = props;

  // render actual Route from react-router
  const actualRouteComponent = (
    <Route {...rest} {(props: any) => <RoutedComponent {...props} />} />
  );

  // depends on the layout, you can wrap Route component in different layouts
  switch (layout) {
    case "NAV": {
      return <LayoutNav>{actualRouteComponent}</LayoutNav>;
    }
    case "DASH_BOARD_NAV": {
      return <LayoutNav2>{actualRouteComponent}</LayoutNav2>;
    }
    default: {
      return <LayoutNav>{actualRouteComponent}</LayoutNav>;
    }
  }
};

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;
export default DynamicLayoutRoute;
