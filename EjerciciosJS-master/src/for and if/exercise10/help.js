/*
SPOILER ALERT!
Are you sure you whant to see the help? See below 👇
*/

































// Move on... 👇
































let numbers = [2,1,5,4]

for (let currentPosition = 0; currentPosition < numbers.length ; currentPosition++) {
    for (
        let compareWithPosition = currentPosition+1;
        compareWithPosition < numbers.length;
        compareWithPosition++
    ){
        if (numbers[currentPosition] > numbers[compareWithPosition]) {
            console.log(`We need to swap: ${numbers[currentPosition]} > ${numbers[compareWithPosition]}`);
        }
    }
}