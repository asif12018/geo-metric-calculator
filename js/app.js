// triangle function code start from here

function calculateTriangleArea(){
   const b = parseFloat(document.getElementById('triangle-b').value);
   const h = parseFloat(document.getElementById('triangle-h').value);
   const result = 0.5 * b * h;
   if(typeof result === 'number' && !isNaN(result)){
    alert(result);
   }
}




// rectangle code start from here

function calculateRectangleArea(){
    const w = parseFloat(document.getElementById('rectangle-w').value);
    const i = parseFloat(document.getElementById('rectangle-i').value);
    const result = w * i;
    if(typeof result === 'number' && !isNaN(result)){
     alert(result);
     document.getElementById('rectangle-w').value = '';
     document.getElementById('rectangle-i').value = '';
    }
 }