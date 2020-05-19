import {render, screen} from '@testing-library/svelte'

import LineNumber from '../../column/line-number.svelte'

describe('The LineNumber component', () => {
  it('displays row prop directly', () => {
    render(LineNumber, {props: {row: 42}})

    expect(screen.getByText('42')).toBeInTheDocument()
  })
})
