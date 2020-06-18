export default {

computeData : (city, restaurants) => {
    return {
      [city]: restaurants.map((rest) => {
        return {
          name: rest.name,
          area: rest.area,
          address: rest.address,
          price : rest.price,
        };
      }),
    };
  }

}