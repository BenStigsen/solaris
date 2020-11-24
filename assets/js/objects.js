/*
  Script for data and calculations related to planets / moons / suns

  Variables for each planet:
    a:      semi-major axis
    b:      semi-minor axis
    e:      eccentricity
    r:      radius
    au:     astronomical units
    T:      period (years)
    focus:  distance from center to focal point
    angle:  angle (degrees)
    speed:  speed (earth ratio)
*/

function getDistance(x1, y1, x2, y2)
{return Math.sqrt(((x2 - x1) ** 2) + ((y2 - y1) ** 2));}

function getPeriod(au)
{return Math.sqrt(au * au * au);}

function getPeriodSimulation(au)
{return (360 / speedMultiplier) * Math.sqrt(au * au * au);}

function getPeriodDays(T)
{return 365.256 * (T / earth.T);}

function getPerihelion(a, e)
{return a / (1 + e);}

function getAphelion(a, e)
{return a / (1 - e);}

function getAstronomicalUnit(a)
{return a / earth.a;}

function getEarthSpeedRatio(a)
{
  let ratio = earth.a / a;
  return Math.sqrt(ratio * ratio * ratio);
}

function getSemiMajorAxis(a, e)
{return (getPerihelion(a, e) + getAphelion(a, e)) / 2;}

function getSemiMinorAxis(a, e)
{return a * Math.sqrt(1 - (e * e));}

function getFocusPoint(planet)
{
  if (!(planet.b)) {return planet.a * planet.e;}
  return Math.sqrt((planet.a * planet.a) - (planet.b * planet.b));
}

function getTriangleArea(x1, y1, x2, y2, x3, y3)
{
  return 0.5 * Math.abs((x1 * (y2 - y3)) + (x2 * (y3 - y1)) + (x3 * (y1 - y2)));
}

sun = {
  d: 1_392_700,
  r: 696_350 / SCALE_DIVISOR, 
  color: "#FFDD00"
}

mercury = {
  a: 57_900_000,
  e: 0.205,
  au: 0.387,
  d: 4879,
  color: "#333333"
}

venus = {
  a: 108_200_000,
  e: 0.007,
  au: 0.723,
  d: 12104,
  color: "#FFDDDD"
}

earth = {
  a:  149_600_000,  // km
  e:  0.0167,
  au: 1,
  d:  12_756,       // km
  color: "#00FF00"
}

mars = {
  a:  227_920_000,
  e:  0.094,
  au: 1.52,
  d:  6792,
  color: "#FF7F00"
}

jupiter = {
  a:  778_570_000,
  e:  0.0489,
  au: 5.20,
  d:  142_984,
  color: "#555555"
}

saturn = {
  a: 1_433_500_000,
  e: 0.057,
  au: 9.58,
  d: 120_536,
  color: "#FFFF00"
}

uranus = {
  a: 2_872_500_000,
  e: 0.046,
  au: 19.20,
  d: 51_118,
  color: "#FFFF00"
}

neptune = {
  a: 4_495_100_000,
  e: 0.011,
  au: 30.05,
  d: 49528,
  color: "#2288FF"
}

pluto = {
  a: 5_906_400_000,
  e: 0.244,
  au: 39.48,
  d: 2370,
  color: "#2222FF"
}


// Array of planets for easy iteration
// Earth is first to apply setup changes to it
planets = [earth, mercury, venus, mars, jupiter, saturn, uranus, neptune, pluto];
