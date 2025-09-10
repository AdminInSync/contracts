import { initContract } from '@ts-rest/core';
import { ApiContracts } from './api';
import { DocsContracts } from './docs';
const c = initContract();
export const apiContract = c.router({
    Api: ApiContracts,
    Docs: DocsContracts,
}, {
    strictStatusCodes: true
});
