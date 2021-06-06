import React,{Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';
import {map} from 'lodash'
const CRoute = (props) => {
    const {routeItem} = props
    return (
        <Suspense>
            <Switch>
                {
                    map(routeItem, route => (
                        <Route
                            key={route.key}
                            path={route.path}
                            component={route.component}
                            exact={route.exact}
                        />
                    ))
                }
            </Switch>
        </Suspense>
    );
};

export default CRoute;
