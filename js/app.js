

//common function

function getValue(a){
    let value= parseFloat(document.getElementById(a).value);
    return value;
};



function validationResult(first,second,result){
   if(typeof result === 'number' && !isNaN(result)){
      document.getElementById(first).value = '';
      document.getElementById(second).value = '';
      const li = document.createElement('li');
      li.innerHTML = `Area is: ${result} cm<sup>2</sup>  <span class='bg-[#1090D8] rounded-md py-2'>convert to m<sup>2</sup></span>  `;
      document.getElementById('result-list').appendChild(li);
     }
}

// triangle function code start from here

function calculateTriangleArea(){
   const b = getValue('triangle-b');
   const h = getValue('triangle-h');
   const result = 0.5 * b * h;
   validationResult('triangle-b','triangle-h',result);
}




// rectangle code start from here

function calculateRectangleArea(){
    const w = getValue('rectangle-w');
    const i = getValue('rectangle-w');
    const result = w * i;
   validationResult('rectangle-w','rectangle-i',result);
 }