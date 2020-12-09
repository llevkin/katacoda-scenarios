const { Module } = require('@omni/core');
const Rabbitmq   = require('@omni/rabbitmq');
const Swagger    = require('@omni/swagger');

class App extends Module() {

    rabbitmq = Rabbitmq;
    swagger  = Swagger;

}

module.exports = App;