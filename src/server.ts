import { buildApp } from "./app"

const start = async () => {
    const app = buildApp()

    try {
        await app.listen({port: 3000})
    } catch (e) {
        app.log.error(e)
        process.exit(1)
    }
}

start()