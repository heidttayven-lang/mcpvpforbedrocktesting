{
  "format_version": 2,
  "header": {
    "description": "Detects when a player holds a diamond sword named Duels",
    "name": "Duels Detector",
    "uuid": "e1a1b0b0-1234-5678-9abc-def123456789",
    "version": [1, 0, 0],
    "min_engine_version": [1, 20, 0]
  },
  "modules": [
    {
      "description": "Main behavior module",
      "type": "data",
      "uuid": "f2b2c0c0-2345-6789-abcd-ef2345678901",
      "version": [1, 0, 0]
    }
  ]
}
(Use a UUID generator to replace the example UUIDs.)

3. Detection Logic (Command-based)
If you don’t want to use scripting, you can use a function with /execute and /testfor logic.
Example functions/detect_duels.mcfunction:


Copy code
execute as @a[hasitem={item=diamond_sword, name="Duels"}] run say Player @s is holding the Duels sword!
Then, in-game, set up a repeating command block:


Copy code
/function detect_duels
This will announce whenever a player is holding the sword.

4. Detection Logic (Scripting API)
If you want more flexibility, enable the Beta API in your world and use scripts/main.js:

Js

Copy code
import { world, ItemStack, MinecraftItemTypes } from "@minecraft/server";

world.afterEvents.itemUse.subscribe(event => {
    const { itemStack, source } = event;
    if (itemStack?.typeId === MinecraftItemTypes.diamondSword.id && itemStack.nameTag === "Duels") {
        source.sendMessage("You are holding the Duels sword!");
    }
});
