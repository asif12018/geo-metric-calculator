

//common function

function getValue(a){
    let value= parseFloat(document.getElementById(a).value);
    return value;
};



function validationResult(name,first,second,result){
   if(typeof result === 'number' && !isNaN(result)){
      document.getElementById(first).value = '';
      document.getElementById(second).value = '';
      const li = document.createElement('li');
      li.innerHTML = `Area of ${name} is: ${result} cm<sup>2</sup>  <span class='bg-[#1090D8] rounded-md py-2'>convert to m<sup>2</sup></span>  `;
      document.getElementById('result-list').appendChild(li);
     }
}

// triangle function code start from here

function calculateTriangleArea(){
   const b = getValue('triangle-b');
   const h = getValue('triangle-h');
   const result = 0.5 * b * h;
   validationResult('triangle','triangle-b','triangle-h',result);
}




// rectangle code start from here

function calculateRectangleArea(){
    const w = getValue('rectangle-w');
    const i = getValue('rectangle-w');
    const result = w * i;
   validationResult('rectangle','rectangle-w','rectangle-i',result);
 }


 // parallelogrem code start from here

 function calculateParallelogrem(){
       const b = getValue('parallelogrem-b');
       const h = getValue('parallelogrem-h');
       const result = b * h;
       validationResult('parallelogrem','parallelogrem-b','parallelogrem-h', result);
 }

 // Rhombus code start from here

 function calculateRhombus(){
   const d1 = getValue('rhombus-d1');
   const d2 = getValue('rhombus-d2');
   const result = 0.5 * d1 * d2;
   validationResult('rhombus','rhombus-d1','rhombus-d2',result);
 }

 //pentagon code start from here

 function calculatePentagon(){
   const p = getValue('pentagon-p');
   const b = getValue('pentagon-b');
   const result = 0.5 * p * b;
   validationResult('pentagon','pentagon-p','pentagon-b',result);
 }


 //ellipse code start from here
function calculateEllipse(){
   const a = getValue('ellipse-a');
   const b = getValue('ellipse-b');
   const result = 3.1416 * a * b;
   validationResult('ellipse','ellipse-a','ellipse-b',result);
}