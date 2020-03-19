let str = 'a1b c34d x567z';
let sum = 0;
let a = str.match(/\d/g, '!')

for(i = 0;i < a.length; i++)   
    sum+=+a[i];

 alert(sum);