function test1(form) {
  if (form.text1.value == "")
    alert("Podaj ciąg znaków!")
  else { 
   alert("Cześć "+form.text1.value+"! Informacja poprawna!");
  }
}

function test2(form) {
  if (form.text2.value == "" || 
      form.text2.value.indexOf('@', 0) == -1) 
        alert("Niepoprawny adres poczty elektronicznej!");
  else alert("OK!");
}
