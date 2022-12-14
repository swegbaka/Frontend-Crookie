/* eslint-disable */
// import axios from "axios";

const login = async (email, password) => {
  console.log(email, password);
  try {
    const res = await axios({
      method: "POST",
      url: "http://127.0.0.1:3000/api/user/login",
      data: {
        email,
        password,
      },
    });
    if (res.data.status === "success") {
      alert("Logged in successfully!");
      window.setTimeout(() => {
        location.assign("/");
      }, 1500);
    }

    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

document.querySelector(".login").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("Uname").value;
  const password = document.getElementById("Pass").value;
  login(email, password);
});
