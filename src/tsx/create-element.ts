export const createElement = <K extends Tags>(
  tagOrFn: K | ElmFn<K> | Ctor<ElmByTag<K>>,
  attrs: Partial<ElmByTag<K>> = {},
  ...nodes: Node[]
) => {
  let component: ElmByTag<K>

  if (typeof tagOrFn === 'string') {
    component = document.createElement(tagOrFn)
  } else {
    try {
      component = new (tagOrFn as Ctor<ElmByTag<K>>)(attrs)
    } catch {
      component = (tagOrFn as ElmFn<K>)(attrs)
    }
  }

  component.append(
    ...nodes.flatMap((node) =>
      typeof node === 'string' ? new Text(node) : node
    )
  )

  for (const [attr, value] of Object.entries(attrs ?? {})) {
    if (attr.startsWith('data-')) {
      component.dataset[attr.replace(/data-/, '')] = value
    }
  }

  return Object.assign(component, attrs)
}
