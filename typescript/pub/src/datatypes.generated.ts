import * as pt from 'pareto-core-types'


export namespace N {}

export namespace T {
    
    export namespace AnnotatedToken {
        
        export type annotation<TAnnotation> = TAnnotation
        
        export type token<TAnnotation> = T.Token
    }
    
    export type AnnotatedToken<TAnnotation> = {
        readonly 'annotation': TAnnotation
        readonly 'token': T.Token
    }
    
    export namespace MultilineStringData {
        
        export namespace lines {
            
            export type A = string
        }
        
        export type lines = pt.Array<string>
    }
    
    export type MultilineStringData = {
        readonly 'lines': pt.Array<string>
    }
    
    export namespace SimpleStringData {
        
        export type value = string
        
        export type wrapping = T.Wrapping
    }
    
    export type SimpleStringData = {
        readonly 'value': string
        readonly 'wrapping': T.Wrapping
    }
    
    export namespace StructuralTokenData {
        
        export type _ltype = T.StructuralTokenType
    }
    
    export type StructuralTokenData = {
        readonly 'type': T.StructuralTokenType
    }
    
    export namespace StructuralTokenType {
        
        export namespace close__dictionary {}
        
        export type close__dictionary = null
        
        export namespace close__list {}
        
        export type close__list = null
        
        export namespace close__shorthand__group {}
        
        export type close__shorthand__group = null
        
        export namespace close__verbose__group {}
        
        export type close__verbose__group = null
        
        export namespace open__dictionary {}
        
        export type open__dictionary = null
        
        export namespace open__list {}
        
        export type open__list = null
        
        export namespace open__shorthand__group {}
        
        export type open__shorthand__group = null
        
        export namespace open__verbose__group {}
        
        export type open__verbose__group = null
        
        export namespace tagged__union__start {}
        
        export type tagged__union__start = null
    }
    
    export type StructuralTokenType = 
        | ['close dictionary', null]
        | ['close list', null]
        | ['close shorthand group', null]
        | ['close verbose group', null]
        | ['open dictionary', null]
        | ['open list', null]
        | ['open shorthand group', null]
        | ['open verbose group', null]
        | ['tagged union start', null]
    
    export namespace Token {
        
        export namespace header__start {}
        
        export type header__start = null
        
        export type multiline__string = T.MultilineStringData
        
        export type simple__string = T.SimpleStringData
        
        export type structural = T.StructuralTokenData
    }
    
    export type Token = 
        | ['header start', null]
        | ['multiline string', T.MultilineStringData]
        | ['simple string', T.SimpleStringData]
        | ['structural', T.StructuralTokenData]
    
    export namespace Wrapping {
        
        export namespace apostrophe {}
        
        export type apostrophe = null
        
        export namespace none {}
        
        export type none = null
        
        export namespace quote {}
        
        export type quote = null
    }
    
    export type Wrapping = 
        | ['apostrophe', null]
        | ['none', null]
        | ['quote', null]
}