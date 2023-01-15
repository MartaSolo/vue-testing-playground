import { mount } from "@vue/test-utils";
import TheParent from "@/components/TheParent.vue";

describe("TheParent.vue", ()=> {
    it("renders the text", ()=> {
        const wrapper = mount(TheParent);
        expect(wrapper.text()).toMatch("The Parent");
    })
})