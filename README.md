# Wordle Infinite

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=000)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=fff)](https://www.typescriptlang.org/)
[![Ionic](https://img.shields.io/badge/Ionic-8-3880FF?logo=ionic&logoColor=fff)](https://ionicframework.com/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=fff)](https://vitejs.dev/)
[![Capacitor](https://img.shields.io/badge/Capacitor-8-119EFF?logo=capacitor&logoColor=fff)](https://capacitorjs.com/)

A Wordle clone built with Ionic React, TypeScript, Vite, and Capacitor. The app lets you play an infinite number of rounds, keeps win/loss stats, and includes settings and statistics screens.

## Features

- Persisted stats and settings with Capacitor Preferences
- Settings for theme and animation speed
- Statistics view with wins, win rate, average guesses, losses, and streaks
- Ionic mobile UI with Capacitor Android support

## Tech Stack

- React 19
- TypeScript
- Ionic React
- Vite
- Capacitor 8

## Getting Started

Install dependencies first:

```bash
npm install
```

Run ionic

```bash
ionic serve
```

For android

```bash
npm run build
npx cap run android
```

## Notes

- IOS/PWA not tested.
- Some starter-template branding still remains
