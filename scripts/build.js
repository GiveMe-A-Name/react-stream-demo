const webpack = require('webpack');
const path = require("path");
const nodeExternals = require('webpack-node-externals');

const commonConfig = {
  devtool: "source-map",
  mode: "development",
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/, use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ]
          }
        }
      }
    ]
  },
}

const clientConfig = {
  ...commonConfig,
  target: 'web',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../dist/client'),
    filename: '[name].js',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    },
    runtimeChunk: 'single'
  }
}

const serverConfig = {
  ...commonConfig,
  entry: './server/index.js',
  target: 'node',
  output: {
    path: path.resolve(__dirname, '../dist/server'),
    filename: 'main.js',
    clean: true,
  },
  externalsPresets: { node: true },
  externals: [nodeExternals()],
}

webpack([clientConfig, serverConfig], (err, stats) => {
  if (err) {
    console.error(err.stack || err);
    if (err.details) {
      console.error(err.details);
    }
    process.exit(1);
    return;
  }
  const info = stats.toJson();
  if (stats.hasErrors()) {
    console.log("Finished running webpack with errors.");
    info.errors.forEach((e) => console.error(e));
    process.exit(1);
  } else {
    console.log("Finished running webpack.");
  }
});