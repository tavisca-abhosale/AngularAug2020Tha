import {AbstractControl} from '@angular/forms';

export class CustomValidator {
  // if the data is valid then the method returns null
  // else for invalid value the method return  JSON object e.g.
  // {even:false} or {odd:true}
  static CheckEven(control: AbstractControl): any {
     // tslint:disable-next-line: radix
     const value = parseInt (control.value);
     if (value % 2 === 0) {
       return null; // valid
     } else {
        return {even : false}; // invalid
     }
  }


  static CheckLength(control: AbstractControl): any {
    // tslint:disable-next-line: radix
    
    if (control.value.length <50) {
      return null; // valid
    } else {
       return {lengthvalid : false}; // invalid
    }
 }


 static CheckPositive(control: AbstractControl): any {   
    if (control.value>0) {
      return null; // valid
    } else {
      return {validprice : false}; // invalid
    }  
 }

//  static CheckSpecialChar(control: AbstractControl): any {  
   
//     let regex = /^[A-Za-z0-9 ]+$/
//     let isValid = regex.test(control.value);
//     if (isValid) {
//         return null; // valid
//     } else {
//       return {validchar : false}; // invalid
//     }
//   }

  static CheckSpace(control: AbstractControl): any {     
    if (!/\s/.test(control.value)) {
        return null; // valid
    } else {
      return {spacevalidation : false}; // invalid
    }
  }


  // static UniqueProductId(control: AbstractControl, products:any ): any {     
  //   if(products.find(x=> x.ProductId==control.value)){
  //       return null; // valid
  //   } else {
  //     return {uniquevalidation : false}; // invalid
  //   }
  // }
}


