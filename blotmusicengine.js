// welcome to blot!

const tempo = true
//creates Turtle
const testTurtle = createTurtle();
//initiates Turtle
testTurtle.forward(1)
//Function to play sound
function playSound(pitch, speed,i){
  //console.log(speed)
    
  if(i%2==0){
    testTurtle.setAngle(pitch+180);
  }else{
        testTurtle.setAngle(pitch);
  }
  testTurtle.forward(speed);

}
//function to convert Rad into Degrees
function toDegrees (angle) {
  return angle * (180 / Math.PI);
}
//function to get Angle from freq
function getAngle(freq){
  let angle = Math.atan((2000-freq)/(2000+freq))
  angle = toDegrees(angle)
  return angle
}
//object with all freq
const noteFrequencies = {
"A0": 27.5,
"A#0": 29.14,
"B0": 30.87,
"C1": 32.7,
"C#1": 34.65,
"D1": 36.71,
"D#1": 38.89,
"E1": 41.2,
"F1": 43.65,
"F#1": 46.25,
"G1": 49,
"G#1": 51.91,
"A1": 55,
"A#1": 58.27,
"B1": 61.74,
"C2": 65.41,
"C#2": 69.3,
"D2": 73.42,
"D#2": 77.78,
"E2": 82.41,
"F2": 87.31,
"F#2": 92.5,
"G2": 98,
"G#2": 103.83,
"A2": 110,
"A#2": 116.54,
"B2": 123.47,
"C3": 130.81,
"C#3": 138.59,
"D3": 146.83,
"D#3": 155.56,
"E3": 164.81,
"F3": 174.61,
"F#3": 185,
"G3": 196,
"G#3": 207.65,
"A3": 220,
"A#3": 233.08,
"B3": 246.94,
"C4": 261.63,
"C#4": 277.18,
"D4": 293.66,
"D#4": 311.13,
"E4": 329.63,
"F4": 349.23,
"F#4": 369.99,
"G4": 392,
"G#4": 415.3,
"A4": 440,
"A#4": 466.16,
"B4": 493.88,
"C5": 523.25,
"C#5": 554.37,
"D5": 587.33,
"D#5": 622.25,
"E5": 659.25,
"F5": 698.46,
"F#5": 739.99,
"G5": 783.99,
"G#5": 830.61,
"A5": 880,
"A#5": 932.33,
"B5": 987.77,
"C6": 1046.5,
"C#6": 1108.73,
"D6": 1174.66,
"D#6": 1244.51,
"E6": 1318.51,
"F6": 1396.91,
"F#6": 1479.98,
"G6": 1567.98,
"G#6": 1661.22,
"A6": 1760,

 }
//function to play list of notes
function playSong(notes){
  let i = 0
  notes.forEach((n)=>{
    let freq = 0;
    let speed = 1
    
    if(typeof n[0] == 'number'){
      
      
       freq = getAngle(n[0])
    }else{
      console.log(n)
       freq = getAngle(noteFrequencies[n[0]])
    }
   
    

    playSound(freq,n[1], i)
    i++
  })
}

let waylesssadintro = [["D4",10],["F#4",10],[2,5],["F#4",5],['D4',5],
                  ['C#4',15],["E4",10],[2,5],["D4",5],["A3",5],
                  ['B3',15],['D4',10],[2,5],['A3',5],['B3',5],['D4',5],[2,5]
                 ,['A3',5],['B3',5],['D4',5],[2,5],['A3',5],['B3',5],['A3',5]]
let waylesssadp1 = [[2,10],["D5",7],["E5",3],["D5",5],[2,5],["D5",5],["A4",5],
                   ["B4",5],['D5',5],['D5',5],['E5',5],['F#5',3.3],['E5',4],['D5',3.3],[2,5]]
let waylesssadp2 = [["D5",5],['D5',5],['E5',5],['F#5',5],['A5',5],['B5',15],['A5',5],['F#5',2.5],['E5',2.5],
                   ['D5',5],[2,20],['D5',5],['A4',5],['D5',10],['D5',10],['D5',10],['E5',5],
                   ['B4',5],['D5',10]]

playSong(waylesssadintro)
playSong(waylesssadintro)
playSong(waylesssadp1)
playSong(waylesssadp1)
playSong(waylesssadp2)
testTurtle.translate(
  [65, 65], 
  testTurtle.cc
);

drawTurtles([
    testTurtle
]);