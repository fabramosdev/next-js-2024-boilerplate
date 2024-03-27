import { render, screen } from '@testing-library/react'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    // render component
    const { container } = render(<Main />)
    // find element and verify if the element exists
    expect(screen.getByRole('heading', { name: /react avançado/i})).toBeInTheDocument()
    // generate snapshot
    expect(container.firstChild).toMatchSnapshot()
  })
})
