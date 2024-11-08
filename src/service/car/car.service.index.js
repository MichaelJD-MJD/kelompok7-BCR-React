export const getCars = async () => {
    let url = `${import.meta.env.VITE_API_URL}/cars`;

    const response = await fetch(url, {
        method: "GET",
    });

    // get data
    const result = await response.json();
    return result;
};

export const getDetailCar = async (id) => {
    let url = `${import.meta.env.VITE_API_URL}/cars/${id}`;

    const response = await fetch(url, {
        method: "GET",
    });

    // get data
    const result = await response.json();
    return result;
};

export const createCar = async (request) => {
    const formData = new FormData();
    formData.append("plate", request.plate);
    formData.append("manufacture_id", request.manufacture_id);
    formData.append("model", request.model);
    formData.append("rentPerDay", request.rentPerDay);
    formData.append("capacity", request.capacity);
    formData.append("description", request.description);
    formData.append("availableAt", request.availableAt);
    formData.append("transmission", request.transmission);
    formData.append("available", request.available);
    formData.append("type_id", request.type_id);
    formData.append("year", request.year);
    formData.append("options", request.options);
    formData.append("specs", request.specs);
    formData.append("image", request.image);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/cars`, {
        method: "POST",
        body: formData,
    });

    // get data
    const result = await response.json();
    return result;
};

export const updateStudent = async (id, request) => {
    const formData = new FormData();
    formData.append("plate", request.plate);
    formData.append("manufacture_id", request.manufacture_id);
    formData.append("model", request.model);
    formData.append("rentPerDay", request.rentPerDay);
    formData.append("capacity", request.capacity);
    formData.append("description", request.description);
    formData.append("availableAt", request.availableAt);
    formData.append("transmission", request.transmission);
    formData.append("available", request.available);
    formData.append("type_id", request.type_id);
    formData.append("year", request.year);
    formData.append("options", request.options);
    formData.append("specs", request.specs);
    formData.append("image", request.image);

    const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`, {
        method: "PUT",
        body: formData,
    });

    // get data
    const result = await response.json();
    return result;
};

export const deleteCar = async (id) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/cars/${id}`, {
        method: "DELETE",
    });

    // get data
    const result = await response.json();
    return result;
};
