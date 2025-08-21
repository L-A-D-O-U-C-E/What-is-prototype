(() => {
    //1.Class vs Prototype
    // class Person{ //class ใช้การทำงานของ prototype อยุ่เบื้องหลัง และทำให้เราสร้าง prototype ได้ง่ายขึ้น 

    // }
    // const Chalothorn = new Person();
    // console.log(Chalothorn); //ถ้าใส่ .__proto__ ด้านหลัง string ก็จะเห็น methode ที่ทำงานด้านหลัง string
    
    //2.What's prototype?
    // const name ='Chalothorn';
    // console.log(name);

    // const arr =[]; //prototype เก็บ methode ต่างๆไว้ใน arrayเช่น .find,for each
    // console.log(arr.__proto__);
    
    //3.Prototype chain //ก็คือ prototype ตัวมันเองมีทั้ง methode ในตัวเองและมีตัวแม่มันอยู่ข้างในด้วย
    // const name = 'Chalothorn';
    // console.log(name.__proto__); //มันจะไปหา methode อยุ่ในstring ของตัวมันเองให้ครบ ถ้าไม่มีมันจะไปหาในตัวแม่ของมัน ตัวที่เขียนว่า prototype ใน console จะอยู่ท้ายๆ
    // console.log(name.toLocaleString());
    
    //4.Extend a prototype
    const name = 'Chalothorn';
    function sayHello(val){
        console.log(`Hello ${val}`);
    }
    //อันนี้คือการ extend หรือ add โค้ดเข้าไปใน methode ได้ ในJS แต่ไม่นิยมเพราะถ้ามีคน add ซ้อนทับกับเราโค้ดเราจะพัง
    String.prototype.sayHello = sayHello;
    console.log(name.__proto__);
    name.sayHello('World');

})();

//อธิบายข้อ 4 เพิ่ม ทำไมต้องเรียก ตัวแปร 'Chalothorn'?
//เพราะ name ที่มีค่าเป็น 'Chalothorn' เป็นเพียงตัวอย่างที่ใช้ในการเรียกเมธอด sayHello เท่านั้น ไม่ใช่ค่าที่ถูกนำไปแสดงผลครับ
// val คืออะไร? val คือ Parameter ที่ใช้รับค่าจากภายนอกฟังก์ชัน 
// เมื่อคุณเรียกใช้ sayHello('World') ค่า 'World' จะถูกส่งไปเก็บไว้ในตัวแปร val 
// console.log(Hello ${val}); จึงแสดงผลเป็น Hello World ออกมาแทน