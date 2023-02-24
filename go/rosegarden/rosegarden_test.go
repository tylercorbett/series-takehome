package rosegarden_test

import (
	"testing"
)

func Test_Foo(t *testing.T) {
	var items = []*rosegarden.Item{
		{"foo", 0, 0},
	}

	rosegarden.UpdateQuality(items)

	if items[0].Name != "fixme" {
		t.Errorf("Name: Expected %s but got %s ", "fixme", items[0].Name)
	}
}
