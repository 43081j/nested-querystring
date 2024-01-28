import * as assert from 'node:assert/strict';
import {test} from 'node:test';
import {stringify, create} from '../main.js';

test('create', async (t) => {
  await t.test('simple objects', () => {
    assert.deepEqual(
      [
        ...create({
          a: 1,
          b: 2
        })
      ],
      [
        ['a', '1'],
        ['b', '2']
      ]
    );
  });

  await t.test('nested objects', () => {
    assert.deepEqual(
      [
        ...create({
          nested: {
            a: {
              b: {
                c: 'd'
              }
            }
          }
        })
      ],
      [['nested[a][b][c]', 'd']]
    );
  });
});

test('stringify', async (t) => {
  await t.test('stringify simple objects', () => {
    assert.equal(
      stringify({
        a: 1,
        b: 2
      }),
      'a=1&b=2'
    );
  });

  await t.test('nested objects using [xyz] syntax', () => {
    assert.equal(
      stringify({
        nested: {
          a: {
            b: {
              c: 'd'
            }
          }
        }
      }),
      'nested%5Ba%5D%5Bb%5D%5Bc%5D=d'
    );
  });

  await t.test('URL encoding', () => {
    assert.equal(
      stringify({
        'key&value': 'key=value'
      }),
      'key%26value=key%3Dvalue'
    );
  });

  await t.test('encoded arrays', () => {
    assert.equal(
      stringify({
        object: {
          xyz: 'hello'
        },
        array: [0, 1, 2]
      }),
      'object%5Bxyz%5D=hello&array%5B0%5D=0&array%5B1%5D=1&array%5B2%5D=2'
    );
  });
});
