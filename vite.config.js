import { resolve } from "pathe";
import { build, defineConfig, Rollup } from "vite";

export default defineconfig( {
    build :{
        rollupoptions :{
        
            input :{
                main : resolve(__dirname,"index.html"),
                news : resolve(__dirname,"news.html"),
            },
    
        } ,   
        

    } ,


    
}),