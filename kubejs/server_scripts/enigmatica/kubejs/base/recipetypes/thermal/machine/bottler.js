events.listen('recipes', (event) => {
    var data = {
        recipes: [
            {
                input: 'minecraft:glass_bottle',
                fluid: Fluid.of('pneumaticcraft:memory_essence', 250),
                output: 'minecraft:experience_bottle'
            },
            {
                input: 'buildinggadgets:construction_block_powder',
                fluid: Fluid.of('minecraft:water', 1000),
                output: 'buildinggadgets:construction_block_dense'
            },
            {
                input: Ingredient.of('#forge:glass/colorless'),
                fluid: Fluid.of('integrateddynamics:menril_resin', 1000),
                output: 'integratedterminals:menril_glass'
            },
            {
                input: Ingredient.of('#forge:glass/colorless'),
                fluid: Fluid.of('integrateddynamics:liquid_chorus', 1000),
                output: 'integratedterminals:chorus_glass'
            }
        ]
    };
    data.recipes.forEach((recipe) => {
        event.recipes.thermal.bottler(recipe.output, [recipe.fluid, recipe.input]);
    });
});
