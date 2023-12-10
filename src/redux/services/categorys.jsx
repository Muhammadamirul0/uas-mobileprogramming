import api from ".";

export const getCategoryAsync = async (req = null) => {
    const params = req ? '?' + (Object.entries(req)
    .filter(([key, value]) => value !== '')
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&')) : '';

    const res = await api.get("/categorys" + params);
    return res.data;
};

export const createCategoryAsync = async (data) => {
    const res = await api.post("/categorys", data);
    return res.data;
}

export const updateCategoryAsync = async (id, data) => {
    const res = await api.put("/categorys/" + id, data);
    return res.data;
}

export const deleteCategoryAsync = async (id) => {
    const res = await api.delete("/categorys/" + id);
    return res.data;
}

export const findCategoryAsync = async (id) => {
    const res = await api.get("/categorys/" + id);
    return res.data;
}