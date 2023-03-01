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
    const roseGarden = new RoseGarden([new Item('Aged Brie', 1, 48)]);
    let items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(49);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);
  });

  // The Quality of an item is never more than 50
  it('checks that the quality of an item is never more than 50', () => {
    const roseGarden = new RoseGarden([new Item('Aged Brie', 1, 48)]);
    let items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(49);
    expect(items[0].sellIn).toBe(0);

    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);
    
    items = roseGarden.updateQuality();
    expect(items[0].quality).toBe(50);
    expect(items[0].sellIn).toBe(0);

    const roseGardenTwo = new RoseGarden([new Item('Rune Longsword', 3, 55)]);
    let itemsTwo = roseGardenTwo.updateQuality();
    expect(itemsTwo[0].quality).toBe(49);
    expect(itemsTwo[0].sellIn).toBe(2);
  });

  describe('Sulfuras', () => {
    // "Sulfuras", being a legendary item, never has to be sold
    it('has a sellIn value that never decreases', () => {
      const roseGarden = new RoseGarden([new Item('Sulfuras', 10, 80)]);
      let items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    });

    // "Sulfuras" Quality is 80 and it never alters.
    it('has a quality value of 80 and it never alters', () => {
      const roseGarden = new RoseGarden([new Item('Sulfuras', 10, 60)]);
      let items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(80);
      expect(items[0].sellIn).toBe(10);
    });
  });

  describe('Backstage passes', () => {
    // Quality increases by 2 when there are 10 days or less
    it('has a quality value that increases by 2 when there are 10 days or less', () => {
      const roseGarden = new RoseGarden([new Item('Backstage passes', 10, 20)]);
      let items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(22);
      expect(items[0].sellIn).toBe(9);

      items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(24);
      expect(items[0].sellIn).toBe(8);
    })

    it('has a quality value that increases by 3 when there are 5 days or less', () => {
      const roseGarden = new RoseGarden([new Item('Backstage passes', 5, 20)]);
      let items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(23);
      expect(items[0].sellIn).toBe(4);

      items = roseGarden.updateQuality();
      expect(items[0].quality).toBe(26);
      expect(items[0].sellIn).toBe(3);
    })

  // Quality increases by 3 when there are 5 days or less


  // Quality drops to 0 after the concert
  });
});
