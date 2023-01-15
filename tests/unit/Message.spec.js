import { mount } from "@vue/test-utils";
import Message from "@/components/WelcomeMessage.vue";

describe("Message", ()=> {
    it("renders the prop.msg when passed", ()=> {
        const wrapper = mount(Message, {
            props:{
                msg: "Hello Marta"
            }
        });
        expect(wrapper.text()).toMatch("Hello Marta");
    })
})