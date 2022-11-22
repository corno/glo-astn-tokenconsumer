import { TToken } from "./Token.p"

export type TAnnotatedToken<PAnnotation> = {
    readonly "token": TToken
    readonly "annotation": PAnnotation
}