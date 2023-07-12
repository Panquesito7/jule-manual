# std::jule::build

## Globals
### `const EXT: str`
Extension (includes dot) of Jule source code files.

---

### `let mut OS: str`
Target operating system. \
Setted to current operating system by default.

---

### `let mut ARCH: str`
Target architecture. \
Setted to current architecture by default.

---

### `const API: str`
Directory name of JuleC++ API.

---

### `const STDLIB: str`
Directory name of standard library.

---

### `const ENTRY_POINT: str`
Identifier of entry point function.

---

### `const INIT_FN: str`
Identifier of initializer function.

---

### `let DIRECTIVES: [...]Directive`
List of all directives. 

---

### `let CPP_HEADER_EXTS: []str`
Valid extensions of C++ headers.

---

### `let CPP_EXTS: []str`
Valid extensions of C++ source files. 

---

### `let OBJECTIVE_CPP_EXTS: []str`
Valid extensions of Objective-C++ source files.

---

### `let ERRORS: [str:str]`
Error messages.

---

### `let DISTOS: []Os`
List of supported operating systems.

---

### `let DISTARCH: []Arch`
List of supported architectures.

---

### `let DIRECTIVE_PREFIX: str`
Prefix of directive comments.

---

### `let PATH_STDLIB: str`
Path of standard library.
::: warning
Initialized by initializer function.
:::

---

### `let PATH_EXEC: str`
Path of executable file's directory.
::: warning
Initialized by initializer function.
:::

---

### `let PATH_WD: str`
Path of working directory.
::: warning
Initialized by initializer function.
:::

---

### `let PATH_API: str`
Path of main API header file.
::: warning
Initialized by initializer function.
:::

## Functions
`fn is_pass_file_annotation(mut p: str): bool`\
Reports whether file path passes file annotation by current system.

---

`fn is_top_directive(directive: str): bool`\
Reports whether directive is top-directive.

---

`fn is_std_header_path(p: str): bool`\
Reports whether path is C++ std library path.

---

`fn is_valid_cpp_ext(p: str): bool`\
Reports whether C++ extension is valid.

---

`fn is_valid_header_ext(ext: str): bool`\
Reports whether C++ header extension is valid.

---

`fn is_jule(path: str): bool`\
Reports whether file path is Jule source code.

---

`fn errorf(key: str, args: ...any): str`\
Returns formatted error message by key and args.

---

`fn is_windows(os: str): bool`\
Reports whether os is windows.

---

`fn is_darwin(os: str): bool`\
Reports whether os is darwin.

---

`fn is_linux(os: str): bool`\
Reports whether os is linux.

---

`fn is_i386(arch: str): bool`\
Reports whether architecture is intel 386.

---

`fn is_amd64(arch: str): bool`\
Reports whether architecture is amd64.

---

`fn is_arm(arch: str): bool`\
Reports whether architecture is arm.

---

`fn is_arm64(arch: str): bool`\
Reports whether architecture is arm64.

---

`fn is_unix(os: str): bool`\
Reports whether os is unix.

---

`fn is_32bit(arch: str): bool`\
Reports whether architecture is 32-bit.

---

`fn is_64bit(arch: str): bool`\
Reports whether architecture is 64-bit.

## Structs
```
struct Log {
    kind:   LogKind
    row:    int
    column: int
    path:   str
    text:   str
}
```
Compiler log.

**Methods:**

`fn flat(self): str`\
Returns text.

`fn error(self): str`\
Returns error message text.

`fn to_str(self): str`\
Returns message form of log.

---

## Enums
`enum Directive: str`

Compiler directives.

**Fields:**
- `Cdef`
- `Typedef`
- `Derive`
- `Pass`

---

`enum Os: str`

Operating Systems for file annotation kind.

**Fields:**
- `Windows`
- `Linux`
- `Darwin`
- `Unix`

---

`enum Arch: str`

Architectures for file annotation kind.

**Fields:**
- `I386`
- `Arm`
- `Arm64`
- `Amd64`
- `Bit32`
- `Bit64`

---

`enum Derives: str`

All built-in derive defines.

**Fields:**
- `Clone`

---

`enum LogKind`

Log kinds.

**Fields:**
- `Flat`: Just text.
- `Error`: Error message.