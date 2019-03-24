// PLUGINS
// requerir el plugin Html
const HtmlWebPackPlugin = require("html-webpack-plugin");
// mini css extract
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      // JavaScript
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
      // HTML
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
      },
      // Files (images)
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      // Styles (scss)
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    // Crear una instacia del plugin Html
    new HtmlWebPackPlugin({
      // archivo al que aplicará los cambios
      template: "./src/index.html",
      // donde va a renderizar la salida (dist/index.html)
      filename: "./index.html"
    }),
    // Crear una instacia del plugin mini-css-extract
    new MiniCssExtractPlugin({
      // se crea dentro del .js
      filename: "[name].css",
      // nombre del chunk
      chunkFilename: "[id].css"
    })
  ]
}