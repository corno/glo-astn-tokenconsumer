import { TAnnotatedToken } from "../types/AnnotatedToken.p"

export type ITokenConsumer<PAnnotation> = {
    readonly "onToken": ($: TAnnotatedToken<PAnnotation>) => void
    readonly "onEnd": ($: PAnnotation) => void
}
