import { Breadcrumb, Layout } from 'antd'
import { Route, Switch, Link } from 'react-router-dom'
import routes from 'routes'
import { pathToRegexp } from 'path-to-regexp'
import { Route as IRoute } from 'types'

const { Content } = Layout

const queryAncestors = (routeList: IRoute[], currentRoute: IRoute) => {
  const res = [currentRoute]
  const hashMap = new Map()
  routeList.forEach((route) => hashMap.set(route.id, route))

  const getPath = (current: IRoute) => {
    const currentParentId = hashMap.get(current.id).breadcrumbParentId
    if (currentParentId) {
      res.push(hashMap.get(currentParentId))
      getPath(hashMap.get(currentParentId))
    }
  }

  getPath(currentRoute)
  return res
}

function AppContent() {
  const appRoutes = routes.filter((route) => route.path)

  const currentRoute = appRoutes.find(
    (route) =>
      route.path && pathToRegexp(route.path).exec(window.location.pathname)
  )

  const paths = currentRoute
    ? queryAncestors(appRoutes, currentRoute).reverse()
    : [appRoutes[0], { id: '404', name: 'Not Found' }]

  return (
    <div className="p-4 overflow-auto">
      <Breadcrumb className="mb-4" separator=">">
        {paths.map((path, index) => (
          <Breadcrumb.Item key={path.id}>
            {index === paths.length - 1 ? (
              <>
                {path.icon && (
                  <span className="mr-1">
                    <path.icon />
                  </span>
                )}
                <span>{path.name}</span>
              </>
            ) : (
              <Link to={path.path}>
                {path.icon && (
                  <span className="mr-1">
                    <path.icon />
                  </span>
                )}
                <span>{path.name}</span>
              </Link>
            )}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>

      <Content className="bg-white min-h-screen">
        <Switch>
          {appRoutes.map((route) => (
            <Route
              key={route.id}
              exact
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>
      </Content>
    </div>
  )
}

export default AppContent
