import { getDepartmentCode, getMunicipalityCode } from '../src/infrastructure/sap/utils/locationDictionaries';

describe('Location Dictionaries', () => {
  describe('getDepartmentCode', () => {
    it('should return the correct department code for a valid department name', () => {
      expect(getDepartmentCode('ANTIOQUIA')).toBe('05');
      expect(getDepartmentCode('BOGOTA')).toBe('11');
      expect(getDepartmentCode('VALLE DEL CAUCA')).toBe('76');
    });

    it('should handle lowercase department names', () => {
      expect(getDepartmentCode('antioquia')).toBe('05');
      expect(getDepartmentCode('bogota')).toBe('11');
      expect(getDepartmentCode('valle del cauca')).toBe('76');
    });

    it('should handle department names with extra spaces', () => {
      expect(getDepartmentCode('  ANTIOQUIA  ')).toBe('05');
      expect(getDepartmentCode('BOGOTA  ')).toBe('11');
      expect(getDepartmentCode('  VALLE DEL CAUCA')).toBe('76');
    });

    it('should return default code (05) for non-existent department names', () => {
      expect(getDepartmentCode('DEPARTAMENTO INEXISTENTE')).toBe('05');
      expect(getDepartmentCode('')).toBe('05');
    });
  });

  describe('getMunicipalityCode', () => {
    it('should return the correct municipality code for a valid municipality name', () => {
      expect(getMunicipalityCode('MEDELLIN')).toBe('05001');
      expect(getMunicipalityCode('BOGOTA')).toBe('11001');
      expect(getMunicipalityCode('CALI')).toBe('76001');
    });

    it('should handle lowercase municipality names', () => {
      expect(getMunicipalityCode('medellin')).toBe('05001');
      expect(getMunicipalityCode('bogota')).toBe('11001');
      expect(getMunicipalityCode('cali')).toBe('76001');
    });

    it('should handle municipality names with extra spaces', () => {
      expect(getMunicipalityCode('  MEDELLIN  ')).toBe('05001');
      expect(getMunicipalityCode('BOGOTA  ')).toBe('11001');
      expect(getMunicipalityCode('  CALI')).toBe('76001');
    });

    it('should return default code (05001) for non-existent municipality names', () => {
      expect(getMunicipalityCode('MUNICIPIO INEXISTENTE')).toBe('05001');
      expect(getMunicipalityCode('')).toBe('05001');
    });
  });
});
