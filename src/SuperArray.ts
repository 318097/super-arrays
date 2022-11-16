class SuperArray {
  arr = [];
  constructor() {

  }

  crux = (cmd, payload) => {
    switch (cmd) {
      case "add":
        return [...this.arr, payload];
      case "update":
        return this.arr.map((item: any) =>
          item.id === payload.id ? { ...item, ...payload } : item
        );
      case "read":
        return this.arr.find((item: any) => item.id === payload.id);
      case "delete":
        return this.arr.filter((item: any) => item.id !== payload.id) || [];
    }
  };
}

export default SuperArray;