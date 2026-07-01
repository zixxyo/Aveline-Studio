import {Supplier} from "./types";

export const suppliers:Supplier[]=[
{
id:crypto.randomUUID(),
name:"Kami Tech",
contactPerson:"",
phone:"",
city:"Cairo",
rating:5,
paymentTerms:"Cash",
shippingCost:70,
notes:"PG • Citric Acid • Phenoxyethanol",
createdAt:new Date().toISOString()
},
{
id:crypto.randomUUID(),
name:"Chemical Market",
contactPerson:"",
phone:"",
city:"Cairo",
rating:5,
paymentTerms:"Cash",
shippingCost:70,
notes:"Ethanol • DPG",
createdAt:new Date().toISOString()
},
{
id:crypto.randomUUID(),
name:"AMC",
contactPerson:"",
phone:"",
city:"Alexandria",
rating:4,
paymentTerms:"Cash",
shippingCost:70,
notes:"Colors • Fragrance",
createdAt:new Date().toISOString()
}
];
