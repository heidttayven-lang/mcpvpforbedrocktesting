import { world, ItemStack, MinecraftItemTypes } from "@minecraft/server";

world.afterEvents.itemUse.subscribe(event => {
    const { itemStack, source } = event;
    if (itemStack?.typeId === MinecraftItemTypes.diamondSword.id && itemStack.nameTag === "Duels") {
        source.sendMessage("You are holding the Duels sword!");
    }
});
