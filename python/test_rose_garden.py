# -*- coding: utf-8 -*-
import unittest

from rose_garden import Item, RoseGarden


class RoseGardenTest(unittest.TestCase):
    def test_foo(self):
        items = [Item("foo", 0, 0)]
        rose_garden = RoseGarden(items)
        rose_garden.update_quality()
        self.assertEquals("fixme", items[0].name)

        
if __name__ == '__main__':
    unittest.main()
