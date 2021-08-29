class Order {
  constructor(
    public address: string,
    public number: number,
    public optionalAddress: string,
    public paymentOption: string,
    public orderItems: orderItem[] = []
  ){}
}

class orderItem {
  constructor(public quantity: Number, public menuId: string){}
}

export {Order, orderItem}
