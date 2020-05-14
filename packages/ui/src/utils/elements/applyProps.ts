export function applyProps<E extends HTMLElement>(
  element: E,
  properties: {[K in keyof Partial<E>]: E[K]},
) {
  for (let key in properties) {
    element[key] = properties[key]
  }
  return element
}
