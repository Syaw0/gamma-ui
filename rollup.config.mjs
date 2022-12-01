import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import dts from "rollup-plugin-dts" 

export default [{
  input: "src/index.ts",
  output: [
    {
      file: "./lib/cjs/index.js",
      format: "cjs",
      sourcemap: true
    },
    {
      file: "./lib/esm/index.js",
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript( {tsconfig: './tsconfig.json'}),
    postcss({
        extensions: ['.css']
    })
  ],
  
},
{
  input: "lib/esm/index.d.ts",
  output: [{ file: "lib/index.d.ts", format: "esm" }],
  plugins: [dts()],
},

];