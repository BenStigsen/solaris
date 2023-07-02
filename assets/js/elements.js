function incrementZoom() {
  if (zoom < SCALE_MAX) {zoom = (+zoom + SCALE_INCREASE).toFixed(1);}
}

function decrementZoom() {
  if (zoom > SCALE_MIN) {zoom = (+zoom - SCALE_INCREASE).toFixed(1);}
}

function togglePlanetSize() {
  let choice = planetSize.value();
  let value;

  if      (choice == "50x")       {value = 50;}
  else if (choice == "Real Size") {value = 0.02;}

  for (let i = 0; i < planets.length; i++) {
    planets[i].r = planets[i].r * value;
  }
}

const orbitalTimeOptions = new Map([
  ["1 Year (Real Time)", 365.256 * 86400],
  ["1 Day (365x)", 86400],
  ["1 Hour (8,766x)", 3600],
  ["5 Minutes (105,192x)", 5 * 60],
  ["15 Seconds (2,045,433x)", 15],
  ["3 Seconds (10,227,165x)", 3],
  ["1 Second (30,681,495x)", 1]
]);

function changeOrbitalTime() {
  let choice = orbitalTime.value();
  speedMultiplier = 360 / orbitalTimeOptions.get(choice);
}

function addPlanetSizeOptions() {
  createP("Planet Size").position(30, 75);
  planetSize = createSelect();
  planetSize.option("Real Size");
  planetSize.option("50x");
  planetSize.selected("50x");
  planetSize.position(30, 110);
  planetSize.changed(togglePlanetSize);
}

function addOrbitalTimeOptions() {
  createP("Orbital Time (Earth)").position(30, 135);
  orbitalTime = createSelect();

  for (let key of orbitalTimeOptions.keys()) {
    orbitalTime.option(key);
  }

  orbitalTime.selected("15 Seconds (2,045,433x)");
  orbitalTime.position(30, 170);
  orbitalTime.changed(changeOrbitalTime);
}

function addPlanetSelectionOptions() {
  createP("Planet Selection").position(30, 195);
  planetSelection = createSelect();
  planetSelection.option("All Planets");
  planetSelection.position(30, 230);

  for (let i = 0; i < planets.length; i++) {
    planetSelection.option(planets[i].name);
  }
}

function addZoomButtons() {
  createP("Zoom Level").position(30, 15);
  createButton('+').mousePressed(incrementZoom).position(30, 50);
  createButton('-').mousePressed(decrementZoom).position(100, 50);
}

function addHohmannTransferToggle() {
  hohmannCheckbox = createCheckbox('Show Hohmann transfer', false);
  hohmannCheckbox.position(25, 290);
}
