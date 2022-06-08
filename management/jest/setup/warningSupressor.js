// const homepageErrors = console.error.bind(console.error)
// beforeAll(() => {
//   console.error = errormessage => {
//     /*
//       if error is a proptype error and includes the following string: `Warning: Failed prop type:`
//       suppress the error and don't show it
//       if it is not a proptype error, we show it
//     */
//     const suppressedErrors = errormessage
//       .toString()
//       .includes("Warning: Failed prop type:")

//     // !suppressedErrors && homepageErrors(errormessage)
//   }
// })
// afterAll(() => {
//   console.error = homepageErrors
// })