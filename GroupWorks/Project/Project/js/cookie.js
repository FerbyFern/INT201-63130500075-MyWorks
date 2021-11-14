export class CookieUtil {
  static setCookie(name, value, exdays) {
    const date = new Date();
    date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expire = date.toUTCString();
    document.cookie = `${encodeURIComponent(name)}=${encodeURIComponent(
      value
    )};expires=${expire}`;
  }
  static getCookie(name) {
    console.log(decodeURIComponent(document.cookie));
    let tmp = document.cookie
      .split(";")
      .map((c) => (c.charAt(0) == " " ? c.substring(1) : c));
    let start = `${encodeURIComponent(name)}=`;
    let select = tmp.find((t) => t.includes(name));

    return decodeURIComponent(select.substring(start.length));
  }
  static unset(name) {
    this.setCookie(name, "", new Date(0));
  }
  static deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }
}
