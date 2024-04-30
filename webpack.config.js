const CopyPlugin = require("copy-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        type: "asset",
      },
    ],
  },
  // optimization: {
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.imageminMinify,
  //         options: {
  //           plugins: [
  //             "imagemin-gifsicle",
  //             "imagemin-mozjpeg",
  //             "imagemin-pngquant",
  //             "imagemin-svgo",
  //           ],
  //         },
  //       },
  //       generator: [
  //         {
  //           // You can apply generator using `?as=webp`, you can use any name and provide more options
  //           preset: "webp",
  //           implementation: ImageMinimizerPlugin.imageminGenerate,
  //           options: {
  //             plugins: ["imagemin-webp"],
  //           },
  //         },
  //       ],
  //     }),
  //   ],
  // },

  // optimization: {
  //   minimizer: [
  //     new ImageMinimizerPlugin({
  //       minimizer: {
  //         implementation: ImageMinimizerPlugin.squooshMinify,
  //       },
  //       generator: [
  //         {
  //           // You can apply generator using `?as=webp`, you can use any name and provide more options
  //           preset: "webp",
  //           implementation: ImageMinimizerPlugin.squooshGenerate,
  //           options: {
  //             encodeOptions: {
  //               webp: {
  //                 quality: 90,
  //               },
  //             },
  //           },
  //         },
  //       ],
  //     }),
  //   ],
  // },

  optimization: {
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.sharpMinify,
        },
        generator: [
          {
            // You can apply generator using `?as=webp`, you can use any name and provide more options
            preset: "webp",
            implementation: ImageMinimizerPlugin.sharpGenerate,
            options: {
              encodeOptions: {
                webp: {
                  quality: 90,
                },
              },
            },
          },
        ],
      }),
    ],
  },
  plugins: [new CopyPlugin({ patterns: ["images/**/*.png"] })],
};
