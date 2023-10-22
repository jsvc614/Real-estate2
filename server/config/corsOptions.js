// let allowedOrigins = ["http://127.0.0.1:5173"];
// if (process.env.NODE_ENV === "production") {
//   allowedOrigins = ["https://real-estate-ep9g.vercel.app"];
// }
let allowedOrigins = [
  "https://real-estate-ep9g.vercel.app",
  "https://real-estate-ep9g-git-main-jurajsvec614-gmailcom.vercel.app",
  "https://real-estate-ep9g-b8wuhvaax-jurajsvec614-gmailcom.vercel.app",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH"],
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
