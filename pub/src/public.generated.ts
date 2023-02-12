import * as pt from 'pareto-core-types'

import { T   } from './types.generated'


export type ITokenConsumer<GPAnnotation> = {
    'onEnd': ($: T.EndAnnotation<GPAnnotation>, ) => void
    'onToken': ($: T.AnnotatedToken<GPAnnotation>, ) => void
}