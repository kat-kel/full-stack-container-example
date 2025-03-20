import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SingerCard } from '../../components/singers'

const API_RESPONSE = {
    "dateOfDeath": "1922-03-13",
    "id": 1,
    "maidenName": "Twitchell",
    "name": "Jane Elizabeth Kempton",
    "url": "https://en.wikipedia.org/wiki/Jenny_Twitchell_Kempton",
    "voiceType": "contralto",
    "yearsActiveEnd": "1921",
    "yearsActiveStart": "1850",
}

test('Render singer metadata card', () => {
  render(<SingerCard data={API_RESPONSE} />)
  expect(screen.getByRole('heading', { level: 1, name: 'Jane Elizabeth Kempton' })).toBeDefined()
})