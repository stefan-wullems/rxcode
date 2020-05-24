# margin

The editor component will be the main component of rxeditor it will allow features like code and text editing, syntax highlighting, line decorations for linting errors, and hover widgets.

## design

The editor is designed to be very flexible and minimalistic. It does not have any other responsibilities than to display. The editor exposes props like `overlay`, `decorations` and `colors` for intellisense, linting and syntax colorizing respectively.

## interface

### v1

The first version of the interface is the most simple it can be. The interface is just designed to be easy to understand and work with.

```ts
interface Overlay {
  type: 'widget' | 'select'
  [key: string]: any
}

interface Decoration {
  type: 'error' | 'warning' | 'meta'
  [key: string]: any
}

interface TextRange {
  row: Range<number> | number
  column?: Range<number> | number
}

interface Color {
  range: TextRange
  color: string
}

interface EditorProps {
  value: string
  onChange: (value: string) => void
  overlay: Overlay
  decorations: Decoration[]
  colors: Color[]
}
```


#### type context

```ts
interface Range<T> {
  start: T
  end: T
}
```

