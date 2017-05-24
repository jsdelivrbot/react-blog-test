import _ from 'lodash';
export default {
    required: (options = {}) => value => {
        options = _.extend({
            msg: 'This field is required'
        }, options);

        return value ? undefined : options.msg;
    }
}