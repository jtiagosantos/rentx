import { api } from '../../config/api';

interface RegisterSchedulingRequest {
  carId: string;
  dates: string[];
}

interface RegisterSchedulingResponse {
  error?: string;
}

export const registerSchedulingService = async ({ 
  carId, 
  dates 
}: RegisterSchedulingRequest): Promise<RegisterSchedulingResponse> => {
  try {
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