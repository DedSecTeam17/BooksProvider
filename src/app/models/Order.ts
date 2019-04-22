export class   Order {
    _id:string ;
    provider_id:string ;
    book_id:string ;
    customer_id:string ;
    State:string ;
    total_price:string ;
    quantity:string ;
    updatedAt:string ;
    createdAt:string ;
    user_location ={
        lat:0,
        long: 0

    };
}
