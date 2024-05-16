// export function setCookie(name, value, days) {
//   const date = new Date();
//   date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
//   const expires = "expires=" + date.toUTCString();
//   const secureFlag = window.location.protocol === "http:" ? "Secure" : "";
//   document.cookie = `${name}=${value};${expires};path=/;${secureFlag};SameSite=None`;
// }


export function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  let cookieString = `${name}=${value};${expires};path=/`;

  // Conditionally include Secure and SameSite attributes for production
  if (window.location.protocol === "https:") {
    cookieString += ";Secure;SameSite=None";
  }

  document.cookie = cookieString;
}
