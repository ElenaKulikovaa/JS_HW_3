// 1 задание

/*let a = 1;
    b = 35;

while (a < 50) {
    console.log(a);
    a++;
}

while (b > 8) {
    console.log(b);
    b--;
}*/


// 2 задание

/*let c = 89;

while (c > 11) {
    document.write(c + '<br/>');
    c--;
}*/


// 3 задание

/*let sum = 0;
    sumTotal = +sum;

while (sum < 100) {
    sumTotal += sum;
    sum++;
}
 console.log(sumTotal);*/


 // 4 задание

/*let str = '12345',
    SUM = 0;

for (let i = 0; i <= 4; i++) {
    for (let j = 0; j <= +str[i]; j++) {
        SUM += j;
    }
    console.log(SUM);
    SUM = 0;
}*/


// 5 задание

/*for (let i = 8; i < 56; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let d = 8;

while (d < 56) {
    console.log(d);
    d += 2;
}*/


// 6 задание

/*let e = 0;

for (let i = 2; i <= 10; i++) {
    for (let j = 2; j <= 10; j++) {
        e = i*j;
        document.write(`${i}*${j}=${e}<br/>`);
    }
}*/


// 7 задание

/*let f = 1000;
    num = 4;

do {
    console.log(f);
    f /= 2;
} while (f > 50);*/


// 8 задание

/*let k = 0;
    l = 0;
    m = 0;

while (true) {
    let g = +prompt('Введите число');
    if (g == '' || g == 0) {
        alert('Ошибка ввода');
        break;
    } else {
        k += g;
        l++;
    }
    m = k/l;    
}

console.log(`Сумма: ${k}, Cреднее значение: ${m}`);*/


// 9 задание - не сделала

let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57',
    arr = str.split();

console.log(Math.max(n));

//for (let i = 0; i<arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log(`Min: ${min}. Max: ${+max}.`);


// 10 задание

/*let p = '84356';
    r = 0;
    q = p.split('');

// a.
console.log(q);
// b.
console.log(p.length);
// c.
for (let i = 0; i < 5; i++) {
    r += +p[i];
}
console.log(r);
// d.
s = q.reverse().join('');
console.log(s);*/