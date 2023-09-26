import cloudinary from "cloudinary";
const cloudinarySetup = cloudinary.v2;
  cloudinarySetup.config({
    cloud_name: "codewithmama",
    api_key: "493699753884341",
    api_secret: "Op5AlMPkDGIy5JW11Acl39DNs48",
});
export default cloudinarySetup;



