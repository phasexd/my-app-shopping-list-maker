import {Hono} from 'hono';
import {logger} from 'hono/logger'
import { itemsRoutes } from './Routes/items';
import { serveStatic } from 'hono/bun'
const app = new Hono()

app.use('*', logger())


app.route("/api/items",itemsRoutes)

app.get('*', serveStatic({ root: './frontend.dist'}))
app.get('*', serveStatic({ path: './frontend.dist/index.html' }))
// app.get('/', (c) => c.text('You can access: /static/hello.txt'))

export default app

