const clientRouter = require('express').Router();
const {updateClient,getClient,addClient,getSome,getOneClient,deleteClient,updateUserRole} = require('../../Controller/Client');

clientRouter.put('/update/:id',updateClient)
clientRouter.put('/updateRole/:id',updateUserRole)
clientRouter.get("/getAll",getClient)
clientRouter.get("/getSome/:role",getSome)
clientRouter.get("/get/:id",getOneClient)
clientRouter.post("/addClient",addClient)
clientRouter.delete("/delete/:id",deleteClient)
module.exports=clientRouter