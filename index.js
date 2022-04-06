function calc() {
  document.getElementById("mexicano").src = "./res/mexicano2.png";
  const input_value = parseInt(document.getElementById("inputTaco").value);
  if (document.getElementById("Radfib").checked) {
    fibo(input_value);
  }

  if (document.getElementById("Radfac").checked) {
    fac(input_value);
  }

  function printResult(result) {
    praragraph = document.getElementById("resultContainer");
    praragraph.innerText = result.join(",");
  }

  function fibo(input_value) {
    const numberToShow = [];
    let n1 = 0,
      n2 = 1,
      nextTerm;
    for (let i = 1; i <= input_value; i++) {
      numberToShow.push(n1);
      nextTerm = n1 + n2;
      n1 = n2;
      n2 = nextTerm;
    }
    printResult(numberToShow);
  }

  function fac(input_value) {
    const numberToShow = [];
    let total = 1;
    for (i = 1; i <= input_value; i++) {
      numberToShow.push(total); 
      total = total * i;
    }
    printResult(numberToShow);
  }
}


function mexicano() {
  if (document.getElementById("mexicano").src == "./res/mexicano1.png") 
  {
      document.getElementById("mexicano").src = "./res/mexicano2.png";
  }
  else 
  {
      document.getElementById("mexicano").src = "./res/mexicano1.png";
  }
}