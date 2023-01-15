import { mount } from "@vue/test-utils";
import ToDoApp from "@/components/ToDoApp.vue";

describe("ToDoApp.vue", () => {
  let wrapper;

  beforeEach(()=> {
    wrapper=mount(ToDoApp);
  })


  it("render to to list", () => {
    // const wrapper = mount(ToDoApp);
    const todo= wrapper.get('[data-test="todo"]');
    
    expect(todo.text()).toBe("Learn Vue testing")
  })

  it("should add new todo", async () => {
    // const wrapper = mount(ToDoApp);

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(1);

    await wrapper.get('[data-test="new-todo"]').setValue("New To Do");
    await wrapper.get('[data-test="form"]').trigger('submit');

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2);

  })

  it("should clear the input after submitting", async () => {
    // const wrapper=mount(ToDoApp);

    await wrapper.get('[data-test="new-todo"]').setValue("New To Do");
    await wrapper.get('[data-test="form"]').trigger('submit');

    expect(wrapper.get('[data-test="new-todo"]').element.value).toBe("")
  })

  it("should bea able to complete todo", async ()=> {
    // const wrapper = mount(ToDoApp);

    await wrapper.get('[data-test="todo-checkbox"]').setValue(true);

    expect(wrapper.get('[data-test="todo"]').classes()).toContain("completed");
  })
})