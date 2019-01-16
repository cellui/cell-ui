/*
* @Author: docoder
* @Email:  docoder@163.com
*/

import * as CellUI from './index';

describe('Cell UI', () => {
    it('should have exports', () => {
        expect(CellUI).toBeTruthy()
    })

    it('should not do undefined exports', () => {
        Object.keys(CellUI).forEach(exportKey =>
            expect(CellUI[exportKey]).toBeTruthy()
        );
    });
})
