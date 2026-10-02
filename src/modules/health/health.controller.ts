import {getHealth} from './health.service'

export const healthController = async () => {
    return getHealth()
}