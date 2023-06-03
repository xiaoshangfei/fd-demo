import Vue from 'vue';
import moment from 'moment';

Vue.filter('FormatTime', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (!dataStr) {
    return '';
  }
  return moment(dataStr).format(pattern);
});
