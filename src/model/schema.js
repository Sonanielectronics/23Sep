var mongoose = require("mongoose");

const bankDetailsSchema = new mongoose.Schema({
    holderName: { type: String, default: null },
    accountNumber: { type: String, default: null },
    ifscCode: { type: String, default: null },
    pinCode: { type: String, default: null }
  });

const GeoLocationSchema = new mongoose.Schema({
  Address: { type: String, default: null },
  Latitude: { type: String, default: null },
  Longitude: { type: String, default: null }
});

const restaurantSchema = new mongoose.Schema({

  userName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String , required: true },
  businessName: { type: String },
  personalName: { type: String },
  pinCode: { type: String },
  city: { type: String },
  phone: { type: String },
  panNumber: { type: String },
  gstNumber: { type: String },
  wpBusinessAPINumber: { type: String },
  facebookManagerId: { type: String },
  bankDetails: { type: bankDetailsSchema, default: {} },
  userRole: { type: Number },
  Balance: {type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  GeoLocation : {
    type: GeoLocationSchema, default: {}
  },
  Status:{
    type: String
  },
  percentage:{
    type: String
  },
  BusinessDescription:{
    type: String
  },
  RestaurantLogo:{
    type: Array
  },
  // phoneNumber: { type: Number } ,
  // userImage: { type: String, default: "user.png" } ,
  // restaurantImage: { type: String } ,
  // name: { type: String , maxlength: 32 },
  // restaurantName: { type: String } ,

});

var restaurants = mongoose.model('restaurant', restaurantSchema); // 1

const MessageSchema = new mongoose.Schema({
  TemplatePicture: { type: String, default: null },
  TemplateDescription: { type: String, required: true },
  phone: { type: String, required: true },
  restaurantID: { type: String },
},{ timestamps: true });

var Message = mongoose.model('Message', MessageSchema); // 2

const OrderSchema = new mongoose.Schema({
  restaurantID: {
    type: String
  },
  whatsappNumber: {
    type: String
  },
  Amount: {
    type: String
  },
  paymentId: {
    type: String
  },
  PaymentMethod: {
    type: String
  }
},{ timestamps: true });

const Order = mongoose.model('Order', OrderSchema); // 3

const UserSchema = new mongoose.Schema({
  restaurantID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Restaurant',
    required: true
  },
  whatsappNumber: {
    type: String,
  },
  name: {
    type: String,
  },
  area: {
    address: {
      type: String
    },
    latLng: {
      lat: {
        type: String
      },
      lng: {
        type: String
      }
    }
  },
  googleSignInToken: {
    type: String
  },
  relationShipStatus: {
    type: String,
    default: null
  },
  gender: {
    type: Number
  },
  anniversary: {
    type: Date,
    default: null
  },
  haveFoodDeliveryApp: {
    type: Boolean,
    default: null
  },
  ageGroup: {
    type: Number,
    default: null
  },
  profession: {
    type: String,
    default: null
  },
  dateOfBirth: {
    type: Date
  },
  updateCount: {
    type: Number
  }
},{ timestamps: true });

const customer = mongoose.model('customer', UserSchema); // 4

const categorySchema = new mongoose.Schema(
  {
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId
    },
    cName: {
      type: String,
      required: true,
    },
    cDescription: {
      type: String,
      required: true,
    },
    cImage: {
      type: String,
    },
    Type: {
      type: String,
    },
    cStatus: {
      type: String,
      required: true,
    },
  },{ timestamps: true });

const categoryModel = mongoose.model("categories", categorySchema); // 5

const UserproductSchema = new mongoose.Schema(
  {
    pName: {
      type: String,
      required: true,
    },
    pDescription: {
      type: String,
      required: true,
    },
    pPrice: {
      type: Number,
      required: true,
    },
    pSold: {
      type: Number,
      default: 0,
    },
    pQuantity: {
      type: Number,
      default: 0,
    },
    restaurantId:{
      type: String
    },
    categoriesId:{
      type: mongoose.Schema.Types,
      ref: "categories",
    },
    pCategory: {
      type: mongoose.Schema.Types,
      ref: "categories",
    },
    pImages: {
      type: Array,
      required: true,
    },
    pOffer: {
      type: String,
      default: null,
    },
    pRatingsReviews: [
      {
        review: String,
        user: { type: mongoose.Schema.Types, ref: "users" },
        rating: String,
        createdAt: {
          type: Date,
          default: Date.now(),
        },
      },
    ],
    pStatus: {
      type: String,
      required: true,
    },
  },{ timestamps: true });

const productModel = mongoose.model("products", UserproductSchema); // 6

const SMSCheckSchema = new mongoose.Schema(
  {
    whatsappNumber: {
      type: String
    },
    randomNumber: {
      type: String,

    },
  },{ timestamps: true });

const SMSCheckModel = mongoose.model("SMSCheck", SMSCheckSchema); // 7

const EmployeeSchema = new mongoose.Schema(
  {
    restaurantID: {
      type: String
    },
    Name: {
      type: String,
    },
    Image: {
      type: Array,
    }
  },{ timestamps: true });

const EmployeeModel = mongoose.model("Employee", EmployeeSchema); // 8

const RestaurantReviewSchema = new mongoose.Schema(
  {
    RestaurantID: {
      type: String
    },
    Ambience: {
      type: String
    },
    Costing: {
      type: String,
    },
    Food: {
      type: String,
    }
  },{ timestamps: true });

const RestaurantReviewModel = mongoose.model("RestaurantReview", RestaurantReviewSchema); // 9

const EmployeeReviewSchema = new mongoose.Schema(
  {
    EmployeeID: {
      type: String
    },
    RestaurantID: {
      type: String
    },
    service: {
      type: String,
    },
    comment: {
      type: String,
    },
    Name: {
      type: String,
    },
    Img: {
      type: String,
    }
  },{ timestamps: true });

const EmployeeReviewModel = mongoose.model("EmployeeReview", EmployeeReviewSchema); // 10

const TemplateSchema = new mongoose.Schema(
  {
    RestaurantID: {
      type: String
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    Type:{
      type: String
    }
  },{ timestamps: true });

const TemplateModel = mongoose.model("Template", TemplateSchema); // 11

const OnlineorderSchema = new mongoose.Schema(
  {
    Products:{
      type: Array,
    },
    address: {
      type: String,
    },
    phone: {
      type: Number,
    },
    restaurantID: {
      type: String
    },
    Amount: {
      type: String
    },
    paymentId: {
      type: String
    },
    PaymentMethod: {
      type: String
    },
    PaymentNumber:{
      type: String
    }
  },{ timestamps: true });

const Onlineorder = mongoose.model("Onlineorder", OnlineorderSchema); // 12

const ReferralCodeSchema = new mongoose.Schema(
  {
    StartDate:{
      type: String,
    },
    EndDate:{
      type: String,
    },
    UseTime:{
      type: Number,
    },
    DiscountCoupon:{
      type: Array,
    },
    ReferralCodeAccessId:{
      type: String,
    },
    ReferralCode:{
      type: String,
    }
  },{ timestamps: true });

const ReferralCode = mongoose.model("ReferralCode", ReferralCodeSchema); // 13

const SupportRequiredDocDetailSchema = new mongoose.Schema(
  {
    Pan:{
      type: Array,
    },
    Aadhar:{
      type: Array,
    },
    BusinessPan:{
      type: Array,
    },
    IncorporateCertificate:{
      type: Array,
    },
    Number:{
      type: String,
    },
    BusinessEmail:{
      type: String,
    },
    FBPassword:{
      type: String,
    },
    FBEmail:{
      type: String,
    },
    Website:{
      type: String,
    },
  },{ timestamps: true });

const SupportRequiredDoc = mongoose.model("SupportRequiredDoc", SupportRequiredDocDetailSchema); // 14

const ScheduleMessageSchema = new mongoose.Schema(
  {
    RestaurantID:{
      type: String,
    },
    description:{
      type: String,
    },
    Type:{
      type: String,
    },
    Image:{
      type: String,
    },
    Date:{
      type: String,
    },
    Scheduled:{
      type: String,
    }
  },{ timestamps: true });

const ScheduleMessage = mongoose.model("ScheduleMessage", ScheduleMessageSchema); // 15

module.exports = { restaurants , Message , Order , customer , categoryModel , Onlineorder , productModel  , SMSCheckModel , EmployeeModel , RestaurantReviewModel , EmployeeReviewModel , TemplateModel , ReferralCode , SupportRequiredDoc , ScheduleMessage };