$base="src/features/suppliers"

$folders=@(
"$base",
"$base/components",
"$base/pages",
"$base/services",
"$base/hooks",
"$base/types",
"$base/utils"
)

foreach($f in $folders){
New-Item -ItemType Directory -Force -Path $f | Out-Null
}

Write-Host ""
Write-Host "Folders created." -ForegroundColor Green

@'
export interface Supplier{
id:string;
name:string;
contactPerson:string;
phone:string;
whatsapp?:string;
email?:string;
city:string;
rating:number;
paymentTerms:string;
shippingCost:number;
notes?:string;
createdAt:string;
}
'@ | Set-Content "$base/types.ts"

@'
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
'@ | Set-Content "$base/mockSuppliers.ts"

@'
export default function SuppliersPage(){

return(

<div className="p-8">

<h1 className="text-4xl font-bold text-white">
Suppliers
</h1>

</div>

);

}
'@ | Set-Content "$base/SuppliersPage.tsx"

Write-Host ""
Write-Host "SUPPLIERS PACK GENERATED SUCCESSFULLY" -ForegroundColor Cyan