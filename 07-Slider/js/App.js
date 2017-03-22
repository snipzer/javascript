var tabImages = ["image/shadock1.jpg", "image/shadock2.jpg", "image/shadock3.jpg", "image/shadock4.jpg", "image/shadock5.jpg", "image/shadock6.jpg", "image/shadock7.jpg"];
var param1 = {
    delay: 2000,
    imageWidth: "250px",
    imageHeight: "250px"
};
var param2 = {
    delay: 1000,
    imageWidth: "100px",
    imageHeight: "100px"
};


new Slider("sliders1", tabImages, param1);
new Slider("sliders2", tabImages, param2);