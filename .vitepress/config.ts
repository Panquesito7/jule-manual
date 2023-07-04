import { defineConfig } from 'vitepress'

export default defineConfig({
  srcDir: 'src',
  title: 'Jule Manual',
  base: '/manual/',
  description: 'Documentations of the Jule Programming Language.',
  head: [
    [
      'link',
      { rel: 'icon', type: 'image/x-icon', href: '/jule_icon.svg' }
    ],
  ],
  themeConfig: {
    logo: '/jule_icon.svg',

    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Manual', link: '/' },
      { text: 'Standart Library', link: '/standart-library/' },
    ],
    
    sidebar: {
      '/': [
        {
          items: [
            { text: 'The Jule Programming Language', link: '/' },
            { text: 'Foreword', link: '/foreword' },
            { text: 'Introduction', link: '/introduction' },
          ],
        },
        {
          text: 'Getting Started',
          link: '/getting-started/',
          items: [
            { text: 'Downloads', link: '/getting-started/downloads' },
            { text: 'Install from Source', link: '/getting-started/install-from-source' },
          ],
        },
        {
          text: 'Compiler',
          link: '/compiler/',
          items: [
            { text: 'Platform Support', link: '/compiler/platform-support' },
            { text: 'Directives', link: '/compiler/directives' },
            { text: 'Deriving', link: '/compiler/deriving' },
            { text: 'Basic Commands', link: '/compiler/basic-commands' },
            { text: 'Compiler Options', link: '/compiler/compiler-options' },
            { text: 'Compiling', link: '/compiler/compiling' },
          ],
        },
        {
          text: 'Project',
          link: '/project/',
          items: [
            { text: 'Directory Order', link: '/project/directory-order' },
            { text: 'Naming', link: '/project/naming' },
            { text: 'Declarations', link: '/project/declarations' },
            { text: 'Cycles', link: '/project/cycles' },
          ],
        },
        {
          text: 'Basics',
          link: '/basics/',
          items: [
            { text: 'Comments', link: '/basics/comments' },
            { text: 'Reserved Functions', link: '/basics/reserved-functions' },
            { text: 'Data Types', link: '/basics/data-types' },
            { text: 'Operators', link: '/basics/operators' },
            { text: 'Attributes', link: '/basics/attributes' },
            { text: 'Statements', link: '/basics/statements' },
            { text: 'Blocks', link: '/basics/blocks' },
          ],
        },
        {
          text: 'Common Concepts',
          link: '/common-concepts/',
          items: [
            { text: 'Variables', link: '/common-concepts/variables' },
            { text: 'Functions', link: '/common-concepts/functions' },
            { text: 'Arrays', link: '/common-concepts/arrays' },
            { text: 'Slices', link: '/common-concepts/slices' },
            { text: 'Maps', link: '/common-concepts/maps' },
            { text: 'Control Flow', link: '/common-concepts/control-flow' },
            { text: 'Enums', link: '/common-concepts/enums' },
            { text: 'Structures', link: '/common-concepts/structures' },
          ],
        },
        {
          text: 'Traits',
          link: '/traits/',
          items: [
            { text: 'Implementing', link: '/traits/implementing' },
          ],
        },
        {
          text: 'Memory',
          link: '/memory/',
          items: [
            { text: 'Immutability', link: '/memory/immutability' },
            { text: 'Pointers', link: '/memory/pointers' },
            { text: 'Memory Management', link: '/memory/memory-management' },
          ],
        },
        { text: 'Unsafe Jule', link: '/unsafe-jule/index.md', items: [] },
        {
          text: 'Error Handling',
          link: '/error-handling/',
          items: [
            { text: 'Error Coding', link: '/error-handling/error-coding' },
            { text: 'Error Trait', link: '/error-handling/error-trait' },
            { text: 'Panics', link: '/error-handling/panics' },
            { text: 'Handling Panics', link: '/error-handling/handling-panics' },
          ],
        },
        {
          text: 'Types',
          link: '/types/',
          items: [
            { text: 'Aliasing', link: '/types/aliasing' },
            { text: 'Casting', link: '/types/casting' },
            { text: 'Generics', link: '/types/generics' },
            { text: 'str', link: '/types/str' },
            { text: 'Arrays', link: '/types/arrays' },
            { text: 'Slices', link: '/types/slices' },
            { text: 'Maps', link: '/types/maps' },
          ],
        },
        {
          text: 'Type Statics',
          link: '/type-statics/',
          items: [
            { text: 'i8', link: '/type-statics/i8' },
            { text: 'i16', link: '/type-statics/i16' },
            { text: 'i32', link: '/type-statics/i32' },
            { text: 'i64', link: '/type-statics/i64' },
            { text: 'u8', link: '/type-statics/u8' },
            { text: 'u16', link: '/type-statics/u16' },
            { text: 'u32', link: '/type-statics/u32' },
            { text: 'u64', link: '/type-statics/u64' },
            { text: 'f32', link: '/type-statics/f32' },
            { text: 'f64', link: '/type-statics/f64' },
            { text: 'int', link: '/type-statics/int' },
            { text: 'uint', link: '/type-statics/uint' },
          ],
        },
        {
          text: 'CPP',
          link: '/cpp/',
          items: [
            { text: 'API', link: '/cpp/api' },
            { text: 'Interoperability', link: '/cpp/interoperability' },
          ],
        },
        {
          text: 'Packages',
          link: '/packages/',
          items: [
            { text: 'Using Packages', link: '/packages/using-packages' },
            { text: 'Exporting Definitions', link: '/packages/exporting-definitions' },
            { text: '3rd Party Packages', link: '/packages/3rd-party-packages' },
          ],
        },
        {
          items: [
            { text: 'Standart Library', link: '/standart-library/' },
            { text: 'End', link: '/end' },
          ]
        },
      ],
      
      '/standart-library/': [
        {
          text: 'Standart Library',
          link: '/standart-library/',
          items: [
            { text: 'builtin', link: '/standart-library/builtin' },
            { text: 'std::conv', link: '/standart-library/std-conv' },
            { 
              text: 'std::debug', 
              link: '/standart-library/std-debug', 
              items: [
                { text: 'std::debug::assert', link: '/standart-library/std-debug-assert' }
              ] 
            },
            { text: 'std::errors', link: '/standart-library/std-errors' },
            { 
              text: 'std::fs', 
              link: '/standart-library/std-fs', 
              items: [
                { text: 'std::fs::path', link: '/standart-library/std-fs-path' }
              ] 
            },
            { text: 'std::io', link: '/standart-library/std-io' },
            { 
              text: 'std::jule', 
              link: '/standart-library/std-jule',
              items: [
                { text: 'std::jule::ast', link: '/standart-library/std-jule-ast' },
                { text: 'std::jule::build', link: '/standart-library/std-jule-build' },
                {
                  text: 'std::jule::constant',
                  link: '/standart-library/std-jule-constant',
                  items: [
                    { text: 'std::jule::constant::lit', link: '/standart-library/std-jule-constant-lit' }
                  ]
                },
                { text: 'std::jule::lex', link: '/standart-library/std-jule-lex' },
                { text: 'std::jule::parser', link: '/standart-library/std-jule-parser' },
                { text: 'std::jule::sema', link: '/standart-library/std-jule-sema' },
                { text: 'std::jule::types', link: '/standart-library/std-jule-types' },
              ]
            },
            { 
              text: 'std::math', 
              link: '/standart-library/std-math',
              items: [
                { text: 'std::math::bits', link:'/standart-library/std-math-bits' }
              ]
            },
            { 
              text: 'std::mem', 
              link: '/standart-library/std-mem',
              items: [
                { text: 'std::mem::c', link:'/standart-library/std-mem-c' }
              ]
            },
            { text: 'std::os', link: '/standart-library/std-os' },
            { text: 'std::reflect', link: '/standart-library/std-reflect' },
            { text: 'std::runtime', link: '/standart-library/std-runtime' },
            { 
              text: 'std::sync', 
              link: '/standart-library/std-sync',
              items: [
                { text: 'std::sync::atomic', link:'/standart-library/std-sync-atomic' }
              ]
            },
            { text: 'std::sys', link: '/standart-library/std-sys' },
            { 
              text: 'std::unicode', 
              link: '/standart-library/std-mem',
              items: [
                { text: 'std::unicode::utf16', link:'/standart-library/std-unicode-utf16' },
                { text: 'std::unicode::utf8', link:'/standart-library/std-unicode-utf8' },
              ]
            },
            { text: 'std::vector', link: '/standart-library/std-vector' },
          ],
        },
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/julelang/manual' }
    ]
  }
})