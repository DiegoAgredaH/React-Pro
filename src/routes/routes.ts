import { LazyExoticComponent, lazy } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";
// import { LazyPage1, LazyPage2, LazyPage3 } from "../01-lazyload/pages";

type JXSComponent = () => JSX.Element;

interface Route {
    to:string;
    path:string;
    Component: LazyExoticComponent<JXSComponent> | JXSComponent;
    name:string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: "LazyLayout"*/'../01-lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
        to: '/lazyload/', // el * sirve para especificar que en este path se manejara todas las urls que tengan '/lazyload/cualquiercosa'
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'Lazy Layout'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No lazy'
    },
]