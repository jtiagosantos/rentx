import { api } from '../../config/api';

//types
import { Car } from '../../types/Car';
import { ServiceResponse } from '../../types/ServiceResponse';

export const getCarsService = async (): Promise<ServiceResponse<Car[]>> => {
  try {
    const response = await api.get<Car[]>('/cars');

    return {
      error: null,
      data: response.data,
    };
  } catch (error) {
    return {
      error: 'Erro ao carregar a listagem de carros',
      data: null,
    };
  }
}