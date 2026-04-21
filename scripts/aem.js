export async function loadBlocks(root) {
    const blocks = root.querySelectorAll('div[class]');

    for (const block of blocks) {
        const blockName = block.className;

        try {
            const module = await import(`../blocks/${blockName}/${blockName}.js`);
            if (module.default) {
                module.default(block);
            }
        } catch (e) {
            console.warn(`No block found for ${blockName}`);
        }
    }
}
