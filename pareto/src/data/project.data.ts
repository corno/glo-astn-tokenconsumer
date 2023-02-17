import * as pd from 'pareto-core-data'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.T.Project = {
    'author': "Corno",
    'description': "the token consumer API. Allows the parser to consume from other sources than the tokenizer",
    'license': "ISC",

    'dependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}