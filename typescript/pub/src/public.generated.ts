import * as pt from 'pareto-core-types'

import { T } from './types.generated'


export namespace I {
    
    export type TokenConsumer<GAnnotation> = {
        'data': ($: T.AnnotatedToken<GAnnotation>, ) => void
        'end': ($: T.EndAnnotation<GAnnotation>, ) => void
    }
}

export namespace F {}