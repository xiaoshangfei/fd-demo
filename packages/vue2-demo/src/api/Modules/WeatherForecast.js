import axiosInstance from '../config';

const URL = 'WeatherForecast';

/**
 *  测试
 * @param {Object} parameter
 */
export default {
  async get(parameter) {
    return axiosInstance.get(URL, parameter);
  }
};
