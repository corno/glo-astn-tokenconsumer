import * as pd from 'pareto-core-data'

import {
    typeReference,
    string,
    taggedUnion,
    glossaryParameter,
    group,
    member,
    array,
    type,
    streamconsumer,
    ref,
    aInterfaceMethod,
    aInterface,
    typeParameter,
    parametrizedType,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands"

import * as g_glossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pd.d

export const $: g_glossary.T.Glossary<pd.SourceLocation> = {
    'glossary parameters': d({
    }),
    'imports': d({}),
    'root': {
        'namespaces': d({}),
        'types': d({
            "AnnotatedToken": parametrizedType({ "Annotation": null }, group({
                "token": member(ref(typeReference("Token"))),
                "annotation": member(ref(typeParameter("Annotation"))),
            })),
            "MultilineStringData": type(group({
                "lines": member(array(string())),
            })),
            "SimpleStringData": type(group({
                "wrapping": member(ref(typeReference("Wrapping"))),
                "value": member(string()),
            })),
            "StructuralTokenData": type(group({
                "type": member(ref(typeReference("StructuralTokenType"))),
            })),
            "StructuralTokenType": type(taggedUnion({
                "tagged union start": group({}),
                "open shorthand group": group({}),
                "close shorthand group": group({}),
                "open verbose group": group({}),
                "close verbose group": group({}),
                "open dictionary": group({}),
                "close dictionary": group({}),
                "open list": group({}),
                "close list": group({}),
            })),
            "Token": type(taggedUnion({
                "header start": group({}),
                "structural": ref(typeReference("StructuralTokenData")),
                "simple string": ref(typeReference("SimpleStringData")),
                "multiline string": ref(typeReference("MultilineStringData")),
            })),
            "Wrapping": type(taggedUnion({
                "quote": group({}),
                "apostrophe": group({}),
                "none": group({}),
            })),

        }),
    },
    'asynchronous': {
        'interfaces': d({
            "TokenConsumer": aInterface(streamconsumer(
                aInterfaceMethod(typeReference("AnnotatedToken", { "Annotation": typeParameter("Annotation") })),
                aInterfaceMethod(typeParameter("Annotation")), //should be a parameter ref(typeReference
            ), { "Annotation": null }),

        }),
        'algorithms': d({}),
    },
    'synchronous': {
        'interfaces': d({}),
        'algorithms': d({}),
    },
}