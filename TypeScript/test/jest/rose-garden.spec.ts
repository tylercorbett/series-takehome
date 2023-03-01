import { Item, RoseGarden } from '@/rose-garden';

describe('Rose Garden', () => {
  it('should foo', () => {
    const roseGarden = new RoseGarden([new Item('foo', 0, 0)]);
    const items = roseGarden.updateQuality();
    expect(items[0].name).toBe('foo');
  });

  // Once the sell by date has passed, Quality degrades twice as fast
  it('checks that the quality degrades twice as fast after sell date has past', () => {
    const roseGarden = new RoseGarden([new Item('Rune Longsword', 2, 20)]);
    let items = roseGarden.updateQuality();
    expect(items[0].name).toBe('Rune Longsword');
    expect(items[0].quality).toBe(19);
    expect(items[0].sellIn).toBe(1);
    
    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(18);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(16);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(14);
    expect(items[0].sellIn).toBe(0);
  });

  // The Quality of an item is never negative
  it('checks that the quality quality of an item is never negative', () => {
    const roseGarden = new RoseGarden([new Item('Rune Longsword', 1, 4)]);
    let items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(3);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(1);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(0);
    expect(items[0].sellIn).toBe(0);
  });
  
  // "Aged Brie" actually increases in Quality the older it gets
  it('checks that Aged Brie increases in quality as it gets older', () => {
    
  });

  // The Quality of an item is never more than 50


  // "Sulfuras", being a legendary item, never has to be sold or decreases in Quality
  // "Sulfuras" Quality is 80 and it never alters.

  // "Backstage passes"
    // Quality increases by 2 when there are 10 days or less
    // Quality increases by 3 when there are 5 days or less
    // Quality drops to 0 after the concert
});
