import { mount } from "@vue/test-utils";
// import { shallowMount } from "@vue/test-utils";
import TheParent from "@/components/TheParent.vue";

describe("TheParent.vue", ()=> {
    it("renders the text", ()=> {
        // const wrapper = shallowMount(TheParent);
        const wrapper = mount(TheParent);
        expect(wrapper.text()).toMatch("The Child");
    })
})