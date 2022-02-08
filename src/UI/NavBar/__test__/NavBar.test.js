import React from 'react'
import { screen, render } from '@testing-library/react'
import NavBar from '../NavBar'

describe('Testing NavBar component', () => {
  it('Render NavBar component', () => {
    render(<NavBar />)
  })

  it('display logo', () => {
    render(<NavBar />)

    const Logo = screen.getByText('WizeTore')
    expect(Logo).toBeInTheDocument()
  })
})
