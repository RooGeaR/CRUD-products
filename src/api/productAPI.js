const baseUrl = "https://fakestoreapi.com"
export const getList = async () => {
  try {
    const res = await fetch(`${baseUrl}/products`);
    if (!res.ok) {
      const message = `An error has occured: ${res.status}`;
      throw new Error(message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const getOne = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/products/${id}`);
    if (!res.ok) {
      const message = `An error has occurred: ${res.status}`;
      throw new Error(message);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

export const createOrUpdate = async (data, method) => {
  try {
    const res = await fetch(`${baseUrl}/products/${method === 'put' ? data.id : ''}`,{
      method,
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify(data)
    });
    if (!res.ok) {
      const message = `An error has occurred: ${res.status}`;
      throw new Error(message);
    }

    const product = await res.json();
    return product;
  } catch (error) {
    console.log(error);
  }
}

export const remove = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/products/${id}`, {
      method: "delete"
    });
    if (!res.ok) {
      const message = `An error has occurred: ${res.status}`;
      throw new Error(message);
    }
    return "Product deleted";
  } catch (error) {
    console.log(error);
  }
}