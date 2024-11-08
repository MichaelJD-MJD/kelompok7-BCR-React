/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const UpdateCarLazyImport = createFileRoute('/update-car')()
const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const AddCarLazyImport = createFileRoute('/add-car')()
const IndexLazyImport = createFileRoute('/')()
const ManufacturesIndexLazyImport = createFileRoute('/manufactures/')()

// Create/Update Routes

const UpdateCarLazyRoute = UpdateCarLazyImport.update({
  id: '/update-car',
  path: '/update-car',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/update-car.lazy').then((d) => d.Route))

const RegisterLazyRoute = RegisterLazyImport.update({
  id: '/register',
  path: '/register',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/register.lazy').then((d) => d.Route))

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route))

const AddCarLazyRoute = AddCarLazyImport.update({
  id: '/add-car',
  path: '/add-car',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/add-car.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

const ManufacturesIndexLazyRoute = ManufacturesIndexLazyImport.update({
  id: '/manufactures/',
  path: '/manufactures/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/manufactures/index.lazy').then((d) => d.Route),
)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/add-car': {
      id: '/add-car'
      path: '/add-car'
      fullPath: '/add-car'
      preLoaderRoute: typeof AddCarLazyImport
      parentRoute: typeof rootRoute
    }
    '/login': {
      id: '/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LoginLazyImport
      parentRoute: typeof rootRoute
    }
    '/register': {
      id: '/register'
      path: '/register'
      fullPath: '/register'
      preLoaderRoute: typeof RegisterLazyImport
      parentRoute: typeof rootRoute
    }
    '/update-car': {
      id: '/update-car'
      path: '/update-car'
      fullPath: '/update-car'
      preLoaderRoute: typeof UpdateCarLazyImport
      parentRoute: typeof rootRoute
    }
    '/manufactures/': {
      id: '/manufactures/'
      path: '/manufactures'
      fullPath: '/manufactures'
      preLoaderRoute: typeof ManufacturesIndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/add-car': typeof AddCarLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/add-car': typeof AddCarLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/manufactures': typeof ManufacturesIndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/add-car': typeof AddCarLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/manufactures/': typeof ManufacturesIndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/update-car'
    | '/manufactures'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/update-car'
    | '/manufactures'
  id:
    | '__root__'
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/update-car'
    | '/manufactures/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AddCarLazyRoute: typeof AddCarLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  UpdateCarLazyRoute: typeof UpdateCarLazyRoute
  ManufacturesIndexLazyRoute: typeof ManufacturesIndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AddCarLazyRoute: AddCarLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  UpdateCarLazyRoute: UpdateCarLazyRoute,
  ManufacturesIndexLazyRoute: ManufacturesIndexLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.jsx",
      "children": [
        "/",
        "/add-car",
        "/login",
        "/register",
        "/update-car",
        "/manufactures/"
      ]
    },
    "/": {
      "filePath": "index.lazy.jsx"
    },
    "/add-car": {
      "filePath": "add-car.lazy.jsx"
    },
    "/login": {
      "filePath": "login.lazy.jsx"
    },
    "/register": {
      "filePath": "register.lazy.jsx"
    },
    "/update-car": {
      "filePath": "update-car.lazy.jsx"
    },
    "/manufactures/": {
      "filePath": "manufactures/index.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
