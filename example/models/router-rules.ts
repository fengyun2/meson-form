import { IRouteRule } from "@jimengio/ruled-router";

export const routerRules: IRouteRule[] = [
  {
    path: "home",
  },
  { path: "auto-save" },
  { path: "modal" },
  { path: "draft" },
  { path: "drawer" },
  { path: "select" },
  { path: "validation" },
  { path: "custom" },
  { path: "", name: "home" },
];
