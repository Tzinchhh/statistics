const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const _ = require('lodash')

const app = express()
app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.post('/main', function (req, res) {
  let mainPageInfo = require('../MainPageInfo.json')
  res.json(mainPageInfo)
})

app.get('/main/:alias/:id', function (req, res) {
  let alias = req.params.alias
  let id = Number(req.params.id)
  let generalQuests = require('../GeneralQuestsInfo.json')
  let finishedQuests = require('../FinishedQuestsLeafs.json')

  let generalResult = generalQuests.find((item) => (item.alias === alias && item.globalId === id))
  let finishedLeafs = finishedQuests.filter((item) => item.questId === generalResult.id)
  let finishedLeafNames = finishedLeafs.map((item) => item.name)

  res.json({
    team: generalResult,
    success: _.intersection(generalResult.pathway.leafs, finishedLeafNames),
    fail: _.xor(generalResult.pathway.leafs, finishedLeafNames)
  })
})

app.listen(process.env.PORT || 8082)
