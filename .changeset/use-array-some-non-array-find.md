---
"@biomejs/biome": patch
---

Fixed [#12630](https://github.com/biomejs/biome/issues/12630): [`useArraySome`](https://biomejs.dev/linter/rules/use-array-some/) no longer reports `.find()` and similar calls when type information shows the method doesn't take a callback, such as a user-defined `registry.find(id)`.
