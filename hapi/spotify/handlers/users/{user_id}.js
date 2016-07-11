'use strict';
var dataProvider = require('../../data/users/{user_id}.js');
/**
 * Operations on /users/{user_id}
 */
module.exports = {
    /**
     * summary: 
     * description: [Get a User&#39;s Profile](https://developer.spotify.com/web-api/get-users-profile/)

     * parameters: user_id
     * produces: 
     * responses: 200
     */
    get: function (req, reply, next) {
        /**
         * Get the data for response 200
         * For response `default` status 200 is used.
         */
        var status = 200;
        var provider = dataProvider['get']['200'];
        provider(req, reply, function (err, data) {
            if (err) {
                next(err);
                return;
            }
            reply(data && data.responses).code(status);
        });
    }
};
