let namespace = "pikapix";

/**
 * @author Frank Dip
 * @description Drawing a pixel pikachu with canvas
 * @version 1.0
 */

/********************************************//**
 *  vanilla JS DOM selectors
 ***********************************************/

const canvas = document.getElementById(`js-${namespace}-canvas`);

let size = 15;
let spacer = 1;

const pikachu = {
 art: [
   //black
   {
     color: "#000000",
     pixel: [
       //row 1 black
       {x: 0, y: 0},
       {x: size + spacer, y: 0},
       {x: size * 26 + spacer * 26, y: 0},
       {x: size * 27 + spacer * 27, y: 0},

       //row 2 black
       {x: 0, y: size + spacer},
       {x: size + spacer, y: size + spacer},
       {x: size * 2 + spacer * 2, y: size + spacer},
       {x: size * 3 + spacer * 3, y: size + spacer},
       {x: size * 24 + spacer * 24, y: size + spacer},
       {x: size * 25 + spacer * 25, y: size + spacer},
       {x: size * 26 + spacer * 26, y: size + spacer},
       {x: size * 27 + spacer * 27, y: size + spacer},

       //row 3 black
       {x: 0, y: size * 2+ spacer * 2},
       {x: size + spacer, y: size * 2 + spacer * 2},
       {x: size * 2 + spacer * 2, y: size * 2 + spacer * 2},
       {x: size * 4 + spacer * 4, y: size * 2 + spacer * 2},
       {x: size * 23 + spacer * 23, y: size * 2 + spacer * 2},
       {x: size * 25 + spacer * 25, y: size * 2 + spacer * 2},
       {x: size * 26 + spacer * 26, y: size * 2 + spacer * 2},
       {x: size * 27 + spacer * 27, y: size * 2 + spacer * 2},

       //row 4 black
       {x: 0, y: size * 3+ spacer * 3},
       {x: size + spacer, y: size * 3 + spacer * 3},
       {x: size * 2 + spacer * 2, y: size * 3 + spacer * 3},
       {x: size * 5 + spacer * 5, y: size * 3 + spacer * 3},
       {x: size * 6 + spacer * 6, y: size * 3 + spacer * 3},
       {x: size * 21 + spacer * 21, y: size * 3 + spacer * 3},
       {x: size * 22 + spacer * 22, y: size * 3 + spacer * 3},
       {x: size * 25 + spacer * 25, y: size * 3 + spacer * 3},
       {x: size * 26 + spacer * 26, y: size * 3 + spacer * 3},
       {x: size * 27 + spacer * 27, y: size * 3 + spacer * 3},

       // row 5 black
       {x: size + spacer, y: size * 4 + spacer * 4},
       {x: size * 2 + spacer * 2, y: size * 4 + spacer * 4},
       {x: size * 7 + spacer * 7, y: size * 4 + spacer * 4},
       {x: size * 20 + spacer * 20, y: size * 4 + spacer * 4},
       {x: size * 25 + spacer * 25, y: size * 4 + spacer * 4},
       {x: size * 26 + spacer * 26, y: size * 4 + spacer * 4},

       // row 6 black
       {x: size + spacer, y: size * 5 + spacer * 5},
       {x: size * 2 + spacer * 2, y: size * 5 + spacer * 5},
       {x: size * 8 + spacer * 8, y: size * 5 + spacer * 5},
       {x: size * 9 + spacer * 9, y: size * 5 + spacer * 5},
       {x: size * 12 + spacer * 12, y: size * 5 + spacer * 5},
       {x: size * 13 + spacer * 13, y: size * 5 + spacer * 5},
       {x: size * 14 + spacer * 14, y: size * 5 + spacer * 5},
       {x: size * 15 + spacer * 15, y: size * 5 + spacer * 5},
       {x: size * 18 + spacer * 18, y: size * 5 + spacer * 5},
       {x: size * 19 + spacer * 19, y: size * 5 + spacer * 5},
       {x: size * 25 + spacer * 25, y: size * 5 + spacer * 5},
       {x: size * 26 + spacer * 26, y: size * 5 + spacer * 5},

       // row 7 black
       {x: size * 2 + spacer * 2, y: size * 6 + spacer * 6},
       {x: size * 10 + spacer * 10, y: size * 6 + spacer * 6},
       {x: size * 11 + spacer * 11, y: size * 6 + spacer * 6},
       {x: size * 16 + spacer * 16, y: size * 6 + spacer * 6},
       {x: size * 17 + spacer * 17, y: size * 6 + spacer * 6},
       {x: size * 25 + spacer * 25, y: size * 6 + spacer * 6},

       // row 8 black
       {x: size * 2 + spacer * 2, y: size * 7 + spacer * 7},
       {x: size * 25 + spacer * 25, y: size * 7 + spacer * 7},

       // row 9 black
       {x: size * 3 + spacer * 3, y: size * 8 + spacer * 8},
       {x: size * 24 + spacer * 24, y: size * 8 + spacer * 8},

       // row 10 black
       {x: size * 4 + spacer * 4, y: size * 9 + spacer * 9},
       {x: size * 6 + spacer * 6, y: size * 9 + spacer * 9},
       {x: size * 21 + spacer * 21, y: size * 9 + spacer * 9},
       {x: size * 23 + spacer * 23, y: size * 9 + spacer * 9},

       // row 11 black
       {x: size * 5 + spacer * 5, y: size * 10 + spacer * 10},
       {x: size * 22 + spacer * 22, y: size * 10 + spacer * 10},

       // row 12 black
       {x: size * 5 + spacer * 5, y: size * 11 + spacer * 11},
       {x: size * 22 + spacer * 22, y: size * 11 + spacer * 11},

       // row 13 black
       {x: size * 4 + spacer * 4, y: size * 12 + spacer * 12},
       {x: size * 7 + spacer * 7, y: size * 12 + spacer * 12},
       {x: size * 8 + spacer * 8, y: size * 12 + spacer * 12},
       {x: size * 19 + spacer * 19, y: size * 12 + spacer * 12},
       {x: size * 20 + spacer * 20, y: size * 12 + spacer * 12},
       {x: size * 23 + spacer * 23, y: size * 12 + spacer * 12},

       // row 14 black
       {x: size * 4 + spacer * 4, y: size * 13 + spacer * 13},
       {x: size * 6 + spacer * 6, y: size * 13 + spacer * 13},
       {x: size * 8 + spacer * 8, y: size * 13 + spacer * 13},
       {x: size * 9 + spacer * 9, y: size * 13 + spacer * 13},
       {x: size * 18 + spacer * 18, y: size * 13 + spacer * 13},
       {x: size * 19 + spacer * 19, y: size * 13 + spacer * 13},
       {x: size * 21 + spacer * 21, y: size * 13 + spacer * 13},
       {x: size * 23 + spacer * 23, y: size * 13 + spacer * 13},

       // row 15 black
       {x: size * 4 + spacer * 4, y: size * 14 + spacer * 14},
       {x: size * 6 + spacer * 6, y: size * 14 + spacer * 14},
       {x: size * 7 + spacer * 7, y: size * 14 + spacer * 14},
       {x: size * 8 + spacer * 8, y: size * 14 + spacer * 14},
       {x: size * 9 + spacer * 9, y: size * 14 + spacer * 14},
       {x: size * 18 + spacer * 18, y: size * 14 + spacer * 14},
       {x: size * 19 + spacer * 19, y: size * 14 + spacer * 14},
       {x: size * 20 + spacer * 20, y: size * 14 + spacer * 14},
       {x: size * 21 + spacer * 21, y: size * 14 + spacer * 14},
       {x: size * 23 + spacer * 23, y: size * 14 + spacer * 14},

       // row 16 black
       {x: size * 4 + spacer * 4, y: size * 15 + spacer * 15},
       {x: size * 7 + spacer * 7, y: size * 15 + spacer * 15},
       {x: size * 8 + spacer * 8, y: size * 15 + spacer * 15},
       {x: size * 13 + spacer * 13, y: size * 15 + spacer * 15},
       {x: size * 14 + spacer * 14, y: size * 15 + spacer * 15},
       {x: size * 19 + spacer * 19, y: size * 15 + spacer * 15},
       {x: size * 20 + spacer * 20, y: size * 15 + spacer * 15},
       {x: size * 23 + spacer * 23, y: size * 15 + spacer * 15},

       // row 17 black
       {x: size * 3 + spacer * 3, y: size * 16 + spacer * 16},
       {x: size * 24 + spacer * 24, y: size * 16 + spacer * 16},

       // row 18 black
       {x: size * 3 + spacer * 3, y: size * 17 + spacer * 17},
       {x: size * 11 + spacer * 11, y: size * 17 + spacer * 17},
       {x: size * 13 + spacer * 13, y: size * 17 + spacer * 17},
       {x: size * 14 + spacer * 14, y: size * 17 + spacer * 17},
       {x: size * 16 + spacer * 16, y: size * 17 + spacer * 17},
       {x: size * 24 + spacer * 24, y: size * 17 + spacer * 17},

       // row 19 black
       {x: size * 3 + spacer * 3, y: size * 18 + spacer * 18},
       {x: size * 12 + spacer * 12, y: size * 18 + spacer * 18},
       {x: size * 13 + spacer * 13, y: size * 18 + spacer * 18},
       {x: size * 14 + spacer * 14, y: size * 18 + spacer * 18},
       {x: size * 15 + spacer * 15, y: size * 18 + spacer * 18},
       {x: size * 24 + spacer * 24, y: size * 18 + spacer * 18},

       // row 20 black
       {x: size * 4 + spacer * 4, y: size * 19 + spacer * 19},
       {x: size * 12 + spacer * 12, y: size * 19 + spacer * 19},
       {x: size * 15 + spacer * 15, y: size * 19 + spacer * 19},
       {x: size * 23 + spacer * 23, y: size * 19 + spacer * 19},

       // row 21 black
       {x: size * 5 + spacer * 5, y: size * 20 + spacer * 20},
       {x: size * 12 + spacer * 12, y: size * 20 + spacer * 20},
       {x: size * 15 + spacer * 15, y: size * 20 + spacer * 20},
       {x: size * 22 + spacer * 22, y: size * 20 + spacer * 20},

       // row 22 black
       {x: size * 6 + spacer * 6, y: size * 21 + spacer * 21},
       {x: size * 7 + spacer * 7, y: size * 21 + spacer * 21},
       {x: size * 13 + spacer * 13, y: size * 21 + spacer * 21},
       {x: size * 14 + spacer * 14, y: size * 21 + spacer * 21},
       {x: size * 20 + spacer * 20, y: size * 21 + spacer * 21},
       {x: size * 21 + spacer * 21, y: size * 21 + spacer * 21},

       // row 23 black
       {x: size * 8 + spacer * 8, y: size * 22 + spacer * 22},
       {x: size * 9 + spacer * 9, y: size * 22 + spacer * 22},
       {x: size * 10 + spacer * 10, y: size * 22 + spacer * 22},
       {x: size * 17 + spacer * 17, y: size * 22 + spacer * 22},
       {x: size * 18 + spacer * 18, y: size * 22 + spacer * 22},
       {x: size * 19 + spacer * 19, y: size * 22 + spacer * 22},

       // row 24 black
       {x: size * 11 + spacer * 11, y: size * 23 + spacer * 23},
       {x: size * 12 + spacer * 12, y: size * 23 + spacer * 23},
       {x: size * 13 + spacer * 13, y: size * 23 + spacer * 23},
       {x: size * 14 + spacer * 14, y: size * 23 + spacer * 23},
       {x: size * 15 + spacer * 15, y: size * 23 + spacer * 23},
       {x: size * 16 + spacer * 16, y: size * 23 + spacer * 23}
     ]
   },
   //yellow
   {
     color: "#FFEA00",
     pixel: [
       //row 3 yellow
       {x: size * 3 + spacer * 3, y: size * 2 + spacer * 2},
       {x: size * 24 + spacer * 24, y: size * 2 + spacer * 2},

       //row 4 yellow
       {x: size * 3 + spacer * 3, y: size * 3 + spacer * 3},
       {x: size * 4 + spacer * 4, y: size * 3 + spacer * 3},
       {x: size * 23 + spacer * 23, y: size * 3 + spacer * 3},
       {x: size * 24 + spacer * 24, y: size * 3 + spacer * 3},

       //row 5 yellow
       {x: size * 3 + spacer * 3, y: size * 4 + spacer * 4},
       {x: size * 4 + spacer * 4, y: size * 4 + spacer * 4},
       {x: size * 5 + spacer * 5, y: size * 4 + spacer * 4},
       {x: size * 6 + spacer * 6, y: size * 4 + spacer * 4},
       {x: size * 21 + spacer * 21, y: size * 4 + spacer * 4},
       {x: size * 22 + spacer * 22, y: size * 4 + spacer * 4},
       {x: size * 23 + spacer * 23, y: size * 4 + spacer * 4},
       {x: size * 24 + spacer * 24, y: size * 4 + spacer * 4},

       // row 6 yellow
       {x: size * 3 + spacer * 3, y: size * 5 + spacer * 5},
       {x: size * 4 + spacer * 4, y: size * 5 + spacer * 5},
       {x: size * 5 + spacer * 5, y: size * 5 + spacer * 5},
       {x: size * 6 + spacer * 6, y: size * 5 + spacer * 5},
       {x: size * 7 + spacer * 7, y: size * 5 + spacer * 5},
       {x: size * 20 + spacer * 20, y: size * 5 + spacer * 5},
       {x: size * 21 + spacer * 21, y: size * 5 + spacer * 5},
       {x: size * 22 + spacer * 22, y: size * 5 + spacer * 5},
       {x: size * 23 + spacer * 23, y: size * 5 + spacer * 5},
       {x: size * 24 + spacer * 24, y: size * 5 + spacer * 5},

       // row 7 yellow
       {x: size * 3 + spacer * 3, y: size * 6 + spacer * 6},
       {x: size * 4 + spacer * 4, y: size * 6 + spacer * 6},
       {x: size * 5 + spacer * 5, y: size * 6 + spacer * 6},
       {x: size * 6 + spacer * 6, y: size * 6 + spacer * 6},
       {x: size * 7 + spacer * 7, y: size * 6 + spacer * 6},
       {x: size * 8 + spacer * 8, y: size * 6 + spacer * 6},
       {x: size * 9 + spacer * 9, y: size * 6 + spacer * 6},
       {x: size * 12 + spacer * 12, y: size * 6 + spacer * 6},
       {x: size * 13 + spacer * 13, y: size * 6 + spacer * 6},
       {x: size * 14 + spacer * 14, y: size * 6 + spacer * 6},
       {x: size * 15 + spacer * 15, y: size * 6 + spacer * 6},
       {x: size * 18 + spacer * 18, y: size * 6 + spacer * 6},
       {x: size * 19 + spacer * 19, y: size * 6 + spacer * 6},
       {x: size * 20 + spacer * 20, y: size * 6 + spacer * 6},
       {x: size * 21 + spacer * 21, y: size * 6 + spacer * 6},
       {x: size * 22 + spacer * 22, y: size * 6 + spacer * 6},
       {x: size * 23 + spacer * 23, y: size * 6 + spacer * 6},
       {x: size * 24 + spacer * 24, y: size * 6 + spacer * 6},

       // row 8 yellow
       {x: size * 3 + spacer * 3, y: size * 7 + spacer * 7},
       {x: size * 4 + spacer * 4, y: size * 7 + spacer * 7},
       {x: size * 5 + spacer * 5, y: size * 7 + spacer * 7},
       {x: size * 6 + spacer * 6, y: size * 7 + spacer * 7},
       {x: size * 7 + spacer * 7, y: size * 7 + spacer * 7},
       {x: size * 8 + spacer * 8, y: size * 7 + spacer * 7},
       {x: size * 9 + spacer * 9, y: size * 7 + spacer * 7},
       {x: size * 10 + spacer * 10, y: size * 7 + spacer * 7},
       {x: size * 11 + spacer * 11, y: size * 7 + spacer * 7},
       {x: size * 12 + spacer * 12, y: size * 7 + spacer * 7},
       {x: size * 13 + spacer * 13, y: size * 7 + spacer * 7},
       {x: size * 14 + spacer * 14, y: size * 7 + spacer * 7},
       {x: size * 15 + spacer * 15, y: size * 7 + spacer * 7},
       {x: size * 16 + spacer * 16, y: size * 7 + spacer * 7},
       {x: size * 17 + spacer * 17, y: size * 7 + spacer * 7},
       {x: size * 18 + spacer * 18, y: size * 7 + spacer * 7},
       {x: size * 19 + spacer * 19, y: size * 7 + spacer * 7},
       {x: size * 20 + spacer * 20, y: size * 7 + spacer * 7},
       {x: size * 21 + spacer * 21, y: size * 7 + spacer * 7},
       {x: size * 22 + spacer * 22, y: size * 7 + spacer * 7},
       {x: size * 23 + spacer * 23, y: size * 7 + spacer * 7},
       {x: size * 24 + spacer * 24, y: size * 7 + spacer * 7},

       // row 9 yellow
       {x: size * 4 + spacer * 4, y: size * 8 + spacer * 8},
       {x: size * 5 + spacer * 5, y: size * 8 + spacer * 8},
       {x: size * 6 + spacer * 6, y: size * 8 + spacer * 8},
       {x: size * 7 + spacer * 7, y: size * 8 + spacer * 8},
       {x: size * 8 + spacer * 8, y: size * 8 + spacer * 8},
       {x: size * 9 + spacer * 9, y: size * 8 + spacer * 8},
       {x: size * 10 + spacer * 10, y: size * 8 + spacer * 8},
       {x: size * 11 + spacer * 11, y: size * 8 + spacer * 8},
       {x: size * 12 + spacer * 12, y: size * 8 + spacer * 8},
       {x: size * 13 + spacer * 13, y: size * 8 + spacer * 8},
       {x: size * 14 + spacer * 14, y: size * 8 + spacer * 8},
       {x: size * 15 + spacer * 15, y: size * 8 + spacer * 8},
       {x: size * 16 + spacer * 16, y: size * 8 + spacer * 8},
       {x: size * 17 + spacer * 17, y: size * 8 + spacer * 8},
       {x: size * 18 + spacer * 18, y: size * 8 + spacer * 8},
       {x: size * 19 + spacer * 19, y: size * 8 + spacer * 8},
       {x: size * 20 + spacer * 20, y: size * 8 + spacer * 8},
       {x: size * 21 + spacer * 21, y: size * 8 + spacer * 8},
       {x: size * 22 + spacer * 22, y: size * 8 + spacer * 8},
       {x: size * 23 + spacer * 23, y: size * 8 + spacer * 8},

       // row 10 yellow
       {x: size * 5 + spacer * 5, y: size * 9 + spacer * 9},
       {x: size * 7 + spacer * 7, y: size * 9 + spacer * 9},
       {x: size * 8 + spacer * 8, y: size * 9 + spacer * 9},
       {x: size * 9 + spacer * 9, y: size * 9 + spacer * 9},
       {x: size * 10 + spacer * 10, y: size * 9 + spacer * 9},
       {x: size * 11 + spacer * 11, y: size * 9 + spacer * 9},
       {x: size * 12 + spacer * 12, y: size * 9 + spacer * 9},
       {x: size * 13 + spacer * 13, y: size * 9 + spacer * 9},
       {x: size * 14 + spacer * 14, y: size * 9 + spacer * 9},
       {x: size * 15 + spacer * 15, y: size * 9 + spacer * 9},
       {x: size * 16 + spacer * 16, y: size * 9 + spacer * 9},
       {x: size * 17 + spacer * 17, y: size * 9 + spacer * 9},
       {x: size * 18 + spacer * 18, y: size * 9 + spacer * 9},
       {x: size * 19 + spacer * 19, y: size * 9 + spacer * 9},
       {x: size * 20 + spacer * 20, y: size * 9 + spacer * 9},
       {x: size * 22 + spacer * 22, y: size * 9 + spacer * 9},

       // row 11 yellow
       {x: size * 6 + spacer * 6, y: size * 10 + spacer * 10},
       {x: size * 7 + spacer * 7, y: size * 10 + spacer * 10},
       {x: size * 8 + spacer * 8, y: size * 10 + spacer * 10},
       {x: size * 9 + spacer * 9, y: size * 10 + spacer * 10},
       {x: size * 10 + spacer * 10, y: size * 10 + spacer * 10},
       {x: size * 11 + spacer * 11, y: size * 10 + spacer * 10},
       {x: size * 12 + spacer * 12, y: size * 10 + spacer * 10},
       {x: size * 13 + spacer * 13, y: size * 10 + spacer * 10},
       {x: size * 14 + spacer * 14, y: size * 10 + spacer * 10},
       {x: size * 15 + spacer * 15, y: size * 10 + spacer * 10},
       {x: size * 16 + spacer * 16, y: size * 10 + spacer * 10},
       {x: size * 17 + spacer * 17, y: size * 10 + spacer * 10},
       {x: size * 18 + spacer * 18, y: size * 10 + spacer * 10},
       {x: size * 19 + spacer * 19, y: size * 10 + spacer * 10},
       {x: size * 20 + spacer * 20, y: size * 10 + spacer * 10},
       {x: size * 21 + spacer * 21, y: size * 10 + spacer * 10},

       // row 12 yellow
       {x: size * 6 + spacer * 6, y: size * 11 + spacer * 11},
       {x: size * 7 + spacer * 7, y: size * 11 + spacer * 11},
       {x: size * 8 + spacer * 8, y: size * 11 + spacer * 11},
       {x: size * 9 + spacer * 9, y: size * 11 + spacer * 11},
       {x: size * 10 + spacer * 10, y: size * 11 + spacer * 11},
       {x: size * 11 + spacer * 11, y: size * 11 + spacer * 11},
       {x: size * 12 + spacer * 12, y: size * 11 + spacer * 11},
       {x: size * 13 + spacer * 13, y: size * 11 + spacer * 11},
       {x: size * 14 + spacer * 14, y: size * 11 + spacer * 11},
       {x: size * 15 + spacer * 15, y: size * 11 + spacer * 11},
       {x: size * 16 + spacer * 16, y: size * 11 + spacer * 11},
       {x: size * 17 + spacer * 17, y: size * 11 + spacer * 11},
       {x: size * 18 + spacer * 18, y: size * 11 + spacer * 11},
       {x: size * 19 + spacer * 19, y: size * 11 + spacer * 11},
       {x: size * 20 + spacer * 20, y: size * 11 + spacer * 11},
       {x: size * 21 + spacer * 21, y: size * 11 + spacer * 11},

       // row 13 yellow
       {x: size * 5 + spacer * 5, y: size * 12 + spacer * 12},
       {x: size * 6 + spacer * 6, y: size * 12 + spacer * 12},
       {x: size * 9 + spacer * 9, y: size * 12 + spacer * 12},
       {x: size * 10 + spacer * 10, y: size * 12 + spacer * 12},
       {x: size * 11 + spacer * 11, y: size * 12 + spacer * 12},
       {x: size * 12 + spacer * 12, y: size * 12 + spacer * 12},
       {x: size * 13 + spacer * 13, y: size * 12 + spacer * 12},
       {x: size * 14 + spacer * 14, y: size * 12 + spacer * 12},
       {x: size * 15 + spacer * 15, y: size * 12 + spacer * 12},
       {x: size * 16 + spacer * 16, y: size * 12 + spacer * 12},
       {x: size * 17 + spacer * 17, y: size * 12 + spacer * 12},
       {x: size * 18 + spacer * 18, y: size * 12 + spacer * 12},
       {x: size * 21 + spacer * 21, y: size * 12 + spacer * 12},
       {x: size * 22 + spacer * 22, y: size * 12 + spacer * 12},

       // row 14 yellow
       {x: size * 5 + spacer * 5, y: size * 13 + spacer * 13},
       {x: size * 10 + spacer * 10, y: size * 13 + spacer * 13},
       {x: size * 11 + spacer * 11, y: size * 13 + spacer * 13},
       {x: size * 12 + spacer * 12, y: size * 13 + spacer * 13},
       {x: size * 13 + spacer * 13, y: size * 13 + spacer * 13},
       {x: size * 14 + spacer * 14, y: size * 13 + spacer * 13},
       {x: size * 15 + spacer * 15, y: size * 13 + spacer * 13},
       {x: size * 16 + spacer * 16, y: size * 13 + spacer * 13},
       {x: size * 17 + spacer * 17, y: size * 13 + spacer * 13},
       {x: size * 22 + spacer * 22, y: size * 13 + spacer * 13},

       // row 15 yellow
       {x: size * 5 + spacer * 5, y: size * 14 + spacer * 14},
       {x: size * 10 + spacer * 10, y: size * 14 + spacer * 14},
       {x: size * 11 + spacer * 11, y: size * 14 + spacer * 14},
       {x: size * 12 + spacer * 12, y: size * 14 + spacer * 14},
       {x: size * 13 + spacer * 13, y: size * 14 + spacer * 14},
       {x: size * 14 + spacer * 14, y: size * 14 + spacer * 14},
       {x: size * 15 + spacer * 15, y: size * 14 + spacer * 14},
       {x: size * 16 + spacer * 16, y: size * 14 + spacer * 14},
       {x: size * 17 + spacer * 17, y: size * 14 + spacer * 14},
       {x: size * 22 + spacer * 22, y: size * 14 + spacer * 14},

       // row 16 yellow
       {x: size * 5 + spacer * 5, y: size * 15 + spacer * 15},
       {x: size * 6 + spacer * 6, y: size * 15 + spacer * 15},
       {x: size * 9 + spacer * 9, y: size * 15 + spacer * 15},
       {x: size * 10 + spacer * 10, y: size * 15 + spacer * 15},
       {x: size * 11 + spacer * 11, y: size * 15 + spacer * 15},
       {x: size * 12 + spacer * 12, y: size * 15 + spacer * 15},
       {x: size * 15 + spacer * 15, y: size * 15 + spacer * 15},
       {x: size * 16 + spacer * 16, y: size * 15 + spacer * 15},
       {x: size * 17 + spacer * 17, y: size * 15 + spacer * 15},
       {x: size * 18 + spacer * 18, y: size * 15 + spacer * 15},
       {x: size * 21 + spacer * 21, y: size * 15 + spacer * 15},
       {x: size * 22 + spacer * 22, y: size * 15 + spacer * 15},

       // row 17 yellow
       {x: size * 4 + spacer * 4, y: size * 16 + spacer * 16},
       {x: size * 5 + spacer * 5, y: size * 16 + spacer * 16},
       {x: size * 8 + spacer * 8, y: size * 16 + spacer * 16},
       {x: size * 9 + spacer * 9, y: size * 16 + spacer * 16},
       {x: size * 10 + spacer * 10, y: size * 16 + spacer * 16},
       {x: size * 11 + spacer * 11, y: size * 16 + spacer * 16},
       {x: size * 12 + spacer * 12, y: size * 16 + spacer * 16},
       {x: size * 13 + spacer * 13, y: size * 16 + spacer * 16},
       {x: size * 14 + spacer * 14, y: size * 16 + spacer * 16},
       {x: size * 15 + spacer * 15, y: size * 16 + spacer * 16},
       {x: size * 16 + spacer * 16, y: size * 16 + spacer * 16},
       {x: size * 17 + spacer * 17, y: size * 16 + spacer * 16},
       {x: size * 18 + spacer * 18, y: size * 16 + spacer * 16},
       {x: size * 19 + spacer * 19, y: size * 16 + spacer * 16},
       {x: size * 22 + spacer * 22, y: size * 16 + spacer * 16},
       {x: size * 23 + spacer * 23, y: size * 16 + spacer * 16},

       // row 18 yellow
       {x: size * 4 + spacer * 4, y: size * 17 + spacer * 17},
       {x: size * 9 + spacer * 9, y: size * 17 + spacer * 17},
       {x: size * 10 + spacer * 10, y: size * 17 + spacer * 17},
       {x: size * 12 + spacer * 12, y: size * 17 + spacer * 17},
       {x: size * 15 + spacer * 15, y: size * 17 + spacer * 17},
       {x: size * 17 + spacer * 17, y: size * 17 + spacer * 17},
       {x: size * 18 + spacer * 18, y: size * 17 + spacer * 17},
       {x: size * 23 + spacer * 23, y: size * 17 + spacer * 17},

       // row 19 yellow
       {x: size * 4 + spacer * 4, y: size * 18 + spacer * 18},
       {x: size * 9 + spacer * 9, y: size * 18 + spacer * 18},
       {x: size * 10 + spacer * 10, y: size * 18 + spacer * 18},
       {x: size * 11 + spacer * 11, y: size * 18 + spacer * 18},
       {x: size * 16 + spacer * 16, y: size * 18 + spacer * 18},
       {x: size * 17 + spacer * 17, y: size * 18 + spacer * 18},
       {x: size * 18 + spacer * 18, y: size * 18 + spacer * 18},
       {x: size * 23 + spacer * 23, y: size * 18 + spacer * 18},

       // row 20 yellow
       {x: size * 5 + spacer * 5, y: size * 19 + spacer * 19},
       {x: size * 8 + spacer * 8, y: size * 19 + spacer * 19},
       {x: size * 9 + spacer * 9, y: size * 19 + spacer * 19},
       {x: size * 10 + spacer * 10, y: size * 19 + spacer * 19},
       {x: size * 11 + spacer * 11, y: size * 19 + spacer * 19},
       {x: size * 16 + spacer * 16, y: size * 19 + spacer * 19},
       {x: size * 17 + spacer * 17, y: size * 19 + spacer * 19},
       {x: size * 18 + spacer * 18, y: size * 19 + spacer * 19},
       {x: size * 19 + spacer * 19, y: size * 19 + spacer * 19},
       {x: size * 22 + spacer * 22, y: size * 19 + spacer * 19},

       // row 21 yellow
       {x: size * 6 + spacer * 6, y: size * 20 + spacer * 20},
       {x: size * 7 + spacer * 7, y: size * 20 + spacer * 20},
       {x: size * 8 + spacer * 8, y: size * 20 + spacer * 20},
       {x: size * 9 + spacer * 9, y: size * 20 + spacer * 20},
       {x: size * 10 + spacer * 10, y: size * 20 + spacer * 20},
       {x: size * 11 + spacer * 11, y: size * 20 + spacer * 20},
       {x: size * 16 + spacer * 16, y: size * 20 + spacer * 20},
       {x: size * 17 + spacer * 17, y: size * 20 + spacer * 20},
       {x: size * 18 + spacer * 18, y: size * 20 + spacer * 20},
       {x: size * 19 + spacer * 19, y: size * 20 + spacer * 20},
       {x: size * 20 + spacer * 20, y: size * 20 + spacer * 20},
       {x: size * 21 + spacer * 21, y: size * 20 + spacer * 20},

       // row 22 yellow
       {x: size * 8 + spacer * 8, y: size * 21 + spacer * 21},
       {x: size * 9 + spacer * 9, y: size * 21 + spacer * 21},
       {x: size * 10 + spacer * 10, y: size * 21 + spacer * 21},
       {x: size * 11 + spacer * 11, y: size * 21 + spacer * 21},
       {x: size * 12 + spacer * 12, y: size * 21 + spacer * 21},
       {x: size * 15 + spacer * 15, y: size * 21 + spacer * 21},
       {x: size * 16 + spacer * 16, y: size * 21 + spacer * 21},
       {x: size * 17 + spacer * 17, y: size * 21 + spacer * 21},
       {x: size * 18 + spacer * 18, y: size * 21 + spacer * 21},
       {x: size * 19 + spacer * 19, y: size * 21 + spacer * 21},

       // row 23 yellow
       {x: size * 11 + spacer * 11, y: size * 22 + spacer * 22},
       {x: size * 12 + spacer * 12, y: size * 22 + spacer * 22},
       {x: size * 13 + spacer * 13, y: size * 22 + spacer * 22},
       {x: size * 14 + spacer * 14, y: size * 22 + spacer * 22},
       {x: size * 15 + spacer * 15, y: size * 22 + spacer * 22},
       {x: size * 16 + spacer * 16, y: size * 22 + spacer * 22}
     ]
   },
   // white
   {
     color: "#FFFFFF",
     pixel: [
       // row 14 white
       {x: size * 7 + spacer * 7, y: size * 13 + spacer * 13},
       {x: size * 20 + spacer * 20, y: size * 13 + spacer * 13}
     ]
   },
   // red
   {
     color: "#FF0000",
     pixel: [
       // row 17 red
       {x: size * 6 + spacer * 6, y: size * 16 + spacer * 16},
       {x: size * 7 + spacer * 7, y: size * 16 + spacer * 16},
       {x: size * 20 + spacer * 20, y: size * 16 + spacer * 16},
       {x: size * 21 + spacer * 21, y: size * 16 + spacer * 16},

       // row 18 red
       {x: size * 5 + spacer * 5, y: size * 17 + spacer * 17},
       {x: size * 6 + spacer * 6, y: size * 17 + spacer * 17},
       {x: size * 7 + spacer * 7, y: size * 17 + spacer * 17},
       {x: size * 8 + spacer * 8, y: size * 17 + spacer * 17},
       {x: size * 19 + spacer * 19, y: size * 17 + spacer * 17},
       {x: size * 20 + spacer * 20, y: size * 17 + spacer * 17},
       {x: size * 21 + spacer * 21, y: size * 17 + spacer * 17},
       {x: size * 22 + spacer * 22, y: size * 17 + spacer * 17},

       // row 19 red
       {x: size * 5 + spacer * 5, y: size * 18 + spacer * 18},
       {x: size * 6 + spacer * 6, y: size * 18 + spacer * 18},
       {x: size * 7 + spacer * 7, y: size * 18 + spacer * 18},
       {x: size * 8 + spacer * 8, y: size * 18 + spacer * 18},
       {x: size * 19 + spacer * 19, y: size * 18 + spacer * 18},
       {x: size * 20 + spacer * 20, y: size * 18 + spacer * 18},
       {x: size * 21 + spacer * 21, y: size * 18 + spacer * 18},
       {x: size * 22 + spacer * 22, y: size * 18 + spacer * 18},

       // row 20 red
       {x: size * 6 + spacer * 6, y: size * 19 + spacer * 19},
       {x: size * 7 + spacer * 7, y: size * 19 + spacer * 19},
       {x: size * 13 + spacer * 13, y: size * 19 + spacer * 19},
       {x: size * 14 + spacer * 14, y: size * 19 + spacer * 19},
       {x: size * 20 + spacer * 20, y: size * 19 + spacer * 19},
       {x: size * 21 + spacer * 21, y: size * 19 + spacer * 19},

       // row 21 red
       {x: size * 13 + spacer * 13, y: size * 20 + spacer * 20},
       {x: size * 14 + spacer * 14, y: size * 20 + spacer * 20}
     ]
   }
 ]
};

let ctx = canvas.getContext("2d");

/**
 * @description Loops through pikachu model to draw
 */
pikachu.art.forEach(ele => {
 ele.pixel.forEach(ele1 => pixelColorFillRect(ele.color, ele1.x, ele1.y));
});

/**
 * @description Draws each pixel
 * @param {string} color Takes a hex color value
 * @param {number} startX Takes a number to set the x value
 * @param {number} startY Takes a number to set the y value
 */
function pixelColorFillRect(color, startX, startY) {
 ctx.fillStyle = color;
 ctx.fillRect(startX, startY, size, size);
}
