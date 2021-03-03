import { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import LocalStorage from "../LocalStorage";
import PrivateRouter from "../components/PrivateRouter";

export default function renderRoutes(routers, fallback = null) {
    let user = LocalStorage.get('login')
    return (
        <Suspense fallback={fallback}>
            <Switch>
                {
                    routers.map((e, i) => {
                        let { component: RouterComponent, auth, exact, path, name } = e;

                        let children = null
                        if (e.routes) {
                            children = renderRoutes(e.routes)
                        }

                        if (auth) {
                            return <PrivateRouter key={name} exact={exact} path={path} component={(props) => <RouterComponent {...props}>{children}</RouterComponent>} />
                        }

                        if (auth === false && user) {

                            return <Route key={name} exact={exact} path={path} component={() => <Redirect to="/" />} />
                        }

                        return <Route key={name} exact={exact} path={path} component={(props) => <RouterComponent {...props}>{children}</RouterComponent>} />
                    })
                }
            </Switch>
        </Suspense>
    )
}