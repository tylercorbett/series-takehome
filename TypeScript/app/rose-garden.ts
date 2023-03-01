import { specialItems } from "./specialItems";

export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class RoseGarden {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      const name = this.items[i].name;
      let sellIn = this.items[i].sellIn;
      let quality = this.items[i].quality;

      // Special items
      if (specialItems.includes(name)) {
        if (name === 'Backstage passes') {
          
          if (sellIn <= 10 && sellIn > 5) {
            quality += 2;
          } 
          else if (sellIn <= 5 && sellIn > 0) {
            quality += 3;
          }
          else if (sellIn <= 0) {
            quality = 0;
          }

          // Quality cannot surpass 50
          if (quality > 50) {
            quality = 50;
          }

          this.items[i].quality = quality;
        }

        if (name === 'Sulfuras') {
          this.items[i].quality = 80;
          continue;
        }
        if (name === 'Aged Brie') {
          quality += 1;
          
          // Quality cannot surpass 50
          if (quality > 50) {
            quality = 50;
          }
          this.items[i].quality = quality;
        }
      } 
      // Standard items
      else {

        // Not allowed to set an items quality to more than 50
        if (quality > 50) {
          quality = 50;
          this.items[i].quality = quality;
        }
        if (sellIn === 0) {
          // Quality cannot be negative
          if (quality <= 2) {
            this.items[i].quality = 0;
          } else {
            // Standard item degrading twice as fast after reaching sellIn date
            quality -= 2;
            this.items[i].quality = quality;
          }
        } 
        else {
          // Standard quality degradation before reaching sellIn date
          quality--;
          this.items[i].quality = quality;
        }
      }

      if (sellIn > 0) {
        sellIn--;
        this.items[i].sellIn = sellIn;
      }
    }

    return this.items;
  }
}
