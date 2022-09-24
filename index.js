import http from "http"

const server = http.createServer((req, res) => {
  const URL = req.url
  const MENU = `<ul>
    <li> <a href="http://localhost:5000/"> Ana Sayfa </a> </li>
    <li> <a href="http://localhost:5000/about"> Hakkımızda </a> </li>
    <li> <a href="http://localhost:5000/contact"> İletişim </a> </li>
    </ul>`
  res.writeHead(200, { "content-Type": "text/html" })
  if (URL === "/") {
    res.write(
      ` <h1> Ana Sayfa </h1>
                    ${MENU}
                    `,
    )
  } else if (URL === "/about") {
    res.write(
      ` <h1> Hakkımızda </h1>
                  ${MENU}
                  `,
    )
  } else if (URL === "/contact") {
    res.write(
      ` <h1> İletişim </h1>
                          ${MENU}
                          `,
    )
  } else {
    res.write(
      ` <h1> 404 Bu Sayfa Bulunamadı </h1>
                          ${MENU}
                          `,
    )
  }
  res.end()
})

const PORT = 5000
server.listen(PORT, () => {
  console.log("Server Başlatıldı")
})
