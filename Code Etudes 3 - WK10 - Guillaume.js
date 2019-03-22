//Code Etudes 3 - Week 10 - Guillaume


function delay(x) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(""), x);
  });
}

async function await_delay(x) {
  for ( let i = 5 ; i > 0 ; i-- ) {
    console.log("Countdown: " + i);
    console.log(await delay(x));
  }
  console.log("Boom!");
}

await_delay(1000);
