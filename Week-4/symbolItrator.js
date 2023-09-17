class calculator{
    multiply(a,b) {
        return a*b;
    }
}

class scientificCalculator extends calculator{
    power(a){
        return a*a;
    }
}

const object1=new scientificCalculator();
let c=object1.multiply.call(object1,2,3)
console.log(c);

const d=object1.multiply.apply(object1,[2,4])
console.log(d)

const e=object1.multiply.bind(object1,10,5);
console.log(e());