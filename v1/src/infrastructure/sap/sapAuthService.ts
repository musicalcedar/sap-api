import axios from 'axios';
import { SapAuthService } from '../../domain/services/sapAuthService';
import { SapSession } from '../../domain/entities/sapSession';
import { config } from '../../config';
import { axiosSapInstance } from './axiosSapInstance';

const SAP_BASE_URL = config.SAP_URL;

export const sapAuthService: SapAuthService = {
  async login(credentials) {
    const url = `${SAP_BASE_URL}/Login`;
    let response;
    try {
      response = await axiosSapInstance.post(url, credentials, { withCredentials: true });
    } catch (error: any) {
      const msg = error.response?.data?.error?.message?.value || error.message;
      throw new Error(`SAP Login failed: ${msg}`);
    }

    // Extraer cookies de la respuesta
    const setCookie: string[] = response.headers['set-cookie'] || [];
    let B1SESSION = '';
    let ROUTEID = '';
    setCookie.forEach(cookie => {
      if (cookie.startsWith('B1SESSION=')) {
        B1SESSION = cookie.split(';')[0].split('=')[1];
      }
      if (cookie.startsWith('ROUTEID=')) {
        ROUTEID = cookie.split(';')[0].split('=')[1];
      }
    });

    // Extraer info del body
    const body = response.data;
    const sessionId = body.SessionId;
    const sessionTimeout = body.SessionTimeout; // en minutos

    if (!B1SESSION || !ROUTEID) {
      throw new Error('SAP Login: No se obtuvieron las cookies B1SESSION y ROUTEID');
    }

    const expiresAt = Date.now() + sessionTimeout * 60 * 1000;

    const session: SapSession = {
      B1SESSION,
      ROUTEID,
      sessionId,
      expiresAt,
    };

    return session;
  },

  async logout(session) {
    const cookies = `B1SESSION=${session.B1SESSION}; ROUTEID=${session.ROUTEID}`;
    await axiosSapInstance.post(
      `${SAP_BASE_URL}/Logout`,
      {},
      {
        headers: { Cookie: cookies },
        withCredentials: true,
      }
    );
  },
};
