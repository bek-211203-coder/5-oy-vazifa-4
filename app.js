
// masala 1
// let text = ` BEriLgaN MaTndAgI HarflaR`;
// function  func(arg){
//     let str = arg.split('');
//     let upper_case = []; 
//     let lower_case = [];
//     for (const element of str) {
//         if(element >='A' && element <= 'Z'){
//             upper_case.push(element);
//         } else if(element >='a' && element <= 'z'){
//             lower_case.push(element);
//         }
//     }
//     return{upper_case, lower_case};
// }
// console.log(func(text));


// masala 2
// function palindrom(arg_Words){
//     let revesrs_Words = arg_Words.split("").reverse().join("");
//     return revesrs_Words === arg_Words;
// };
// function  check_Words(arg_Check_Words){
//     let checked_Words = '';
//     for (const element of arg_Check_Words) {
//         if(element >= 'a' && element <= 'z' || element >= 'A' && element <= 'Z' || element > '0' && element < '9'){
//             checked_Words += element
//         };
//     };
//     return checked_Words;
// };
// function main_job_palindrom(arg_text){
//     let text_split = arg_text.split(' ');
//     let final_result_palindrom = [];
    
//     for (const element of text_split) {
//         let text_toLower = check_Words(element).toLowerCase();
//         if(palindrom(text_toLower) && text_toLower.length > 1 ){
//             final_result_palindrom.push(element)
//         }
//     }
//     return final_result_palindrom;
// }
// let res = "Anvar radar oldidan o'tayotib, qog'oz bilan madam yozayotganligini ko‘rdi. Sonlar orasida 12321 soni ham bor edi."
// console.log(main_job_palindrom(res));


// masala 3
// function func(numbers) {
//     let countMap = {};
//     let duplicates = [];
//     for (let num of numbers) {
//         if (countMap[num]) {
//             countMap[num] += 1;
//         } else {
//             countMap[num] = 1;
//         }
//     }
//     for (let num in countMap) {
//         if (countMap[num] > 1) {
//             duplicates.push(Number(num));
//         }
//     }
//     return duplicates;
// }
// let numbers = [1, 2, 3, 4, 2, 3, 5, 6, 3, 2];
// console.log(func(numbers));


// masala 5
// function fibonacci(n) {
//     if (n === 0) {
//         return 0;
//     }
//     if (n === 1) {
//         return 1;
//     }
//     return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(5)); 

// const fibonacci = (n) =>{
//     if(n === 0){
//         return 0
//     }
//     if(n === 1){
//         return 1
//     }
//     return fibonacci(n-1) + fibonacci(n-2)
// }
// console.log(fibonacci(8));


// masala 6
// let num = 123456;
// function num_Sum (arg){
//     let sum_ = 0
//     let _ = String(arg).split('');
//     for (const element of _ ) {
//         sum_ += Number(element)
//     }
//     return sum_
// }
// console.log(num_Sum(num));

// masala 8 
// let text = `Matn ichidagi har bir so‘zni teskari qilib, yangi matn hosil qiluvchi funksiya yozing.`;
// function revers_text_words(arg){
//     let  arg_text = arg.split(' ');
//     let new_Text = []
//     for (const element of arg_text) {
//         new_Text.push( element.split('').reverse().join(''));
//     }
//     return new_Text.join(' ');
// };
// console.log(revers_text_words(text));

// uzur ustoz qolgan masalalar shartiga tushunmadim   tushunmadim  va ishlolmadim 
