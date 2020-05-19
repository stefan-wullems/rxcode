import {render, screen} from '@testing-library/svelte'

import MarginTestFixtures from './margin.fixtures.svelte'

describe('The Margin component', () => {
  it('creates an instance of the columns in each row', () => {
    render(MarginTestFixtures, {props: {test: 'columns'}})

    expect(screen.queryByTestId('column-1')).toBeInTheDocument()
    expect(screen.queryByTestId('column-2')).toBeInTheDocument()
  })

  it('renders the amount of rows specified in the props', () => {
    render(MarginTestFixtures, {props: {test: 'rows'}})

    expect(screen.queryAllByTestId('column')).toHaveLength(30)
  })

  it('passes the row number to the columns', () => {
    render(MarginTestFixtures, {props: {test: 'row-number'}})

    const rows = 30

    for (let row = 1; row <= rows; row++) {
      expect(screen.getByText(`this is row ${row}`)).toBeInTheDocument()
    }
  })
})
