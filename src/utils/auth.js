import CryptoJS from "crypto-js";
import Cookies from "js-cookie";


const SECRET_KEY = "ENIGMA_SECRET_KEY";

export function encryptToken(data) {
  const stringData = JSON.stringify(data)
  return CryptoJS.AES.encrypt(stringData, SECRET_KEY).toString()
}

export function decryptToken(token) {
  try {
    const bytes = CryptoJS.AES.decrypt(token, SECRET_KEY)
    const decryptedData = bytes.toString(CryptoJS.enc.Utf8)
    return JSON.parse(decryptedData)
  } catch {
    return null
  }
}


export function setSessionCookie(token, expiresAt) {
  Cookies.set("sessionToken", token, {
  expires: new Date(expiresAt), 
  sameSite: "strict",           
  secure: true,                 
  path: "/",        
  });
}

export function getSessionCookie() {
  return Cookies.get("sessionToken");
}


export function clearSessionCookie() {
  Cookies.remove("sessionToken");
}
