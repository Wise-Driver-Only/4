const sumTo = (n) => {
    if (n==1){
        return sumTo(n);
    }
    else if (n>1)
        {
        return sumTo(n) = n + sumTo(n-1);
    }
}
console.log(sumTo(2));