function lockIn() {
  if (state.loggedInUserName) {
    var form;

    let favourite1 = document.querySelector("#favourite1");
    let favourite2 = document.querySelector("#favourite2");
    let favourite3 = document.querySelector("#favourite3");
    let favourite4 = document.querySelector("#favourite4");
    let favourite5 = document.querySelector("#favourite5");
    let favourite6 = document.querySelector("#favourite6");
    let email = state.loggedInUserName;

    form = {
      fav1: favourite1.innerText,
      fav2: favourite2.innerText,
      fav3: favourite3.innerText,
      fav4: favourite4.innerText,
      fav5: favourite5.innerText,
      fav6: favourite6.innerText,
      email: state.loggedInUserName,
    };
    console.log(form);
    // const data = Object.fromEntries(new FormData(form));

    fetch("/api/users/add_fav", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((userName) => {
        console.log(userName);
      });
  }
}

// function signUp(event) {
//   event.preventDefault();
//   const form = event.target;
//   const data = Object.fromEntries(new FormData(form));

//   fetch("/api/users", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   })
//     .then((res) => res.json())
//     .then((userName) => {
//       state.loggedInUserName = userName;
//       renderPokemonList();
//       document.querySelector("#page").innerHTML = ``;
//     });
// }
