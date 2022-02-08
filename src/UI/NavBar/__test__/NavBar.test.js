import React from 'react'
import { screen, render } from '@testing-library/react'
import NavBar from '../NavBar'

describe('Testing NavBar component', () => {
  it('Render NavBar component', () => {
    render(<NavBar />)
  })

  it('display logo', () => {
    render(<NavBar />)

    const Logo = screen.getAllByText('WizeStore')[0]
    expect(Logo).toBeInTheDocument()
  })
})
