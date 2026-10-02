import Fastify from 'fastify'
import { healthRoutes } from './modules/health/health.routes'

export const buildApp = () =>{
    const app = Fastify({
    logger: true,
})

app.register(healthRoutes)


return app
}

