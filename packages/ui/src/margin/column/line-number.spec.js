import {render, screen} from '@testing-library/svelte'

import LineNumber from './line-number.svelte'

describe('The LineNumber component', () => {
  it('displays row prop directly', () => {
    render(LineNumber, {row: 1})

    expect(screen.getByText('1')).toBeInTheDocument()
  })
})
