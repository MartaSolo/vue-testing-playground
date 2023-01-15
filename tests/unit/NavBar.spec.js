import { mount } from "@vue/test-utils";
import NavBar from "@/components/NavBar.vue";

describe("Message", ()=> {
    it("should render the profile link", ()=> {
        const wrapper = mount(NavBar, {
          data() {
            return {
              isLoggedIn: true,
            }
          }
        });

        const profileLink = wrapper.get("#profile");
        expect(profileLink.text()).toEqual("Profile");
    })

    it("should not render the profile link", ()=> {
        const wrapper = mount(NavBar, {
          data() {
            return {
              isLoggedIn: false,
            }
          }
        });

        const profileLink = wrapper.find("#profile");
        expect(profileLink .exists()).toBe(false);
    })
})