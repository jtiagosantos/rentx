import { api } from '../../config/api';

//types
import { MyCar } from '../../types/MyCar';
import { ServiceResponse } from '../../types/ServiceResponse';

interface GetMyCarsRequest {
  userId: number;
}

type GetMyCarsResponse = Promise<ServiceResponse<MyCar[]>>;

export const getMyCarsService = async ({
  userId,
}: GetMyCarsRequest): GetMyCarsResponse => {
  try {
    const response = await api.get<MyCar[]>(
      `/schedules_byuser?user_id=${userId}`
    );

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