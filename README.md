This glossary defines a TokenConsumer interface

it is the interface between a package that produces tokens and a package that consumes them.

The most obvious token consumer is the parser (lib-astn-parser).
The most obvious token producer is the tokenizer (lib-astn-tokenizer)

This glossary makes it possible that the parser gets its input from some other package than the tokenizer and makes it possible that the tokenizer is used by other consumers.
For example, for pretty printing, the parser is not needed.