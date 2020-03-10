import * as types from 'ActionType';

export function getRegion() {
    return {
        type: types.GET_REGION,
        data: []
    };
}

export function getMill() {
    return {
        type: types.GET_MILL,
        data: []
    };
}

export function getSupplierGroup() {
    return {
        type: types.GET_SUPPLIER_GROUP,
        data: []
    };
}

export function getSupplierName() {
    return {
        type: types.GET_SUPPLIER_NAME,
        data: []
    };
}

export function getSupplierCategory() {
    return {
        type: types.GET_SUPPLIER_CATEGORY,
        data: []
    };
}

export function applyFilter() {
    return {
        type: types.APPLY_FILTER,
        data: []
    };
}

export function clearFilter() {
    return {
        type: types.CLEAR_FILTER
    };
}