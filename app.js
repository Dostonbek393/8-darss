/*Array1. n natural soni berilgan. 2 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel2(n) nomli funksiya tuzing.
Input: 5
Output: [2, 4, 16, 32, 62]*/

/*function getLevel2(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(2 ** (i + 1));
  }
  return result;
}
console.log(getLevel2(5));*/

/*Array2. n natural soni va A, B butun sonlari berilgan (n > 2). a[0] = A; a[1] = B; boshqa elementlari o'zidan oldingi barcha elementlari yig'indisiga teng bo'lgan massivni hosil qiling va elementlarini chiqaring.
Input: n = 5, A = 2, B = 3
Output: [2, 3, 5, 10, 20]*/

/*function son(n, A, B) {
  let result = [A, B];
  let sum = A + B;
  for (let i = 2; i < n; i++) {
    result.push(sum);
    sum += result[i];
  }
  return result;
}
console.log(son(5, 2, 3));*/

/*Array3. n ta elementdan tashkil topgan massiv berilgan. Uning elementlarini teskari tartibda chiqaruvchi programma tuzilsin.*/

/*function son(n) {
  return n.reverse();
}
console.log(son([1, 2, 3, 4, 5, 6, 7]));*/

/*Array4. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan toqlarini indekslari o'sish tartibida chiqaruvchi va ularning sonini chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 5 7 9 toqlar soni = 3*/

/*function son(n) {
  let result = [];
  let counter = 0;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 1) {
      result.push(n[i]);
      counter++;
    }
  }
  return result;
}
console.log(son([4, 5, 7, 8, 6, 9]));*/

/*Array5. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juftlarini indekslari o'sish tartibida chiqaruvchi, keyin massiv elementlari orasidan toqlarini indekslari kamayish tartibida chiqaruvchi programma tuzilsin.
Massiv elementlar: 4 5 7 8 6 9
Natija: 4 8 6 9 7 5*/

/*let n = [4, 5, 7, 8, 6, 9];
son(n);

function son(n) {
  let result = [];
  let content = [];
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0) {
      result.push(n[i]);
    } else {
      content.push(n[i]);
    }
  }
  console.log(result + "," + content.reverse());
}*/

/*Array6. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[0], A[2], A[4], ... Shart operatori ishlatilmasin.*/

/*let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
son(n);

function son(n) {
  for (let i = 0; i < n.length; i += 2) {
    console.log(n[i]);
  }
}*/

/*Array7. n ta elementdan tashkil topgan massiv berilgan (n juft son). Massiv elementlari orasidan quyidagilarini chiqaruvchi programma tuzilsin. A[n-1], A[n-3], ... A[1]. Shart operatori ishlatilmasin.*/

/*let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
son(n);

function son(n) {
  for (let i = n.length; i >= 1; i -= 2) {
    console.log(n[i]);
  }
}*/

/*Array8. n ta elementdan tashkil topgan massiv berilgan. Dastlab massiv elementlari orasidan juft indekslilarini keyin toq indekslilarini chiqaruvchi programma tuzilsin.
A[0], A[2], A[4], ... A[1], A[3], A[5],.... Shart operatori ishlatilmasin.*/

/*let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
son(n);

function son(n) {
  let result = [];
  for (let i = 0; i < n.length; i += 2) {
    result.push(n[i]);
  }
  for (let i = 1; i < n.length; i += 2) {
    result.push(n[i]);
  }
  console.log(result.join(" "));
}*/

/*Array9. n ta elementdan tashkil topgan massiv berilgan (n juft son). Dastlab massiv elementlari orasidan toq indekslilarini o'shish tartibida keyin juft indekslilarini kamayish tartibida chiqaruvchi programma tuzilsin. A[1], A[3], A[5],.. A[6], A[4], A[2], A[0]. Shart operatori ishlatilmasin.*/

/*let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
son(n);

function son(n) {
  let result = [];
  for (let i = 0; i < n.length; i += 2) {
    result.push(n[i]);
  }
  for (let i = n.length + 1; i >= 0; i -= 2) {
    result.push(n[i]);
  }
  console.log(result.join(" "));
}*/

/*Array10. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlarini quyidagicha chiqaruvchi programma tuzilsin. A[0], A[1], A[n-1], A[n-2], A[2], A[3], A[n-3], A[n-4], ...*/

/*let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = [];

for (let i = 0; i < n.length; i++) {
  result.push(n[i], n[n.length - i - 1]);
}
console.log(result.join(" "));*/

/*Array11. N ta elementdan tashkil topgan arr nomli massiv va K, L butun sonlari berilgan. (0 <= K <= L < N). Massivning K va L indekslari orasidagi elementlaridan tashqari elementlari yig'indisini qaytaruvchi rangeOutSum(arr) nomli funksiya tuzilsin.*/

/*let arr = [1, 6, 9, 5, 8, 10, 15, 7];

function rangeOutSum(arr, K, L) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < K || i > L) {
      result += arr[i];
    }
  }
  return result;
}
const result = rangeOutSum(arr, 2, 5);
console.log(result);*/

/*Array12. Massivga kiritilgan qiymatlardan truthy va falsy elementlaridan iborat alohida 2 ta massiv hosil qiling.
Input: [10, false, “”, “Abdulaziz”, null]
Output:
Truthy: [10, “Abdulaziz”]
Falsy: [false, “”, null]*/

/*let arr = [10, false, "", "Abdulaziz", null];

function son(arr) {
  let truthy = [];
  let falsy = [];
  for (let item of arr) {
    if (item) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  return { truthy, falsy };
}
const result = son(arr);
console.log("Truthy:", result.truthy + " " + "Falsy:", result.falsy);*/

/*Array13. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv juft indeksli elementlari orasidan kichigini aniqlovchi getOddMin(arr) nomli funksiya tuzilsin.*/

/*function getOddMin(arr) {
  let result;
  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < result) {
      result = arr[i];
    }
  }
  return result;
}
console.log(getOddMin([2, 6, 7, 9, 12, 5, 4, 10, 17]));*/

/*Array14. n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv toq indeksli elementlari orasidan kattasini aniqlovchi getEvenMax(arr) tuzilsin.*/

/*let arr = [2, 6, 7, 9, 12, 5, 4, 10, 17];

function getEvenMax(arr) {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push();
    }
  }
  return result;
}
const result = getEvenMax(arr);
console.log(result);*/

/*Array15. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan oxirgi lokal maksimum elementi indeksini chiqaruvchi programma tuzilsin. Lokal maksimum - o'ng va chap qo'shinisidan katta bo'lgan element.*/

/*Array16. n ta elementdan tashkil topgan massiv va R butun soni berilgan. Massiv elementlari orasidan R soniga eng yaqin sonni topuvchi programma tuzilsin.*/

/*Array17. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasidan yig'indisi eng katta bo'ladigan 2 ta qo'shni elementni chiqaruvchi programma tuzilsin.*/

/*function son(arr) {
  let sum = arr[0] + arr[1];
  let result = [arr[0], arr[1]];
  for (let i = 1; i < arr.length - 1; i++) {
    let summa = arr[i] + arr[i + 1];
    if (summa > sum) {
      sum = summa;
      result = [arr[i], arr[i + 1]];
    }
  }
  return result;
}
console.log(son([3, 8, 2, 5, 16, 11, 7]));*/

/*Array18. n ta elementdan tashkil topgan massiv berilgan. Massiv elementlari orasida aniq 2 ta bir xil qiymatli element bor. Shu bir xil qiymatli elementlar indeksini chiqaruvchi programma tuzilsin.*/

/*function son(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        return [i, j];
      }
    }
  }
}
console.log(son([1, 5, 9, 3, 7, 4, 8, 2, 7]));*/

/*Array19. n ta elementdan tashkil topgan massiv berilgan. Massivda eng ko'p qatnashgan bir xil qiymatli elementni va uning sonini chiqaruvchi programma tuzilsin.*/

/*Array20. n ta elementdan iborat butun sonlardan tashkil topgan a massiv berilgan. a massivning juft elementlaridan tashkil topgan b massivini hosil qiling. b massiv elementlari soni va elementlari chiqarilsin.*/

/*function son(arr) {
  let result = [];
  let counter;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      result.push(arr[i]);
      counter++;
    }
  }
  return result;
}
console.log(son([2, 5, 9, 3, 6, 4, 7, 11, 13, 16]));*/

/*Array21. n ta butun sonlardan iborat a massiv va k butun soni berilgan. Massivning har bir elementini k ga orttiruvchi programma tuzilsin.*/

/*function son(arr, k) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + k);
  }
  return result;
}
console.log(son([1, 2, 3, 4, 5, 6], 7));*/

/*Array22. n ta elementdan iborat massiv berilgan (n juft son). Massivning birinchi yarmi va ikkinchi yarmi qiymatlari almashtirilsin.*/

/*function son(arr) {
  let n = arr.length;
  let result = n / 2;
  for (let i = 0; i < result; i++) {
    let counter = arr[i];
    arr[i] = arr[result + i];
    arr[result + i] = counter;
  }
  return arr;
}
console.log(son([1, 2, 3, 4, 5, 6]));*/

/*Array23. n ta elementdan iborat massiv berilgan. Massivning elementlari teskari tartibda joylashtirilsin. (DIQQAT: Sizdan teskari tartibda chiqarish talab qilinayotgani yo'q. a[0] element a[n-1] bilan almashsin, va hakazo, teskari tartibda joylashtirish talab qilinyapti)*/

/*function son(arr) {
  let n = arr.length;
  for (let i = 0; i < n / 2; i++) {
    let result = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = result;
  }
  return arr;
}
console.log(son([1, 2, 3, 4, 5, 6, 7, 8, 9]));*/
