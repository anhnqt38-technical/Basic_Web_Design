let sum = 0;
let tong_chan = 0;

for (let i = 0; i < 6; i++) {
    sum += i;
    if (i % 2 == 0) {
        tong_chan += i;
    }
}
console.log(sum);
console.log(tong_chan);