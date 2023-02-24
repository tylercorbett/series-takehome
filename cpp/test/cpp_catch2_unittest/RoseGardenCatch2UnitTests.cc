#define CATCH_CONFIG_MAIN  // This tells Catch to provide a main() - only do this in one cpp file
#include "Catch.hpp"
#include "RoseGarden.h"

TEST_CASE("RoseGardenUnitTest", "Foo")
{
    vector<Item> items;
    items.push_back(Item("Foo", 0, 0));
    RoseGarden app(items);
    app.updateQuality();
    REQUIRE("fixme" == app.items[0].name);
}
