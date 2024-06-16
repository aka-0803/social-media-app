import  express  from "express";
const app = express();
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import commentRoutes from "./routes/comments.js";
import likeRoutes from "./routes/likes.js";
import relationshipRoutes from "./routes/relationships.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import multer from "multer";

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true);
    next();
});
app.use(express.json());
app.use(cors());
app.use(cors({
    origin: "https://connect-taupe-seven.vercel.app",
    credentials: true,
    methods: ["POST","GET","DELETE","PUT"]
}));
app.use(cookieParser());
const storage = multer.diskStorage({
    destination: function(req,file,cb){
      cb(null,"../connect/public/upload");  
    },
    filename: function (req,file,cb){
        cb(null,Date.now()+file.originalname);
    },
});

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});


const upload = multer({storage:storage});

app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file = req.file;
    res.status(200).json(file.filename);
});
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

app.listen(8800,()=>{console.log("server working!")})