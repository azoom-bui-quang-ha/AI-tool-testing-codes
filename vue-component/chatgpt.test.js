import { mount } from "@vue/test-utils";
import GreetingsComponent from "path/to/GreetingsComponent.vue";

describe("GreetingsComponent", () => {
  it("renders count and double of count", async () => {
    const wrapper = mount(GreetingsComponent, {
      props: {
        count: 2,
      },
    });

    const countText = wrapper.find(".count").text();
    expect(countText).toBe("Count value: 2");

    const doubleText = wrapper.find(".double").text();
    expect(doubleText).toBe("Double of count: 4");

    await wrapper.find(".add").trigger("click");

    const updatedCountText = wrapper.find(".count").text();
    expect(updatedCountText).toBe("Count value: 3");

    const updatedDoubleText = wrapper.find(".double").text();
    expect(updatedDoubleText).toBe("Double of count: 6");
  });
});
