//copyProgramming
//how to add a konva component using rea
import { Stage, Circle, Layer, Text } from 'react-konva';
import { useRef, useState } from 'react';
import Konva from 'konva';

//react-konva works in non-strict mode
//so when user change the properties manually; react
// would be able to update or match ;
//only in strict mode can update properties using render function

/*
example
import { useStrictMode} from 'react-konva'
useStrictMode(true)
///this is apply globally

///apply on specific component
<Component width={40} height={40} _useStrictMode />
//if in strict mode the properties will reset back to origin
*/

const Section4 = () => {
  const cirRef = useRef('green');
  const [color, setColor] = useState('brown');

  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        <Text x={200} y={200} text="hello" />
        <Circle
          onDragEnd={() => setColor(Konva.Util.getRandomColor())}
          draggable
          ref={cirRef}
          radius={50}
          x={100}
          y={100}
          fill={color}
        />
      </Layer>
    </Stage>
  );
};

export default Section4;

/*
load minimal version of 'react-konva'
==========
import {Stage, Layer, Rect } from 'react-konva/lib/ReactKonvaCore'
============

//if you want import a shape into Konva namespace you can just
do this
========
import 'konva/lib/shapes/Rect'
===========================
*/

/*
react context is not accessible by children react-konva 
if want to use need to bridge the context by creating a provider
as a child of the Stage
///example -- sample element
const themeRect = () => {
    const value = useContext(ThemeContext)
    return (
        <Rect fill={value} />
    )}
///////===================
//example == sample parent element
const Canvas = () => {

    return (
        <ThemeContext.Consumer>
         {value => (
            <Stage width={width} height={height} >
                <ThemeContext.Provider value={value}>
                <Layer>
                <SomeChildren/>
                </Layer>
                </ThemeContext.Provider>
            </Stage>
         )}
         </ThemeContext.Consumer>
    )}
=============
// THEN USE THIS PARENT
//example 
    const App = ()=> {
        return (
            <ThemeContext.Provider value={value}>
                <Canvas/>
            </ThemeContext.Provider>
        )
    }
*/

////Konva on top of canvas
///react on top of Konva
