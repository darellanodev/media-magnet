import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from '../src/App'
import React from 'react'

describe('App component', () => {
  it('renders the section headings', () => {
    render(<App />)
    expect(screen.getByText('Format & Mode')).toBeInTheDocument()
    expect(screen.getByText('Quality & Options')).toBeInTheDocument()
    expect(screen.getByText('URL')).toBeInTheDocument()
    expect(screen.getByText('Output')).toBeInTheDocument()
  })

  it('renders the media type chips', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Video' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Audio' })).toBeInTheDocument()
  })

  it('renders single and playlist process chips in the form', () => {
    render(<App />)
    expect(screen.getByRole('button', { name: 'Single' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Playlist' })).toBeInTheDocument()
  })
})
