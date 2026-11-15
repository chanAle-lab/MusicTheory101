/**
 * MusicTheory101 - Worksheets & Practice Paper Generator for Teachers & Parents
 * Aligned with ABRSM Grade 1 Music Theory Syllabus:
 * 1. Notes on the Stave (Treble Clef, Bass Clef, Middle C, Note Drawing, Clef Identification)
 * 2. Time Values & Note Durations (Semibreve, Minim, Crotchet, Quaver, Semiquaver)
 * 3. Time Signatures & Bar-Lines (2/4, 3/4, 4/4, Adding Bar-Lines, Completing Bars)
 * 4. Rests, Ties & Dotted Notes (Rest Values, Dotted Minims, Tied Durations)
 * 5. Comprehensive Grade 1 Revision Tests & Procedural Practice Paper Generator
 */

class WorksheetsEngine {
  constructor() {
    this.currentGrade = 1;
    this.currentTopic = 'notes'; // 'notes', 'values', 'signatures', 'rests', 'revision', 'generator'
    this.showAnswers = false;
    this.paperVariantSeed = 101;
    this.curatedWorksheets = this.initCuratedWorksheets();
    this.activeWorksheet = null;
  }

  init() {
    this.activeWorksheet = this.curatedWorksheets['notes-g1'];
    this.render();
  }

  // --- CURATED WORKSHEETS LIBRARY ---
  initCuratedWorksheets() {
    return {
      'notes-g1': {
        id: 'notes-g1',
        grade: 1,
        topic: 'notes',
        title: 'Grade 1: Notes on the Stave',
        subtitle: 'Treble Clef, Bass Clef, Middle C & Note Naming Practice',
        description: 'Comprehensive stave exercises covering lines, spaces, clef identification, note drawing, and matching for beginner students.',
        badge: 'Photo Syllabus Match',
        exercises: [
          {
            type: 'stave-reference',
            title: '1. Stave & Clef Reference Guide',
            instruction: 'A musical stave has 5 lines and 4 spaces. Middle C sits on a short ledger line between the clefs.',
            data: {
              showGuide: true
            }
          },
          {
            type: 'note-naming',
            title: '2. Name the Notes (Treble Clef)',
            instruction: 'Write the letter name (A, B, C, D, E, F, or G) under each note on the blank line provided.',
            clef: 'treble',
            notes: [
              { pitch: 'E', octave: 4, spec: 'Line 1' },
              { pitch: 'G', octave: 4, spec: 'Line 2' },
              { pitch: 'B', octave: 4, spec: 'Line 3' },
              { pitch: 'D', octave: 5, spec: 'Line 4' },
              { pitch: 'F', octave: 5, spec: 'Line 5' },
              { pitch: 'F', octave: 4, spec: 'Space 1' },
              { pitch: 'A', octave: 4, spec: 'Space 2' },
              { pitch: 'C', octave: 5, spec: 'Space 3' },
              { pitch: 'E', octave: 5, spec: 'Space 4' },
              { pitch: 'C', octave: 4, spec: 'Middle C (Ledger Line)' },
              { pitch: 'D', octave: 4, spec: 'Space below stave' },
              { pitch: 'G', octave: 5, spec: 'Space above stave' }
            ]
          },
          {
            type: 'note-naming',
            title: '3. Name the Notes (Bass Clef)',
            instruction: 'Write the letter name under each note on the blank line provided.',
            clef: 'bass',
            notes: [
              { pitch: 'G', octave: 2, spec: 'Line 1' },
              { pitch: 'B', octave: 2, spec: 'Line 2' },
              { pitch: 'D', octave: 3, spec: 'Line 3' },
              { pitch: 'F', octave: 3, spec: 'Line 4' },
              { pitch: 'A', octave: 3, spec: 'Line 5' },
              { pitch: 'A', octave: 2, spec: 'Space 1' },
              { pitch: 'C', octave: 3, spec: 'Space 2' },
              { pitch: 'E', octave: 3, spec: 'Space 3' },
              { pitch: 'G', octave: 3, spec: 'Space 4' },
              { pitch: 'C', octave: 4, spec: 'Middle C (Ledger Line)' },
              { pitch: 'F', octave: 2, spec: 'Space below stave' },
              { pitch: 'B', octave: 3, spec: 'Space above stave' }
            ]
          },
          {
            type: 'prefix-clef',
            title: '4. Prefix the Correct Clef (𝄞 or 𝄢)',
            instruction: 'Look at the note on the stave and the given letter name. Draw the correct clef (Treble 𝄞 or Bass 𝄢) in the box before each note.',
            items: [
              { pitch: 'G', octave: 4, letter: 'G', correctClef: 'treble', prompt: 'Line 2 = G' },
              { pitch: 'F', octave: 3, letter: 'F', correctClef: 'bass', prompt: 'Line 4 = F' },
              { pitch: 'C', octave: 5, letter: 'C', correctClef: 'treble', prompt: 'Space 3 = C' },
              { pitch: 'C', octave: 3, letter: 'C', correctClef: 'bass', prompt: 'Space 2 = C' },
              { pitch: 'E', octave: 4, letter: 'E', correctClef: 'treble', prompt: 'Line 1 = E' },
              { pitch: 'A', octave: 3, letter: 'A', correctClef: 'bass', prompt: 'Line 5 = A' }
            ]
          },
          {
            type: 'draw-notes',
            title: '5. Draw the Specified Notes as Semibreves',
            instruction: 'Draw an open circular semibreve (𝅝) on the line or space instructed.',
            clef: 'treble',
            items: [
              { letter: 'F', octave: 5, prompt: 'F on Line 5' },
              { letter: 'D', octave: 4, prompt: 'D in Space below stave' },
              { letter: 'A', octave: 4, prompt: 'A in Space 2' },
              { letter: 'C', octave: 4, prompt: 'Middle C on Ledger Line' },
              { letter: 'B', octave: 4, prompt: 'B on Line 3' },
              { letter: 'E', octave: 5, prompt: 'E in Space 4' }
            ]
          },
          {
            type: 'matching-grid',
            title: '6. Match Notes to Letter Names',
            instruction: 'Draw a line connecting each stave note to its matching letter block (A, B, C, D, E, F, G).',
            pairs: [
              { letter: 'A', clef: 'treble', pitch: 'A', octave: 4 },
              { letter: 'B', clef: 'bass', pitch: 'B', octave: 2 },
              { letter: 'C', clef: 'treble', pitch: 'C', octave: 5 },
              { letter: 'D', clef: 'bass', pitch: 'D', octave: 3 },
              { letter: 'E', clef: 'treble', pitch: 'E', octave: 4 },
              { letter: 'F', clef: 'bass', pitch: 'F', octave: 3 },
              { letter: 'G', clef: 'treble', pitch: 'G', octave: 4 }
            ]
          }
        ]
      },

      'values-g1': {
        id: 'values-g1',
        grade: 1,
        topic: 'values',
        title: 'Grade 1: Time Values & Note Durations',
        subtitle: 'Semibreve, Minim, Crotchet, Quaver & Semiquaver Math',
        description: 'Understand the hierarchical beat values of notes, counts in crotchet beats, and arithmetic equivalence exercises.',
        badge: 'Photo Syllabus Match',
        exercises: [
          {
            type: 'values-table',
            title: '1. Note Chart & Beat Values',
            instruction: 'Review the note names, symbols, and count values in crotchet (quarter note) beats.',
            table: [
              { name: 'Semibreve (Whole note)', symbol: '𝅝', count: '4 counts', parts: 'Fills a 4/4 bar' },
              { name: 'Minim (Half note)', symbol: '𝅗𝅥', count: '2 counts', parts: 'Equal to 2 crotchets' },
              { name: 'Crotchet (Quarter note)', symbol: '𝅘𝅥', count: '1 count', parts: 'Basic beat unit' },
              { name: 'Quaver (Eighth note)', symbol: '𝅘𝅥𝅮 / ♫', count: '1/2 count', parts: '2 quavers = 1 crotchet' },
              { name: 'Semiquaver (16th note)', symbol: '𝅘𝅥𝅯 / ♬', count: '1/4 count', parts: '4 semiquavers = 1 crotchet' }
            ]
          },
          {
            type: 'fill-counts',
            title: '2. Fill in the Counts (Time Values)',
            instruction: 'Write the number of crotchet counts (4, 2, 1, 1/2, 1/4) directly beneath each note.',
            sequences: [
              {
                label: '(a)',
                notes: [
                  { symbol: '𝅝', answer: '4' },
                  { symbol: '𝅗𝅥', answer: '2' },
                  { symbol: '𝅘𝅥', answer: '1' },
                  { symbol: '𝅘𝅥𝅮', answer: '1/2' },
                  { symbol: '𝅝', answer: '4' },
                  { symbol: '𝅘𝅥', answer: '1' },
                  { symbol: '𝅘𝅥𝅮', answer: '1/2' },
                  { symbol: '𝅗𝅥', answer: '2' }
                ]
              },
              {
                label: '(b)',
                notes: [
                  { symbol: '𝅘𝅥𝅮', answer: '1/2' },
                  { symbol: '𝅗𝅥', answer: '2' },
                  { symbol: '𝅘𝅥𝅮', answer: '1/2' },
                  { symbol: '𝅝', answer: '4' },
                  { symbol: '𝅘𝅥', answer: '1' },
                  { symbol: '𝅝', answer: '4' },
                  { symbol: '𝅗𝅥', answer: '2' },
                  { symbol: '𝅘𝅥', answer: '1' }
                ]
              }
            ]
          },
          {
            type: 'value-equations',
            title: '3. Note Equivalences & Fill in the Blanks',
            instruction: 'Fill in each blank with the correct number (2, 4, 8, or 16).',
            equations: [
              { left: 'One Semibreve (𝅝)', right: '___ Minims (𝅗𝅥)', answer: '2' },
              { left: 'One Semibreve (𝅝)', right: '___ Crotchets (𝅘𝅥)', answer: '4' },
              { left: 'One Semibreve (𝅝)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '8' },
              { left: 'One Minim (𝅗𝅥)', right: '___ Crotchets (𝅘𝅥)', answer: '2' },
              { left: 'One Minim (𝅗𝅥)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '4' },
              { left: 'One Crotchet (𝅘𝅥)', right: '___ Semiquavers (𝅘𝅥𝅯)', answer: '4' }
            ]
          },
          {
            type: 'true-false',
            title: '4. Mark True (✓) or False (✗)',
            instruction: 'Decide whether each rhythmic statement is correct.',
            questions: [
              { text: 'A Minim (𝅗𝅥) = 4 Crotchet beats', answer: 'False', explanation: 'A Minim is 2 crotchet beats.' },
              { text: 'Two Quavers (♫) = One Crotchet (𝅘𝅥)', answer: 'True', explanation: '1/2 + 1/2 = 1 beat.' },
              { text: 'A Semibreve (𝅝) = 8 Quavers', answer: 'True', explanation: '4 beats × 2 quavers/beat = 8.' },
              { text: 'Four Semiquavers (♬) = 2 Crotchets', answer: 'False', explanation: '4 semiquavers = 1 crotchet.' },
              { text: 'A Crotchet (𝅘𝅥) + A Minim (𝅗𝅥) = 3 beats', answer: 'True', explanation: '1 + 2 = 3 beats.' }
            ]
          }
        ]
      },

      'signatures-g1': {
        id: 'signatures-g1',
        grade: 1,
        topic: 'signatures',
        title: 'Grade 1: Time Signatures & Bar-Lines',
        subtitle: '2/4 (Simple Duple), 3/4 (Simple Triple) & 4/4 (Common Time)',
        description: 'Practice identifying meters, prefixing time signatures, placing bar-lines correctly, and completing measures with missing notes.',
        badge: 'Photo Syllabus Match',
        exercises: [
          {
            type: 'meter-guide',
            title: '1. Simple Time Signatures Guide',
            instruction: 'Top number tells how many beats per measure. Bottom number 4 means Crotchet (quarter note) beat unit.',
            table: [
              { sig: '2/4', name: 'Simple Duple', beats: '2 crotchet beats per bar', example: '𝅘𝅥  𝅘𝅥  |  𝅗𝅥' },
              { sig: '3/4', name: 'Simple Triple', beats: '3 crotchet beats per bar', example: '𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥.' },
              { sig: '4/4 or 𝄴', name: 'Simple Quadruple (Common Time)', beats: '4 crotchet beats per bar', example: '𝅘𝅥  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅝' }
            ]
          },
          {
            type: 'prefix-meter',
            title: '2. Prefix the Correct Time Signature',
            instruction: 'Count the beats in each bar, then write the correct time signature (2/4, 3/4, or 4/4) at the start.',
            items: [
              { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  |  ♫  𝅘𝅥  |  𝅗𝅥  ||', answer: '2/4', explanation: 'Each bar contains exactly 2 crotchet beats.' },
              { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  𝅘𝅥  |  ♫  𝅘𝅥  𝅘𝅥  |  𝅗𝅥.  ||', answer: '3/4', explanation: 'Each bar contains exactly 3 crotchet beats.' },
              { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  𝅗𝅥  |  𝅝  |  ♫  ♫  𝅗𝅥  ||', answer: '4/4', explanation: 'Each bar contains exactly 4 crotchet beats.' },
              { prompt: '[ ? ]  ♫  𝅘𝅥  |  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  ||', answer: '2/4', explanation: '2 crotchet beats per bar.' }
            ]
          },
          {
            type: 'add-barlines',
            title: '3. Add Bar-Lines to the Following',
            instruction: 'Place vertical bar-lines (|) in the rhythm lines according to the specified time signature.',
            items: [
              { sig: '2/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅗𝅥 ♫ 𝅘𝅥 𝅗𝅥', answer: '𝅘𝅥 𝅘𝅥 | 𝅗𝅥 | ♫ 𝅘𝅥 | 𝅗𝅥 ||', explanation: 'Barline after every 2 beats.' },
              { sig: '3/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅘𝅥 𝅗𝅥 𝅘𝅥 ♫ 𝅘𝅥 𝅘𝅥 𝅗𝅥.', answer: '𝅘𝅥 𝅘𝅥 𝅘𝅥 | 𝅗𝅥 𝅘𝅥 | ♫ 𝅘𝅥 𝅘𝅥 | 𝅗𝅥. ||', explanation: 'Barline after every 3 beats.' },
              { sig: '4/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅗𝅥 𝅝 ♫ ♫ 𝅗𝅥 𝅗𝅥 𝅗𝅥', answer: '𝅘𝅥 𝅘𝅥 𝅗𝅥 | 𝅝 | ♫ ♫ 𝅗𝅥 | 𝅗𝅥 𝅗𝅥 ||', explanation: 'Barline after every 4 beats.' }
            ]
          },
          {
            type: 'complete-bar',
            title: '4. Add ONE Note to Complete Each Bar',
            instruction: 'Look at the time signature and add ONE note (𝅘𝅥, 𝅗𝅥, 𝅘𝅥𝅮, or 𝅝) to make each bar complete.',
            items: [
              { sig: '2/4', current: '𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (1 + 1 = 2).' },
              { sig: '3/4', current: '𝅘𝅥  𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (2 + 1 = 3).' },
              { sig: '4/4', current: '𝅗𝅥  𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (3 + 1 = 4).' },
              { sig: '3/4', current: '𝅘𝅥  +  [ ? ]', answer: '𝅗𝅥 (Minim)', beatsNeeded: '2 more beats needed (1 + 2 = 3).' },
              { sig: '4/4', current: '𝅗𝅥  +  [ ? ]', answer: '𝅗𝅥 (Minim)', beatsNeeded: '2 more beats needed (2 + 2 = 4).' }
            ]
          }
        ]
      },

      'rests-g1': {
        id: 'rests-g1',
        grade: 1,
        topic: 'rests',
        title: 'Grade 1: Rests, Ties & Dotted Notes',
        subtitle: 'Rest Identification, Dotted Values & Tied Durations',
        description: 'Clear exercises on silence in music (rests), sustaining pitch across beats (ties), and prolonging notes by half their value (dots).',
        badge: 'Photo Syllabus Match',
        exercises: [
          {
            type: 'rests-table',
            title: '1. Rests & Dotted Notes Reference Guide',
            instruction: 'A rest represents a period of silence. A dot adds half the value of the note.',
            table: [
              { name: 'Semibreve Rest', symbol: '𝄻 (Hangs below line 4)', value: '4 counts (or whole bar of silence)' },
              { name: 'Minim Rest', symbol: '𝄼 (Sits on line 3)', value: '2 counts' },
              { name: 'Crotchet Rest', symbol: '𝄽', value: '1 count' },
              { name: 'Quaver Rest', symbol: '𝄾', value: '1/2 count' },
              { name: 'Dotted Minim (𝅗𝅥.)', symbol: '2 + 1 = 3 counts', value: 'Fills a complete 3/4 bar' },
              { name: 'Tied Notes (𝅘𝅥‿𝅘𝅥)', symbol: 'Joined with a curved line', value: 'Values are added together without re-striking' }
            ]
          },
          {
            type: 'insert-rests',
            title: '2. Insert a Rest at Each Star (*)',
            instruction: 'Look at the time signature and add the correct rest (Crotchet 𝄽, Minim 𝄼, or Quaver 𝄾) at the asterisk (*).',
            items: [
              { sig: '2/4', bar: '𝅘𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat is missing to make 2 beats.' },
              { sig: '3/4', bar: '𝅗𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat is missing to make 3 beats.' },
              { sig: '4/4', bar: '𝅗𝅥  +  *', answer: '𝄼 (Minim Rest)', explanation: '2 beats are missing to make 4 beats.' },
              { sig: '2/4', bar: '𝅘𝅥𝅮  +  *', answer: '𝄾 (Quaver Rest)', explanation: 'Half a beat missing (to complete beat 1).' }
            ]
          },
          {
            type: 'tied-notes',
            title: '3. Calculate Tied Beat Durations',
            instruction: 'When two notes of the same pitch are tied, add their counts together.',
            items: [
              { notes: 'Crotchet tied to Crotchet (𝅘𝅥‿𝅘𝅥)', calculation: '1 + 1', answer: '2 Crotchet beats' },
              { notes: 'Minim tied to Crotchet (𝅗𝅥‿𝅘𝅥)', calculation: '2 + 1', answer: '3 Crotchet beats' },
              { notes: 'Minim tied to Minim (𝅗𝅥‿𝅗𝅥)', calculation: '2 + 2', answer: '4 Crotchet beats' },
              { notes: 'Dotted Minim tied to Crotchet (𝅗𝅥.‿𝅘𝅥)', calculation: '3 + 1', answer: '4 Crotchet beats' }
            ]
          }
        ]
      },

      'revision-g1': {
        id: 'revision-g1',
        grade: 1,
        topic: 'revision',
        title: 'Grade 1: Comprehensive Revision Test Paper',
        subtitle: '25-Mark Mock Exam Worksheet covering all Core Modules',
        description: 'End-of-unit comprehensive assessment for teachers and parents to evaluate student progress across notes, time signatures, rests, and scales.',
        badge: 'Full Mock Test',
        exercises: [
          {
            type: 'note-naming',
            title: 'Part 1: Pitch & Notation (8 Marks)',
            instruction: 'Name the 8 notes on the treble and bass staves below.',
            clef: 'treble',
            notes: [
              { pitch: 'C', octave: 4, spec: 'Middle C' },
              { pitch: 'F', octave: 4, spec: 'Space 1' },
              { pitch: 'B', octave: 4, spec: 'Line 3' },
              { pitch: 'E', octave: 5, spec: 'Space 4' },
              { pitch: 'G', octave: 4, spec: 'Line 2' },
              { pitch: 'A', octave: 4, spec: 'Space 2' },
              { pitch: 'D', octave: 5, spec: 'Line 4' },
              { pitch: 'F', octave: 5, spec: 'Line 5' }
            ]
          },
          {
            type: 'prefix-meter',
            title: 'Part 2: Time Signatures (6 Marks)',
            instruction: 'Prefix the correct time signature (2/4, 3/4, or 4/4) to each rhythm.',
            items: [
              { prompt: '[ ? ]  𝅗𝅥  𝅘𝅥  |  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥.  ||', answer: '3/4', explanation: '3 crotchet beats per bar.' },
              { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  |  ♫  𝅘𝅥  |  𝅗𝅥  ||', answer: '2/4', explanation: '2 crotchet beats per bar.' },
              { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  𝅗𝅥  |  𝅝  |  ♫  ♫  𝅗𝅥  ||', answer: '4/4', explanation: '4 crotchet beats per bar.' }
            ]
          },
          {
            type: 'value-equations',
            title: 'Part 3: Note Values & Equivalences (6 Marks)',
            instruction: 'Fill in the blanks with the correct number.',
            equations: [
              { left: 'One Semibreve (𝅝)', right: '___ Minims (𝅗𝅥)', answer: '2' },
              { left: 'One Minim (𝅗𝅥)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '4' },
              { left: 'One Dotted Minim (𝅗𝅥.)', right: '___ Crotchets (𝅘𝅥)', answer: '3' },
              { left: 'One Crotchet (𝅘𝅥)', right: '___ Semiquavers (𝅘𝅥𝅯)', answer: '4' }
            ]
          },
          {
            type: 'insert-rests',
            title: 'Part 4: Rests & Silence (5 Marks)',
            instruction: 'Add the missing rest at each * to complete the bar.',
            items: [
              { sig: '3/4', bar: '𝅗𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat missing.' },
              { sig: '4/4', bar: '𝅗𝅥  +  *', answer: '𝄼 (Minim Rest)', explanation: '2 beats missing.' },
              { sig: '2/4', bar: '𝅘𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat missing.' }
            ]
          }
        ]
      }
    };
  }

  // --- PROCEDURAL WORKSHEET GENERATOR ("GENERATE MORE PAPERS") ---
  generateProceduralWorksheet(topic = 'notes', options = {}) {
    this.paperVariantSeed = Math.floor(Math.random() * 90000) + 10000;
    const seed = this.paperVariantSeed;

    if (topic === 'notes') {
      return this.generateProceduralNotesPaper(seed, options);
    } else if (topic === 'values') {
      return this.generateProceduralValuesPaper(seed, options);
    } else if (topic === 'signatures') {
      return this.generateProceduralSignaturesPaper(seed, options);
    } else if (topic === 'rests') {
      return this.generateProceduralRestsPaper(seed, options);
    } else {
      return this.generateProceduralRevisionPaper(seed, options);
    }
  }

  generateProceduralNotesPaper(seed, options) {
    const clefChoice = options.clef || 'both'; // 'treble', 'bass', 'both'

    const treblePool = [
      { pitch: 'C', octave: 4, spec: 'Middle C (Ledger Line)' },
      { pitch: 'D', octave: 4, spec: 'Space below stave' },
      { pitch: 'E', octave: 4, spec: 'Line 1' },
      { pitch: 'F', octave: 4, spec: 'Space 1' },
      { pitch: 'G', octave: 4, spec: 'Line 2' },
      { pitch: 'A', octave: 4, spec: 'Space 2' },
      { pitch: 'B', octave: 4, spec: 'Line 3' },
      { pitch: 'C', octave: 5, spec: 'Space 3' },
      { pitch: 'D', octave: 5, spec: 'Line 4' },
      { pitch: 'E', octave: 5, spec: 'Space 4' },
      { pitch: 'F', octave: 5, spec: 'Line 5' },
      { pitch: 'G', octave: 5, spec: 'Space above stave' }
    ];

    const bassPool = [
      { pitch: 'F', octave: 2, spec: 'Space below stave' },
      { pitch: 'G', octave: 2, spec: 'Line 1' },
      { pitch: 'A', octave: 2, spec: 'Space 1' },
      { pitch: 'B', octave: 2, spec: 'Line 2' },
      { pitch: 'C', octave: 3, spec: 'Space 2' },
      { pitch: 'D', octave: 3, spec: 'Line 3' },
      { pitch: 'E', octave: 3, spec: 'Space 3' },
      { pitch: 'F', octave: 3, spec: 'Line 4' },
      { pitch: 'G', octave: 3, spec: 'Space 4' },
      { pitch: 'A', octave: 3, spec: 'Line 5' },
      { pitch: 'B', octave: 3, spec: 'Space above stave' },
      { pitch: 'C', octave: 4, spec: 'Middle C (Ledger Line)' }
    ];

    // Shuffle helper with seed
    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    const trebleNotes = shuffle(treblePool).slice(0, 8);
    const bassNotes = shuffle(bassPool).slice(0, 8);

    const prefixPool = [
      { pitch: 'G', octave: 4, letter: 'G', correctClef: 'treble', prompt: 'Line 2 = G' },
      { pitch: 'F', octave: 3, letter: 'F', correctClef: 'bass', prompt: 'Line 4 = F' },
      { pitch: 'E', octave: 4, letter: 'E', correctClef: 'treble', prompt: 'Line 1 = E' },
      { pitch: 'A', octave: 3, letter: 'A', correctClef: 'bass', prompt: 'Line 5 = A' },
      { pitch: 'C', octave: 5, letter: 'C', correctClef: 'treble', prompt: 'Space 3 = C' },
      { pitch: 'C', octave: 3, letter: 'C', correctClef: 'bass', prompt: 'Space 2 = C' },
      { pitch: 'B', octave: 4, letter: 'B', correctClef: 'treble', prompt: 'Line 3 = B' },
      { pitch: 'D', octave: 3, letter: 'D', correctClef: 'bass', prompt: 'Line 3 = D' }
    ];

    const prefixItems = shuffle(prefixPool).slice(0, 6);

    const drawPrompts = [
      { letter: 'E', octave: 4, prompt: 'E on Line 1' },
      { letter: 'F', octave: 4, prompt: 'F in Space 1' },
      { letter: 'G', octave: 4, prompt: 'G on Line 2' },
      { letter: 'A', octave: 4, prompt: 'A in Space 2' },
      { letter: 'B', octave: 4, prompt: 'B on Line 3' },
      { letter: 'C', octave: 5, prompt: 'C in Space 3' },
      { letter: 'D', octave: 5, prompt: 'D on Line 4' },
      { letter: 'E', octave: 5, prompt: 'E in Space 4' },
      { letter: 'F', octave: 5, prompt: 'F on Line 5' }
    ];

    const drawItems = shuffle(drawPrompts).slice(0, 5);

    return {
      id: `custom-notes-${seed}`,
      grade: 1,
      topic: 'notes',
      isCustom: true,
      title: `Grade 1 Generated Paper #${seed}: Notes on the Stave`,
      subtitle: `Procedurally Synthesized Practice Paper (Seed #${seed})`,
      description: 'A completely unique, randomly generated Grade 1 notes worksheet. Perfect for fresh homework drills or classroom quizzes.',
      badge: `Generated #${seed}`,
      exercises: [
        {
          type: 'note-naming',
          title: 'Exercise 1: Treble Clef Note Identification',
          instruction: 'Write the correct letter name (A to G) under each note on the blank line.',
          clef: 'treble',
          notes: trebleNotes
        },
        {
          type: 'note-naming',
          title: 'Exercise 2: Bass Clef Note Identification',
          instruction: 'Write the correct letter name (A to G) under each note on the blank line.',
          clef: 'bass',
          notes: bassNotes
        },
        {
          type: 'prefix-clef',
          title: 'Exercise 3: Prefix the Clef (𝄞 or 𝄢)',
          instruction: 'Draw the missing clef in each box to make the note match the given letter name.',
          items: prefixItems
        },
        {
          type: 'draw-notes',
          title: 'Exercise 4: Note Drawing on the Stave',
          instruction: 'Draw an open semibreve (𝅝) on the line or space specified.',
          clef: 'treble',
          items: drawItems
        }
      ]
    };
  }

  generateProceduralValuesPaper(seed, options) {
    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    const notePool = [
      { symbol: '𝅝', answer: '4' },
      { symbol: '𝅗𝅥', answer: '2' },
      { symbol: '𝅘𝅥', answer: '1' },
      { symbol: '𝅘𝅥𝅮', answer: '1/2' },
      { symbol: '𝅘𝅥𝅯', answer: '1/4' }
    ];

    const seqA = [];
    const seqB = [];
    for (let i = 0; i < 8; i++) {
      seqA.push(notePool[Math.floor(Math.random() * notePool.length)]);
      seqB.push(notePool[Math.floor(Math.random() * notePool.length)]);
    }

    const equationsPool = [
      { left: 'One Semibreve (𝅝)', right: '___ Minims (𝅗𝅥)', answer: '2' },
      { left: 'One Semibreve (𝅝)', right: '___ Crotchets (𝅘𝅥)', answer: '4' },
      { left: 'One Semibreve (𝅝)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '8' },
      { left: 'One Minim (𝅗𝅥)', right: '___ Crotchets (𝅘𝅥)', answer: '2' },
      { left: 'One Minim (𝅗𝅥)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '4' },
      { left: 'One Crotchet (𝅘𝅥)', right: '___ Quavers (𝅘𝅥𝅮)', answer: '2' },
      { left: 'One Crotchet (𝅘𝅥)', right: '___ Semiquavers (𝅘𝅥𝅯)', answer: '4' },
      { left: 'One Dotted Minim (𝅗𝅥.)', right: '___ Crotchets (𝅘𝅥)', answer: '3' }
    ];

    return {
      id: `custom-values-${seed}`,
      grade: 1,
      topic: 'values',
      isCustom: true,
      title: `Grade 1 Generated Paper #${seed}: Time Values & Rhythm Math`,
      subtitle: `Procedurally Synthesized Practice Paper (Seed #${seed})`,
      description: 'A freshly generated drill testing note duration math, beat counts, and rhythmic equivalence equations.',
      badge: `Generated #${seed}`,
      exercises: [
        {
          type: 'fill-counts',
          title: 'Exercise 1: Fill in the Counts',
          instruction: 'Write the number of crotchet beats (4, 2, 1, 1/2, 1/4) beneath each note symbol.',
          sequences: [
            { label: '(a)', notes: seqA },
            { label: '(b)', notes: seqB }
          ]
        },
        {
          type: 'value-equations',
          title: 'Exercise 2: Rhythmic Equations',
          instruction: 'Fill in the blanks with the correct number to make each equation balanced.',
          equations: shuffle(equationsPool).slice(0, 6)
        }
      ]
    };
  }

  generateProceduralSignaturesPaper(seed, options) {
    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    const meterItems = [
      { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  |  ♫  𝅘𝅥  |  𝅗𝅥  ||', answer: '2/4', explanation: '2 crotchet beats per bar.' },
      { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  𝅘𝅥  |  ♫  𝅘𝅥  𝅘𝅥  |  𝅗𝅥.  ||', answer: '3/4', explanation: '3 crotchet beats per bar.' },
      { prompt: '[ ? ]  𝅘𝅥  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  𝅗𝅥  |  𝅝  |  ♫  ♫  𝅗𝅥  ||', answer: '4/4', explanation: '4 crotchet beats per bar.' },
      { prompt: '[ ? ]  ♫  𝅘𝅥  |  𝅘𝅥  𝅘𝅥  |  𝅗𝅥  ||', answer: '2/4', explanation: '2 crotchet beats per bar.' },
      { prompt: '[ ? ]  𝅗𝅥  𝅘𝅥  |  𝅘𝅥  𝅘𝅥  𝅘𝅥  |  𝅗𝅥.  ||', answer: '3/4', explanation: '3 crotchet beats per bar.' }
    ];

    const barlineItems = [
      { sig: '2/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅗𝅥 ♫ 𝅘𝅥 𝅗𝅥', answer: '𝅘𝅥 𝅘𝅥 | 𝅗𝅥 | ♫ 𝅘𝅥 | 𝅗𝅥 ||', explanation: 'Barline after every 2 beats.' },
      { sig: '3/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅘𝅥 𝅗𝅥 𝅘𝅥 ♫ 𝅘𝅥 𝅘𝅥 𝅗𝅥.', answer: '𝅘𝅥 𝅘𝅥 𝅘𝅥 | 𝅗𝅥 𝅘𝅥 | ♫ 𝅘𝅥 𝅘𝅥 | 𝅗𝅥. ||', explanation: 'Barline after every 3 beats.' },
      { sig: '4/4', rhythm: '𝅘𝅥 𝅘𝅥 𝅗𝅥 𝅝 ♫ ♫ 𝅗𝅥 𝅗𝅥 𝅗𝅥', answer: '𝅘𝅥 𝅘𝅥 𝅗𝅥 | 𝅝 | ♫ ♫ 𝅗𝅥 | 𝅗𝅥 𝅗𝅥 ||', explanation: 'Barline after every 4 beats.' }
    ];

    const completeBarItems = [
      { sig: '2/4', current: '𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (1 + 1 = 2).' },
      { sig: '3/4', current: '𝅘𝅥  𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (2 + 1 = 3).' },
      { sig: '4/4', current: '𝅗𝅥  𝅘𝅥  +  [ ? ]', answer: '𝅘𝅥 (Crotchet)', beatsNeeded: '1 more beat needed (3 + 1 = 4).' },
      { sig: '3/4', current: '𝅘𝅥  +  [ ? ]', answer: '𝅗𝅥 (Minim)', beatsNeeded: '2 more beats needed (1 + 2 = 3).' },
      { sig: '4/4', current: '𝅗𝅥  +  [ ? ]', answer: '𝅗𝅥 (Minim)', beatsNeeded: '2 more beats needed (2 + 2 = 4).' }
    ];

    return {
      id: `custom-signatures-${seed}`,
      grade: 1,
      topic: 'signatures',
      isCustom: true,
      title: `Grade 1 Generated Paper #${seed}: Time Signatures & Bar-Lines`,
      subtitle: `Procedurally Synthesized Practice Paper (Seed #${seed})`,
      description: 'Randomized meter recognition, bar-line insertion, and measure completion drills.',
      badge: `Generated #${seed}`,
      exercises: [
        {
          type: 'prefix-meter',
          title: 'Exercise 1: Prefix the Time Signature',
          instruction: 'Count the beats in each bar and write 2/4, 3/4, or 4/4 at the start of each melody.',
          items: shuffle(meterItems).slice(0, 3)
        },
        {
          type: 'add-barlines',
          title: 'Exercise 2: Add the Missing Bar-Lines',
          instruction: 'Draw vertical bar-lines (|) where needed to complete each bar according to the time signature.',
          items: barlineItems
        },
        {
          type: 'complete-bar',
          title: 'Exercise 3: Complete Each Bar with ONE Note',
          instruction: 'Add ONE single note value to make each measure full and complete.',
          items: shuffle(completeBarItems).slice(0, 4)
        }
      ]
    };
  }

  generateProceduralRestsPaper(seed, options) {
    const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

    const restItems = [
      { sig: '2/4', bar: '𝅘𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat missing.' },
      { sig: '3/4', bar: '𝅗𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat missing.' },
      { sig: '4/4', bar: '𝅗𝅥  +  *', answer: '𝄼 (Minim Rest)', explanation: '2 beats missing.' },
      { sig: '2/4', bar: '𝅘𝅥𝅮  +  *', answer: '𝄾 (Quaver Rest)', explanation: 'Half beat missing.' },
      { sig: '3/4', bar: '𝅘𝅥  𝅘𝅥  +  *', answer: '𝄽 (Crotchet Rest)', explanation: '1 beat missing.' }
    ];

    const tiedItems = [
      { notes: 'Crotchet tied to Crotchet (𝅘𝅥‿𝅘𝅥)', calculation: '1 + 1', answer: '2 Crotchet beats' },
      { notes: 'Minim tied to Crotchet (𝅗𝅥‿𝅘𝅥)', calculation: '2 + 1', answer: '3 Crotchet beats' },
      { notes: 'Minim tied to Minim (𝅗𝅥‿𝅗𝅥)', calculation: '2 + 2', answer: '4 Crotchet beats' },
      { notes: 'Dotted Minim tied to Crotchet (𝅗𝅥.‿𝅘𝅥)', calculation: '3 + 1', answer: '4 Crotchet beats' }
    ];

    return {
      id: `custom-rests-${seed}`,
      grade: 1,
      topic: 'rests',
      isCustom: true,
      title: `Grade 1 Generated Paper #${seed}: Rests, Ties & Dotted Notes`,
      subtitle: `Procedurally Synthesized Practice Paper (Seed #${seed})`,
      description: 'Randomized drills testing rest values, inserting missing rests, and calculating tied notes.',
      badge: `Generated #${seed}`,
      exercises: [
        {
          type: 'insert-rests',
          title: 'Exercise 1: Insert Missing Rests',
          instruction: 'Add the correct rest symbol (𝄽, 𝄼, or 𝄾) at each asterisk (*).',
          items: shuffle(restItems).slice(0, 4)
        },
        {
          type: 'tied-notes',
          title: 'Exercise 2: Tied Note Values',
          instruction: 'Calculate the total sustained beat duration in crotchet beats.',
          items: shuffle(tiedItems)
        }
      ]
    };
  }

  generateProceduralRevisionPaper(seed, options) {
    const notesPaper = this.generateProceduralNotesPaper(seed, options);
    const valuesPaper = this.generateProceduralValuesPaper(seed, options);
    const signaturesPaper = this.generateProceduralSignaturesPaper(seed, options);

    return {
      id: `custom-revision-${seed}`,
      grade: 1,
      topic: 'revision',
      isCustom: true,
      title: `Grade 1 Generated Mock Exam Paper #${seed}`,
      subtitle: `Full Procedural Practice Paper (Seed #${seed})`,
      description: 'A 20-mark comprehensive revision test paper generated fresh for your classroom or student.',
      badge: `Generated #${seed}`,
      exercises: [
        notesPaper.exercises[0],
        notesPaper.exercises[1],
        valuesPaper.exercises[1],
        signaturesPaper.exercises[0],
        signaturesPaper.exercises[2]
      ]
    };
  }

  // --- ACTIONS ---
  selectTopic(topic) {
    this.currentTopic = topic;
    if (topic === 'notes') {
      this.activeWorksheet = this.curatedWorksheets['notes-g1'];
    } else if (topic === 'values') {
      this.activeWorksheet = this.curatedWorksheets['values-g1'];
    } else if (topic === 'signatures') {
      this.activeWorksheet = this.curatedWorksheets['signatures-g1'];
    } else if (topic === 'rests') {
      this.activeWorksheet = this.curatedWorksheets['rests-g1'];
    } else if (topic === 'revision') {
      this.activeWorksheet = this.curatedWorksheets['revision-g1'];
    } else if (topic === 'generator') {
      this.activeWorksheet = this.generateProceduralWorksheet('notes');
    }
    this.render();
  }

  selectWorksheet(id) {
    if (this.curatedWorksheets[id]) {
      this.activeWorksheet = this.curatedWorksheets[id];
      this.render();
    }
  }

  toggleAnswerKey() {
    this.showAnswers = !this.showAnswers;
    this.render();
  }

  generateNewVariant() {
    const topic = this.activeWorksheet ? this.activeWorksheet.topic : 'notes';
    this.activeWorksheet = this.generateProceduralWorksheet(topic);
    this.render();
  }

  printWorksheet() {
    window.print();
  }

  // --- RENDERING ---
  render() {
    const container = document.getElementById('worksheets-container');
    if (!container) return;

    let html = `
      <!-- Worksheet Hub Header -->
      <div class="worksheet-hub-head">
        <div class="worksheet-hub-titles">
          <div class="eyebrow">
            <span>●</span> Teacher & Parent Resource Hub
          </div>
          <h2>Grade 1 Printable Worksheets & Practice Papers</h2>
          <p class="lede" style="margin-top: var(--space-2); max-width: 65ch;">
            Print-ready practice worksheets designed specifically for music teachers, tutors, and parents.
            Based directly on the official ABRSM Grade 1 Syllabus workbook exercises.
          </p>
        </div>

        <div class="worksheet-hub-badges">
          <span class="hub-pill">🖨️ Clean A4 / Letter Print Layout</span>
          <span class="hub-pill">✨ Procedural Paper Generator</span>
          <span class="hub-pill">👁️ Teacher Answer Key Included</span>
        </div>
      </div>

      <!-- Topic Filter Pills & Generator Studio Bar -->
      <div class="worksheet-nav-bar">
        <div class="worksheet-topics-group">
          <button class="worksheet-topic-btn ${this.currentTopic === 'notes' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('notes')">
            🎼 Notes on the Stave
          </button>
          <button class="worksheet-topic-btn ${this.currentTopic === 'values' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('values')">
            ⏱️ Note Values & Math
          </button>
          <button class="worksheet-topic-btn ${this.currentTopic === 'signatures' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('signatures')">
            🔀 Time Signatures & Bars
          </button>
          <button class="worksheet-topic-btn ${this.currentTopic === 'rests' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('rests')">
            ⏸️ Rests, Ties & Dots
          </button>
          <button class="worksheet-topic-btn ${this.currentTopic === 'revision' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('revision')">
            🌟 Full Mock Test
          </button>
          <button class="worksheet-topic-btn generator-pill ${this.currentTopic === 'generator' ? 'active' : ''}" onclick="window.worksheetsEngine.selectTopic('generator')">
            ⚡ Generator Studio
          </button>
        </div>

        <!-- Quick Action Bar -->
        <div class="worksheet-actions-group">
          <button class="btn outline small" onclick="window.worksheetsEngine.toggleAnswerKey()" title="Toggle Answers for Teachers">
            ${this.showAnswers ? '🙈 Hide Answer Key' : '👁️ Show Answer Key'}
          </button>
          <button class="btn primary small" onclick="window.worksheetsEngine.generateNewVariant()" title="Generate a brand-new randomized paper on this topic">
            🎲 Generate New Paper
          </button>
          <button class="btn accent small" onclick="window.worksheetsEngine.printWorksheet()" title="Print cleanly on A4 or Letter paper">
            🖨️ Print / Save PDF
          </button>
        </div>
      </div>
    `;

    // Active Worksheet Render
    if (this.activeWorksheet) {
      html += this.renderWorksheetPaper(this.activeWorksheet);
    }

    container.innerHTML = html;
  }

  // --- RENDER A SINGLE PRINTABLE PAPER ---
  renderWorksheetPaper(paper) {
    let out = `
      <div class="worksheet-paper-wrapper">
        <div class="worksheet-paper" id="printable-worksheet-paper">
          
          <!-- Student / Exam Header -->
          <div class="paper-header">
            <div class="paper-brand-row">
              <div>
                <span class="paper-syllabus-tag">ABRSM Music Theory • Grade 1 Curriculum</span>
                <h1 class="paper-main-title">${paper.title}</h1>
                <p class="paper-subtitle">${paper.subtitle}</p>
              </div>
              <div class="paper-badge-box">
                <div class="paper-id-tag">${paper.isCustom ? 'DYNAMIC VARIANT' : 'OFFICIAL SYLLABUS'}</div>
                <div class="paper-seed-no">${paper.badge}</div>
              </div>
            </div>

            <!-- Student Fill-in Fields (Printable) -->
            <div class="paper-meta-grid">
              <div class="meta-field">
                <span class="meta-label">Student Name:</span>
                <span class="meta-line">____________________________________</span>
              </div>
              <div class="meta-field">
                <span class="meta-label">Date:</span>
                <span class="meta-line">____________________</span>
              </div>
              <div class="meta-field">
                <span class="meta-label">Class / Teacher:</span>
                <span class="meta-line">____________________</span>
              </div>
              <div class="meta-field score-box">
                <span class="meta-label">Score:</span>
                <span class="meta-line">______ / ______</span>
              </div>
            </div>
          </div>

          <!-- Answer Key Banner (if enabled) -->
          ${this.showAnswers ? `
            <div class="answer-key-banner">
              <strong>👁️ TEACHER / PARENT ANSWER KEY ACTIVE</strong>
              <span>Answers are displayed in highlighted ink below for easy grading.</span>
            </div>
          ` : ''}

          <!-- Exercises Content -->
          <div class="paper-exercises">
    `;

    paper.exercises.forEach((ex, idx) => {
      out += `
        <div class="paper-exercise-block">
          <div class="exercise-head">
            <h3 class="exercise-title">${ex.title}</h3>
            <p class="exercise-instruction">${ex.instruction}</p>
          </div>
          <div class="exercise-body">
            ${this.renderExerciseBody(ex)}
          </div>
        </div>
      `;
    });

    out += `
          </div>

          <!-- Printable Footer -->
          <div class="paper-footer">
            <span>MusicTheory101 • Free printable educational resource aligned with ABRSM Grade 1 Syllabus</span>
            <span>Page 1 of 1 • https://chanale-lab.github.io/MusicTheory101/</span>
          </div>

        </div>
      </div>
    `;

    return out;
  }

  // --- EXERCISE BODY RENDERERS ---
  renderExerciseBody(ex) {
    switch (ex.type) {
      case 'stave-reference':
        return this.renderStaveReference(ex);
      case 'note-naming':
        return this.renderNoteNamingExercise(ex);
      case 'prefix-clef':
        return this.renderPrefixClefExercise(ex);
      case 'draw-notes':
        return this.renderDrawNotesExercise(ex);
      case 'matching-grid':
        return this.renderMatchingGridExercise(ex);
      case 'values-table':
        return this.renderValuesTableExercise(ex);
      case 'fill-counts':
        return this.renderFillCountsExercise(ex);
      case 'value-equations':
        return this.renderValueEquationsExercise(ex);
      case 'true-false':
        return this.renderTrueFalseExercise(ex);
      case 'meter-guide':
        return this.renderMeterGuideExercise(ex);
      case 'prefix-meter':
        return this.renderPrefixMeterExercise(ex);
      case 'add-barlines':
        return this.renderAddBarlinesExercise(ex);
      case 'complete-bar':
        return this.renderCompleteBarExercise(ex);
      case 'rests-table':
        return this.renderRestsTableExercise(ex);
      case 'insert-rests':
        return this.renderInsertRestsExercise(ex);
      case 'tied-notes':
        return this.renderTiedNotesExercise(ex);
      default:
        return `<p>Standard exercise content</p>`;
    }
  }

  // 1. Stave Reference
  renderStaveReference(ex) {
    return `
      <div class="guide-box">
        <div class="guide-diagram">
          <svg viewBox="0 0 540 110" class="mini-stave-svg" xmlns="http://www.w3.org/2000/svg">
            <!-- 5 lines -->
            <line x1="20" y1="20" x2="520" y2="20" stroke="var(--color-ink)" stroke-width="1.5" />
            <line x1="20" y1="36" x2="520" y2="36" stroke="var(--color-ink)" stroke-width="1.5" />
            <line x1="20" y1="52" x2="520" y2="52" stroke="var(--color-ink)" stroke-width="1.5" />
            <line x1="20" y1="68" x2="520" y2="68" stroke="var(--color-ink)" stroke-width="1.5" />
            <line x1="20" y1="84" x2="520" y2="84" stroke="var(--color-ink)" stroke-width="1.5" />

            <text x="35" y="65" font-family="'Century Gothic', sans-serif" font-size="52" fill="var(--color-ink)">𝄞</text>

            <!-- Line labels -->
            <text x="525" y="24" font-size="10" fill="var(--color-muted)">Line 5 (F)</text>
            <text x="525" y="40" font-size="10" fill="var(--color-muted)">Line 4 (D)</text>
            <text x="525" y="56" font-size="10" fill="var(--color-muted)">Line 3 (B)</text>
            <text x="525" y="72" font-size="10" fill="var(--color-muted)">Line 2 (G)</text>
            <text x="525" y="88" font-size="10" fill="var(--color-muted)">Line 1 (E)</text>

            <!-- Middle C -->
            <line x1="110" y1="100" x2="140" y2="100" stroke="var(--color-ink)" stroke-width="1.5" />
            <ellipse cx="125" cy="100" rx="8" ry="5.5" transform="rotate(-20 125 100)" fill="var(--color-ink)" />
            <text x="125" y="115" font-size="10" font-weight="700" text-anchor="middle" fill="var(--color-accent)">Middle C</text>

            <!-- Spaces -->
            <text x="210" y="78" font-size="11" font-weight="700" fill="var(--color-ink)">Space 1 (F)</text>
            <text x="290" y="62" font-size="11" font-weight="700" fill="var(--color-ink)">Space 2 (A)</text>
            <text x="370" y="46" font-size="11" font-weight="700" fill="var(--color-ink)">Space 3 (C)</text>
            <text x="450" y="30" font-size="11" font-weight="700" fill="var(--color-ink)">Space 4 (E)</text>
          </svg>
        </div>
      </div>
    `;
  }

  // 2. Note Naming Exercise (Vector Stave with Fill-in Blanks)
  renderNoteNamingExercise(ex) {
    const clef = ex.clef || 'treble';
    const notes = ex.notes || [];

    const width = 640;
    const height = 145;
    const startX = 24;
    const endX = width - 16;
    const topLineY = 40;
    const lineSpacing = 12;
    const bottomLineY = topLineY + 4 * lineSpacing; // 88

    let svg = `<svg viewBox="0 0 ${width} ${height}" class="worksheet-stave-svg" xmlns="http://www.w3.org/2000/svg">`;

    // 5 Lines
    for (let i = 0; i < 5; i++) {
      const y = topLineY + i * lineSpacing;
      svg += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="var(--color-ink)" stroke-width="1.5" />`;
    }

    // End barlines
    svg += `<line x1="${endX}" y1="${topLineY}" x2="${endX}" y2="${bottomLineY}" stroke="var(--color-ink)" stroke-width="1.8" />`;

    // Clef Symbol
    if (clef === 'treble') {
      svg += `<text x="${startX + 6}" y="${topLineY + 41}" font-family="'Century Gothic', sans-serif" font-size="52" fill="var(--color-ink)" user-select="none">𝄞</text>`;
    } else {
      svg += `<text x="${startX + 6}" y="${topLineY + 36}" font-family="'Century Gothic', sans-serif" font-size="42" fill="var(--color-ink)" user-select="none">𝄢</text>`;
    }

    // Distribute notes horizontally
    const noteStartX = startX + 70;
    const availWidth = endX - noteStartX - 20;
    const stepX = availWidth / Math.max(1, notes.length - 1);

    const bottomLineStep = clef === 'treble' ? 2 : -10; // E4 or G2

    notes.forEach((note, i) => {
      const x = noteStartX + i * stepX;
      const step = this.noteToDiatonicStep(note.pitch, note.octave);
      const stepsFromBottom = step - bottomLineStep;
      const y = bottomLineY - (stepsFromBottom * 6);

      // Ledger lines
      if (step <= bottomLineStep - 2) {
        // Below stave (e.g. Middle C in treble)
        for (let s = bottomLineStep - 2; s >= step; s -= 2) {
          const ly = bottomLineY - (s * 6);
          svg += `<line x1="${x - 13}" y1="${ly}" x2="${x + 13}" y2="${ly}" stroke="var(--color-ink)" stroke-width="1.5" />`;
        }
      } else if (step >= bottomLineStep + 10) {
        // Above stave (e.g. Middle C in bass)
        for (let s = bottomLineStep + 10; s <= step; s += 2) {
          const ly = bottomLineY - (s * 6);
          svg += `<line x1="${x - 13}" y1="${ly}" x2="${x + 13}" y2="${ly}" stroke="var(--color-ink)" stroke-width="1.5" />`;
        }
      }

      // Notehead (open semibreve)
      svg += `<ellipse cx="${x}" cy="${y}" rx="8" ry="5.5" transform="rotate(-20 ${x} ${y})" fill="none" stroke="var(--color-ink)" stroke-width="2.5" />`;

      // Fill-in blank or Answer underneath
      if (this.showAnswers) {
        svg += `<text x="${x}" y="${height - 12}" font-size="15" font-weight="700" fill="var(--color-accent)" text-anchor="middle">${note.pitch}</text>`;
      } else {
        svg += `<line x1="${x - 14}" y1="${height - 12}" x2="${x + 14}" y2="${height - 12}" stroke="var(--color-ink)" stroke-width="1.2" stroke-dasharray="3,2" />`;
      }
    });

    svg += '</svg>';
    return `<div class="worksheet-svg-container">${svg}</div>`;
  }

  // 3. Prefix the Clef Exercise
  renderPrefixClefExercise(ex) {
    let html = `<div class="prefix-clef-grid">`;

    ex.items.forEach((item, idx) => {
      const isTreble = item.correctClef === 'treble';
      const promptLetter = item.letter;

      // Single Measure SVG with Clef Box
      const width = 180;
      const height = 110;
      const startX = 10;
      const endX = width - 10;
      const topLineY = 25;
      const lineSpacing = 11;
      const bottomLineY = topLineY + 4 * lineSpacing; // 69

      let svg = `<svg viewBox="0 0 ${width} ${height}" class="prefix-measure-svg" xmlns="http://www.w3.org/2000/svg">`;

      // 5 lines
      for (let i = 0; i < 5; i++) {
        const y = topLineY + i * lineSpacing;
        svg += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="var(--color-ink)" stroke-width="1.2" />`;
      }
      svg += `<line x1="${endX}" y1="${topLineY}" x2="${endX}" y2="${bottomLineY}" stroke="var(--color-ink)" stroke-width="1.5" />`;

      // Clef Box Placeholder on Left
      svg += `<rect x="${startX + 6}" y="${topLineY - 6}" width="38" height="56" rx="4" fill="none" stroke="var(--color-line)" stroke-dasharray="3,3" stroke-width="1.5" />`;

      if (this.showAnswers) {
        const sym = isTreble ? '𝄞' : '𝄢';
        const sy = isTreble ? topLineY + 38 : topLineY + 33;
        svg += `<text x="${startX + 14}" y="${sy}" font-family="'Century Gothic', sans-serif" font-size="38" fill="var(--color-accent)">${sym}</text>`;
      } else {
        svg += `<text x="${startX + 25}" y="${topLineY + 30}" font-size="11" fill="var(--color-muted)" text-anchor="middle">?</text>`;
      }

      // Note Position calculation based on target clef
      const bottomStep = isTreble ? 2 : -10;
      const step = this.noteToDiatonicStep(item.pitch, item.octave);
      const stepsFromBottom = step - bottomStep;
      const noteY = bottomLineY - (stepsFromBottom * 5.5);
      const noteX = startX + 95;

      // Notehead
      svg += `<ellipse cx="${noteX}" cy="${noteY}" rx="7.5" ry="5.2" transform="rotate(-20 ${noteX} ${noteY})" fill="none" stroke="var(--color-ink)" stroke-width="2.2" />`;

      // Target note letter prompt below note
      svg += `<text x="${noteX}" y="${height - 10}" font-size="13" font-weight="700" fill="var(--color-ink)" text-anchor="middle">${promptLetter}</text>`;

      svg += `</svg>`;

      html += `
        <div class="prefix-card">
          <div class="prefix-card-index">(${String.fromCharCode(97 + idx)})</div>
          ${svg}
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 4. Draw Notes Exercise
  renderDrawNotesExercise(ex) {
    const clef = ex.clef || 'treble';
    let html = `<div class="draw-notes-grid">`;

    ex.items.forEach((item, idx) => {
      const width = 190;
      const height = 110;
      const startX = 10;
      const endX = width - 10;
      const topLineY = 25;
      const lineSpacing = 11;
      const bottomLineY = topLineY + 4 * lineSpacing; // 69

      let svg = `<svg viewBox="0 0 ${width} ${height}" class="draw-measure-svg" xmlns="http://www.w3.org/2000/svg">`;

      // 5 lines
      for (let i = 0; i < 5; i++) {
        const y = topLineY + i * lineSpacing;
        svg += `<line x1="${startX}" y1="${y}" x2="${endX}" y2="${y}" stroke="var(--color-ink)" stroke-width="1.2" />`;
      }
      svg += `<line x1="${endX}" y1="${topLineY}" x2="${endX}" y2="${bottomLineY}" stroke="var(--color-ink)" stroke-width="1.5" />`;

      // Clef
      svg += `<text x="${startX + 6}" y="${topLineY + 38}" font-family="'Century Gothic', sans-serif" font-size="44" fill="var(--color-ink)">𝄞</text>`;

      const noteX = startX + 110;
      const step = this.noteToDiatonicStep(item.letter, item.octave);
      const bottomStep = 2; // E4
      const stepsFromBottom = step - bottomStep;
      const noteY = bottomLineY - (stepsFromBottom * 5.5);

      // Ledger line if needed
      if (step <= 0) {
        svg += `<line x1="${noteX - 12}" y1="${noteY}" x2="${noteX + 12}" y2="${noteY}" stroke="var(--color-ink)" stroke-width="1.5" />`;
      }

      // If answers shown: draw the note in red/accent
      if (this.showAnswers) {
        svg += `<ellipse cx="${noteX}" cy="${noteY}" rx="7.5" ry="5.2" transform="rotate(-20 ${noteX} ${noteY})" fill="none" stroke="var(--color-accent)" stroke-width="2.5" />`;
      }

      svg += `</svg>`;

      html += `
        <div class="draw-card">
          <div class="draw-card-head">
            <span class="draw-index">(${String.fromCharCode(97 + idx)})</span>
            <strong class="draw-prompt">${item.prompt}</strong>
          </div>
          ${svg}
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 5. Matching Grid Exercise (Notes connected to big letters A-G)
  renderMatchingGridExercise(ex) {
    let html = `
      <div class="matching-exercise-box">
        <div class="matching-notes-row">
    `;

    ex.pairs.forEach((p, idx) => {
      html += `
        <div class="matching-note-col">
          <span class="matching-idx">(${idx + 1})</span>
          <div class="matching-stave-mini">
            <svg viewBox="0 0 75 75" xmlns="http://www.w3.org/2000/svg">
              <line x1="5" y1="15" x2="70" y2="15" stroke="var(--color-ink)" stroke-width="1" />
              <line x1="5" y1="25" x2="70" y2="25" stroke="var(--color-ink)" stroke-width="1" />
              <line x1="5" y1="35" x2="70" y2="35" stroke="var(--color-ink)" stroke-width="1" />
              <line x1="5" y1="45" x2="70" y2="45" stroke="var(--color-ink)" stroke-width="1" />
              <line x1="5" y1="55" x2="70" y2="55" stroke="var(--color-ink)" stroke-width="1" />

              <text x="8" y="42" font-family="'Century Gothic', sans-serif" font-size="28" fill="var(--color-ink)">${p.clef === 'treble' ? '𝄞' : '𝄢'}</text>

              <ellipse cx="48" cy="${this.getMiniY(p.pitch, p.octave, p.clef)}" rx="5" ry="3.5" transform="rotate(-20 48 ${this.getMiniY(p.pitch, p.octave, p.clef)})" fill="var(--color-ink)" />
            </svg>
          </div>
          ${this.showAnswers ? `<strong class="matching-ans-tag">${p.letter}</strong>` : `<span class="matching-blank">__</span>`}
        </div>
      `;
    });

    html += `
        </div>

        <!-- Big Bold Letter Blocks (A B C D E F G) as in user's workbook photo -->
        <div class="letter-blocks-row">
          <div class="big-letter-box">A</div>
          <div class="big-letter-box">B</div>
          <div class="big-letter-box">C</div>
          <div class="big-letter-box">D</div>
          <div class="big-letter-box">E</div>
          <div class="big-letter-box">F</div>
          <div class="big-letter-box">G</div>
        </div>
      </div>
    `;

    return html;
  }

  // 6. Values Table
  renderValuesTableExercise(ex) {
    let out = `
      <div class="values-table-container">
        <table class="paper-table">
          <thead>
            <tr>
              <th>Note Name</th>
              <th>Symbol</th>
              <th>Beat Count (Crotchets)</th>
              <th>Measure Proportion</th>
            </tr>
          </thead>
          <tbody>
    `;

    ex.table.forEach(row => {
      out += `
        <tr>
          <td><strong>${row.name}</strong></td>
          <td class="symbol-cell">${row.symbol}</td>
          <td><span class="count-badge">${row.count}</span></td>
          <td>${row.parts}</td>
        </tr>
      `;
    });

    out += `
          </tbody>
        </table>
      </div>
    `;
    return out;
  }

  // 7. Fill Counts Exercise
  renderFillCountsExercise(ex) {
    let html = `<div class="fill-counts-container">`;

    ex.sequences.forEach(seq => {
      html += `
        <div class="count-seq-row">
          <span class="seq-label"><strong>${seq.label}</strong></span>
          <div class="seq-notes-grid">
      `;

      seq.notes.forEach(item => {
        html += `
          <div class="count-note-item">
            <div class="note-symbol-display">${item.symbol}</div>
            <div class="count-answer-slot">
              ${this.showAnswers ? `<span class="count-ans-text">${item.answer}</span>` : `<span class="count-slot-line">___</span>`}
            </div>
          </div>
        `;
      });

      html += `
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 8. Value Equations Exercise
  renderValueEquationsExercise(ex) {
    let html = `<div class="equations-grid">`;

    ex.equations.forEach((eq, idx) => {
      html += `
        <div class="equation-card">
          <span class="eq-idx">(${idx + 1})</span>
          <div class="eq-left">${eq.left}</div>
          <div class="eq-equals">=</div>
          <div class="eq-right">
            ${this.showAnswers ? `<strong><span class="ans-num">${eq.answer}</span> ${eq.right.replace('___', '')}</strong>` : `<span>${eq.right}</span>`}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 9. True / False Exercise
  renderTrueFalseExercise(ex) {
    let html = `<div class="tf-questions-list">`;

    ex.questions.forEach((q, idx) => {
      html += `
        <div class="tf-row">
          <div class="tf-question">
            <span class="tf-idx">(${idx + 1})</span>
            <span>${q.text}</span>
          </div>
          <div class="tf-ans-box">
            ${this.showAnswers ? `
              <span class="tf-badge ${q.answer.toLowerCase()}">${q.answer === 'True' ? '✓ TRUE' : '✗ FALSE'}</span>
              <small class="tf-exp">(${q.explanation})</small>
            ` : `
              <div class="tf-checkboxes">
                <span>[ &nbsp; ] True</span>
                <span>[ &nbsp; ] False</span>
              </div>
            `}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 10. Meter Guide
  renderMeterGuideExercise(ex) {
    let html = `
      <div class="meter-guide-container">
        <table class="paper-table">
          <thead>
            <tr>
              <th>Time Signature</th>
              <th>Classification</th>
              <th>Meaning / Beats</th>
              <th>Sample Measure Pattern</th>
            </tr>
          </thead>
          <tbody>
    `;

    ex.table.forEach(m => {
      html += `
        <tr>
          <td><span class="meter-sig-badge">${m.sig}</span></td>
          <td><strong>${m.name}</strong></td>
          <td>${m.beats}</td>
          <td class="mono">${m.example}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
    return html;
  }

  // 11. Prefix Meter Exercise
  renderPrefixMeterExercise(ex) {
    let html = `<div class="prefix-meter-list">`;

    ex.items.forEach((item, idx) => {
      html += `
        <div class="prefix-meter-card">
          <div class="meter-prompt-row">
            <span class="meter-idx">(${idx + 1})</span>
            <div class="meter-rhythm-line">
              ${this.showAnswers ? `<span class="meter-ans-box">${item.answer}</span>` : `<span class="meter-blank-box">[ ? ]</span>`}
              <span class="rhythm-notation">${item.prompt.replace('[ ? ]', '')}</span>
            </div>
          </div>
          ${this.showAnswers ? `<div class="meter-explanation">💡 Reason: ${item.explanation}</div>` : ''}
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 12. Add Barlines Exercise
  renderAddBarlinesExercise(ex) {
    let html = `<div class="add-barlines-list">`;

    ex.items.forEach((item, idx) => {
      html += `
        <div class="barline-card">
          <div class="barline-head">
            <span class="barline-idx">(${idx + 1})</span>
            <span class="barline-sig-tag">Time: <strong>${item.sig}</strong></span>
          </div>
          <div class="barline-notation-line">
            <span class="barline-sig-symbol">${item.sig}</span>
            <span class="barline-notes">${this.showAnswers ? item.answer : item.rhythm}</span>
          </div>
          ${this.showAnswers ? `<div class="barline-hint">Rule: ${item.explanation}</div>` : ''}
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 13. Complete Bar Exercise
  renderCompleteBarExercise(ex) {
    let html = `<div class="complete-bar-grid">`;

    ex.items.forEach((item, idx) => {
      html += `
        <div class="complete-bar-card">
          <span class="cbar-idx">(${idx + 1})</span>
          <div class="cbar-sig">${item.sig}</div>
          <div class="cbar-content">
            <div class="cbar-prompt">${item.current}</div>
            <div class="cbar-solution">
              ${this.showAnswers ? `<strong class="cbar-ans">${item.answer}</strong> <span class="cbar-needed">(${item.beatsNeeded})</span>` : `<span>Answer: _________________</span>`}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 14. Rests Table
  renderRestsTableExercise(ex) {
    let html = `
      <div class="rests-guide-container">
        <table class="paper-table">
          <thead>
            <tr>
              <th>Rest / Articulation Name</th>
              <th>Symbol & Appearance</th>
              <th>Value / Explanation</th>
            </tr>
          </thead>
          <tbody>
    `;

    ex.table.forEach(r => {
      html += `
        <tr>
          <td><strong>${r.name}</strong></td>
          <td class="symbol-cell">${r.symbol}</td>
          <td>${r.value}</td>
        </tr>
      `;
    });

    html += `
          </tbody>
        </table>
      </div>
    `;
    return html;
  }

  // 15. Insert Rests Exercise
  renderInsertRestsExercise(ex) {
    let html = `<div class="insert-rests-list">`;

    ex.items.forEach((item, idx) => {
      html += `
        <div class="insert-rest-card">
          <span class="rest-idx">(${idx + 1})</span>
          <span class="rest-sig-badge">${item.sig}</span>
          <div class="rest-line">
            <span>Measure: <strong>${item.bar}</strong></span>
            <div class="rest-ans-slot">
              ${this.showAnswers ? `<strong class="rest-ans-text">${item.answer}</strong>` : `<span>Insert rest: ____________</span>`}
            </div>
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // 16. Tied Notes Exercise
  renderTiedNotesExercise(ex) {
    let html = `<div class="tied-notes-list">`;

    ex.items.forEach((item, idx) => {
      html += `
        <div class="tied-card">
          <span class="tied-idx">(${idx + 1})</span>
          <div class="tied-notes-title">${item.notes}</div>
          <div class="tied-math-box">
            ${this.showAnswers ? `<strong>${item.calculation} = <span class="ans-num">${item.answer}</span></strong>` : `<span>Total Duration: ____________ beats</span>`}
          </div>
        </div>
      `;
    });

    html += `</div>`;
    return html;
  }

  // --- HELPER DIATONIC MATH ---
  noteToDiatonicStep(pitch, octave) {
    const letters = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
    const p = pitch.charAt(0).toUpperCase();
    const letterIdx = letters.indexOf(p);
    return (octave - 4) * 7 + letterIdx;
  }

  getMiniY(pitch, octave, clef) {
    const step = this.noteToDiatonicStep(pitch, octave);
    const bottomStep = clef === 'treble' ? 2 : -10;
    const stepsFromBottom = step - bottomStep;
    return 55 - (stepsFromBottom * 5);
  }
}

// Global exposure
window.WorksheetsEngine = WorksheetsEngine;
