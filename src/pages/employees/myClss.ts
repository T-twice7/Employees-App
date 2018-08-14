
export class Details{
    Name:string;
    Surname:string;
    role:string;
    IDno:number;
    Cntx:number;
    pic;


 
    // Create constructor for your Class and intitialize
    constructor(Name:string ,Surname:string,role:string,IDno:number,Cntx:number,pic){
        this.Name= Name;
        this.Surname = Surname;
        this.role =role;
        this.IDno = IDno;
        this.Cntx = Cntx;
        this.pic = pic;
       
    }

    
 
}
// img(event:any){
//     if(event.target.files && event.target.files[0]){
//         let reader = new FileReader();
   
//         reader.onload = (event:any) => {
//           this.url = event.target.result;
//         }
   
//         reader.readAsDataURL(event.target.files[0]);
//         console.log(event.target.files);
//         // this.navCtrl.push(EmployeeDetalailsPage,reader);
//       }
// }