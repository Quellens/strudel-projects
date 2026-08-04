setCps(120 / 60 / 4)

// prettier-ignore
window.kb = await midikeys('MPK mini Play mk3 MIDI 1')

// prettier-ignore
await import('https://cdn.jsdelivr.net/gh/Quellens/strudel-projects@main/scripts/glossing.js')

$: kb().s("piano:4").clip(1)

$: s("white*4").clip(0.1).postgain(0.5)
