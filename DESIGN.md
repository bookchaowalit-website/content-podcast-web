---
name: On Air
description: A broadcast notebook for finding an authored episode and reading its field note.
---

# Design System: On Air

## Overview

On Air is a local episode catalog, not an audio platform. Its visual world is the control room after the mic goes quiet: episode codes in a broadcast rail, a signal waveform as an authored mark, and a reading card for the selected conversation. The catalog-only boundary stays explicit because no audio feed is connected.

## Colors

- **Control-room ink** `#111925`: broadcast night.
- **Panel blue** `#19263a`: episode rail and reading card.
- **Paper** `#f2ecde`: primary reading text.
- **Cyan signal** `#86d3d1`: active filter, waveform, and selected reading voice.
- **Transmission red** `#e06a4e`: episode code, scan line, and status marks.
- **Signal yellow** `#efc94e`: on-air stamp and honesty label.
- **Control-room line** `#42536a`: panel rules.

Cyan communicates a live selection; red marks the broadcast machinery; yellow is reserved for the explicit signal/boundary moment.

## Typography

Geist Sans handles episode titles and the opening question. Geist Mono carries episode codes, categories, metadata, and catalog status. Georgia italic gives summaries and transcript notes a spoken, editorial register.

## Layout

The hero and tilted On Air stamp lead into an asymmetric broadcast desk: searchable/filterable episode rail on the left and selected episode card on the right. On mobile the rail precedes the card; episode controls and the reading measure remain usable without horizontal scrolling.

## Elevation & Depth

Depth is made from two blue-black panel tones, strong rules, and the bordered waveform stage. The scan line and selected episode marker provide authored motion/state without shadows, glass, or generic cards.

## Shapes

Episode rows and panels are square like studio equipment. The On Air stamp is the only rotated shape. Signal dots are circular because they reference indicator lights; category controls remain compact rectangles.

## Components

- **Episode rail:** search, category tabs, numbered rows, signal markers, and empty state.
- **Wave stage:** authored inline SVG signal with a centered transmission scan line.
- **Episode card:** code, title, summary, field note, and explicit no-audio boundary.

## Do's and Don'ts

- Do make the selected episode feel like a cue sheet opened in a control room.
- Do keep the catalog-only/no-audio boundary visible.
- Do use cyan for selection and red for broadcast notation.
- Don't add fake play buttons, subscription claims, host metrics, or a remote feed.
- Don't turn the page into a generic dark podcast card grid.
