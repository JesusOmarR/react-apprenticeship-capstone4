import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import HomePage from '../HomePage'

describe('Testing Home Page ', () => {
  it('Render Home Page', () => {
    render(<HomePage />)
  })

  it('shows the product page when the button is clicked', () => {
    render(<HomePage />)
    const showProducts = screen.getByRole('showProducts')
    fireEvent.click(showProducts)
    screen.getByText('This is the products page')
  })
})
