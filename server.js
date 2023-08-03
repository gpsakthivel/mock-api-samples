const express = require('express')
const app = express()
const port = 80
const foliopost = require('./folio-posting.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// app.get('/mock/sakthi/wbe-property-service/property/tenants/22051/propertyId/HFQA743/appName/cicokiosk', (req, res) => {
//   res.json(kioskcico)
// })

// app.get('/mock/sakthi/wbe-admin-service/login/tenants/22051', (req, res) => {
//   res.json(login)
// })

app.get('/mock/sakthi/wbe-folio-service/cico/folio/tenants/22051/context/6011314e07e750007a6fa464/propertyName/HF743AKS-FOLIO/resId/447101565549', (req, res) => {
  res.json(foliopost)
})

// app.get('/mock/Rudolff/wbe-property-service/commonProperty/tenants/115919/propertyId/testappliance/getDetail', (req, res) => {
//   res.json(common)
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})