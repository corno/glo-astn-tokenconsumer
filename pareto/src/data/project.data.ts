import * as pr from 'pareto-core-raw'

import * as mproject from "lib-pareto-typescript-project/dist/submodules/project"

const d = pr.wrapRawDictionary

import { $ as glossary } from "./glossary.data"

export const $: mproject.TProject = {
    'name': "glo-pareto-common",

    'author': "Corno",
    'description': "common types and functions for Pareto",
    'license': "ISC",

    'pubdependencies': d({}),
    'type': ['glossary', {
        'glossary': glossary
    }],
}