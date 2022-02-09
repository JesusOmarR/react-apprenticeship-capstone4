import React from 'react'
import { screen, render, fireEvent } from '@testing-library/react'
import HomePage from '../HomePage'

describe('Testing Home Page ', () => {
  it('Render Home Page', () => {
    render(<HomePage />)
  })

  it('shows the product page when the button is clicked', async () => {
    render(<HomePage />)
    const showProducts = screen.getByRole('showProducts')
    fireEvent.click(showProducts)
    await new Promise((r) => setTimeout(r, 2000))
    screen.getByText('Products page')
  })
})
