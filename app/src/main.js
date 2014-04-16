/*globals define*/
define(function(require) {
  'use strict';
  // import dependencies
  var Engine = require('famous/core/Engine');
  var Utility = require('famous/utilities/Utility');
  var Surface = require('famous/core/Surface');
  var ContainerSurface = require('famous/surfaces/ContainerSurface');
  var Scrollview = require('famous/views/Scrollview');

  // create the main context
  var mainContext = Engine.createContext();

  // your app here
  var slides = [];

  var container = new ContainerSurface({
    properties:{
      overflow: 'hidden'
    }
  });

  var scrollView = new Scrollview({
    direction: Utility.Direction.X,
    margin: mainContext.getSize()[0] * 3,
    rails: true,
    paginated: true
  });

  function randomPastel() {
    var r = (Math.round(Math.random() * 127) + 127).toString(16);
    var g = (Math.round(Math.random() * 127) + 127).toString(16);
    var b = (Math.round(Math.random() * 127) + 127).toString(16);
    return '#' + r + g + b;
  }

  function createSlides() {

    var slideContent = [
      '<h1>Hello, World!</h1>',
      '<h1>Slide 1</h1>',
      '<h1>Slide 2</h1>',
      '<h1>Slide 3</h1>',
      '<h1>Slide 4</h1>',
      '<h1>Slide 5</h1>',
      '<h1>Slide 6</h1>',
      '<h1>Slide 7</h1>',
      '<h1>Slide 8</h1>',
      '<h1>Slide 9</h1>',
      '<h1>Slide 10</h1>',
      '<h1>Slide 11</h1>',
      '<h1>Slide 12</h1>',
      '<h1>Slide 13</h1>',
      '<h1>Slide 14</h1>',
      '<h1>Slide 15</h1>'
    ];

    scrollView.sequenceFrom(slides);

    mainContext.add(container);
    container.add(scrollView);
    container.pipe(scrollView);

    // Load slides into array
    for (var i = 0; i < slideContent.length; i++) {
      var slide = new Surface({
        content: slideContent[i],
        properties: {
          color: 'white',
          lineHeight: '200%',
          textAlign: 'center',
          fontFamily: 'HelveticaNeue-Light',
          fontSize: '36px',
          backgroundColor: randomPastel()
        }
      });

      slides.push(slide);
    }

  }

  createSlides();

});
