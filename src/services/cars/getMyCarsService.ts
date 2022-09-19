import { api } from '../../config/api';

//types
import { Car } from '../../types/Car';
import { ServiceResponse } from '../../types/ServiceResponse';

interface GetMyCarsRequest {
  userId: number;
}

type GetMyCarsResponse = Promise<ServiceResponse<Array<{
  user_id: number,
  id: number;
  car: Car,
}>>>;

export const getMyCarsService = async ({
  userId,
}: GetMyCarsRequest): GetMyCarsResponse => {
  try {
    const response = await api.get<Array<{user_id: number, id: number, car: Car}>>(
      `/schedules_byuser?user_id=${userId}`
    );

    console.log(response.data);

    return {
      error: null,
      data: response.data,
    };
  } catch {
    return {
      error: 'Erro ao carregar os seus carros',
      data: null,
    };
  }
}