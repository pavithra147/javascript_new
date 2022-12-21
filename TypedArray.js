const typedArray=new Int8Array(8);
typedArray[0]=[10];
typedArray[1]=[20];

console.log(typedArray);

//property BYTES_PER_ELEMENT
console.log(Float64Array.BYTES_PER_ELEMENT); //this property used to count the numbers of bytes used to store one element
console.log(Int16Array.BYTES_PER_ELEMENT);


//method fill()
const binary=new Uint8Array([1,0,0,4]);
binary.fill(2,1,2);
binary.fill(3,2,3) //(value),(starting position),(end position)
console.log(binary);

