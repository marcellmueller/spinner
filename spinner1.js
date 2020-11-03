const spinner = ["\r|   ", "\r/   ", "\r-   ", "\r\\   "];

let i = 0;

let timeout = () => {
  setTimeout(function () {
    console.log(spinner[i]);
    i++;
    i < spinner.length ? timeout() : null;
  }, 100);
};

timeout();

// setTimeout(() => {
//   process.stdout.write("\r|   ");
// }, 100);

// setTimeout(() => {
//   process.stdout.write("\r/   ");
// }, 300);

// setTimeout(() => {
//   process.stdout.write("\r-   ");
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write("\r\\   ");
// }, 700);
