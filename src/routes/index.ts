import React from "react";
import { Home } from "../pages/Home";
import { CurrenciesList } from "../pages/CurrenciesList";

export interface IRoute {
  path: string;
  element: React.ComponentType;
}

export enum RouteNames {
  HOME = "/",
  CURRENCIES = "/currencies-list"
}

export const routes = [
  { path: RouteNames.HOME, element: Home },
  { path: RouteNames.CURRENCIES, element: CurrenciesList }
];
