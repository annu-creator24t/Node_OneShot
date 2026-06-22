const runtime = () => {
   console.log(x); // it will throw run time err

   let num=98;
   num(); // it will throw run time err
};

module.exports = runtime;