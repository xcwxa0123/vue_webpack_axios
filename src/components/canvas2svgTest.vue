<template>
  <div>
    <canvas id='c' width='300' height='300'></canvas>
    <svg width="580" height="400" xmlns="http://www.w3.org/2000/svg">
        <g>
        <title>background</title>
        <rect fill="#fff" id="canvas_background" height="402" width="582" y="-1" x="-1"/>
        <g display="none" overflow="visible" y="0" x="0" height="100%" width="100%" id="canvasGrid">
        <rect fill="url(#gridpattern)" stroke-width="0" y="0" x="0" height="100%" width="100%"/>
        </g>
        </g>
        <g>
            <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_1" y2="98.45313" x2="318" y1="49.45313" x1="68" stroke-width="1.5" stroke="#000" fill="none"/>
            <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_6" y2="265.32366" x2="92.14286" y1="48.1808" x1="68.57143" stroke-width="1.5" stroke="#000" fill="none"/>
            <line stroke-linecap="undefined" stroke-linejoin="undefined" id="svg_9" y2="98.1808" x2="317.85714" y1="263.89509" x1="92.85714" stroke-width="1.5" stroke="#000" fill="none"/>
        </g>
    </svg>
  </div>
</template>

<script>
/* eslint-disable */
import { fabric } from 'fabric'
export default {
  mounted () {
    // Do some initializing stuff
    fabric.Object.prototype.set({
      transparentCorners: false,
      cornerColor: 'rgba(102,153,255,0.5)',
      cornerSize: 12,
      padding: 5
    })

    // initialize fabric canvas and assign to global windows object for debug
    var canvas = (window._canvas = new fabric.Canvas('c'))
    // var canvasDir = document.createElement('canvas');
    var width = 24
    canvas.width = width
    canvas.height = width
    var context = canvas.getContext('2d')
    context.strokeStyle = '#000000'
    context.lineJoin = 'round'
    context.lineWidth = 8
    context.moveTo(-4, width - 4)
    context.lineTo(width / 2, 6)
    context.lineTo(width + 4, width - 4)
    context.stroke()

    // canvas.add(new fabric.Circle({
    //     radius: 50,
    //     left: 100,
    //     top: 100,
    //     fill: '#0B61A4'
    // }));

    // canvas.add(new fabric.Triangle({
    //     width: 150,
    //     height: 100,
    //     left: 160,
    //     top: 200,
    //     fill: '#00AF64'
    // }));
    fabric.log('看看这是啥', new fabric.Path(canvas))
    // Normal SVG output
    // fabric.log('Normal SVG output: ', canvas.toSVG());
    console.log('看看转出来的svg', canvas.toSVG())

    // // SVG output without preamble
    // fabric.log('SVG output without preamble: ', canvas.toSVG({
    // }));

    // // SVG output with viewBox attribute
    // fabric.log('SVG output with viewBox attribute: ', canvas.toSVG({
    //     viewBox: {
    //         x: 80,
    //         y: 80,
    //         width: 250,
    //         height: 250
    //     }
    // }));
  }
}
</script>
