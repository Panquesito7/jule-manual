# Compiler Options
Compiler options (aka arguments) let you tell your compiler a set of preferences. Accordingly, the behavior and outputs of the compiler may differ.

Arguments are indicated in their full form using two hyphens `--`. However, some arguments may have abbreviations (usually one letter), denoted by a single hyphen `-`.

Some options may require value.

## Using Options
Options are written as command-line arguments when executing the compiler. Some options are only used, but an option may have to take value. Options that receive value must see its value after it. So, after JuleC sees an option that should take a value, it evaluates the following command-line argument as the option's value.

It doesn't matter if the options are in mixed order. They can be completely at the end of the command, at the beginning, in the middle, or in a complex way. The recommended order is to write the options first and then give the compiler inputs.

\
For example:
```
$ julec -t --compiler clang .
```
The example code above means: "Hey compiler, transpile main.jule's content using the clang compiler standard." 

## Options
`-c` `--compile` \
Compiles source code. Actually this is not necessary because compiler's default option is compile.

---

`-t` `--transpile` \
Just transpile source code.

---

`--compiler` `<value>` \
Set the preferred compiler. Specify the compiler standard you will use for compilation from among the supported compilers.

Values: `gcc` `clang`

---

`-o <file>` `--out <file>` \
Write output to `<file>`.

---

`--target <target>` \
Change transpilation target. \
See more about [cross-transpilation](/compiler/cross-transpilation).

### Optimization Options

Learn more about [compiler optimizations](/compiler/compiler-optimizations).

`--opt <level>` \
Set optimization level to `<level>`.

---

`--opt-copy` \
Enable copy optimization.

---

`--opt-deadcode` \
Enable deadcode optimization.

---

`--opt-append` \
Enable special optimizations for built-in `append` function.

---

`--opt-math` \
Enable special optimizations for mathematical operations.

---

`--opt-access` \
Enable special optimizations for memory accessing.
