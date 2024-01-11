import { validateEnvironment } from '@udtt-libs/validators/environment.validator';
import { z } from 'zod';

describe('validateEnvironment', () => {
  it('No errors should be thrown when the schema is valid', async () => {
    //given
    const schema = z.object({
      A: z.string(),
      B: z.number(),
    });

    //when
    const received = validateEnvironment(schema)({
      A: 'A',
      B: 1,
    });

    //then
    expect(received).toEqual({
      A: 'A',
      B: 1,
    });
  });

  it('should be throw error when the schema is invalid', async () => {
    //given
    const schema = z.object({
      A: z.string(),
      B: z.number(),
    });

    //when
    const received = () =>
      validateEnvironment(schema)({
        A: 'A',
        B: 'B',
      });

    //then
    expect(received).toThrow();
  });
});
