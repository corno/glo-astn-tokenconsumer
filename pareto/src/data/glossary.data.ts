import * as pr from 'pareto-core-raw'

import {
    nested,
    null_,
    typeReference,
    boolean,
    string,
    number,
    types,
    taggedUnion,
    glossaryParameter,
    group,
    func,
    member,
    reference,
    array,
    method,
    type,
} from "lib-pareto-typescript-project/dist/submodules/glossary/shorthands.p"

import * as mglossary from "lib-pareto-typescript-project/dist/submodules/glossary"

const d = pr.wrapRawDictionary

export const $: mglossary.T.Glossary<string> = {
    'imports': d({}),
    'parameters': d({
        "Annotation": {},
    }),
    'types': d({
        "EndAnnotation": type(glossaryParameter("Annotation")),
        "AnnotatedToken": type(group({
            "token": member(reference("Token")),
            "annotation": member(glossaryParameter("Annotation"))
        })),
        "MultilineStringData": type(group({
            "lines": member(array(string()))
        })),
        "SimpleStringData": type(group({
            "wrapping": member(reference("Wrapping")),
            "value": member(string()),
        })),
        "StructuralTokenData": type(group({
            "type": member(reference("StructuralTokenType"))
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
            "structural": reference("StructuralTokenData"),
            "simple string": reference("SimpleStringData"),
            "multiline string": reference("MultilineStringData"),
        })),
        "Wrapping": type(taggedUnion({
            "quote": group({}),
            "apostrophe": group({}),
            "none": group({}),
        })),

    }),
    'interfaces': d({
        "TokenConsumer": ['group', {
            'members': d({
                "onToken": method(typeReference("AnnotatedToken")),
                "onEnd": method(typeReference("EndAnnotation")), //should be a parameter reference
            })
        }]
    }),
    'functions': d({
    }),
}