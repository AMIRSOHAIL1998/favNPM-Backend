const validate = require("validate.js");

var userConstraints = {
    name:{
        presence: true,
        length: {
            minimum: 4,
            maximum: 20
        }
    },
    email: {
        presence: true,
        email:true
      },
      contact: {
        presence: true,
        length:{
            is: 10,
        }
      }
  };

exports.validateUser = async(req,res,next) => {
   try {
      const validation = await  validate(req.body,userConstraints);
      if(validation != "undefined"){
        return res.status(502).json(validation);
      }
      next();
   } catch (error) {
        res.status(400).json({
            message:"Something wrong from validation",
            error
        })
   }
    

}

// var constraints = {
//     creditCardNumber: {
//       presence: true,
//       format: {
//         pattern: /^(34|37|4|5[1-5]).*$/,
//         message: function(value, attribute, validatorOptions, attributes, globalOptions) {
//           return validate.format("^%{num} is not a valid credit card number", {
//             num: value
//           });
//         }
//       },
//       length: function(value, attributes, attributeName, options, constraints) {
//         if (value) {
//           // Amex
//           if ((/^(34|37).*$/).test(value)) return {is: 15};
//           // Visa, Mastercard
//           if ((/^(4|5[1-5]).*$/).test(value)) return {is: 16};
//         }
//         // Unknown card, don't validate length
//         return false;
//       }
//     },
//     creditCardZip: function(value, attributes, attributeName, options, constraints) {
//       if (!(/^(34|37).*$/).test(attributes.creditCardNumber)) return null;
//       return {
//         presence: {message: "is required when using AMEX"},
//         length: {is: 5}
//       };
//     }
//   