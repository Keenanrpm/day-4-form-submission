function submitForm() {
  let name = document.getElementById("input-name").value;
  let email = document.getElementById("input-email").value;
  let phone = document.getElementById("input-phone").value;
  let subject = document.getElementById("input-subject").value;
  let message = document.getElementById("input-message").value;

  console.log(name);
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(message);

  if (name == "") {
    return alert("Nama tidak boleh kosong");
  } else if (email == "") {
    return alert("Email juga tidak boleh kosong");
  } else if (phone == "") {
    return alert("Phone juga tidak boleh kosong");
  } else if (subject == "") {
    return alert("Subject juga tidak boleh kosong");
  } else if (message == "") {
    return alert("Message juga tidak boleh kosong");
  }
  const emailReciver = "keenanpermana16@gmail.com";
  const a = document.createElement("a");

  a.href = `mailto: ${emailReciver}?subject= ${subject}&body= Hello my name ${name}, ${subject}, ${message}, my phone number ${phone}`;
  a.target = "_blank";
  a.click();
}