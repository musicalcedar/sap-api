import { mapFromSapBusinessPartner } from '../src/infrastructure/sap/sapMappers';
import { SapBusinessPartner } from '../src/domain/entities/sapBusinessPartner';
import * as locationUtils from '../src/infrastructure/sap/utils/locationDictionaries';

// Mock de las funciones de diccionarios para pruebas aisladas
jest.mock('../src/infrastructure/sap/utils/locationDictionaries', () => ({
  getDepartmentCode: jest.fn().mockImplementation(name => {
    if (name === 'ANTIOQUIA') return '05';
    if (name === 'BOGOTA') return '11';
    if (name === 'VALLE DEL CAUCA') return '76';
    return '05'; // valor por defecto
  }),
  getMunicipalityCode: jest.fn().mockImplementation(name => {
    if (name === 'MEDELLIN') return '05001';
    if (name === 'BOGOTA') return '11001';
    if (name === 'CALI') return '76001';
    return '05001'; // valor por defecto
  }),
}));

describe('SAP Mappers', () => {
  describe('mapFromSapBusinessPartner', () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it('should correctly map department and city codes in the main object', () => {
      // Arrange
      const partner = {
        code: 'C12345',
        name: 'Test Partner',
        groupCode: 128,
        address: 'Test Address',
        phone: '1234567890',
        federalTaxId: '123456789',
        city: 'MEDELLIN',
        department: 'ANTIOQUIA',
        email: 'test@example.com',
        addresses: [],
      } as unknown as SapBusinessPartner;

      // Act
      const result = mapFromSapBusinessPartner(partner);

      // Assert
      expect(locationUtils.getDepartmentCode).toHaveBeenCalledWith('ANTIOQUIA');
      expect(locationUtils.getMunicipalityCode).toHaveBeenCalledWith('MEDELLIN');
      expect(result.BillToState).toBe('05');
      expect(result.ShipToState).toBe('05');
      expect(result.U_Departamento_CC).toBe('05');
      expect(result.U_Ciudad_CC).toBe('05001');
      expect(result.U_BPCO_CS).toBe('05001');
      expect(result.U_ZonaPostal_CC).toBe('05001');
    });

    it('should correctly map department and city codes in addresses array', () => {
      // Arrange
      const partner = {
        code: 'C12345',
        name: 'Test Partner',
        groupCode: 128,
        address: 'Test Address',
        phone: '1234567890',
        federalTaxId: '123456789',
        city: 'MEDELLIN',
        department: 'ANTIOQUIA',
        email: 'test@example.com',
        addresses: [
          {
            AddressName: 'PRINCIPAL',
            Street: 'Calle Principal',
            Block: 'Centro',
            City: 'BOGOTA',
            Country: 'CO',
            AddressType: 'bo_BillTo',
            BPCode: 'C12345',
            RowNum: 0,
          },
          {
            AddressName: 'DESPACHO',
            Street: 'Calle Secundaria',
            Block: 'Norte',
            City: 'CALI',
            Country: 'CO',
            AddressType: 'bo_ShipTo',
            BPCode: 'C12345',
            RowNum: 1,
          },
        ],
      } as unknown as SapBusinessPartner;

      // Act
      const result = mapFromSapBusinessPartner(partner);

      // Assert
      expect(locationUtils.getDepartmentCode).toHaveBeenCalledWith('ANTIOQUIA');
      expect(locationUtils.getMunicipalityCode).toHaveBeenCalledWith('MEDELLIN');
      expect(locationUtils.getMunicipalityCode).toHaveBeenCalledWith('BOGOTA');
      expect(locationUtils.getMunicipalityCode).toHaveBeenCalledWith('CALI');

      // Verificar que el array de direcciones se mapea correctamente
      expect(result.BPAddresses?.length).toBe(2);

      // Primera dirección (Bogotá)
      expect(result.BPAddresses?.[0].City).toBe('BOGOTA');
      expect(result.BPAddresses?.[0].U_Municipio).toBe('11001');
      expect(result.BPAddresses?.[0].U_CodDepartamento).toBe('05'); // Usa el departamento principal

      // Segunda dirección (Cali)
      expect(result.BPAddresses?.[1].City).toBe('CALI');
      expect(result.BPAddresses?.[1].U_Municipio).toBe('76001');
      expect(result.BPAddresses?.[1].U_CodDepartamento).toBe('05'); // Usa el departamento principal
    });

    it('should handle addresses with department specified', () => {
      // Arrange
      const partner = {
        code: 'C12345',
        name: 'Test Partner',
        groupCode: 128,
        address: 'Test Address',
        phone: '1234567890',
        federalTaxId: '123456789',
        city: 'MEDELLIN',
        department: 'ANTIOQUIA',
        email: 'test@example.com',
        addresses: [
          {
            AddressName: 'PRINCIPAL',
            Street: 'Calle Principal',
            Block: 'Centro',
            City: 'BOGOTA',
            department: 'BOGOTA', // Especificamos el departamento en la dirección
            Country: 'CO',
            AddressType: 'bo_BillTo',
            BPCode: 'C12345',
            RowNum: 0,
          },
        ],
      } as unknown as SapBusinessPartner;

      // Act
      const result = mapFromSapBusinessPartner(partner);

      // Assert
      expect(locationUtils.getDepartmentCode).toHaveBeenCalledWith('ANTIOQUIA');
      expect(locationUtils.getDepartmentCode).toHaveBeenCalledWith('BOGOTA');

      // Verificar que se usa el departamento específico de la dirección
      expect(result.BPAddresses?.[0].U_CodDepartamento).toBe('11');
    });

    it('should use default values when city or department are not provided', () => {
      // Arrange
      const partner = {
        code: 'C12345',
        name: 'Test Partner',
        groupCode: 128,
        address: 'Test Address',
        phone: '1234567890',
        federalTaxId: '123456789',
        city: '',
        email: 'test@example.com',
        addresses: [
          {
            AddressName: 'PRINCIPAL',
            Street: 'Calle Principal',
            Block: 'Centro',
            City: '',
            Country: 'CO',
            AddressType: 'bo_BillTo',
            BPCode: 'C12345',
            RowNum: 0,
          },
        ],
      } as unknown as SapBusinessPartner;

      // Act
      const result = mapFromSapBusinessPartner(partner);

      // Assert
      expect(locationUtils.getDepartmentCode).toHaveBeenCalledWith('');
      expect(locationUtils.getMunicipalityCode).toHaveBeenCalledWith('');

      // Verificar que se usan los valores por defecto
      expect(result.U_Departamento_CC).toBe('05');
      expect(result.U_Ciudad_CC).toBe('05001');
      expect(result.BPAddresses?.[0].U_Municipio).toBe('05001');
      expect(result.BPAddresses?.[0].U_CodDepartamento).toBe('05');
    });
  });
});
