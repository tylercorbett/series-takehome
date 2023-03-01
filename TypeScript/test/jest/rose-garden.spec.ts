import { Item, RoseGarden } from '@/rose-garden';

describe('Rose Garden', () => {
  it('should foo', () => {
    const roseGarden = new RoseGarden([new Item('foo', 0, 0)]);
    const items = roseGarden.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  // Once the sell by date has passed, Quality degrades twice as fast
  it('checks that the quality degrades twice as fast after sell date has past', () => {
    const roseGarden = new RoseGarden([new Item('foo', 0, 0)]);
    const items = roseGarden.updateQuality();

    
  });

  // The Quality of an item is never negative

  
  // "Aged Brie" actually increases in Quality the older it gets


  // The Quality of an item is never more than 50


  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  // "Sulfuras" Quality is 80 and it never alters.

  // "Backstage passes"
    // Quality increases by 2 when there are 10 days or less
    // Quality increases by 3 when there are 5 days or less
    // Quality drops to 0 after the concert
});
