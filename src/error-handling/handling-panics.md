# Handling Panics
There is a builtin function that allows you to catch panics and keep your program running. The buil-in `recover` function once used, it catches panics of ongoing codes. It just catch panics the codes of the scope it is in. It just catch panics of the codes of the scope it is in.

For example:
```jule
fn may_panic() {
    panic("a problem")
}

fn main() {
    may_panic()
}
```
The example code above will panic. To be recovered it must be editing using the `recover` function.

For example:
```jule
fn may_panic() {
    panic("a problem")
}

fn main() {
    recover(fn(e: Error) {
        outln(e.error())
    })
    may_panic()
}
```
Since the `recover` function is used, the panic of the `may_panic` function will be recovered. If the `recover` function had been used after `may_panic` was called, the `recover` function would not have recover the panic as it captures the codes that came after it was used.

---

You can use a function as recover handler.

For example:
```jule
fn handler(e: Error) {
    // ...
}

fn main() {
    recover(handler)
    // ...
}
```

## Return Statements with Recover Calls

You can catch panics with the built-in `recover` function in a returning function. However, when there is any panic and the `recover` function catches it, the function call returns its default values.

For example:

```jule
fn test(): int {
    recover(fn(e: Error) {
        outln("Panic Catched!")
    })

    panic("test")
    ret 10
}

fn main() {
    outln(test())
}
```

In the above example, the function returns the default value of the `int` data type, so `0`.
