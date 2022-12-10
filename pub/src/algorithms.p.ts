import * as pt from "pareto-core-types"

import { TAnnotatedToken } from "./types.p"

export type ITokenConsumer<PAnnotation> = {
    readonly "onToken": pt.Procedure<TAnnotatedToken<PAnnotation>>
    readonly "onEnd": pt.Procedure<PAnnotation>
}
