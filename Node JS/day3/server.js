// const http = require("http");
 const fs = require("fs");

// var mainHtml = fs.readFileSync("client/main.html").toString();
 var profileHtml = fs.readFileSync("client/profile.html").toString();
// var styleCSS = fs.readFileSync("client/style.css").toString();
// var scriptJS = fs.readFileSync("client/script.js").toString();
// var image = fs.readFileSync("client/2.jpg");
// var favIcon = fs.readFileSync("client/favicon.ico");
// var jsonData = fs.readFileSync("data.json");
var profile = fs.readFileSync("client/profile.html").toString();

let name = "";
let email = "";
let address = "";
let mobile = "";
let obj={}



const express = require('express')
const app = express()
const path = require('path')
app.use(express.urlencoded({ extended: false }))
app.use(express.static('client'));
//app.use(express.static(path.join(__dirname+'/client/script.css')));






app.get('/', (req, res) => {

    console.log(path.join(__dirname+'/client/main.html'))
    res.sendFile(path.join(__dirname+'/client/main.html'))
})

app.get('/data.json', (req, res) => {

    //console.log(path.join(__dirname+'/client/main.html'))
    res.sendFile(path.join(__dirname+'/data.json'))
})

/*app.get('/', (req, res) => {

    console.log(path.join(__dirname+'/client/main.html'))
    res.sendFile(path.join(__dirname+'/client/main.html'))
})*/


app.post('/', (req, res) => {

    console.log(req.body);
    name = req.body.name
    email = req.body.email
    address = req.body.address
    mobile = req.body.mobile
    obj={
        name,email,address,mobile
    }
    /*profileHtml = profileHtml.replace("{Email}",Email)
            profileHtml = profileHtml.replace("{userName}",userName)
            profileHtml = profileHtml.replace("{Address}",Address)
            profileHtml = profileHtml.replace("{MobileNumber}",MobileNumber)*/
            // res.sendFile(path.join(__dirname+'/client/profile.html'))

            profileHtml = profileHtml.replace("{Email}",name)
            profileHtml = profileHtml.replace("{userName}",email)
            profileHtml = profileHtml.replace("{Address}",address)
            profileHtml = profileHtml.replace("{MobileNumber}",mobile)
            console.log(obj)
            fs.readFile('data.json', (err, data) => {
                if (err) throw err;
                 jsonData = JSON.parse(data);
               
                jsonData.push(obj)
                //console.log(jsonData);
                data = JSON.stringify(jsonData)
                fs.writeFile('data.json', data, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                });
            });
            res.send(profileHtml)
           // res.json({profileHtml: profileHtml.toString(), data: obj});
            //res.sendFile(profileHtml);
    //res.redirect('/')
})

app.listen(5454, () => {

    console.log('server is running....');
})
/*http.createServer((req, res)=>{
    if(req.method == "GET"){
        switch(req.url){
            case "/main.html":
            case "/":
            case "/client/main.html":
                res.write(mainHtml);
            break;
            case "/style.css":
            case "/client/style.css":
                res.write(styleCSS);
            break;
            case "/profile.html":
            case "/client/profile.html":
                res.write(profileHtml);
            break;
            case "/script.js":
            case "/client/script.js":
                res.write(scriptJS);
            break;
            case "/2.jpg":
            case "/client/2.jpg":
                res.write(image);
            break;
            case "/favicon.ico":
            case "/client/favicon.ico":
                res.write(favIcon);
            break;
            case "/data.json":
                case "data.json":
                res.write(jsonData);

                break;
            default:
                if(req.url.includes("/client/profile.html")){
                    res.write(profileHtml);
                }else{
                    res.write("<h1>Page Not Found</h1>")
                }
            break;
        }
        res.end();
    }
    //#endregion
    //#region POST
    else if(req.method == "POST"){

        console.log(req.url);
         req.on("data",function(data){ //Async
            const allData = data.toString().split("&");
            const allDataSeperated=[]
            for (let i in allData)
            {
                allDataSeperated.push(allData[i].split('='));
            }
            userName = allDataSeperated[0][1]
            Email = allDataSeperated[1][1]
            Address = allDataSeperated[2][1]
            MobileNumber =allDataSeperated[3][1]
            console.log(allDataSeperated);
            obj={
                userName,Email,Address,MobileNumber
            }
        })
        req.on("end",()=>{
            res.setHeader("content-type","text/html");
            // userName
            profileHtml = profileHtml.replace("{Email}",Email)
            profileHtml = profileHtml.replace("{userName}",userName)
            profileHtml = profileHtml.replace("{Address}",Address)
            profileHtml = profileHtml.replace("{MobileNumber}",MobileNumber)
            res.write(profileHtml);
            res.end();
        })
        let jsonData=""
        fs.readFile('data.json', (err, data) => {
            if (err) throw err;
             jsonData = JSON.parse(data);
           
            jsonData.push(obj)
            //console.log(jsonData);
            data = JSON.stringify(jsonData)
            fs.writeFile('data.json', data, (err) => {
                if (err) throw err;
                console.log('Data written to file');
            });
        });
        console.log('This is after the read call');
    }

}).listen("8450",()=>{console.log("http://localhost:8450")})*/

