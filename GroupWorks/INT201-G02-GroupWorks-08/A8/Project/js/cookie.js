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
    return document.cookie.split('; ').reduce((r, v) => {
      const parts = v.split('=')
      return parts[0] === name ? decodeURIComponent(parts[1]) : r
    }, '')
  }
  static unset(name) {
    this.setCookie(name, "", new Date(0));
  }
  static deleteCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999;";
  }
}
