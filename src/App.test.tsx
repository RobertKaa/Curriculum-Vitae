import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders the resume structure without hero action links', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { level: 1, name: /stéphane bran/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Développeur frontend')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^coordonnées$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^stack$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^qualités$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^communauté$/i })).toBeInTheDocument()
    expect(screen.getByText('Devoxx France')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^mes projets$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^hobbies$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^expériences$/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /^étude$/i })).toBeInTheDocument()
    expect(screen.getByText('École 42')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /me contacter/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /^github$/i })).not.toBeInTheDocument()
    expect(screen.queryByText(/responsive par défaut/i)).not.toBeInTheDocument()
  })
})
