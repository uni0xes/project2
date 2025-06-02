const express = require('express')
const cors = require('cors')
const { Sequelize } = require('sequelize')

const app = express()
app.use(cors())

const sequelize = new Sequelize('postgres', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
})

const StakanVodi = require('./models/model.js')
const { error } = require('console')
const Model = StakanVodi(sequelize)

app.get('/api/adress', async(req, res) => {
    try{
        const model = await Model.findOne()
        if (!model) return res.status(400).json({message: 'abaudno'})
            res.json(model)
    } catch(err){
        res.status(500).json({error: err.message})
    }
})

const start = async () => {
    try{
        await sequelize.authenticate()
        console.log('db started')

        await sequelize.sync()

        app.listen(5000, () => {
            console.log('letsgo')
        } )
    } catch(error) {
        console.log('nahui otsuda', e)
    }
}

start()