import Cookies from 'js-cookie'
const TokenKey = 'access_token'
const PlatId = 'platformProductId'

export function getToken() {
  // return Cookies.get(TokenKey)
  return 'eyJhbGciOiJIUzUxMiJ9.eyJ1c2VyX2lkIjoxNTg0ODU5NDY1NDgyMDIyOTEyLCJ1c2VyX2tleSI6ImNhMmJhZWE2MDVkNzQ5MmVhYjdlYzViODhkNTYwMTk1IiwidXNlcm5hbWUiOiLosK3njonnkLQifQ.bjX6VoExGy17__VqZYalSbMDBl3cWRZ5YY5MEHtVjtP81dkk20A-4CysXy8acTCsLARFYixO7vATfwjOHehPtw'
}

export function setToken(token: string) {
  Cookies.set(TokenKey, token)
}

export function removeToken() {
  Cookies.remove(TokenKey)
}

const sessionCache = {
  set(key: string, value: string) {
    if (!sessionStorage) {
      return
    }
    if (key != null && value != null) {
      sessionStorage.setItem(key, value)
    }
  },
  get(key: string) {
    if (!sessionStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return sessionStorage.getItem(key)
  },
  setJSON(key: string, jsonValue: string) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON(key: string) {
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove(key: string) {
    sessionStorage.removeItem(key)
  },
}
const localCache = {
  set(key: string, value: string) {
    if (!localStorage) {
      return
    }
    if (key != null && value != null) {
      localStorage.setItem(key, value)
    }
  },
  get(key: string) {
    if (!localStorage) {
      return null
    }
    if (key == null) {
      return null
    }
    return localStorage.getItem(key)
  },
  setJSON(key: string, jsonValue: string) {
    if (jsonValue != null) {
      this.set(key, JSON.stringify(jsonValue))
    }
  },
  getJSON(key: string) {
    const value = this.get(key)
    if (value != null) {
      return JSON.parse(value)
    }
  },
  remove(key: string) {
    localStorage.removeItem(key)
  },
}

export default {
  /**
   * 会话级缓存
   */
  session: sessionCache,
  /**
   * 本地缓存
   */
  local: localCache,
}
