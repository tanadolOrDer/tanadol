import { file } from "bun"
let _tls = {}
const MODE = Bun.env.MODE || 'production'
if (MODE !== 'production') {
    const cert = file("../ssl/localhost.pem")
    const key = file("../ssl/localhost-key.pam")
    _tls = { cert, key }
}
export const tlsConfig = { ..._tls }