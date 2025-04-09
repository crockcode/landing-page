import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { WaitlistProvider } from './context/WaitlistContext'

export const metadata: Metadata = {
  title: 'Prove Your Ideas | Idea Validation Course',
  description: 'Our comprehensive course teaches you how to validate your ideas before investing significant time and resources. Turn concepts into proven products.',
  icons: {
    icon: [
      {
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjMGYxNzJhIi8+PHBhdGggZD0iTTExIDIzVjlIMTdDMTkuNjI2NyA5IDIxLjU4MzMgOS44NiAyMi44OCAxMS41OEMyNC4xOTMzIDEzLjI4MzMgMjQuODUgMTUuNTQgMjQuODUgMTguMzVDMjQuODUgMjEuMTI2NyAyNC4xOTMzIDIzLjM4MzMgMjIuODggMjUuMTJDMjEuNTgzMyAyNi44NTY3IDE5LjYyNjcgMjcuNzI1IDE3IDI3LjcyNUgxMVYyM1pNMTUuMTUgMjMuOEgxN0MxOC4xMjY3IDIzLjggMTkuMDMzMyAyMy4zNDY3IDE5LjcyIDIyLjQ0QzIwLjQwNjcgMjEuNTE2NyAyMC43NSAyMC4xNTY3IDIwLjc1IDE4LjM2QzIwLjc1IDE2LjU4IDIwLjQwNjcgMTUuMjI2NyAxOS43MiAxNC4zQzE5LjAzMzMgMTMuMzczMyAxOC4xMjY3IDEyLjkxIDE3IDEyLjkxSDE1LjE1VjIzLjhaIiBmaWxsPSIjMWU0MGFmIi8+PC9zdmc+',
        type: 'image/svg+xml',
      }
    ]
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <WaitlistProvider>
          {children}
        </WaitlistProvider>
      </body>
    </html>
  )
} 