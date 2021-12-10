const path = require('path')
const webpack = require('webpack')
module.exports = {
    mode:'production',
    entry:'./src/components/NextPortal.js',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'NextPortal.jsx',
        libraryTarget:"commonjs2"
    },
    module:{

        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:/(node_modules)/,
                use:'babel-loader'
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            }
        ]
    },
    resolve:{
        alias:{
            'react':path.resolve(__dirname,'./node_modules/react'),
            'react-dom':path.resolve(__dirname,'./node_modules/react-dom'),
            'next':path.resolve(__dirname,'./node_modules/next')
        }
    },

    externals:{
        react: {
            commonjs: "react",
            commonjs2: "react",
            amd: "React",
            root: "React"
        },
        "react-dom":{
            commonjs:"react-dom",
            commonjs2:"react-dom",
            amd:"ReactDOM",
            root:"ReactDOM"
        },
        next:{
            commonjs:"next",
            commonjs2:"next",
            amd:"Next",
            root:"Next"
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            'React':'react'
            // 'ReactDOM':'react-dom'
        })
    ]
}