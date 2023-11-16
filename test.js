function findIndex(n)
{
    const fibo = 2.078087 * parseFloat(Math.log(n)) + 1.672276;
    return Math.round(fibo);
}
const result = findIndex(625013);
console.log(result);