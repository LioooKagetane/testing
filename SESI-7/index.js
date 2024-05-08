const http = require("http");
const rupiah = require('rupiah-format')
const fs = require('fs')
const os = require('os')
const host = 'localhost'
const port = 3002
// request adalah = data masuk dari luar
//response adalah data masuk dari sistem

const server = http.createServer(function (request, response) {
    const nama = 'xenzzz';
    let uang = 500000;
    let jajan = 150000;
    let sisa = uang - jajan;

     uang = rupiah.convert(uang)
     jajan = rupiah.convert(jajan)
     sisa = rupiah.convert(sisa)

     fs.appendFile('datauang.txt', sisa, () => {
     console.log('data uang berhasil di simpan')
     });

     const sisaRam = os.freemem();
     const jumlahCpu = os.cpus();

     function checkCPU() {
        let myCPU = [];
        jumlahCpu.map((cpu, i) => {
            myCPU.push(cpu.model)
        })
        return myCPU[0]
     }

     console.log(checkCPU())

         

    const hasil = `
    <head>
    <title>${nama}</title>
    </head>
    <body>
    <h1 style='background-color: black;color: white;text-align: center;'>INI ADALAH NODE JS JAJAN</h1>
    <p>
    halo nama saya adalah ${nama}. saya jajan sebanyak ${jajan}, tadinya uang saya ${uang} sekarang menjadi ${sisa} 
    </p>
    <h5>SISA RAM PC SAYA ${sisaRam}</h5>
    <h5>MODEL CPU PC SAYA ${checkCPU()}</h5>
    </body>
`

response.statusCode = 200;    
response.end(hasil);
});

server.listen(port, host, '', function () {
    console.log(`server menyala di ${host}:${port}`);
});