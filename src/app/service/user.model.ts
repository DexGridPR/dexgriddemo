export interface User {
    uid: string;
    email?: string;
    displayName?: string;
    credits?: number;
    userIDDefault?: string;
    conID?: string;
    consumedDefault?: number;
    purchasedDefault?: number;
    twelveMonthDefault?: number;
    avg12monthDefault?: number;
    avgkWhDefault?: number;
    prepay30Default?: number;
    thirtyDaysDefault?: number;
    creditsDefault?: number;
    addressDefault?: string;
    ethereumDefault?: string;
    gridDefault?: string;
    nameDefault?: string;
    batteryChargeDefault?: number;
    monthGenDefault?: number;
    sizeDefault?: number;
    editTime?: number;
}



// refridgerator = 2
// airconditioner = 6
// waterheater = 4
// lighting = 2
//   RECs = {
//     consumed: this.consumedDefault,
//     purchased: this.purchasedDefault,
//     twelveMonth: this.twelveMonthDefault,
//   }
//   consumption = {
//     avg12month: this.twelveMonthDefault,
//     avgkWh: this.avg12monthDefault,
//     prepay30: this.prepay30Default,
//     thirtyDays: this.thirtyDaysDefault,
//     historical: this.historical, 
//   }

//   profile = {
//     address: this.addressDefault,
//     ethereum: this.ethereumDefault,
//     grid: this.gridDefault,
//     name: this.nameDefault,
//     userID: this.userIDDefault,
//     conID: this.conID
//   }
//   solar = {
//     batteryCharge: this.batteryChargeDefault,
//     monthGen: this.monthGenDefault,
//     size: this.sizeDefault,
//   }
//   appliances = {
//     refridgerator: this.refridgerator,
//     airconditioner: this.airconditioner,
//     waterheater: this.waterheater,
//     lighting: this.lighting,
//     totalAppliances: this.refridgerator + this.airconditioner + this.waterheater + this.lighting
//   }
//   settings = {
//     controlAC: false,
//     controlHeater: true,
//     controlWashing: true,
//   }

  // timestamp: FieldValue.serverTimestamp()