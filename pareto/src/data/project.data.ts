import * as pd from 'pareto-core-data'

import * as g_project from "lib-pareto-typescript-project/dist/submodules/project"

const d = pd.d

import { $ as glossary } from "./glossary.data"

export const $: g_project.T.Project<pd.SourceLocation> = {
    'author': "Corno",
    'description': "the token consumer API. Allows the parser to consume from other sources than the tokenizer",
    'license': "TBD",

    'dependencies': d({}),
    'type': ['glossary', {
        'root': glossary,
        'imports': d({}),
    }],
}