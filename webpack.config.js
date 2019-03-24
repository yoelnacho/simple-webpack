// requerir el plugin Html
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        // A cualquier .js
        test: /\.js$/,
        // escluye la carpeta node_modules
        exclude: /node_modules/,
        use: {
          // usa el loader de babel
          loader: "babel-loader"
        }
      },
      { 
        // Definir la regla para los archivos .html
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: {
              // minimizar el código
              minimize: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    //  crear una instacia del plugin Html
    new HtmlWebPackPlugin({
      // archivo al que aplicará los cambios
      template: "./src/index.html",
      // donde va a renderizar la salida (dist/index.html)
      filename: "./index.html"
    }),
  ]
}