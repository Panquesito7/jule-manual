# std::jule::build

## Globals
### `const EXT: str`
Extension (includes dot) of Jule source code files.

---

### `let static OS: str`
Target operating system. \
Setted to current operating system by default.

---

### `let static ARCH: str`
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

### `static DIRECTIVES: [...]Directive`
List of all directives. 

---

### `static CPP_HEADER_EXTS: [...]str`
Valid extensions of C++ headers.

---

### `static CPP_EXTS: [...]str`
Valid extensions of C++ source files. 

---

### `static OBJECTIVE_CPP_EXTS: [...]str`
Valid extensions of Objective-C++ source files.

---

### `static ERRORS: [str:str]`
Error messages.

---

### `static DISTOS: [...]Os`
List of supported operating systems.

---

### `static DISTARCH: [...]Arch`
List of supported architectures.

---

### `const DIRECTIVE_PREFIX: str`
Prefix of directive comments.

---

### `static PATH_STDLIB: str`
Path of standard library.
::: warning
Initialized by initializer function.
:::

---

### `static PATH_EXEC: str`
Path of executable file's directory.
::: warning
Initialized by initializer function.
:::

---

### `static PATH_WD: str`
Path of working directory.
::: warning
Initialized by initializer function.
:::

---

### `static PATH_API: str`
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

`fn logf(key: str, args: ...any): str`\
Returns formatted error message by fmt and args.

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
```jule
struct Log {
    kind:       LogKind
    row:        int
    column:     int
    path:       str
    text:       str
    line:       str
    suggestion: str
}
```
Compiler log.

---

## Enums
`enum Directive: str`

Compiler directives.

**Fields:**
- `Cdef`
- `Typedef`
- `Derive`
- `Pass`
- `Build`
- `Namespace`

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

---

```jule
enum LogMsg
```
Compiler log messages with formatting.

**Fields:**
- `Empty`
- `StdlibNotExist`
- `FileNotUseable`
- `FileNotJule`
- `NoEntryPoint`
- `DuplicatedIdent`
- `ExtraClosedParent`
- `ExtraClosedBrace`
- `ExtraClosedBracket`
- `WaitCloseParent`
- `WaitCloseBrace`
- `WaitCloseBracket`
- `ExpectedParentClose`
- `ExpectedBraceClose`
- `ExpectedBracketClose`
- `BodyNotExist`
- `OperatorOverflow`
- `IncompatibleTypes`
- `OperatorNotForJuleType`
- `OperatorNotForFloat`
- `OperatorNotForInt`
- `OperatorNotForUint`
- `IdentNotExist`
- `NotFnCall`
- `ArgumentOverflow`
- `FnHaveRet`
- `FnHaveParameters`
- `FnIsUnsafe`
- `RequireRetExpr`
- `VoidFnRetExpr`
- `BitShiftMustUnsigned`
- `LogicalNotBool`
- `AssignConst`
- `AssignRequireLvalue`
- `AssignTypeNotSupportValue`
- `InvalidToken`
- `InvalidSyntax`
- `InvalidType`
- `InvalidNumericRange`
- `InvalidOperator`
- `InvalidExprForUnary `
- `InvalidEscapeSeq`
- `InvalidTypeSource`
- `InvalidPragmaDirective`
- `InvalidTypeForConst`
- `InvalidValueForKey`
- `InvalidExpr`
- `InvalidCppExt`
- `InvalidLabel`
- `InvalidExprForTypeInference`
- `MissingValueForTypeInference`
- `MissingType`
- `MissingExpr`
- `MissingBlockCommentClose`
- `MissingRuneEnd`
- `MissingRet`
- `MissingStrEnd`
- `MissingMultiRet`
- `MissingMultiAssignIdents`
- `MissingUsePath`
- `MissingPragmaDirective`
- `MissingGotoLabel`
- `MissingExprFor`
- `MissingGenerics`
- `MissingReceiver`
- `MissingFnParentheses`
- `ExprNotConst`
- `NilForTypeInference`
- `VoidForTypeInference`
- `RuneEmpty`
- `RuneOverflow`
- `NotSupportsIndexing`
- `NotSupportsSlicing`
- `AlreadyConst`
- `AlreadyVariadic`
- `AlreadyReference`
- `DuplicateUseDecl`
- `IgnoreIdent`
- `OverflowMultiAssignIdents`
- `OverflowRet`
- `BreakAtOutOfValidScope`
- `ContinueAtOutOfValidScope`
- `IterWhileRequireBoolExpr`
- `IterRangeRequireEnumerableExpr`
- `MuchRangeVars`
- `IfRequireBoolExpr`
- `ElseHaveExpr`
- `VariadicParamNotLast`
- `VariadicWithNonVariadicable`
- `MoreArgsWithVariadiced`
- `TypeNotSupportsCasting`
- `TypeNotSupportsCastingTo`
- `UseAtContent`
- `UseNotFound`
- `UsedPackageHasErrors`
- `DefNotSupportPub`
- `ObjNotSupportSubFields`
- `ObjHaveNotIdent`
- `TypeNotSupportSubFields`
- `TypeHaveNotIdent`
- `DocCouldntGenerated`
- `DeclaredButNotUsed`
- `ExprNotFnCall`
- `LabelExist`
- `LabelNotExist`
- `GotoJumpsDeclarations`
- `FnNotHasParam`
- `AlreadyHasExpr`
- `ArgMustTargetToField`
- `OverflowLimits`
- `GenericsOverflow`
- `HasGenerics`
- `NotHasGenerics`
- `TypeNotSupportsGenerics`
- `DivByZero`
- `TraitHaveNotIdent`
- `NotImplTraitDef`
- `DynamicTypeAnnotationFailed`
- `FalltroughWrongUse`
- `FallthroughIntoFinalCase`
- `UnsafeBehaviorAtOutOfUnsafeScope`
- `RefMethodUsedWithNotRefInstance`
- `MethodAsAnonFn`
- `GenericedFnAsAnonFn`
- `IllegalCycleRefersItself`
- `IllegalCrossCycle`
- `AssignToNonMut`
- `AssignNonMutToMut`
- `RetWithMutTypedNonMut`
- `MutOperationOnImmut`
- `TraitHasRefParamFn`
- `EnumHaveNotField`
- `DuplicateMatchType`
- `CppLinkedVarHasExpr`
- `CppLinkedVarIsConst`
- `ConstVarNotHaveExpr`
- `RefRefsRef`
- `RefRefsPtr`
- `RefRefsArr`
- `RefRefsEnum`
- `PtrPointsRef`
- `PtrPointsEnum`
- `MissingExprForUnary`
- `InvalidOpForUnary`
- `UseDeclAtBody`
- `ArrayAutoSized`
- `NamespaceNotExist`
- `ImplBaseNotExist`
- `ImplDestNotExist`
- `StructAlreadyHaveIdent`
- `UnsafePtrIndexing`
- `MethodHasGenericWithSameIdent`
- `TupleAssignToSingle`
- `MissingCompilePath`
- `ArraySizeIsNotInt`
- `ArraySizeIsNeg`
- `BuiltinAsNonFn`
- `TypeCaseHasNotValidExpr`
- `IllegalImplOutOfPackage`
- `MethodNotInvoked`
- `DuplicatedUseSelection`
- `IdentIsNotAccessible`
- `InvalidStmtForNext`
- `ModuloWithNotInt`
- `PkgIllegalCycleRefersItself`
- `PkgIllegalCrossCycle`
- `RefersTo`
- `NoFileInEntryPackage`
- `NoMemberInEnum`
- `TypeIsNotDerives`
- `CloneNonLvalue`
- `CloneImmutStruct`
- `InternalTypeNotSupportsClone`
- `TypeNotCompatibleForDerive`
- `PassDirectiveNotStartsWithDash`
- `DeriveIllegalCycleRefersItself`
- `DeriveIllegalCrossCycle`
- `InvalidExprForBinop`
- `CppLinkedStructForRef`
- `TraitMethodHasGenerics`
- `EnumAsMapVal`
- `GlobalNotStatic`
- `StaticIsTypeInferred`
- `StaticNotHaveExpr`
- `StaticFnHasReceiver`
- `RefAssignNonVar`
- `MutRefPointsImmut`
- `RefNotInited`
- `ConstRef`
- `RefIsDangling`
- `ConcurrenctCallWithRefParam`
- `UsedRefInAnonFnFromParentScope`
- `EnumCastedFromAny`
- `UseAliasUsedForSelection`
- `DuplicatedUseAlias`
- `ExpectedIdentifier`
- `ExpectedLabelIdent`
- `ExpectedDotForCpp`
- `ExpectedDblColon`
- `EmptyParentNotValid`
- `GiveExprToCast`
- `GiveTypeForCast`
- `ExpectedExpr`
- `ExpectedAnonFn`
- `ExpectedLeftOperand`
- `ExpectedRightOperand`
- `ExpectedColon`
- `ExpectedBody`
- `MoveUseDeclToTopOfFile`
- `RenameForAvoidDuplication`
- `RemoveUseDeclAvoidDuplication`
- `RenameUseAliasAvoidDuplication`
- `RemoveUseSelectionAvoidDupliation`
- `RemoveConstToAssign`
- `UseStaticKeywordToDef`
- `RemoveFallthroughFromFinalCase`
- `MakePubToAccess`
- `ExpressionMustBeReferenceType`
- `CastToEnumTypeInsteadOfEnum`
- `TryFloatingPoint`
- `ExpectedEqualsForAssign`