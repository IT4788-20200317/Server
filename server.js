import express from "express";
import bodyParser from "body-parser";
const app = express();
const PORT = 3333;

app.use(bodyParser.json());

let myMap = new Map();

let myAccounts = new Map();

app.post("/login", (req, res) => {
    const requestBody = req.body;
    console.log("Request body:", requestBody);
    if (myAccounts.get(requestBody.email) != requestBody.password) {
        res.status(401).json({ message: "Đăng nhập không thành công. Sai email hoặc mật khẩu." });
    } else {
        res.json(myMap.get(requestBody.email));
    }
});

app.post("/register", (req, res) => {
    const requestBody = req.body;
    console.log(" request register ", requestBody);
    myAccounts.set(requestBody.email, requestBody.password);
    res.json(requestBody);
});

app.post("/save", (req, res) => {
    const requestBody = req.body;
    console.log(" save New User  ", requestBody);
    myMap.set(requestBody.email, requestBody);
    res.json(requestBody);
});

app.post("/getUser", (req, res) => {
    const requestBody = req.body;
    console.log(" getUser  ", requestBody);
    myMap.set(requestBody.email, requestBody);
    res.json(requestBody);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
