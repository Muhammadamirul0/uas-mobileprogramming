import { createAction } from "@reduxjs/toolkit";

// API Process
export const getCategorys = createAction("GET_CATEGORYS");
export const findCategory = createAction("FIND_CATEGORY");
export const createCategory = createAction("CREATE_CATEGORY");
export const updateCategory = createAction("UPDATE_CATEGORY");
export const deleteCategory = createAction("DELETE_CATEGORY");

// Variables
export const titleCategory = createAction("TITLE_CATEGORY");
export const formDIalogCategory = createAction("FORM_DIALOG_CATEGORY");