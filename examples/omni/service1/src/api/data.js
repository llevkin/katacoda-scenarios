const { Api } = require('@omni/swagger');
const config = require('@omni/config');

module.exports.put = class extends Api {

    description = 'Check service alive description';
    summary     = 'Summary check alive';
    body        = {
        type: 'object',
        properties: {
            _id:       { type: 'integer' },
            firstName: { type: 'string' },
            lastName:  { type: 'string' },
            phone:     { type: 'string' },
        },
    };

    async process(ctx) {
        let data = ctx.request.body;
        await this.$root.rabbitmq.channel.sendToQueue(config.get('queue'), Buffer.from(JSON.stringify(data)));
        return data;
    }

}