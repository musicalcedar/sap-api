import { SapSession } from '../../../domain/entities/sapSession';
import { axiosSapInstance } from '../axiosSapInstance';
import { AxiosRequestConfig } from 'axios';

export interface SapHttpService {
  get<T>(session: SapSession, url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(session: SapSession, url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(session: SapSession, url: string, data: any, config?: AxiosRequestConfig): Promise<T>;
  delete(session: SapSession, url: string, config?: AxiosRequestConfig): Promise<void>;
}

export const sapHttpService: SapHttpService = {
  async get<T>(session: SapSession, url: string, config?: AxiosRequestConfig): Promise<T> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const response = await axiosSapInstance.get(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
      ...config,
    });

    return response.data;
  },

  async post<T>(
    session: SapSession,
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const response = await axiosSapInstance.post(url, data, {
      headers: {
        Cookie: cookies,
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      withCredentials: true,
      ...config,
    });

    return response.data;
  },

  async patch<T>(
    session: SapSession,
    url: string,
    data: any,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    const response = await axiosSapInstance.patch(url, data, {
      headers: {
        Cookie: cookies,
        'Content-Type': 'application/json',
        ...config?.headers,
      },
      withCredentials: true,
      ...config,
    });

    return response.data;
  },

  async delete(session: SapSession, url: string, config?: AxiosRequestConfig): Promise<void> {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;

    await axiosSapInstance.delete(url, {
      headers: { Cookie: cookies },
      withCredentials: true,
      ...config,
    });
  },
};
