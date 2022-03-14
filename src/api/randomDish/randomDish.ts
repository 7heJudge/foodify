import { RandomDishRes } from './dto/getRandomDish.dto';
import axiosInstance from '../index';

class RandomDish {
  getRandomDish = async (): Promise<RandomDishRes> =>
    axiosInstance.get('random.php').then((res) => res.data as RandomDishRes);
}

export default new RandomDish();
