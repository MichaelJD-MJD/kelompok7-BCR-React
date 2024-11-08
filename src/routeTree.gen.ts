/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TypesRoutesTypesItemImport } from './routes/types-routes/TypesItem'

// Create Virtual Routes

const UpdateCarLazyImport = createFileRoute('/update-car')()
const TypesLazyImport = createFileRoute('/types')()
const RegisterLazyImport = createFileRoute('/register')()
const LoginLazyImport = createFileRoute('/login')()
const AddCarLazyImport = createFileRoute('/add-car')()
const IndexLazyImport = createFileRoute('/')()
const TypesRoutesCreateLazyImport = createFileRoute('/types-routes/create')()
const TypesRoutesIdLazyImport = createFileRoute('/types-routes/$id')()
const TypesRoutesEditIdLazyImport = createFileRoute('/types-routes/edit/$id')()

// Create/Update Routes

const UpdateCarLazyRoute = UpdateCarLazyImport.update({
  id: '/update-car',
  path: '/update-car',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/update-car.lazy').then((d) => d.Route))

const TypesLazyRoute = TypesLazyImport.update({
  id: '/types',
  path: '/types',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/types.lazy').then((d) => d.Route))

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

const TypesRoutesCreateLazyRoute = TypesRoutesCreateLazyImport.update({
  id: '/types-routes/create',
  path: '/types-routes/create',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/create.lazy').then((d) => d.Route),
)

const TypesRoutesIdLazyRoute = TypesRoutesIdLazyImport.update({
  id: '/types-routes/$id',
  path: '/types-routes/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/$id.lazy').then((d) => d.Route),
)

const TypesRoutesTypesItemRoute = TypesRoutesTypesItemImport.update({
  id: '/types-routes/TypesItem',
  path: '/types-routes/TypesItem',
  getParentRoute: () => rootRoute,
} as any)

const TypesRoutesEditIdLazyRoute = TypesRoutesEditIdLazyImport.update({
  id: '/types-routes/edit/$id',
  path: '/types-routes/edit/$id',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/types-routes/edit/$id.lazy').then((d) => d.Route),
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
    '/types': {
      id: '/types'
      path: '/types'
      fullPath: '/types'
      preLoaderRoute: typeof TypesLazyImport
      parentRoute: typeof rootRoute
    }
    '/update-car': {
      id: '/update-car'
      path: '/update-car'
      fullPath: '/update-car'
      preLoaderRoute: typeof UpdateCarLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/TypesItem': {
      id: '/types-routes/TypesItem'
      path: '/types-routes/TypesItem'
      fullPath: '/types-routes/TypesItem'
      preLoaderRoute: typeof TypesRoutesTypesItemImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/$id': {
      id: '/types-routes/$id'
      path: '/types-routes/$id'
      fullPath: '/types-routes/$id'
      preLoaderRoute: typeof TypesRoutesIdLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/create': {
      id: '/types-routes/create'
      path: '/types-routes/create'
      fullPath: '/types-routes/create'
      preLoaderRoute: typeof TypesRoutesCreateLazyImport
      parentRoute: typeof rootRoute
    }
    '/types-routes/edit/$id': {
      id: '/types-routes/edit/$id'
      path: '/types-routes/edit/$id'
      fullPath: '/types-routes/edit/$id'
      preLoaderRoute: typeof TypesRoutesEditIdLazyImport
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
  '/types': typeof TypesLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/types-routes/TypesItem': typeof TypesRoutesTypesItemRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/add-car': typeof AddCarLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/types': typeof TypesLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/types-routes/TypesItem': typeof TypesRoutesTypesItemRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/add-car': typeof AddCarLazyRoute
  '/login': typeof LoginLazyRoute
  '/register': typeof RegisterLazyRoute
  '/types': typeof TypesLazyRoute
  '/update-car': typeof UpdateCarLazyRoute
  '/types-routes/TypesItem': typeof TypesRoutesTypesItemRoute
  '/types-routes/$id': typeof TypesRoutesIdLazyRoute
  '/types-routes/create': typeof TypesRoutesCreateLazyRoute
  '/types-routes/edit/$id': typeof TypesRoutesEditIdLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/types'
    | '/update-car'
    | '/types-routes/TypesItem'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/types-routes/edit/$id'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/types'
    | '/update-car'
    | '/types-routes/TypesItem'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/types-routes/edit/$id'
  id:
    | '__root__'
    | '/'
    | '/add-car'
    | '/login'
    | '/register'
    | '/types'
    | '/update-car'
    | '/types-routes/TypesItem'
    | '/types-routes/$id'
    | '/types-routes/create'
    | '/types-routes/edit/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AddCarLazyRoute: typeof AddCarLazyRoute
  LoginLazyRoute: typeof LoginLazyRoute
  RegisterLazyRoute: typeof RegisterLazyRoute
  TypesLazyRoute: typeof TypesLazyRoute
  UpdateCarLazyRoute: typeof UpdateCarLazyRoute
  TypesRoutesTypesItemRoute: typeof TypesRoutesTypesItemRoute
  TypesRoutesIdLazyRoute: typeof TypesRoutesIdLazyRoute
  TypesRoutesCreateLazyRoute: typeof TypesRoutesCreateLazyRoute
  TypesRoutesEditIdLazyRoute: typeof TypesRoutesEditIdLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AddCarLazyRoute: AddCarLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  RegisterLazyRoute: RegisterLazyRoute,
  TypesLazyRoute: TypesLazyRoute,
  UpdateCarLazyRoute: UpdateCarLazyRoute,
  TypesRoutesTypesItemRoute: TypesRoutesTypesItemRoute,
  TypesRoutesIdLazyRoute: TypesRoutesIdLazyRoute,
  TypesRoutesCreateLazyRoute: TypesRoutesCreateLazyRoute,
  TypesRoutesEditIdLazyRoute: TypesRoutesEditIdLazyRoute,
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
        "/types",
        "/update-car",
        "/types-routes/TypesItem",
        "/types-routes/$id",
        "/types-routes/create",
        "/types-routes/edit/$id"
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
    "/types": {
      "filePath": "types.lazy.jsx"
    },
    "/update-car": {
      "filePath": "update-car.lazy.jsx"
    },
    "/types-routes/TypesItem": {
      "filePath": "types-routes/TypesItem.jsx"
    },
    "/types-routes/$id": {
      "filePath": "types-routes/$id.lazy.jsx"
    },
    "/types-routes/create": {
      "filePath": "types-routes/create.lazy.jsx"
    },
    "/types-routes/edit/$id": {
      "filePath": "types-routes/edit/$id.lazy.jsx"
    }
  }
}
ROUTE_MANIFEST_END */
