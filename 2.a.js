let sumTo = (n) =>{
    let sum=0;
    let i;
    for(i=1;i<=n;i++)
    {
        sum+=i;
    }
    return sum;
}
console.log(sumTo(100));