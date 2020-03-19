const express = require('express');
const app = express();
const db = require("./db.js")

app.use('/', express.static('public'));
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
 console.log(`app listening on port ${PORT}!`);
});

app.get("/get/:id", getReq)

async function getReq(req, res) {
    let response = await db.getReq(req.params.id);
    res.json(response)
}

// async function editDesc(req, res) {
//     req.body.id = req.params.id;
//     req.body.closed = (req.body.closed == 'true')
//     if (session.auth) {
//         let response = await sqlDb.editDesc(req.body)
//         if(response != null) {
//             res.redirect('/descriptions')
//         }     
//         else {     
//             res.render('descriptions', {data: {message: 'Adding failed'}})
//         }
        
//     }
//     else {
//          res.redirect('/')
//     }
// }

// echo "GET http://localhost:8080/get/10" | vegeta attack -rate=10/s -duration=10s | vegeta encode > results.json