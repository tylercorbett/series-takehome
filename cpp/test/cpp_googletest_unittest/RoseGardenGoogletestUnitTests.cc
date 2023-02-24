#include <gtest/gtest.h>
#include "RoseGarden.h"

TEST(RoseGardenTest, Foo) {
    vector<Item> items;
    items.push_back(Item("Foo", 0, 0));
    RoseGarden app(items);
    app.updateQuality();
    EXPECT_EQ("fixme", app.items[0].name);
}
