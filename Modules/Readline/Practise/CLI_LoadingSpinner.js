const S = ' ';
const C = '*';
const loadingPattern = [
  [
    [S, C, C],
    [S, S, C],
    [S, S, C],
  ],
  [
    [S, S, C],
    [S, S, C],
    [S, C, C],
  ],
  [
    [S, S, S],
    [S, S, C],
    [C, C, C],
  ],
  [
    [S, S, S],
    [C, S, S],
    [C, C, C],
  ],
  [
    [C, S, S],
    [C, S, S],
    [C, C, S],
  ],
  [
    [C, C, S],
    [C, S, S],
    [C, S, S],
  ],
  [
    [C, C, C],
    [C, S, S],
    [S, S, S],
  ],
  [
    [C, C, C],
    [C, S, C],
    [S, S, S],
  ],
];

function renderLoading(design) {
  console.clear();
  console.log("Loading...");

  for (const row of design) {
    console.log(row.join(''));
  }
}

async function Loading() {
  let frameIndex = 0;
  const frameCount = loadingPattern.length;

  const interval = setInterval(() => {
    renderLoading(loadingPattern[frameIndex]);
    frameIndex = (frameIndex + 1) % frameCount;
  }, 500);

  // Run animation for 5 seconds then stop
  setTimeout(() => {
    clearInterval(interval);
    console.clear();
    console.log('✅ Loading complete!');
  }, 10000);
}

Loading();
