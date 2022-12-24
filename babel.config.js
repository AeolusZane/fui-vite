module.exports = function (api) {
    api.cache(true);
    const presets = [
        // [
        //     '@babel/preset-env',
        //     // {
        //     //     targets: {
        //     //         ie: 9,
        //     //         chrome: 47,
        //     //     },
        //     // },
        // ],
        // '@babel/preset-react',
        // '@babel/preset-typescript',
    ];
    const plugins = [
        // [
        //     '@babel/plugin-proposal-decorators',
        //     {
        //         legacy: true,
        //     },
        // ],
        // '@babel/plugin-proposal-class-properties',
        // '@babel/plugin-transform-block-scoping',
        // [
        //     '@babel/plugin-transform-classes',
        //     {
        //         loose: true,
        //     },
        // ],
        // '@babel/plugin-transform-proto-to-assign',
        // '@babel/plugin-proposal-optional-chaining',
        // '@babel/plugin-proposal-nullish-coalescing-operator',
        ["@babel/plugin-transform-react-jsx", {
            "pragma": "BI.h",
            "pragmaFrag": "BI.Fragment",
        }],
    ];

    return {
        presets,
        plugins,
    };
};