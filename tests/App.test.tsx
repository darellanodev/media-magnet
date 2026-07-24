import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import React from 'react'

describe('App component', () => {
  it('renders the section headings', () => {
    render(<App />)
    expect(screen.getByText('Media type')).toBeInTheDocument()
    expect(screen.getByText('Quality')).toBeInTheDocument()
    expect(screen.getByText('Options')).toBeInTheDocument()
    expect(screen.getByText('URL')).toBeInTheDocument()
    expect(screen.getByText('Output')).toBeInTheDocument()
  })

  it('renders the media type chips', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Video' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Audio' })).toBeInTheDocument()
  })

  it('renders the single and playlist process options in titlebar', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'single' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'playlist' })).toBeInTheDocument()
  })
})
