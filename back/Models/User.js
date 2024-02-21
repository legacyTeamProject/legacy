const { DataTypes} = require('sequelize')



userschema={
    userId:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role:{
        type:DataTypes.STRING,
        allowNull:false
    },
    firstName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    lastName:{
        type:DataTypes.STRING,
        allowNull:true
    },
    age:{
        type:DataTypes.INTEGER,
        allowNull:true
    },
    email: {
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    image:{
        type:DataTypes.STRING,
        allowNull:false
    }

}

    



module.exports={
   userschema
}