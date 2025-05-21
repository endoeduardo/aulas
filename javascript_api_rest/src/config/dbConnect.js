import mongoose, {mongo} from "mongoose"

async function conectaNoBancoDeDados(){
    mongoose.connect("mongodb://root:example@localhost:27017/db_livros?authSource=admin");
    return mongoose.connection;
};

export default conectaNoBancoDeDados;