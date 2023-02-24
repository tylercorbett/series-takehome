#include <string>
#include <vector>

using namespace std;

class Item
{
public:
    string name;
    int sellIn;
    int quality;
    Item(string name, int sellIn, int quality) : name(name), sellIn(sellIn), quality(quality) 
    {}
};

class RoseGarden
{
public:
    vector<Item> & items;
    RoseGarden(vector<Item> & items);
    
    void updateQuality();
};

