package com.rosegarden;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class RoseGardenTest {

    @Test
    void foo() {
        Item[] items = new Item[] { new Item("foo", 0, 0) };
        RoseGarden app = new RoseGarden(items);
        app.updateQuality();
        assertEquals("fixme", app.items[0].name);
    }

}
