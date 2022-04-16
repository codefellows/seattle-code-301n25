'use strict';

const SnackHandlers = {};
const SnackModel = require('./snack-model');

SnackHandlers.create = async (request, response) => {
  const { name, description } = request.body;
  const snack = new SnackModel({ name, description });

  await snack.save();
  
  response.status(200).json(snack);
}

SnackHandlers.getAll = async (request, response) => {
  console.log("get all the snacks!");
  const snacks = await SnackModel.find({});
  response.status(200).json(snacks);
}

SnackHandlers.getOne = async (request, response) => {
  const id = request.params.id;
  const snack = await SnackModel.findById(id);
  response.send(snack);
}


SnackHandlers.update = async (request, response) => {
  const id = request.params.id;
  const { name, description } = request.body;
  const snack = await SnackModel.findById(id);

  snack.name = name;
  snack.description = description;
  
  await snack.save()

  response.send(snack);
}

SnackHandlers.delete = async (request, response) => {
  console.log('deleting a snack!');
  await SnackModel.deleteOne({_id: request.params.id});
  response.send('ok');
}

module.exports = SnackHandlers;
