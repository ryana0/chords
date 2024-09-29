const semitones = ['c', 'c#','d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b']
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
    for (i = 0, i < bars; i++;) {
        num = Math.floor(Math.random() * 8)
        if(progression.indexOf(num)) {
            // left off trying to make the rng not make the same numbers in the same progression
        }
    }
    return progression
}

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

    }
}

const dprogression = chordProgression(4)
for (i = 0; i < 4; i++) {
    console.log(new chord(3, dprogression[i], minInt, 5, majScale))
}