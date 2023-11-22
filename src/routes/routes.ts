import { lazy } from "react"
import { NoLazy } from "../01-lazyload/components/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route{
    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string,
}

const LazyloadComponent = lazy(/* webpackChunkName: "LazyPage1" */ () => import('../01-lazyload/layout/LazyLayout'));
const Lazy2 = lazy(/* webpackChunkName: "LazyPage2" */ () => import('../01-lazyload/components/pages/LazyPage2'));
const Lazy3 = lazy(/* webpackChunkName: "LazyPage3" */ () => import('../01-lazyload/components/pages/LazyPage3'));

export const routes: Route[] = [
    {
        to:'/lazyload/',
        path:'/lazyload/*',
        Component: LazyloadComponent,
        name:'Dashboard'
    },
    {
        to:'/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'no-lazy'
    },
]