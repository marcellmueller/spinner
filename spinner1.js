// const spinner = "\r| \r/ \r- \r\\ \r| \r/ \r- \r\\ \r| \r/ \r- \r\\";

// let i = 0;

// let timeout = () => {
//   setTimeout(function () {
//     process.stdout.write(spinner[i]);
//     i++;
//     if (i < spinner.length) {
//       timeout();
//     }
//   }, 100);
// };

// timeout();

setTimeout(() => {
  process.stdout.write("\r|   ");
}, 100);

setTimeout(() => {
  process.stdout.write("\r/   ");
}, 300);

setTimeout(() => {
  process.stdout.write("\r-   ");
}, 500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write("\r\\   ");
}, 700);
