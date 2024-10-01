const semitones = ['C', 'C#','D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
const majInt = [0, 4, 7, 11, 14, 17, 21]
const minInt = [0, 3, 7, 10, 14, 17, 21]

const minScale = [0,2,1,2,2,1,2,2]
const majScale = [0,2,2,1,2,2,1,2]



function randomNote() {
    const rand = Math.floor(Math.random() * 12)
    return ([semitones[rand], rand])
}

function chordProgression(bars) {
    progression = []
    const randThing = [6,5,4,3,2,1]
    for (let i = 0; i < bars; i++) {
        num = Math.floor(Math.random() * randThing.length)
        progression.push(randThing[num])
        randThing.splice(num, 1)
    }
    return progression
}

const chords = document.getElementById('chords')
class chord {
    constructor(root, interval, type, max, scaleType) {
        this.root = root
        this.type = type
        this.max = max
        this.interval = interval

        this.chordRoot = root

        this.chord = [[],[]]

        for(let j = 0; j < this.interval; j++) {
            this.chordRoot = this.chordRoot + scaleType[j]
        }

        for(let i = 0; i < this.max; i++) {
            let note = this.type[i] + this.chordRoot
            if(note < 12) {
                this.chord[0].push(note)
            } else {
                this.chord[1].push(note)
            }
        }
    }

    generate() {
        const chord = document.createElement('div')
        chord.classList.add('chord')

        const notes = []

        for(let i = 0; i < 24; i++) {
           let octave = 4
           let realNoteName = ''
           const newIterator = i + this.root
            if(newIterator <= 11) {
                realNoteName = semitones[i + this.root] + octave
            } else if (newIterator > 11 && newIterator <= 23) {
                const newOctave = octave + 1
                realNoteName = semitones[i-12 + this.root] + newOctave.toString()
                console.log(i-12 + this.root)
            } else if (newIterator > 23 && newIterator < 36) {
                const newOctave = octave + 2
                realNoteName = semitones[i-24 + this.root] + newOctave.toString()
            }
            notes.push(realNoteName)
            console.log(realNoteName, newIterator, i-12 + this.root)
        }

        notes.reverse()

        notes.forEach((noteInQuestion) => {

            const noteName = document.createElement('h1')
            noteName.classList.add('noteName')
            const noteNameSpan = document.createElement('span')
            noteName.appendChild(noteNameSpan)

            noteNameSpan.textContent = noteInQuestion

            chord.appendChild(noteName)

            // const newNotes = notes
            // // newNotes.reverse()

            const note = document.createElement('div')
            note.classList.add('note')

            const allChordNotes = this.chord[0].concat(this.chord[1])
            for (let i = 0; i < allChordNotes.length; i++) {
                if ((Math.abs(notes.indexOf(noteInQuestion) - 23)) == allChordNotes[i]) {
                    note.classList.add('on')
                }
            }

            chord.appendChild(note)
        })
        chords.appendChild(chord)
    }
}

const newChords = chordProgression(4)

for(let i = 0; i < 4; i++) {
    new chord(5, newChords[i], minInt, 5, minScale).generate()
}