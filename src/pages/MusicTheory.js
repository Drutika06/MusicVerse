import React from 'react';

const MusicTheory = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen p-6 text-white"
      style={{
        backgroundImage:
          "url('https://www.htmlcsscolor.com/preview/gallery/003147.png')", // Replace with your preferred background image
      }}
    >
      <div className="bg-gray-800 bg-opacity-80 p-8 rounded-lg max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Introduction to Music Theory
        </h1>

        {/* Section 1: Musical Notes */}
        <div className="flex items-start mb-12">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-semibold mb-4">Musical Notes</h2>
            <p className="text-lg mb-4">
              In Western music, there are 12 unique notes that form the foundation of music. These notes repeat at higher or lower octaves. They are:
            </p>
            <ul className="list-disc pl-5 text-lg">
              
              <li>C  C#/Db  D  D#/Eb  E  F  F#/Gb  G  G#/Ab  A  A#/Bb  B</li>
              
            </ul>
            <p className="text-lg mt-4">
              These notes are the building blocks for all melodies, chords, and harmonies in Western classical and popular music. The placement of these notes on a keyboard or staff defines their pitch.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://rcmusic-kentico-cdn.s3.amazonaws.com/rcm/media/main/about%20us/do-re-mi.png"
              alt="Musical Scale"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Section 2: Key Signatures */}
        <div className="flex items-start mb-12">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-semibold mb-4">Key Signatures</h2>
            <p className="text-lg mb-4">
              A key signature indicates the key of a piece of music by specifying which notes are sharp or flat throughout the composition. It appears at the beginning of the staff.
            </p>
            <p className="text-lg mb-4">
              For example:
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>Key of C Major has no sharps or flats</li>
                <li>Key of G Major has one sharp (F#)</li>
                <li>Key of D Major has two sharps (F# and C#)</li>
              </ul>
            </p>
            <p className="text-lg mt-4">
              Understanding key signatures is essential for musicians, as it tells them which notes to play sharp or flat, helping maintain consistency across different parts of the music.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://muted.io/images/covers/key-signatures.png"
              alt="Key Signatures"
              className="rounded-lg w-full"
            />
          </div>
        </div>
        {/* Section 4: Chords */}
        <div className="flex items-start mb-12">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-semibold mb-4">Chords</h2>
            <p className="text-lg mb-4">
              A chord is a group of notes played together. The most common chord is the triad, which consists of three notes. Chords are built from scales, and they form the foundation of harmony in music.
            </p>
            <p className="text-lg mb-4">
              For example, the C Major chord consists of the notes:
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>C, E, G</li>
              </ul>
              The C Minor chord consists of the notes:
              <ul className="list-disc pl-5 mt-2 text-lg">
                <li>C, Eb, G</li>
              </ul>
            </p>
            <p className="text-lg mt-4">
              Chords are essential for creating harmony and are used in the accompaniment of melodies.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://onlineguitarbooks.com/wp-content/uploads/2024/04/12-minor-chords-on-guitar-2.png"
              alt="Chords"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Section 5: Rhythm and Time Signatures */}
        <div className="flex items-start mb-12">
          <div className="w-1/2 pr-8">
            <h2 className="text-2xl font-semibold mb-4">Rhythm and Time Signatures</h2>
            <p className="text-lg mb-4">
              Rhythm refers to the timing of musical notes. A time signature is placed at the beginning of a piece of music and indicates the number of beats per measure and the type of note that gets the beat.
            </p>
            <p className="text-lg mb-4">
              The most common time signature is 4/4, meaning there are 4 beats per measure, and the quarter note gets one beat. Other common time signatures include 3/4 (waltz time) and 6/8.
            </p>
          </div>
          <div className="w-1/2">
            <img
              src="https://hellomusictheory.com/wp-content/uploads/2019/03/simple-time-signature-chart.jpg"
              alt="4/4 Time Signature"
              className="rounded-lg w-full"
            />
          </div>
        </div>

        {/* Back Button */}
        <div className="text-center mt-12">
          <a
            href="/tutorials"
            className="bg-[#2C3E50] text-white rounded-full px-6 py-3 hover:bg-[#34495E] transition-colors"
          >
            Back to Tutorials
          </a>
        </div>
      </div>
    </div>
  );
};

export default MusicTheory;
