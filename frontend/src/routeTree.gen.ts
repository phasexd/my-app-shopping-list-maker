/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ItemsImport } from './routes/items'
import { Route as CreateItemImport } from './routes/create-item'
import { Route as CreateCategoryImport } from './routes/create-category'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const ItemsRoute = ItemsImport.update({
  path: '/items',
  getParentRoute: () => rootRoute,
} as any)

const CreateItemRoute = CreateItemImport.update({
  path: '/create-item',
  getParentRoute: () => rootRoute,
} as any)

const CreateCategoryRoute = CreateCategoryImport.update({
  path: '/create-category',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/create-category': {
      id: '/create-category'
      path: '/create-category'
      fullPath: '/create-category'
      preLoaderRoute: typeof CreateCategoryImport
      parentRoute: typeof rootRoute
    }
    '/create-item': {
      id: '/create-item'
      path: '/create-item'
      fullPath: '/create-item'
      preLoaderRoute: typeof CreateItemImport
      parentRoute: typeof rootRoute
    }
    '/items': {
      id: '/items'
      path: '/items'
      fullPath: '/items'
      preLoaderRoute: typeof ItemsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  CreateCategoryRoute,
  CreateItemRoute,
  ItemsRoute,
})

/* prettier-ignore-end */
