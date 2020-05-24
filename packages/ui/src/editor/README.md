# margin

The editor component will be the main component of rxeditor it will allow features like code and text editing, syntax highlighting, line decorations for linting errors, and hover widgets.

## design

The editor is designed to be very flexible and minimalistic. It does not have any other responsibilities than to display. The editor exposes props like `overlay`, `decorations` and `colors` for intellisense, linting and syntax colorizing respectively.

## interface

Since the editor is implemented in Svelte, the interface of the editor are its props and the context it handles. I decided to only handle props because context seems unneccesary. The editor is not a delegating component (meaning it passes props directly to its children to let them do the calculation) and we don't expect to have many editors next to eachother which should all share state.  

```ts
interface Overlay {
  type: 'widget' | 'select'
  [key: string]: any
}

interface Decoration {
  type: 'error' | 'warning' | 'meta',
  [key: string]: any
}

interface Range<T> {
  start: T
  end: T
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


