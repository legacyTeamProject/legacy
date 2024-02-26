const db = require('../Models/User')
const connection = require('../Connection')
const model = connection.models

const bycribt = require("bcrypt");
module.exports ={
    updateClient: async (req,res)=>{
    const role=req.body.role
   const firstName=req.body.firstName
   const lastName=req.body.lastName
   const email=req.body.email
   const newpwd=req.body.password
   const img =req.body.image
        try {
            const hashpwd = await bycribt.hash(newpwd, 10);
            const upd = model.users.update({firstName:firstName,lastName:lastName,email:email,password:hashpwd,image:img},{
                where:{userId:req.params.id}
            });
            res.status(200).json(upd);
          } catch (err) {
            console.log(err);
          }

    },  
    getClient : async(req,res) => {
        try {
        const client=await model.users.findAll({});
        res.json(client) }
         catch (error) {res.send(error) }
    },
    getOneClient:async(req,res)=>{
        try{
            const client=await model.users.findOne({where:{userId:req.params.id}})
            res.json(client)
        }
        catch (error) {res.send(error) }
    },

    getSome:async(req,res)=>{
        try{
            clients=await model.users.findAll({
                where:{role:req.params.role}
            })
            res.status(200).json(clients)
    }
    catch(error){
        res.send(error)
    }
},
    

addClient: async (req, res) => {
    try {
       
        const existingUser = await model.users.findOne({ where: { email: req.body.email } });
        
      
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        
    
        const newUser = await model.users.create(req.body);
        res.json(newUser);
        console.log('New user created:', newUser);
    } catch (error) {
        console.log('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
},


        deleteClient:async(req,res)=>{
            try {
                const result=await model.users.destroy({where:{userId:req.params.id}})
                res.json(result) } 
                catch (error){res.send(error) }
        },

        updateUserRole:async(req,res)=>{
            try {
                const role=await model.users.update({role:req.body.role},{
                    where:{userId:req.params.userId}
                })
               res.json(role)
            }
            catch (error){res.send(error) }
        }
        }
    

    
      