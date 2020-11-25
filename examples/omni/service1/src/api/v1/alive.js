const { Api } = require('@omni/swagger');

module.exports.get = class extends Api {

    description = 'Check service alive description';
    summary     = 'Summary check alive';

    process(ctx) {
        return 1;
    }

}