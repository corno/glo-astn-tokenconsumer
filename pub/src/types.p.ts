import * as pt from "pareto-core-types"

export type TAnnotatedToken<PAnnotation> = {
    readonly "token": TToken
    readonly "annotation": PAnnotation
}

export type TMultilineStringData = {
    readonly "lines": pt.Array<string>
}

export type TSimpleStringData = {
    readonly "wrapping": TWrapping
    readonly "value": string
}

export type TStructuralTokenData = {
    readonly "type": TStructuralTokenType
}

export type TStructuralTokenType =
    | ["tagged union start", null]
    | ["open shorthand group", null]
    | ["close shorthand group", null]
    | ["open verbose group", null]
    | ["close verbose group", null]
    | ["open dictionary", null]
    | ["close dictionary", null]
    | ["open list", null]
    | ["close list", null]

export type TToken =
    | ["header start", null]
    | ["structural", TStructuralTokenData]
    | ["simple string", TSimpleStringData]
    | ["multiline string", TMultilineStringData]

export type TWrapping =
    | ["quote", null]
    | ["apostrophe", null]
    | ["none", null]
