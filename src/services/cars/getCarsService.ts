import { api } from '../../config/api';

//types
import { Car } from '../../types/Car';
import { ServiceResponse } from '../../types/ServiceResponse';

type GetCarsResponse = Promise<ServiceResponse<Car[]>>;

export const getCarsService = async (): GetCarsResponse => {
  try {
    const response = await api.get<Car[]>('/cars');

    return {
      error: null,
      data: response.data,
    };
  } catch {
    return {
      error: 'Erro ao carregar a listagem de carros',
      data: null,
    };
  }
}