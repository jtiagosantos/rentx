import { api } from '../../config/api';

//types
import { Car } from '../../types/Car';

interface RegisterSchedulingRequest {
  carId: string;
  dates: string[];
  car: Car;
}

interface RegisterSchedulingResponse {
  error?: string;
}

export const registerSchedulingService = async ({ 
  carId, 
  dates,
  car,
}: RegisterSchedulingRequest): Promise<RegisterSchedulingResponse> => {
  try {
    await api.post('/schedules_byuser', {
      user_id: 1,
      car,
    });

    await api.put(`/schedules_bycars/${carId}`, {
      id: carId,
      unavailable_dates: dates,
    });

    return {
      error: null,
    };
  } catch {
    return {
      error: 'Não foi possível confirmar o agendamento',
    };
  }
}