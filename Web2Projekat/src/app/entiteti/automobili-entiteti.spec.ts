import { AutomobiliEntiteti } from './automobili-entiteti';

describe('AutomobiliEntiteti', () => {
  it('should create an instance', () => {
    expect(new AutomobiliEntiteti(1, 'Audi', 'RS5', 2020, 245)).toBeTruthy();
  });
});
