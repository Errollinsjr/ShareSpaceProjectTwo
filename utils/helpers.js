const moment = require('moment');

module.exports = {
    link_jpg: (link) => {
        const string=link;
        if (string.includes('giphy') || string.includes('youtube')) {
            return false;
        } else {
            return true;
        }
    },

    link_giphy: (link) => {
        const string=link;
        return string.includes('giphy');
    },

    link_youtube: (link) => {
        const string=link;
        return string.includes('youtube');
    },

    format_date: (date) => {
        return moment(date).format('MM/DD/YYYY')
    }
}