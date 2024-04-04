import {
    initializeFaro as coreInit,
    getWebInstrumentations,
} from '@grafana/faro-web-sdk'

import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import { environment } from '../environments/environment.development';

export function initializeFaro() {
    const faro = coreInit({
        url: environment.apiUrl,
        instrumentations: [
            ...getWebInstrumentations({
                captureConsole: true
            }),
            new TracingInstrumentation()
        ],
        app: {
            name: environment.appname,
            version: '1.0.0',
            environment: 'production'
        },
    })
    console.log('from initializeFaro')
    faro.api.pushLog(['Faro was initialized'])
    console.log(environment.production);

    return faro
}