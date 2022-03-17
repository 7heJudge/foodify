import { RandomDishRes } from './dto/getRandomDish.dto';
import axiosInstance from '../index';

class RandomDish {
  getRandomDish = async (): Promise<RandomDishRes> => {
    const response = await axiosInstance.get('random.php');

    return response.data as RandomDishRes;
  };
}

export default new RandomDish();
