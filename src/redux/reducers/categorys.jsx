import { createCategory, deleteCategory, findCategory, formDIalogCategory, getCategorys, titleCategory, updateCategory } from "../actions/categorys";

const initialState = {
    categorys: [],
    category: null,
    title: null,
    form_dialog: false
  };

  const categorysReducer = (state = initialState, action) => {
    switch (action.type) {
        case getCategorys.type:
            return {
              ...state,
              categorys: action.payload
            };
            case findCategory.type:
            return {
              ...state,
              category: action.payload
            };
            case createCategory.type:
                return {
                  ...state,
                  categorys: [...state.categorys, action.payload]
                };
            case updateCategory.type:
                return {
                  ...state,
                  categorys: state.categorys.map((category) => {
                    if (category.id === action.payload.id) {
                      return action.payload;
                    } else {
                      return category;
                    }
                  })
                };
                case deleteCategory.type:
                    return {
                      ...state,
                      categorys: state.categorys.filter((category) => category.id !== action.payload.id)
                    };
                case titleCategory.type:
                    return {
                      ...state,
                      title: action.payload
                    }
                  case formDIalogCategory.type:
                    return {
                      ...state,
                      form_dialog: action.payload
                    }
        default:
      return state;
    }
  };

  export default categorysReducer; 