import * as pt from "pareto-core-types"

export type TWrapping =
    | ["quote", null]
    | ["apostrophe", null]
    | ["none", null]

export type TSimpleStringData = {
    readonly "wrapping": TWrapping
    readonly "value": string
}

export type TMultilineStringData = {
    readonly "lines": pt.Array<string>
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

export type TStructuralTokenData = {
    readonly "type": TStructuralTokenType
}

export type TToken =
    | ["header start", null]
    | ["structural", TStructuralTokenData]
    | ["simple string", TSimpleStringData]
    | ["multiline string", TMultilineStringData]
