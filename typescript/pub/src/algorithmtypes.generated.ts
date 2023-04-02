import * as pt from 'pareto-core-types'

import { T } from "./datatypes.generated"


export namespace ASYNC {
    
    export namespace I {
        
        export type TokenConsumer<TAnnotation> = {
            'data': ($: T.AnnotatedToken<TAnnotation>, ) => void
            'end': ($: TAnnotation, ) => void
        }
    }
    
    export namespace A {}
}

export namespace SYNC {}