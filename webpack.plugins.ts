import path from 'path';
import type IForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const ForkTsCheckerWebpackPlugin: typeof IForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import CopyWebpackPlugin from 'copy-webpack-plugin';


const isProduction = process.env.NODE_ENV === 'production';

export const plugins = [
  new ForkTsCheckerWebpackPlugin({
    logger: 'webpack-infrastructure',
  }),
  new CopyWebpackPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, 'src/assets/'),
        to: isProduction
          ? path.resolve(__dirname, '.webpack/renderer/main_window/assets/')
          : path.resolve(__dirname, '.webpack/renderer/assets/'),
          noErrorOnMissing: true
      },
    ]
  })
];
