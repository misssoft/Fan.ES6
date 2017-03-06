console.log('Calculating Fibonacci');

function fibonacciCalculator(arg){
    if (arg <= 0) return 0;
    if (arg == 1) return 1;
    return fibonacciCalculator(arg-1) + fibonacciCalculator(arg-2);
}

for (let i=0; i<=5; i++){
    console.log(`Fibonacci (${i}): = `);
    console.log(fibonacciCalculator(i));
};
