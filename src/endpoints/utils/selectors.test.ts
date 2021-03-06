const { select } = require('./selectors');

const CTX = {
  params: {
    id: 'qwerty',
    __field__: '__value__',
  },
  query: {
    ids: 'TAC,BTC,USD',
    pairs: 'TAC/BTC,TAC/USD',
    __field__: '__value__',
  },
};

describe('Context selectors', () => {
  const s = select(CTX);

  it('select id from params', () => {
    expect(s.id).toEqual('qwerty');
  });

  it('select multiple ids from query', () => {
    expect(s.ids).toEqual(['TAC', 'BTC', 'USD']);
  });

  it('select multiple pairs from query', () => {
    expect(s.pairs).toEqual(['TAC/BTC', 'TAC/USD']);
  });

  describe('`params` selector', () => {
    it('should return any field from params as is', () => {
      expect(s.params.id).toEqual('qwerty');
      expect(s.params.__field__).toEqual('__value__');
    });
    it('should return undefined for non-exiscint fields', () => {
      expect(s.params.NON_EXISTING).toEqual(undefined);
    });
  });

  describe('`query` selector', () => {
    it('should return any field from query as is', () => {
      expect(s.query.ids).toEqual('TAC,BTC,USD');
      expect(s.query.__field__).toEqual('__value__');
    });
    it('should return undefined for non-exiscint fields', () => {
      expect(s.query.NON_EXISTING).toEqual(undefined);
    });
  });
});
